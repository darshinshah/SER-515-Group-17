import './Apply.css';
import axios from 'axios';
import React, { useState } from "react";
export class Apply extends React.Component {
    constructor(props){
        super(props);
        this.state={
                applicationGroup:'',
                teamName:'',
                teamGender:'',
                coachName:'',
                email:'',
                association:'',
                contactName:'',
                phoneNumber:''
           
        }

        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleDropdownChange=(e) =>{
        this.setState({ applicationGroup: e.target.value });
    }

    handleDropdownChangeAssociation= (e)=>{
        this.setState({ association: e.target.value });

    }

    submitForm(e){

        e.preventDefault();

        const team = {
            applicationGroup:this.state.applicationGroup,
                teamName:this.state.teamName,
                teamGender:this.state.teamGender,
                coachName:this.state.coachName,
                email:this.state.email,
                association:this.state.association,
                contactName:this.state.contactName,
                phoneNumber:this.state.phoneNumber
        }

        axios({
            method: "post",
            url: "http://localhost:8082/saveTeam",
            data: team,
            headers: { "Content-Type": "application/json" },
          }).then((response)=>{
            console.log(response.data);
          })

    }
    

    render(){
        return (
            <div className="applypage">
                <div className="applypage__content">
                    <div className="header">
                        Apply to The Game of Inches
                    </div>
                    <div className="applypage__text">
    
                        <form className="applypage__form">
                            <div className="subheader_separator subheader_main"> TEAM APPLICATION</div>
                            <div className="applypage__form_row">
                                <label>
                                    Application Group
                                </label>
                                <select id="dropdown" onChange={this.handleDropdownChange} name="app_group_id">
                                    <option value="">&nbsp;</option>
                                    <option value="Boys U08 DOB2014 7v7">Boys U08 DOB2014 7v7   ($600.00)</option>
                                    <option value="Boys U09 DOB2013 7v7 ">Boys U09 DOB2013 7v7   ($600.00)</option>
                                    <option value="Boys U10 DOB2012 7v7  ">Boys U10 DOB2012 7v7   ($600.00)</option>
                                    <option value="Boys U10 DOB2012 9v9">Boys U10 DOB2012 9v9   ($650.00)</option>
                                    <option value="Boys U11 DOB2011 9v9 ">Boys U11 DOB2011 9v9   ($650.00)</option>
                                    <option value="Boys U12 DOB2010 9v9">Boys U12 DOB2010 9v9   ($650.00)</option>
                                    <option value="Boys U12 DOB2010 11v11">Boys U12 DOB2010 11v11   ($700.00)</option>
                                    <option value="Boys U13 DOB2009 11v11">Boys U13 DOB2009 11v11   ($700.00)</option>
                                    <option value="Boys U14 DOB2008 11v11">Boys U14 DOB2008 11v11   ($700.00)</option>
                                    <option value="Boys U15 DOB2007 11v11">Boys U15 DOB2007 11v11   ($700.00)</option>
                                    <option value="">&nbsp;</option>
                                    <option value="Girls U08 DOB2014 7v7 ">Girls U08 DOB2014 7v7   ($600.00)</option>
                                    <option value="Girls U09 DOB2013 7v7 ">Girls U09 DOB2013 7v7   ($600.00)</option>
                                    <option value="Girls U10 DOB2012 7v7 ">Girls U10 DOB2012 7v7   ($600.00)</option>
                                    <option value="Girls U10 DOB2012 9v9">Girls U10 DOB2012 9v9   ($650.00)</option>
                                    <option value="Girls U11 DOB2011 9v9 ">Girls U11 DOB2011 9v9   ($650.00)</option>
                                    <option value="Girls U12 DOB2010 9v9 ">Girls U12 DOB2010 9v9   ($650.00)</option>
                                    <option value="Girls U12 DOB2010 11v11 ">Girls U12 DOB2010 11v11   ($700.00)</option>
                                    <option value="Girls U13 DOB2009 11v11">Girls U13 DOB2009 11v11   ($700.00)</option>
                                    <option value="Girls U14 DOB2008 11v11">Girls U14 DOB2008 11v11   ($700.00)</option>
                                    <option value="Girls U15 DOB2007 11v11">Girls U15 DOB2007 11v11   ($700.00)</option>
    
                                </select>
    
                            </div>
                            <div className="subheader_separator subheader_main"> Team Information</div>
                            <div className="applypage__form_row">
                                <label>
                                    Team Name
                                </label>
                                <input type="text" name="teamName" value={this.state.teamName} onChange={this.handleChange}></input>
                            </div>
                            <div className="applypage__form_row">
                                <label>
                                    League Gender
                                </label>
                                <input type="text" name="teamGender" value={this.state.teamGender} onChange={this.handleChange}></input>
                           
                                
                            </div>
                            <div className="applypage__form_row">
                                <label>
                                    Coach Name
                                </label>
                                <input type="text" name="coachName" value={this.state.coachName} onChange={this.handleChange}></input>
                            </div>
                           
                            <div className="applypage__form_row">
                                <label>
                                    Association
                                </label>
                                <select id="dropdown" onChange={this.handleDropdownChangeAssociation} className="body" name="association" size="1">
                                    <option value="" selected=""></option>
    
                                    <option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AR">Arizona</option><option value="AK">Arkansas</option><option value="CAN">California - North</option><option value="CAS">California - South</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hamshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NYE">New York - East</option><option value="NYW">New York - West</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OHN">Ohio - North</option><option value="OHS">Ohio - South</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PAE">Pennsylvania - East</option><option value="PAW">Pennsylvania - West</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TXN">Texas - North</option><option value="TXS">Texas - South</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming </option><option value="USCLUB">US Club Soccer</option><option value="OTHER">Other</option> <option value="AB">Alberta</option><option value="BC">British Columbia</option><option value="MB">Manitoba</option><option value="NB">New Brunswick</option><option value="NF">Newfoundland</option><option value="NT">Northwest Territories</option><option value="NS">Nova Scotia</option><option value="NU">Nunavut</option><option value="ON">Ontario</option><option value="PE">Prince Edward Island</option><option value="QC">Quebec</option><option value="SK">Saskatchewan</option><option value="YT">Yukon
    
                                    </option></select>
                            </div>
                            
                            <div className="subheader_separator subheader_main"> Contact Information</div>
                            <div className="applypage__form_row">
                                <label>
                                    Contact Name
                                </label>
                                <input type="text" name="contactName" value={this.state.contactName} onChange={this.handleChange}></input>
                            </div>
                            <div className="applypage__form_row">
                                <label>
                                    Phone Number
                                </label>
                                <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange}></input>
                            </div>
                            <div className="applypage__form_row">
                                <label>
                                    Email
                                </label>
                                <input type="text" name="email" value={this.state.email} onChange={this.handleChange}></input>
                            </div>
                            <div className="applypage__form_row" style={{ paddingTop: "5rem" }}>
    
                                <input type="submit" value="Submit Form" style={{ width: "12rem" }} onClick={this.submitForm
              .bind(this)}/>
                            </div>
    
    
                        </form>
                    </div>
                </div>
            </div>
        )
    
    }
    
}
export default Apply;
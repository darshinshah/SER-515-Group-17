import './Apply.css';
const Apply = () => {

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
                            <select name="app_group_id">
                                <option value="">&nbsp;</option>
                                <option value="661">Boys U08 DOB2014 7v7   ($600.00)</option>
                                <option value="662">Boys U09 DOB2013 7v7   ($600.00)</option>
                                <option value="663">Boys U10 DOB2012 7v7   ($600.00)</option>
                                <option value="664">Boys U10 DOB2012 9v9   ($650.00)</option>
                                <option value="665">Boys U11 DOB2011 9v9   ($650.00)</option>
                                <option value="666">Boys U12 DOB2010 9v9   ($650.00)</option>
                                <option value="667">Boys U12 DOB2010 11v11   ($700.00)</option>
                                <option value="668">Boys U13 DOB2009 11v11   ($700.00)</option>
                                <option value="670">Boys U14 DOB2008 11v11   ($700.00)</option>
                                <option value="671">Boys U15 DOB2007 11v11   ($700.00)</option>
                                <option value="">&nbsp;</option>
                                <option value="672">Girls U08 DOB2014 7v7   ($600.00)</option>
                                <option value="673">Girls U09 DOB2013 7v7   ($600.00)</option>
                                <option value="674">Girls U10 DOB2012 7v7   ($600.00)</option>
                                <option value="675">Girls U10 DOB2012 9v9   ($650.00)</option>
                                <option value="676">Girls U11 DOB2011 9v9   ($650.00)</option>
                                <option value="677">Girls U12 DOB2010 9v9   ($650.00)</option>
                                <option value="678">Girls U12 DOB2010 11v11   ($700.00)</option>
                                <option value="679">Girls U13 DOB2009 11v11   ($700.00)</option>
                                <option value="680">Girls U14 DOB2008 11v11   ($700.00)</option>
                                <option value="681">Girls U15 DOB2007 11v11   ($700.00)</option>

                            </select>

                        </div>
                        <div className="subheader_separator subheader_main"> Team Information</div>
                        <div className="applypage__form_row">
                            <label>
                                Team Name
                            </label>
                            <input type="text" name="team_name"></input>
                        </div>
                        <div className="applypage__form_row">
                            <label>
                                League Gender/Age
                            </label>
                            <select class="body" name="sex" size="1" style={{ width: "35%" }}>
                                <option selected="" value=""></option>
                                <option value="Boys">Boys</option>
                                <option value="Girls">Girls</option>
                            </select>
                            <select class="body" name="age_group" size="1" style={{ width: "35%" }}>
                                <option value=""></option>
                                <option value="08">U08</option>
                                <option value="09">U09</option>
                                <option value="10">U10</option>
                                <option value="11">U11</option>
                                <option value="12">U12</option>
                                <option value="13">U13</option>
                                <option value="14">U14</option>
                                <option value="15">U15</option>
                                <option value="16">U16</option>
                                <option value="17">U17</option>
                                <option value="18">U18</option>
                                <option value="19">U19</option>
                            </select>
                        </div>
                        <div className="applypage__form_row">
                            <label>
                                Coach Name
                            </label>
                            <input type="text" name="coach_name"></input>
                        </div>
                        <div className="applypage__form_row">
                            <label>
                                Team State
                            </label>
                            <input type="text" name="team_state_name"></input>
                        </div>
                        <div className="applypage__form_row">
                            <label>
                                Club Name
                            </label>
                            <input type="text" name="club_name"></input>
                        </div>
                        <div className="applypage__form_row">
                            <label>
                                Association
                            </label>
                            <select class="body" name="association" size="1">
                                <option value="" selected=""></option>

                                <option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AR">Arizona</option><option value="AK">Arkansas</option><option value="CAN">California - North</option><option value="CAS">California - South</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hamshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NYE">New York - East</option><option value="NYW">New York - West</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OHN">Ohio - North</option><option value="OHS">Ohio - South</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PAE">Pennsylvania - East</option><option value="PAW">Pennsylvania - West</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TXN">Texas - North</option><option value="TXS">Texas - South</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming </option><option value="USCLUB">US Club Soccer</option><option value="OTHER">Other</option> <option value="AB">Alberta</option><option value="BC">British Columbia</option><option value="MB">Manitoba</option><option value="NB">New Brunswick</option><option value="NF">Newfoundland</option><option value="NT">Northwest Territories</option><option value="NS">Nova Scotia</option><option value="NU">Nunavut</option><option value="ON">Ontario</option><option value="PE">Prince Edward Island</option><option value="QC">Quebec</option><option value="SK">Saskatchewan</option><option value="YT">Yukon

                                </option></select>
                        </div>
                        <div className="applypage__form_row">
                            <label>
                                League
                            </label>
                            <select class="body" name="league" size="1">
                                <option selected="" value=""></option>
                                <option value=""></option>
                                <option value="(LYSL) (KPL)">(LYSL) (KPL)  (KY)</option><option value="BPL">BPL  (OHS)</option><option value="bpysl">bpysl  (OHS)</option><option value="BPYSL - Elite 2">BPYSL - Elite 2  (OHS)</option><option value="BPYSL Elite 1">BPYSL Elite 1  (OHS)</option><option value="BPYSL Select Black">BPYSL Select Black  (OHS)</option><option value="BPYSL- Select Red">BPYSL- Select Red  (OHS)</option><option value="Buckeye Premier 1">Buckeye Premier 1  (OHS)</option><option value="Buckeye Premier Youth Soccer League">Buckeye Premier Youth Soccer League  (OHS)</option><option value="Buckeye State">Buckeye State  (OHS)</option><option value="Buckeye State and OSSL">Buckeye State and OSSL  (OHS)</option><option value="Cardinal Premier League">Cardinal Premier League  (OHS)</option><option value="CASA">CASA  (OHN)</option><option value="Central Ohio Premier League">Central Ohio Premier League  (OHS)</option><option value="COPL Columbus Ohio Premier Leauge">COPL Columbus Ohio Premier Leauge  (OHS)</option><option value="ECNL">ECNL  (USCLUB)</option><option value="ECNL REGIONAL LEAGUE">ECNL REGIONAL LEAGUE  (USCLUB)</option><option value="GLA/NPL">GLA/NPL  (USCLUB)</option><option value="GSCL - Cardinal Premier">GSCL - Cardinal Premier  (OHS)</option><option value="GVSA">GVSA  (MI)</option><option value="KSSL">KSSL  (KY)</option><option value="MSYSA">MSYSA  (OHS)</option><option value="mvysa">mvysa  (OHS)</option><option value="mvysa (OHS)">mvysa (OHS)  (OHS)</option><option value="No Leauge">No Leauge  (WV)</option><option value="NPL">NPL  (OHS)</option><option value="NWOYSL">NWOYSL  (OHS)</option><option value="OCL">OCL  (USCLUB)</option><option value="Ohio Soccer Developmental League- Columbus">Ohio Soccer Developmental League- Columbus  (OHS)</option><option value="OSSL also">OSSL also  (OHS)</option><option value="Red">Red  (OHS)</option><option value="Tournament Only Team">Tournament Only Team  (OHS)</option>
                                <option value="NotInMenu">Not on menu -- Entered Below</option>
                            </select>
                        </div>
                        <div className="subheader_separator subheader_main"> Contact Information</div>
                        <div className="applypage__form_row">
                            <label>
                                Contact Name
                            </label>
                            <input type="text" name="contact"></input>
                        </div>
                        <div className="applypage__form_row">
                            <label>
                                Address
                            </label>
                            <input type="text" name="address"></input>
                        </div>
                        <div className="applypage__form_row" style={{paddingTop:"5rem"}}>

                            <input type="submit" value="Submit Form" style={{width:"12rem"}}/>   
                        </div>
                        

                    </form>
                </div>
            </div>
        </div>
    )
}
export default Apply;
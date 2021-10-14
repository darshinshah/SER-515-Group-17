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
                            <select class="body" name="sex" size="1" style={{width: "35%"}}>
                                <option selected="" value=""></option>
                                <option value="Boys">Boys</option>
                                <option value="Girls">Girls</option>
                            </select>
                            <select class="body" name="age_group" size="1" style={{width: "35%"}}>
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
                        {/* <input type="submit" value="Login" /> */}

                    </form>
                </div>
            </div>
        </div>
    )
}
export default Apply;
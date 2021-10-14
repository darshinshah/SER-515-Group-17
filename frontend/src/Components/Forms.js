import './Forms.css';
const Forms = () => {

    return (
        <div className="formspage">
            <div className="formspage__content">
                <div className="header">
                    Forms for Registration
                </div>
                <div className="formspage__text">
                    <form>
                        <label>
                            Team Id:
                            <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Forms;
import './NavBarButton.css'
function NavBarButton(props) {
    return (
        <button className="nav_bar_button">
            {props.children}
        </button>
    )
}
export default NavBarButton;
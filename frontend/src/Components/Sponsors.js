import './Sponsors.css'

function Sponsors(){
    return(

        <div className="sponsorspage">
        <div className="sponsorspage__content">
        <p className="header">Our Sponsors</p>
        <a href="https://www.nike.com/" >
            <img height="200" width="300" src={"https://assets.stickpng.com/images/580b57fcd9996e24bc43c4f3.png"} alt = "nike logo"/>
        </a>

        <a href="https://adidas.com/" >
            <img height="200" width="300" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"} alt = 'Adidas logo' />
        </a>

        <a href="https://www.gatorade.com/">
            <img height="200" width="300" src={"https://logos-world.net/wp-content/uploads/2020/05/Gatorade-Logo.png"} alt = 'Gatorade' />
        </a>

        <a href="https://www.geico.com/">
            <img height="200" width="300" src={"https://1000logos.net/wp-content/uploads/2018/08/GEICO-Logo.png"} alt = 'GEICO logo'/>
        </a>


        </div>
        </div>
         
        
    )
}


export default Sponsors;
import './Sponsors.css'

// import nikelogo from 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4f3.png';
function Sponsors(){
    return(

        <div className="sponsorspage">
        <div className="sponsorspage__content">
        <p className="header">Our Sponsors</p>
        {/* <img src={require(nikelogo)}/> */}
        <a href="https://www.nike.com/">
            <img height="200" width="300" src={"https://assets.stickpng.com/images/580b57fcd9996e24bc43c4f3.png"}/>
        </a>

        <a href="https://adidas.com/">
            <img height="200" width="300" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"}/>
        </a>

        <a href="https://www.gatorade.com/">
            <img height="200" width="300" src={"https://logos-world.net/wp-content/uploads/2020/05/Gatorade-Logo.png"}/>
        </a>

        <a href="https://1000logos.net/wp-content/uploads/2018/08/GEICO-Logo.png">
            <img height="200" width="300" src={"https://1000logos.net/wp-content/uploads/2018/08/GEICO-Logo.png"}/>
        </a>


        </div>
        </div>
         
        
    )
}


export default Sponsors;
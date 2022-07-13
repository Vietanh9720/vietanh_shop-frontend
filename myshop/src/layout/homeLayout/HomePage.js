import Iphone  from "../../image/iphone1.png";




const HomePage= ()=>{
    return(
        <div>
            <img src={Iphone} className="image-center"></img>
            <h1 style={{textAlign:'center', fontSize:'50px', fontFamily :"Raleway"}}>APPLE INC.</h1>
            
        </div>
    )
}
export default HomePage;
import earth from "../Assets/earth.png"

export default function Navbar(){
    return(
        <div className="nav">
            <img src={earth}  className="nav--logo"/>
            <h3 className="nav--heading">my travel journal</h3>
            

        </div>
    )
}
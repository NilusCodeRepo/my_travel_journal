import amster from "../Assets/AMSTERDAM.jpg"

export default function Main(props){
    return(
        <div className="card">
            <div className="img"><img src={require("../Assets/"+props.img) } className="card--img"/></div>
            <div className="section">
            <span className="card--head"><i className="fa-solid fa-location-dot"></i><span >{props.country}</span> <p className="view--map">view On Google Maps</p></span>
            <h2 className="place--head">{props.name}</h2>
            <h4 className="card--dates"><b>{props.dates.start_date} - {props.dates.end_date}</b></h4>
            <p className="card--desc">{props.desc}</p>
            </div>

        </div>
    )
}
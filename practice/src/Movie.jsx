import "./Movie.css"

function Movie({ name, price, available, img }) {

    const color = available ? "#00ff33" : "red";
    const divStyle = {
    backgroundImage: `url(${img})`,};
    return (
        
        <div id="jk"  style={divStyle}>

            

            <p>name:<p style={{ color: "red" }}>{name}</p></p>
            <p >price: {price}</p>
            <p style={{ color }}>{available ? "Ticket is Available" : "Ticket is Not Available"}</p>
        </div>
        

    )
}
export default Movie;
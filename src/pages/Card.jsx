import React from "react";
import "./Card.css";

const Card = (props)=>{

    return( 
        <div className="PostCard">
            <img className="image" src={props.img} alt="not found" />
            <h3>Name: {props.name}</h3>
            <p>Gender: {props.gender} </p>
            <p>House: {props.house} </p>
            <p>Ancestry:{props.ancestry} </p>
            <p>wand:No Data</p>
        </div>
    )
}
export default Card;
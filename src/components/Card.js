import React from "react";
import RestaurantImg from "./RestaurantImg";
import RestaurantName from "./RestaurantName";
import GotoIcon from "./GotoIcon";

function Card(props) {
    return(
        <div className="card">
            <RestaurantImg url={props.url}/>
            <RestaurantName name={props.name}/>
            <GotoIcon />
        </div>
    );

}

export default Card;
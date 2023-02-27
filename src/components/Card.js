import React from "react";
import RestaurantImg from "./RestaurantImg";
import RestaurantName from "./RestaurantName";

function Card(props) {
    return(
        <div>
            <RestaurantImg url={props.url}/>
            <RestaurantName name={props.name}/>
            <gotoIcon />
        </div>
    );

}

export default Card;
import React from "react";
import Header from "./Header";
import Card from "./Card";

function App() {
    return(
        <div>
            <Header heading="Bhukkad"/>
            <Card 
                url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNeT8M_A0M3IdLVU43dmzro4O8YSpSNI0iQ&usqp=CAU"
                name="Chicken Bytes"
            />
            <Card 
                url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNeT8M_A0M3IdLVU43dmzro4O8YSpSNI0iQ&usqp=CAU"
                name="Momo Lelo"
            />
            <Card 
                url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNeT8M_A0M3IdLVU43dmzro4O8YSpSNI0iQ&usqp=CAU"
                name="Sexy Soups"
            />
        </div>
    );
}

export default App;

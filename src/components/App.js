import React from "react";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import Countdown from "./Countdown";

function App() {
    return(
        <div>
            <Header />
            <Countdown />
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
            <Card 
                url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNeT8M_A0M3IdLVU43dmzro4O8YSpSNI0iQ&usqp=CAU"
                name="Sexy Soups"
            />
            <Footer />
        </div>
    );
}

export default App;

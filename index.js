import React from "react";
import ReactDom from "react-dom";

function App() {
        return (
            <div>
                <h1>hi tgitheres</h1>
            </div>
         );
    
}
const rootElement=document.getElementById("test");
ReactDom.render(<App/>,rootElement)
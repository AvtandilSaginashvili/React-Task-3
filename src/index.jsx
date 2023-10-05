import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./css/style.css";

class App extends React.Component {

    click =() => {
        window.alert("Hello world!");
    }

    render() {
        return(
            <React.Fragment>
                <Navbar />
                <span className="animation02 text-warning">Do it until you get bored</span>
                <button className="w-100 btn btn-outline-warning clickbtn" type="button" onClick={this.click}>Click</button>
                <Footer /> 
            </React.Fragment>
        )
    }
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
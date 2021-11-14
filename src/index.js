import React from "react";
import ReactDOM from "react-dom";

// importing filter component from filterMeal.js
import { All, Breakfast, Lunch, Dinner } from "./filterMeal";


// creating buttons of menu as li and stock its in ul list
class Menu extends React.Component{
    constructor(props){
        super(props);
        this.handleAll = this.handleAll.bind(this);
        this.handleBreakfast = this.handleBreakfast.bind(this);
        this.handleLunch = this.handleLunch.bind(this);
        this.handleDinner = this.handleDinner(this);
    }
    // when clicks on all
    handleAll(){
        ReactDOM.render(<All />,document.querySelector(".divEtables"))
    }
    // when clicks on breakfast
    handleBreakfast(){
        ReactDOM.render(<Breakfast />,document.querySelector(".divEtables"))
    }
    // when clicks on lunch
    handleLunch(){
        ReactDOM.render(<Lunch />,document.querySelector(".divEtables"))
    }
    // when clicks on dinner
    handleDinner(){
        ReactDOM.render(<Dinner />,document.querySelector(".divEtables"))
    }
    render(){
        return (
            <div>
                <li><button onClick={this.handleAll}>All</button></li>
                <li><button onClick={this.handleBreakfast}>Breakfast</button></li>
                <li><button onClick={this.handleLunch}>Lunch</button></li>
                <li><button onClick={this.handleDinner}>Dinner</button></li>
            </div>
        )
    }
}

// rendering the buttons in the menu
ReactDOM.render(<Menu />,document.getElementById("listMenu"))
// rendering all while the app is currently loaded 
ReactDOM.render(<All />,document.querySelector(".divEtables"))
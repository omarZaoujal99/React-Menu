import React from "react";
import meals from "./meals";

// the meal card (the div which will content the meal infos as image price title);
class All extends React.Component{
    render(){
        return (
            meals.map((v,i)=>{
                return (
                    <div className="mealCard" key={i}>
                        <div className="divImgMeal">
                            <img src={v.image} alt={v.name} />
                        </div>
                        <div className="divInfosMeal">
                            <div className="d2IM">
                                <h3 className="h3TitleMeal">{v.name}</h3>
                                <h4>{v.price}</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, cumque!</p>
                        </div>
                    </div>
                )
            })
        )
    }
}

// breakfast meals
class Breakfast extends React.Component{
    render(){
        return(
            meals.map((v,i)=>{
                if(v.mealTime.indexOf("breakfast") != -1 || v.mealTime == "all"){
                    return(
                        <div className="mealCard" key={i}>
                            <div className="divImgMeal">
                                <img src={v.image} alt={v.name} />
                            </div>
                            <div className="divInfosMeal">
                                <div className="d2IM">
                                    <h3 className="h3TitleMeal">{v.name}</h3>
                                    <h4>{v.price}</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, cumque!</p>
                            </div>
                        </div>
                    )
                }
                else return false;
            })
        )
    }
}

// lunch meals
class Lunch extends React.Component{
    render(){
        return(
            meals.map((v,i)=>{
                if(v.mealTime.indexOf("lunch") != -1 || v.mealTime.indexOf("lunchAndDinner") != -1 || v.mealTime == "all"){
                    return(
                        <div className="mealCard" key={i}>
                            <div className="divImgMeal">
                                <img src={v.image} alt={v.name} />
                            </div>
                            <div className="divInfosMeal">
                                <div className="d2IM">
                                    <h3 className="h3TitleMeal">{v.name}</h3>
                                    <h4>{v.price}</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, cumque!</p>
                            </div>
                        </div>
                    )
                }
                else return false;
            })
        )
    }
}

// dinner meals
class Dinner extends React.Component{
    render(){
        return(
            meals.map((v,i)=>{
                if(v.mealTime.indexOf("dinner") != -1 || v.mealTime.indexOf("lunchAndDinner") != -1 || v.mealTime == "all"){
                    return(
                        <div className="mealCard" key={i}>
                            <div className="divImgMeal">
                                <img src={v.image} alt={v.name} />
                            </div>
                            <div className="divInfosMeal">
                                <div className="d2IM">
                                    <h3 className="h3TitleMeal">{v.name}</h3>
                                    <h4>{v.price}</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, cumque!</p>
                            </div>
                        </div>
                    )
                }
                else return false;
            })
        )
    }
}

export {All,Breakfast,Lunch,Dinner}
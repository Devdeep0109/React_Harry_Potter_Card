import React,{ useEffect, useState } from "react";
import { getPosts } from "../api/Api";
import Card from "./Card";
import "./Card.css";


export const Home = () => {

    const [data , setData] = useState([]);
    
    useEffect( ()=> {

        getPosts().then( (posts) => {console.log(posts); setData(posts) });
    },[]);

    return(
        <div className="container">
           {
            data ? data.map( (e) => <Card name={e.name} gender={e.gender} img={e.image} house ={e.house} ancestry={e.ancestry}  />) : <p>No data</p>
           } 
        </div>
    )
};
import React,{useEffect, useState} from "react";
// import './App.css';
import {Link} from "react-router-dom"
import axios from "axios"
function Shop() {
    const [title, setTitle]= useState([])
    useEffect(() => {
        fetchItems()
    },[])

    const fetchItems = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        // console.log(data)
        const items = await data.json();
        console.log(items);
        setTitle(items);
    }
  return (
    <div>
        <h1>Shop</h1>
        {title.length?
        title.map(item => (
            <h2 key={item.id}>
                <Link to={`/shop/${item.id}`}>{item.title}</Link>
                </h2>
        )):null}
    </div>
  );
}

export default Shop;

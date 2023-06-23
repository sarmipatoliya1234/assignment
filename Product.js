import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Product() {
    const [product,setProduct]=useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/docs/products').then((res)=>{
            setProduct(res.data.product);
        })
    },[]);

  return (
    <div>
    {product.map((res) => {
        return (
            <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{res.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        )
    })}
      
    </div>
  )
}

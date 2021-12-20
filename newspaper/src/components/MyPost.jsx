import {useState,useEffect} from "react";
import { Card } from "react-bootstrap";
import React from 'react'

export default function MyPost() {
    const [data, setData]=useState([])
    const [isLoading, setIsLoading]=useState(true)
const getData=async=>{
    try {let resp= await fetch(
        " https://newsapi.org/v2/top-headlines?country=us&apiKey=31873307c9984b4c976a5c43d2ad6ebf"
      )
      if(resp.ok){
          let files= await resp.json()
          setData(files.articles)
          setIsLoading(false)
          console.log(data)
      }else {console.log('fetching error')}
        
    } catch (error) {
        console.log(error)
    }
}
useEffect(()=>{getData()},[])
    return (
        <div className="featureposts">
          {isLoading? (<>loading...</>):(<>
            {<Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>lorem ipsum</Card.Title>
            <Card.Text></Card.Text>
            <h6>continue reading...</h6>
          </Card.Body>
        </Card>}
        </>)}
      </div>
    )
}


 
import React from 'react'
import { Component } from "react";
import { Col } from "react-bootstrap";

class SideBar extends Component {

  publisherList = [
    {"id": "cnn",
    "name": "CNN"},
    {"id": "al-jazeera-english",
    "name": "Al Jazeera English"},
    {"id": "bloomberg",
    "name": "Bloomberg"},
    {"id": "reuters",
    "name": "Reuters"},
    {"id": "fox-news",
    "name": "Fox News"},
    {"id": "the-verge",
    "name": "The Verge"},
    {"id": "engadget",
    "name": "Engadget"},
  ]
  countries = [
    {"id":"au",
    "country":"Australia",
    "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/46px-Flag_of_Australia_%28converted%29.svg.png"},
    {"id":"ar",
    "country":"Argentina",
    "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/46px-Flag_of_Argentina.svg.png"},
    {"id":"be",
    "country":"Belgium",
    "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/45px-Flag_of_Belgium_%28civil%29.svg.png"},
    {"id":"cn",
    "country":"China",
    "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/45px-Flag_of_the_People%27s_Republic_of_China.svg.png"},
    {"id":"cn",
    "country":"Canada",
    "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/46px-Flag_of_Canada_%28Pantone%29.svg.png"},
    {"id":"fr",
    "country":"France",
    "img":"https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/45px-Flag_of_France.svg.png"},
    {"id":"jp",
    "country":"Japan",
    "img":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/45px-Flag_of_Japan.svg.png"},
    {'id':"us",
      "country":"USA",
      "img":"https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/46px-Flag_of_the_United_States.svg.png"},
    
      
  ]
  render(){
    return (
      <Col sm={12} md={4} lg={4}>
        <aside className="blog-sidebar">
          <div className="p-3 mb-3 bg-light rounded">
            <h4 className="font-italic font-weight-bolder">About</h4>
            <p className="mb-3">
              Etiam porta<em>sem malesuada magna</em>mollis euismod. Cras mattis
              consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
              sed consectetur.
            </p>
          </div>
          <div className="p-3">
            <h4 className="font-italic">Filter By Publisher</h4>
            <ul className="list-unstyled mb-0">{
              this.publisherList.map((list,i) =>
                <li key={i}>
                <a href="#" className = "text-dark"onClick={(e)=>this.props.filterBy("q",list.id)}>{list.name}</a>
              </li>
              )
            }</ul>
          </div>
          <div className="p-3">
            <h4 className="font-italic">Filter By Country</h4>
            <ul className="list-unstyled mb-0">{
              this.countries.map((country,i) =>
                <li key={i} className="mt-2">
                <a href="#" className = "text-dark" onClick={(e)=>this.props.filterBy("country",country.id)}> <img className = "mr-1" src={country.img}/> {country.country}</a>
              </li>
              )
            }</ul>
          </div>
          <div className="p-3">
            <h4 className="font-italic">Elsewhere</h4>
            <ol className="list-unstyled">
              <li>
                <a href="/">GitHub</a>
              </li>
              <li>
                <a href="/">Twitter</a>
              </li>
              <li>
                <a href="/">Facebook</a>
              </li>
            </ol>
          </div>
        </aside>
      </Col>
    );
  }
};

export default SideBar;

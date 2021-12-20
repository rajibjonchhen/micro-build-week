import React, { Component } from 'react';
import EachArticle from './EachArticle'
class MyArticles extends React.Component {
state = {
    articles : [],
}
    componentDidMount = async() => {
       try {
        let response =  await fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=0f004968c8634a11bc6de3a41b29c857")
        let data = await response.json()
         console.log(data.articles)
         this.setState({articles:data.articles})
       } catch (error) {
         console.log(error)  
       }
    }
        
    render() { 
        return <div>
                hello
               { this.state.articles && (this.state.articles.map((article,i) => <EachArticle key={i} article={article}/>))}

        </div>;
    }
}

export default MyArticles;
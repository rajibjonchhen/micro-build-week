import React, { Component } from 'react';

class EachArticle extends React.Component {
    render() { 
        return <div>{
            this.props.articles.map(article => {
                <>
                <p className="h3">{article.title}</p>
                <span>{article.source.name}</span>
                <span>{article.author}</span>
                <p>
                    {article.content}
                </p>
                </>
            
            } )

        }</div>;
    }
}
 
export default EachArticle;
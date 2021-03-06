import React, { Component } from "react";
import NewSingle from "./NewSingle";

class News extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            news: [],
        };
    }

    componentDidMount() {
        const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=b910b3cc03e24fbc81c450b48eb22807';
        fetch(url).then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({
                news: data.articles
            })
        })
        .catch((error) => console.log(error))
    }

  renderItems() {
    return this.state.news.map(item => (
      <NewSingle key={item.id} item={item} />
    ));
  }

  render() {
    return <ul>{this.renderItems()}</ul>;
  }
}

export default News;

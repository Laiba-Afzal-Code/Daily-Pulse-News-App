import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";

export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 10,
    category: 'general'
  }
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=feb55acd0b874808bdfcb631ed154821&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading: true});
    let deta = await fetch(url);
    let parseDeta = await deta.json();
    console.log(parseDeta);
    this.setState({articles: parseDeta.articles,
       totalResults: parseDeta.totalResults,
       loading: false
      })
  }
  handlePreviewClick = async ()=>{
    console.log('Previous');
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=feb55acd0b874808bdfcb631ed154821&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let deta = await fetch(url);
    let parseDeta = await deta.json();
    console.log(parseDeta);
    this.setState({
      page: this.state.page - 1,
      articles: parseDeta.articles,
      loading: false
    })
   }
 handleNextClick = async ()=>{
    console.log('Next');
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=feb55acd0b874808bdfcb631ed154821&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let deta = await fetch(url);
    let parseDeta = await deta.json();
    this.setState({
      page: this.state.page + 1,
      articles: parseDeta.articles,
      loading: false
    })
  }
}
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="text-center text-info my-5">
            Daily Pulse - News HeadLines
       </h1>
      {this.state.loading && <Spinner/>}
          <div className="row">
          {!this.state.loading && this.state.articles?.map((element) => {
    return( <div className="col-md-4" key={element.url}>
              <NewsItems
                title={element.title?element.title.slice(0, 50):""}
                description={element.description?element.description.slice(0, 89):""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>)
              })}
          </div>
          <div className="container d-flex justify-content-between my-5">
            <button disabled={this.state.page<=1} type="button" className="btn btn-warning" onClick={this.handlePreviewClick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-warning" onClick={this.handleNextClick}>Next &rarr; </button>
          
          </div>
        </div>
      </div>
    );
  }
}

export default News;

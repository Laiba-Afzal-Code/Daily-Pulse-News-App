import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 10,
    category: "general",
  };
  capitalizeFirstLatter = (string)=>{
   return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.capitalizeFirstLatter(this.props.category)} -DailyPulse`;
  }
  async newsUpdate() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let deta = await fetch(url);
    let parseDeta = await deta.json();
    this.props.setProgress(50);
    console.log(parseDeta);
    this.setState({
      articles: parseDeta.articles,
      totalResults: parseDeta.totalResults,
      loading: false,
    });
    
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.newsUpdate();
  }
  handlePreviewClick = async () => {
    console.log("Previous");
    this.setState({ page: this.state.page - 1 });
    this.newsUpdate();
  };
  handleNextClick = async () => {
    console.log("Next");
    this.setState({ page: this.state.page + 1 });
    this.newsUpdate();
  };
  fetchData = async ()=>{
    this.setState ({page: this.state.page + 1});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let deta = await fetch(url);
    let parseDeta = await deta.json();
    console.log(parseDeta);
    this.setState({
      articles: this.state.articles.concat(parseDeta.articles),
      totalResults: parseDeta.totalResults,
    });
  }
  render() {
    return (
      <div>
        {/* <div className="container"> */}
          <h1 className="text-center text-info my-5">
            Daily Pulse News - Top {this.capitalizeFirstLatter(this.props.category)}  HeadLines
          </h1>
          {this.state.loading && <Spinner/>}
         <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}>
  
          <div className="container">
          <div className="row">
            {this.state.articles?.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItems
                      title={element.title ? element.title.slice(0, 50) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 89)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                      sourcei={element.source.id}
                    />
                  </div>
                );
              })}
          </div>
          </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between my-5">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-warning"
              onClick={this.handlePreviewClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn btn-warning"
              onClick={this.handleNextClick}
            >
              Next &rarr;{" "}
            </button>
          </div> */}
        </div>
      // </div>
    );
  }
}

export default News;

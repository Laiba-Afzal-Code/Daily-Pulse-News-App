import React, {useEffect, useState} from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

 const News = (props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
   const capitalizeFirstLatter = (string)=>{
   return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const newsUpdate = async ()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page}&pageSize=${props.pageSize}`;
   setLoading(true);
    let deta = await fetch(url);
    props.setProgress(50);
    let parseDeta = await deta.json();
    props.setProgress(70);
    console.log(parseDeta);
    const setArticles = (parseDeta.articles)
    const setTotalResults = (parseDeta.totalResults)
    const loading = (false)
    
    props.setProgress(100);
  }
  useEffect(()=>{
       document.title = `${capitalizeFirstLatter(props.category)} -DailyPulse`;
        newsUpdate();
  });
  const fetchData = async ()=>{
   setPage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
    let deta = await fetch(url);
    let parseDeta = await deta.json();
    console.log(parseDeta);
    setArticles(articles.concat(parseDeta.articles))
    setTotalResults(parseDeta.totalResults);
  };
    return (
      <div>
        {/* <div className="container"> */}
          <h1 className="text-center text-info my-5 mt-5 pt-5">
            Daily Pulse News - Top {capitalizeFirstLatter(props.category)}  HeadLines
          </h1>
          {loading && <Spinner/>}
         <InfiniteScroll
            dataLength={articles.length} //This is important field to render the next data
            next={fetchData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}>
  
          <div className="container">
          <div className="row">
            {articles?.map((element) => {
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
              })};
          </div>
          </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between my-5">
            <button
              disabled={state.page <= 1}
              type="button"
              className="btn btn-warning"
              onClick={handlePreviewClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                page + 1 >
                Math.ceil(totalResults / props.pageSize)
              }
              type="button"
              className="btn btn-warning"
              onClick={handleNextClick}
            >
              Next &rarr;{" "}
            </button>
          </div> */}
        </div>
      // </div>
    );
  };
  News.defaultProps = {
    country: "us",
    pageSize: 10,
    category: "general",
  };
export default News;

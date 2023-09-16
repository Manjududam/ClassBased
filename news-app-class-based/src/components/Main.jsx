import React, { Component } from "react";
import NewsMain from "./Newsmain";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';

export class Main extends Component {
  static defaultProps = {
    country: "in",
    pagesize: "12",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `News - ${this.capitalizeFLetter(this.props.category)}`;
  }
  async upDateNews() {
    this.props.setProgress(15);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(75);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.upDateNews();
    // console.log(this.props.apiKey);
  }
  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    this.setState({page:this.state.page +1})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };
  // previousNews = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.upDateNews();
  // };
  // nextNews = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.upDateNews();
  // };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center fs-2 mt-[90px]">
          News - Top {this.capitalizeFLetter(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner />}
        
        <div className="container infiniteScroll my-3">
        <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length !== this.state.totalResults} loader={<Spinner/>}>
        <div className="container">
          <div className="row">
              {this.state.articles.map((e) => {
                return (
                  <div className="col-lg-3 col-md-6 col-sm-12" key={e.url}>
                    <NewsMain
                      title={e.title ? e.title : ""}
                      description={e.description ? e.description : " "}
                      imageUrl={e.urlToImage}
                      newsUrl={e.url}
                      author={!e.author ? "unknown" : e.author}
                      publishedAt={e.publishedAt}
                      source={e.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          </InfiniteScroll>
          </div>
        </div>
       
       
       
      // <div className="container my-3 d-flex justify-content-between">
      //       <button
      //         disabled={this.state.page <= 1}
      //         type="button"
      //         className="btn btn-primary"
      //         onClick={this.previousNews}
      //       >
      //         &larr; Previous
      //       </button>
      //       <button
      //         disabled={
      //           this.state.page + 1 >
      //           Math.ceil(this.state.totalArticles / this.props.pagesize)
      //         }
      //         type="button"
      //         className="btn btn-primary px-3"
      //         onClick={this.nextNews}
      //       >
      //         Next &rarr;
      //       </button>
      //     </div> 

    );
  }
}

export default Main;

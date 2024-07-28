                                              //Function Component
import React,{useState} from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";

const News=(props)=> {
  const[articles,setArticles]=useState([]);
  const[loading,setLoading]=useState(false);
  const[page,setPage]=useState(1);
  const[totalResults,setTotalResults]=useState(0);

  const fetchData=async()=>{
    setLoading(true);
    props.setProgress(20);
    let api;
    if(props.search==="false"){
      console.log("headLine");
      api = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${props.pageSize}`;
    }
    else{
      console.log("everything");
      api=`https://newsapi.org/v2/everything?q=${props.searchValue}&from=2024-06-28&sortBy=publishedAt&apiKey=${props.api}&page=${page}&pageSize=30`;//2025 api
    }
    let response = await fetch(api);
    props.setProgress(60);
    let data = await response.json();

    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    fetchData(page);
  }, []);

  const fetchMoreData = async () => {
    // let page = page + 1;
    setLoading(true);

    try {
      let api;
      if(props.search==="false"){
        console.log("headLine");
        api = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page+1}&pageSize=${props.pageSize}`;
      }
      else{
        console.log("everything");
        api=`https://newsapi.org/v2/everything?q=${props.searchValue}&from=2024-06-28&sortBy=publishedAt&apiKey=${props.api}&page=${page}&pageSize=30`;//2025 api
      }
      let response = await fetch(api);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      let data = await response.json();
      setArticles(articles.concat(data.articles));
      setLoading(false);
      setPage(page+1);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

    return (
      <div className="container" style={props.mode === "dark" ? { color: "white" } : {}}>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={loading === true && <Loading />}
        >
          <div className="container">
            <div className="row my-2">
              {articles.map((element) => {
                return (
                  <div className="col-md-4 my-2" key={element.url}>
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} Url={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} mode={props.mode}/>
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
}

News.defaultProps = {
  country: "in",
  pageSize: "30",
  category: "general",
};

export default News;

                                                  //class component
// import React, { Component } from "react";
// import NewsItem from "./NewsItem";
// import Loading from "./Loading";
// import InfiniteScroll from "react-infinite-scroll-component";

// export default class News extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0,
//       // searchValue: "india",
//       // searchText: "",
//     };
//   }
//   static defaultProps = {
//     country: "in",
//     pageSize: "30",
//     category: "general",
//   };

//   // change = (event) => {
//   //   this.setState({
//   //     searchText: event.target.value,
//   //   });
//   // };

//   async fetchData(page) {
//     console.log("Fetch: " + page + " " + this.state.searchText);
//     this.setState({ loading: true });
//     this.props.setProgress(20);
//     let api;
//     if(this.props.search==="false"){
//       console.log("headLine");
//       api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${page}&pageSize=${this.props.pageSize}`;
//     }
//     else{
//       console.log("everything");
//       api=`https://newsapi.org/v2/everything?q=${this.props.searchValue}&from=2024-06-28&sortBy=publishedAt&apiKey=${this.props.api}&page=${page}&pageSize=30`;//2025 api
//     }
//     let response = await fetch(api);
//     this.props.setProgress(60);
//     let data = await response.json();
//     this.setState({
//       articles: data.articles,
//       totalResults: data.totalResults,
//       loading: false,
//       page: page,
//     });
//     this.props.setProgress(100);
//   }

//   async componentDidMount() {
//     this.fetchData(this.state.page);
//   }

//   // SearchButtonClicked = async () => {
//   //   this.setState({ searchValue: this.state.searchText, page: 1 }, () => {
//   //     this.fetchData(1); // Reset to first page when searching
//   //   });
//   //   console.log("Clicked:" + this.state.searchText);
//   // };

//   fetchMoreData = async () => {
//     let page = this.state.page + 1;
//     this.setState({ loading: true });

//     try {
//       // let api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${page}&pageSize=${this.props.pageSize}`;
//       let api;
//       if(this.props.search==="false"){
//         console.log("headLine");
//         api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${page}&pageSize=${this.props.pageSize}`;
//       }
//       else{
//         console.log("everything");
//         api=`https://newsapi.org/v2/everything?q=${this.props.searchValue}&from=2024-06-28&sortBy=publishedAt&apiKey=${this.props.api}&page=${page}&pageSize=30`;//2025 api
//       }
//       let response = await fetch(api);

//       if (!response.ok) {
//         throw new Error(`Error: ${response.status} ${response.statusText}`);
//       }

//       let data = await response.json();
//       this.setState((prevState) => ({
//         articles: prevState.articles.concat(data.articles),
//         loading: false,
//         page: page,
//       }));
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       this.setState({ loading: false });
//     }
//   };

//   render() {
//     return (
//       <div className="container" style={this.props.mode === "dark" ? { color: "white" } : {}}>
//         {/* <h1 className="d-flex justify-content-center">
//           Samachar - Top Headlines
//         </h1>
//         <div className="d-flex justify-content-end">
//           <input className="form-control me-2" type="search" value={this.state.searchText} onChange={this.change} aria-label="Search"/>
//           <button className="btn btn-danger" onClick={this.SearchButtonClicked}>Search</button>
//         </div> */}
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={this.state.loading === true && <Loading />}
//         >
//           <div className="container">
//             <div className="row my-2">
//               {this.state.articles.map((element) => {
//                 return (
//                   <div className="col-md-4 my-2" key={element.url}>
//                     <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} Url={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} mode={this.props.mode}/>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </InfiniteScroll>
//       </div>
//     );
//   }
// }




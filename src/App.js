                                              //Function Component
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App =()=> {
  const api = process.env.REACT_APP_NEWS_API;
  const[mode,setMode]=useState("light");
  const[progress,setProgress]=useState(20);
  const[searchText,setSearchText]=useState(null);

  const toogle=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.background="#0f0f0f";
    }
    else{
      setMode("light");
      document.body.style.background="white";
    }
  };
  const change = (event) => {
    setSearchText(event.target.value);
  };

  const setprogress=(progress)=>{
    setProgress(progress);
  }
    return (
      <Router>
      <div>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
        <Navbar mode={mode} toogle={toogle}/><br/>
        <h1 className="d-flex justify-content-center" style={mode==="dark"?{color:"white",marginTop:"90px"}:{marginTop:"90px"}}>
          Samachar - Top Headlines
        </h1>
        <div className='container'>
        <div className="d-flex justify-content-end">
          <input className="form-control me-2" type="search" value={searchText} onChange={change} placeholder='Search' aria-label="Search"/>
          <div className="d-flex justify-content-end"><Link className="btn btn-danger"to="/search">Search</Link></div>            
        </div>
        </div>
        <Routes>
          <Route path="/" element={<News search="false"  api={api} key="general" mode={mode} country="in" pageSize="30" category="general" setProgress={setprogress}/>}></Route>
          <Route path="/business" element={<News search="false"  api={api} key="business" mode={mode} country="in" pageSize="30" category="business" setProgress={setprogress}/>}></Route>
          <Route path="/entertainment" element={<News search="false"  api={api} key="entertainment" mode={mode} country="in" pageSize="30" category="entertainment" setProgress={setprogress}/>}></Route>
          <Route path="/health" element={<News search="false"  api={api} key="health" mode={mode} country="in" pageSize="30" category="health" setProgress={setprogress}/>}></Route>
          <Route path="/science" element={<News search="false"  api={api} key="science" mode={mode} country="in" pageSize="30" category="science" setProgress={setprogress}/>}></Route>
          <Route path="/sports" element={<News search="false"  api={api} key="sports" mode={mode} country="in" pageSize="30" category="sports" setProgress={setprogress}/>}></Route>
          <Route path="/technology" element={<News search="false"  api={api} key="technology" mode={mode} country="in" pageSize="30" category="technology" setProgress={setprogress}/>}></Route>
          <Route path="/search" element={<News search="true" searchValue={searchText===""?"india":searchText} api={api} key={searchText} mode={mode} pageSize="30" setProgress={setprogress}/>}></Route>
        </Routes>
      </div>
      </Router>
    )
}

export default App;

                                                  //class component
  //import React, { Component } from 'react'
  // import Navbar from './components/Navbar'
  // import News from './components/News';
  // import {
  //   BrowserRouter as Router,
  //   Routes,
  //   Route,
  //   Link
  // } from "react-router-dom";
  // import LoadingBar from 'react-top-loading-bar'
  
  
  // export default class App extends Component {
  //   //api = process.env.REACT_APP_NEWS_API;
  //   api="76ab41e1e43b4913b9104aa40e54a73c";
  //   state={mode:"light",progress:20,
  //     searchValue: "bhutan",
  //     searchText: null
  //   };
  
  //   toogle=()=>{
  //     if(this.state.mode==="light"){
  //       this.setState({mode:"dark"});
  //       document.body.style.background="#0f0f0f";
  //     }
  //     else{
  //       this.setState({mode:"light"});
  //       document.body.style.background="white";
  //     }
  //   };
  //   change = (event) => {
  //     this.setState({
  //       searchText: event.target.value,
  //     });
  //   };
  
  //   setProgress=(progress)=>{
  //     this.setState({
  //       progress:progress
  //     });
  //   }
  //   render() {
  //     return (
  //       <Router>
  //       <div>
  //         {/* <Navbar mode={this.state.mode} toogle={this.toogle}/><br/> */}
  //         <LoadingBar
  //         color='#f11946'
  //         height={3}
  //         progress={this.state.progress}
  //       />
  //         <Navbar mode={this.state.mode} toogle={this.toogle}/><br/>
  //         <h1 className="d-flex justify-content-center" style={this.state.mode==="dark"?{color:"white"}:{}}>
  //           Samachar - Top Headlines
  //         </h1>
  //         <div className='container'>
  //         <div className="d-flex justify-content-end">
  //           <input className="form-control me-2" type="search" value={this.state.searchText} onChange={this.change} placeholder='Search' aria-label="Search"/>
  //           <div className="d-flex justify-content-end"><Link className="btn btn-danger"to="/search">Search</Link></div>            
  //         </div>
  //         </div>
  //         <Routes>
  //           <Route path="/" element={<News search="false"  api={this.api} key="general" mode={this.state.mode} country="in" pageSize="30" category="general" setProgress={this.setProgress}/>}></Route>
  //           <Route path="/business" element={<News search="false"  api={this.api} key="business" mode={this.state.mode} country="in" pageSize="30" category="business" setProgress={this.setProgress}/>}></Route>
  //           <Route path="/entertainment" element={<News search="false"  api={this.api} key="entertainment" mode={this.state.mode} country="in" pageSize="30" category="entertainment" setProgress={this.setProgress}/>}></Route>
  //           <Route path="/health" element={<News search="false"  api={this.api} key="health" mode={this.state.mode} country="in" pageSize="30" category="health" setProgress={this.setProgress}/>}></Route>
  //           <Route path="/science" element={<News search="false"  api={this.api} key="science" mode={this.state.mode} country="in" pageSize="30" category="science" setProgress={this.setProgress}/>}></Route>
  //           <Route path="/sports" element={<News search="false"  api={this.api} key="sports" mode={this.state.mode} country="in" pageSize="30" category="sports" setProgress={this.setProgress}/>}></Route>
  //           <Route path="/technology" element={<News search="false"  api={this.api} key="technology" mode={this.state.mode} country="in" pageSize="30" category="technology" setProgress={this.setProgress}/>}></Route>
  //           <Route path="/search" element={<News search="true" searchValue={this.state.searchText===""?"india":this.state.searchText} api={this.api} key={this.state.searchText} mode={this.state.mode} pageSize="30" setProgress={this.setProgress}/>}></Route>
  //         </Routes>
  //       </div>
  //       </Router>
  //     )
  //   }
  // }
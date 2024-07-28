                                              //Function Component
import React from 'react'
import logo from "./logo2.jpeg"

const NewsItem=(props)=>{
    let {title,description,imageUrl,Url,author,publishedAt,source}=props;
    return (
        <div className={`card`} style={props.mode==="dark"?{color:"white",background:"#0f0f0f",width:"22rem"}:{width:"22rem"}}>
            <div style={{display: "flex", justifyContent: "flex-end", position: "absolute", right: "0"}}>
            <span className="badge rounded-pill bg-danger">{source}</span>
            </div>
            <img src={imageUrl===null?logo:imageUrl} className="card-img-top" alt="..." />
            <div className="card-body" style={props.mode==="dark"?{color:"white",background:"#0f0f0f"}:{}}>
                <h4 className="card-title">{title}</h4>
                <>Story by <h6>{author===null?"Unkown":author} | {new Date(publishedAt).toGMTString()}</h6></>
                <p className="card-text">{description}</p>
                {/* <a href={Url} className="btn btn-sm btn-danger">Read More</a> */}
                <a href={Url} className="btn btn-sm btn-danger" target="_blank" rel="noreferrer">Read More</a>
            </div>
            
        </div>
    )
}

export default NewsItem;

                                                  //class component
// import React, { Component } from 'react'
// import logo from "./logo2.jpeg"

// export default class NewsItem extends Component {
//   render() {
//     let {title,description,imageUrl,Url,author,publishedAt,source}=props;
//     return (
//         <div className={`card`} style={props.mode==="dark"?{color:"white",background:"#0f0f0f",width:"22rem"}:{width:"22rem"}}>
//             <div style={{display: "flex", justifyContent: "flex-end", position: "absolute", right: "0"}}>
//             <span className="badge rounded-pill bg-danger">{source}</span>
//             </div>
//             <img src={imageUrl===null?logo:imageUrl} className="card-img-top" alt="..." />
//             <div className="card-body" style={props.mode==="dark"?{color:"white",background:"#0f0f0f"}:{}}>
//                 <h4 className="card-title">{title}</h4>
//                 <>Story by <h6>{author===null?"Unkown":author} | {new Date(publishedAt).toGMTString()}</h6></>
//                 <p className="card-text">{description}</p>
//                 {/* <a href={Url} className="btn btn-sm btn-danger">Read More</a> */}
//                 <a href={Url} className="btn btn-sm btn-danger" target="_blank">Read More</a>
//             </div>
            
//         </div>
//     )
//   }
// }
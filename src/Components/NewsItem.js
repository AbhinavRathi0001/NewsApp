
import React from 'react'

const NewsItem = (props) => {
  
 
   let {title, description,imageurl,newsURL,author,date,source} = props;
    return (
      <div>
      <div style={{display:"flex",justifyContent:"flex-end",right:"0"}}>
      <span className="badge rounded-pill bg-danger">{source}</span>
      </div>
        <div className="card">
  <img src={!imageurl?"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/11/breaking-1603159815-1606179737.jpg":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title mx-3">{title}</h5>
    <p className="card-text mx-3">{description}...</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsURL} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary mx-3 my-3">Read more</a>
  </div>
</div>o
      </div>
    )
  }


export default NewsItem

import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
      let {title, description, imageUrl, newsUrl, author, date, source, sourcei} = this.props;
    return (
      <div>
     <div className="card bg-light  mx-3 my-3" style={{width: "18rem"}}>
      <div  style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
        <span className="badge rounded-pill bg-info text-dark">
    {source}</span>
      </div>
  <img src={!imageUrl?"https://www.reuters.com/resizer/7dSIG2mysWdwI_Do6csUJTUcdK0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CQ2PH7NQX5PNLEA3P3ZOOAGKXU.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <span className="badge text-bg-info">{sourcei}</span>
    <p className="card-text">{description}</p>
    <p className='card-text'><small className='text-muted'>By {!author?"Unknow":author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-warning text-dark fw-bold">Read More</a>
  </div>
</div>
   </div>
    )
  }
}

export default NewsItems

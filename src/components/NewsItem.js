import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title, description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "19rem",height: "24.4rem"}}>
        <div style={{display: 'flex', justifyContent:'flex-end',position: 'absolute',right: 0}}>
          <span class="badge rounded-pill bg-info" >{source}</span>
          </div>
        <img src={!imageUrl?"https://static.india.com/wp-content/uploads/2022/08/oneplus.jpg":imageUrl}  style={{height: 145}}className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on  {date}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank"className="btn btn-sm btn-primary">Read more</a>
            </div>
          </div>
      </div>
    )
  }
}

export default NewsItem

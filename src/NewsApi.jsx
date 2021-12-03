import React, { Component } from 'react'

class NewsApi extends Component {
    render() {
        let {title,url,urlToImage,description, author, date,source} = this.props

        return (
            <>
                <div className="card" style={{zIndex:'0'}} >
                    <div style={{display:'flex', justifyContent:'flex-end', position:'absolute',right:'0'}}>
                <span className="badge rounded-pill bg-danger">{source}</span></div>
                    <img src={urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">by {!author?"unknown":author}  on {new Date(date).toGMTString()} </small></p>
                        <a href={url} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsApi

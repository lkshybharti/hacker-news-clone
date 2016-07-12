import React from 'react'
import TimeAgo from 'react-timeago'

export const NewsCard = (props) => {
    
    return(
        <div className="card">
          <div className="card-block">
            <h4 className="card-title"><a target="_blank" href={props.url}>{props.title}</a></h4>
            <p>
                <span>{props.points} points by </span>
                <span><strong>{props.author}</strong> at </span>
                <span><u><TimeAgo date={ props.timeAgo } /></u> | </span>
                <span><em>{ props.commentCount }</em> comments</span>
            </p>
          </div>
        </div>
    )
}

export const NewsCardPlaceholder = () => {
    
    return(
        <div className="card">
          <div className="card-block">
            <h4 className="card-title"><img className="default-loader" src="./images/preload.gif" /></h4>
            <p>
                <span><img className="small-loader" src="./images/preload.gif" /></span>
            </p>
          </div>
        </div>
    )
}
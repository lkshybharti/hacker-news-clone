import React , { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchNewsSaga } from '../actions/index'
import { NewsCard , NewsCardPlaceholder } from '../components/news_card'

class NewsList extends Component { 
    
    componentDidMount() {
        setTimeout( () => { this.props.fetchNewsSaga() } , 1000)
    }
    
    renderNews(news) {
        
        const title = news.title
        const url = news.url
        const author = news.author
        const key = news.objectID
        const points = news.points
        const timeAgo = news.created_at
        const commentCount = news.num_comments
        
        return (
            <NewsCard key={key} title={title} url={url} author={author} points={points} timeAgo={timeAgo} commentCount={commentCount} />
        )
        
    }
    
    render() {
        if (Object.keys(this.props.news).length === 0 ) {
            return (
                <div>    
                    <NewsCardPlaceholder />
                    <NewsCardPlaceholder />
                    <NewsCardPlaceholder />
                </div>    
            )
        }
        
        return (
            <div> 
                { this.props.news.map(this.renderNews) }
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators( { fetchNewsSaga } ,dispatch)
}

const mapStateToProps = ({news}) => {
    return {news}
}

export default connect(mapStateToProps , mapDispatchToProps)(NewsList)
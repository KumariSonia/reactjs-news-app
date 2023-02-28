import React, { Component } from 'react'
import { Button, Spinner } from 'react-bootstrap';
import NewsItem from './NewsItem'

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=55a5757a917d411aa2dbb913a1a4dd1a&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading : true})
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({ articles: parseData.articles , 
            totalResults: parseData.totalResults,
            loading: false})
    }

    handlePreviousClick= async ()=>{

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=55a5757a917d411aa2dbb913a1a4dd1a&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        this.setState({loading : true})
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({
            page : this.state.page-1,
            articles: parseData.articles,
            loading: false
        })

    }

    handleNextClick= async ()=>{

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=55a5757a917d411aa2dbb913a1a4dd1a&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        this.setState({loading : true})
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({
            page : this.state.page+1,
            articles: parseData.articles,
            loading: false
        })

    }

    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center'>NewsApp -- Top Headlines</h2>
               { this.state.loading && <Spinner />}
                <div className="row">

                    {!this.state.loading && this.state.articles.map((article) => {
                        return <div className="col-md-4" key={article.url}>
                            <NewsItem title={article.title} desription={article.description} imageUrl={article.urlToImage} newsUrl={article.url} />
                        </div>
                    })}
                </div>
                <div className='d-flex justify-content-between'>
                    <Button disabled={this.state.page<=1} variant="dark" onClick={this.handlePreviousClick}>&larr; Previous</Button>
                    <Button disabled={this.state.page >= Math.ceil(this.state.totalResults/this.props.pageSize)} variant="dark" onClick={this.handleNextClick}>Next &rarr;</Button>
                </div>
            </div>
        )
    }
}

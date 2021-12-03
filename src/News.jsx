import React, { Component } from 'react'
import NewsApi from "./NewsApi";
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

    static defaultProps = {
        pageSize: 6,
        country: 'in',
        category: "science"
    }

    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string,
    }



    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.props.category} - Newspoint`
    }

    async updatenews() {

        let url = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page}&pageSize=${this.props.pageSize}`);
        this.setState({ loading: true })
        let data = await url.json();
        this.setState({ articles: data.articles, totalResults: data.totalResults, loading: false })
    }

    async componentDidMount() { this.updatenews(); }

    // prev = async () => {
    //     this.setState({ page: this.state.page - 1 })
    //     this.updatenews();
    // }

    // nex = async () => {
    //     this.setState({ page: this.state.page + 1 })
    //     this.updatenews();
    // }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })

        let url = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page}&pageSize=${this.props.pageSize}`);
        this.setState({ loading: true })
        let data = await url.json();
        this.setState({ articles: this.state.articles.concat(data.articles), totalResults: data.totalResults, loading: false })
    };

    render() {
        return (
            <>

                <h1 className='text-center' style={{margin:'35px 0'}} >News Headlines - top {this.props.category} headlines </h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll style={{overflow:'hidden'}}
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}>
                    <div className="container ">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4 my-3" key={element.url}>
                                    <NewsApi
                                        title={element.title}
                                        url={element.url}
                                        urlToImage={element.urlToImage}
                                        description={element.description}
                                        author={element.author}
                                        date={element.publishedAt}
                                        source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="d-flex justify-content-around my-3" >
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.prev} > &larr; previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.nex} >next &rarr; </button>
                    </div> */}

            </>
        )
    }
}

export default News

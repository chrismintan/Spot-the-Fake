const React = require('react');
const Layout = require('../layout/layout');
const ErrorMessage = require('../layout/error');


class allArticles extends React.Component {
            constructor(props) {
            super(props);
            this.state = {
                limitTo: 10
            }
        }

        onLoadMore() {
            this.setState({
                limitTo: parseInt(this.state.limitTo) + 10
            }); 
        };

    render() {

        let articles = this.props.articles.slice(0, this.state.limitTo).map(articles => {

            return(
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-12 hovering'>
                            <div className='headerAll'>{articles.type}</div>
                        <a className='linksAll' href={articles.article_url}>
                            <div className='col-sm-12 articleAll'>
                                <span>
                                    <img className='imgAll' src={articles.image_url} />
                                </span>
                                <span className='headlineAll'>{articles.headline}
                                </span>&nbsp;
                                <span className='scoreAll'>
                                    <i className="tick fas fa-check-circle">&nbsp;<i className='rightAll'>{articles.guess_right}</i></i><br/>
                                    <i className="cross fas fa-times-circle">&nbsp;<i className='wrongAll'>{articles.guess_wrong}</i></i>
                                </span>
                            </div>
                        </a>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <Layout title='All Articles' cookies={this.props.cookies}>
                <div className='col-sm-12'>
                    <h1 className='logo'>All Articles</h1>

                    <div>
                    <select id='sortby'>

                        <option value='top'>Top Stories</option>
                        <option value='real'>Real Articles</option>
                        <option value='fake'>Fake Articles</option>

                    </select>
                    </div>


                    <ErrorMessage errorMessage={this.props.errorMessage}/>
                </div>

                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-12'>
                                <div id='mainBody'>
                                {articles}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-sm-12 centered'>


                    <button className='buttonAll' id='loadMore'>Load more!</button>
                </div>
                <script src='/articlesScript.js'></script>
                <script src='/background.js'></script>
            </Layout>
        )
    }
}

module.exports = allArticles;



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
                        <div className='col-sm-12'>
                            <div className='headerAll'>{articles.type}</div>
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
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <Layout title='All Articles' cookies={this.props.cookies}>
                <div className='col-sm-12'>
                    <h1 className='logo'>All Articles</h1>
                    <ErrorMessage errorMessage={this.props.errorMessage}/>
                </div>
                    {articles}
                <div className='col-sm-12 centered'>
                    <button className='buttonAll' onClick={this.onLoadMore}>Load more!</button>
                </div>
                <script src='/articlesScript.js'></script>
                <script src='/background.js'></script>
            </Layout>
        )
    }
}

module.exports = allArticles;



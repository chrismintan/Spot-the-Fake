const React = require('react')
const Layout = require('../layout/layout');
var ErrorMessage = require('../layout/error');

class home extends React.Component {

    render() {

        return (
            <Layout title='About' cookies={this.props.cookies}>
                <div className='centered container-fluid col-sm-12'>
                    <span className='logo'>About the Game</span>
                </div>
                <div id='about' className='container-fluid col-sm-12'>
                    <div><img id='moviePic' src='/onion-movie.jpg'/></div>

                    <h2>Inspiration</h2>

                    <p>Fake news itself is nothing new, but with the advent of new technology, the internet and social media has made it cheap and easy to perpetuate. While I do enjoy reading satire, the problem comes when one is unable to decipher between fact and fiction.</p>

                    <p>Fake news is dreamt up and put out to resemble credible journalism to attract maximum attention and manipulate its readers. These so called news stories can be used to push political agendas, spread propaganda and deceive its readers. Governments are already making a stand against fake news. Singapore is already on tract to create legislation to combat what it calls online falsehoods.</p>

                    <p>On a lighter note, I have made a simple game in which two articles are pulled from the web, one being pure satire and the other, albeit real, has such bizarre facts which make it seem made up. Of the two articles, the goal is to spot the fake.</p>

                    <p>You will be informed of which article is real or fake after making your choice and you would also be able to read the articles with the links provided. Happy reading!</p>

                    <h2>How This Is Done</h2>

                    <p>Articles are taken via the Reddit API. A random satire article is taken from the subreddit r/TheOnion. Another random article is then taken from the subreddit r/nottheonion which mainly focuses on <strong>true stories</strong> that are so mind-blowingly ridiculous that you could have sworn it was an Onion story.</p>

                    <p>Link to the github repo can be seen <a href='https://github.com/chrismintan/onions'>here</a>. If you chance upon any bugs or would like to leave feedback feel free to drop me an <a href='mailto:chrismintan91@gmail.com'>email</a>.</p>


                </div>
                <script src='/background.js'></script>
            </Layout>
        )
    }

}

module.exports = home;
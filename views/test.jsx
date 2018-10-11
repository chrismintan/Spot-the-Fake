const React = require('react');
// const Header = require('../layouts/Header');

class test extends React.Component {

    render() {

        // const users = this.props.user.map(user => {
        //     var link = '/users/' + user.username + '/userpage';

        //     return(
        //         <li><a href={link}>{user.username}</a></li>
        //     );
        // });

        return(
            <html>
                <body>
                <div>All Users</div>

                <form className='user-form' method='POST' action='/test'>
                    <div className='user-attribute'>
                        <input id='input' name='id' type='number' placeholder='user id'/>

                        <input type='submit' name='submit'/>
                    </div>
                </form>

                <button id='button'>Click Me</button>
                <button id='button2'>Form Button</button>
                <button id='button3'>Post Stuff</button>

                <form className='user-form' method='POST' action='/tweets'>
                    <div className='user-attribute'>
                        <input id='tweet-content' name='tweet' type='text' placeholder='Tweet!'/>
                        <input id='tweet-id' name='id' placeholder='User Id'/>
                        <input type='submit' name='submit'/>
                    </div>
                </form>

                <script src='script.js'></script>

                </body>
            </html>
        );
    };
};

module.exports = test;




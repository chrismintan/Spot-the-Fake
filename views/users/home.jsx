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
            </Layout>
        )
    }

}

module.exports = home;
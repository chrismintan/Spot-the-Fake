const React = require('react');
const Layout = require('../layout/layout');
const ErrorMessage = require('../layout/error');

class NewUser extends React.Component {
    render() {

        return (
            <Layout title='Register' cookies={this.props.cookies}>
                <div className='col'>
                    <h1 className='my-4'>Register</h1>
                    <ErrorMessage errorMessage={this.props.errorMessage}/>
                    <form method='POST' action='/users'>
                        <div className="form-group">
                            <label>Username:</label>
                            <input type="text" name="name" className="form-control" placeholder="Username" required autoComplete="off"/>
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" name="password" className="form-control" placeholder='Password' required/>
                            <label>Re-enter:</label>
                            <input type='password' name='password2' className='form-control' placeholder='Confirm Password' required/>
                        </div>
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </form>
                </div>
            </Layout>
        );
    }
}

module.exports = NewUser;
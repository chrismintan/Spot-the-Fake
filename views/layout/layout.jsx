const React = require('react');
const sha256 = require('js-sha256');
const SALT = 'tbecm';

class ProfileLink extends React.Component{

  render () {

    let cookies = this.props.cookies;

    if (cookies.loggedIn === sha256(cookies.userid + SALT)) {
      return <span className="nav-item nav-link username" >({cookies.username})</span>
    } else {
      return <span />
    }
  }
}

class Login extends React.Component {

  render () {

    if (this.props.cookies.loggedIn) {
      return (
        <div className="navbar-nav fixed-top sticky-top ml-auto">
          <form method="POST" action="/users/logout" className="form-inline nav-item nav-link">
              <input type="submit" className="btn btn-link p-0 text-light" value="Logout" />
          </form>
        </div>
      )
    } else {
      return (
        <div className="navbar-nav fixed-top sticky-top ml-auto">

          <form method="GET" action="/users/login" className="form-inline nav-item nav-link">
            <input type="submit" className="btn btn-link p-0 text-light" value="Login" />
          </form>
          <form method="GET" action="/users/new" className="form-inline nav-item nav-link">
            <input type="submit" className="btn btn-link p-0 text-light" value="Register" />
          </form>
        </div>
      )
    }
  }
}

class CurrentScore extends React.Component {

    render() {

        let percentage = parseInt((parseInt(this.props.cookies.green) / (parseInt(this.props.cookies.green) + parseInt(this.props.cookies.red)))*100);

        if (this.props.cookies.loggedIn) {
            return(
                <div id='current'>
                    <div className='navbar-item' id='currentSession'>
                        <a id='correct'>{this.props.cookies.green}</a>
                        <a id='seperator'>&nbsp;/&nbsp;</a>
                        <a id='wrong'>{this.props.cookies.red}</a>
                        <a id='percentage'>&nbsp;&nbsp;Correct:&nbsp;Percentage:&nbsp;<strong>{percentage}%</strong></a>
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

class Layout extends React.Component {

  render () {

    return (

      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/style.css" />
          <link rel="shortcut icon" href="/onion.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>

        </head>
        <body>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand mb-0 h1" href="/home">Spot the Fake!</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="navbar-nav mr-auto">
                        <a className='nav-item nav-link' href='/play'>Play!</a>
                        <a className='nav-item nav-link' href='/articles'>Top&nbsp;Stories</a>

                        <ProfileLink cookies={this.props.cookies} />
                        <CurrentScore cookies={this.props.cookies} />
              </div>
              <Login cookies={this.props.cookies}/>
            </div>
          </div>
        </nav>
        <div className='row' id='topDog'></div>
          <div className="container">
            <main className="row">
              {this.props.children}
            </main>
          </div>
        </body>

        <footer className='footer'>
            <div className='container-fluid'>
                <div className='row'>

                    <div className='centered col-sm-12' id='social1'>

                        <div id='copyright'><strong id='copy'>©</strong>hristopher&nbsp;Tan&nbsp;&nbsp;&nbsp;</div>


                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                        <div id='social'>
                            <a href="mailto:chrismintan91@gmail.com?Subject=Hello%20there!"><img src="/email.png" /></a>&nbsp;
                            <a target="_blank" href="https://github.com/chrismintan"><img src="/github.png" /></a>&nbsp;
                            <a target="_blank" href="https://www.linkedin.com/in/chrismintan/"><img src="/linkedin.png" /></a>&nbsp;
                        </div>



                    </div>

                </div>
            </div>
        </footer>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" />

      </html>
    )
  }
}

module.exports = Layout;


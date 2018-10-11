var React = require("react");
var Layout = require('../layout/layout');
var ErrorMessage = require('../layout/error');

class play extends React.Component {
  render() {

    return (
      <Layout title="Login" cookies={this.props.cookies}>

        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-12'>

                    <span className='logo'>Can You Spot The Fake?</span>


                    <div className='container-fluid'>
                        <div className='row'>

                            <div className='hovering col-sm-12' id='hover1'>
                                <div className = 'col-sm-12' id='article1'>
                                    <span>
                                        <img id='img1' />
                                    </span>
                                    <span id='headline1'>
                                    </span>&nbsp;
                                    <span id='score1'>
                                        <i className="tick fas fa-check-circle">&nbsp;<i id='right1'></i></i><br/>
                                        <i className="cross fas fa-times-circle">&nbsp;<i id='wrong1'></i></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='row'>
                            <div className='col-sm-12' id='notify'>

                                <div>
                                    <a id='link1' href='#' target='_blank'><i className="far fa-arrow-alt-circle-up"></i></a>
                                        &nbsp;&nbsp;Click to Read!&nbsp;&nbsp;
                                    <a id='link2' href='#' target='_blank'><i className="far fa-arrow-alt-circle-down"></i></a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='container-fluid'>
                        <div className='row'>

                            <div className='hovering col-sm-12' id='hover2'>
                                <div className='col-sm-12' id='article2'>
                                    <span>
                                        <img id='img2'/>
                                    </span>
                                    <span id='headline2'>
                                    </span>&nbsp;
                                    <span id='score2'>
                                        <i className="tick fas fa-check-circle">&nbsp;<i id='right2'></i></i><br/>
                                        <i className="cross fas fa-times-circle">&nbsp;<i id='wrong2'></i></i>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div id='start'>
                        <button id='startButton'>Start!</button>
                    </div>
                </div>
            </div>
        </div>
        <script src='/background.js'></script>
        <script src='/script.js'></script>
      </Layout>
        );
    }
}

module.exports = play;
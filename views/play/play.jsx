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
                    <div className='container-fluid'>
                        <div className='row'>


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

                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-sm-12' id='article'>
                                <span>
                                    <img id='img' src='https://b.thumbs.redditmedia.com/uaIyyEdNCpx_g0PMBzQrtbXy9m7okl0DHDbfHD9oYsg.jpg'/>
                                </span>
                                <span id='headline'>"God Excited He Only Two Mortgage Payments Away From Owning Heaven"
                                </span>
                                <span>
                                    <div>
                                        <i className="tick fas fa-check-circle"><i id='test1'>21</i></i>
                                        <i className="cross fas fa-times-circle"><i>10</i></i>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>

                    <button id='start'>START</button>

                    <button id='notO'>notO</button>
                    <button id='onion'>Onion</button>

                    <div>Correct: <span id='correct'>0</span></div>

                    <div>Wrong: <span id='wrong'>0</span></div>

                </div>
            </div>
        </div>
        <script src='script.js'></script>
      </Layout>
        );
    }
}

module.exports = play;
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
                            <div className='col-sm-12' id='article1'>
                                <span>
                                    <img id='img1' />
                                </span>
                                <span id='headline1'>
                                </span>
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
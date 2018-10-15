var React = require("react");


class hidden extends React.Component {
  render() {

    return (

        <html>
            <div className="col-12">
              <h1 className="mt-4 mb-2">Seed Data</h1>
              <h2>You Should Not Be Here!</h2>
              <button id='seedReal'>Seed Real</button>
              <button id='seedFake'>Seed Fake</button>
            </div>
            <script src='/serverScript.js'></script>
        </html>
    )
  }
}

module.exports = hidden;

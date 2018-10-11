const sha256 = require('js-sha256');
const SALT = 'tbecm';

module.exports = (db) => {

    const index = (req, res) => {
        res.render('play/play', {cookies: req.cookies})
    }

    const onion = (req, res) => {
        console.log('request Onion sent')
        db.play.onionById(req.params, (err, result) => {
                console.log('1');
            if ( err ) {
                console.log('2')
                res.sendStatus(500);
            } else if (result === null) {
                console.log('cannnot get info')
            } else {
                console.log('3')
                res.json(result);
            }
                console.log('4')
        })
    }

    const notOnion = (req, res) => {
        console.log('request notOnion sent')
        db.play.notOnionById(req.params, (err, result) => {
            if ( err ) {
                res.sendStatus(500);
            } else if (result === null) {
                console.log('cannnot get info')
            } else {
                res.json(result);
            }
        })
    }


    return {
        index,
        onion,
        notOnion
    }
}
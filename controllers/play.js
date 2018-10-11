const sha256 = require('js-sha256');
const SALT = 'tbecm';

module.exports = (db) => {

    const index = (req, res) => {
        res.render('play/play', {cookies: req.cookies})
    }

    const onion = (req, res) => {
        db.play.onionById(req.params, (err, result) => {
            if ( err ) {
                res.sendStatus(500);
            } else if (result === null) {
                console.log('cannnot get info')
            } else {
                res.json(result);
            }
        })
    }

    const notOnion = (req, res) => {
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

    const correct = (req, res) => {
        db.play.plusOnion(req.query, (err, result) => {
            if ( err ) {
                res.sendStatus(500);
            } else {
                db.play.plusNotOnion(req.query, (err, result) => {
                    if ( err ) {
                        res.sendStatus(500);
                    } else {
                        res.send('');
                    }
                })
            }
        })
    }

    const wrong = (req, res) => {
        db.play.minusOnion(req.query, (err, result) => {
            if ( err ) {
                res.sendStatus(500);
            } else {
                db.play.minusNotOnion(req.query, (err, result) => {
                    if ( err ) {
                        res.sendStatus(500);
                    } else {
                        res.send('');
                    }
                })
            }
        })
    }

    return {
        index,
        onion,
        notOnion,
        correct,
        wrong
    }
}
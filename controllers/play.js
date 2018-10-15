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

    const allOnions = (req, res) => {
        db.play.getAllOnions(req.cookies, (err, result) => {
            if ( err ) {
                res.sendStatus(500);
            } else {
                res.json(result);
            }
        })
    }

    const allNotOnions = (req, res) => {
        db.play.getAllNotOnions(req.cookies, (err, result) => {
            if ( err ) {
                res.sendStatus(500);
            } else {
                res.json(result);
            }
        })
    }

    const allArticles = (req, res) => {
        db.play.allArticles(req.query, (err, result) => {
            if ( err ) {
                res.sendStatus(500);
            } else {
                res.render('play/allArticles', { cookies: req.cookies, articles: result.rows })
            }
        })
    }

    const fakeArticles = (req, res) => {
        db.play.fakeArticles(req.query, (err, result) => {
            if ( err ) {
                res.sendStatus(500);
            } else {
                res.json(result);
            }
        })
    }

    const realArticles = (req, res) => {
        db.play.realArticles(req.query, (err, result) => {
            if ( err ) {
                res.sendStatus(500);
            } else {
                res.json(result);
            }
        })
    }

    const topArticles = (req, res) => {
        db.play.allArticles(req.query, (err, result) => {
            if ( err ) {
                res.sendStatus(500);
            } else {
                res.json(result);
            }
        })
    }

    const insertReal = (req, res) => {
        db.play.insertReal(req.query, (err, result) => {
            if ( err ) {
                res.sendStatus(500);
            } else {
                res.send('');
            }
        })
    }

    const insertFake = (req, res) => {
        db.play.insertFake(req.query, (err, result) => {
            if ( err ) {
                res.sendStatus(500);
            } else {
                res.send('');
            }
        })
    }

    return {
        index,
        onion,
        notOnion,
        correct,
        wrong,
        allOnions,
        allNotOnions,
        allArticles,
        fakeArticles,
        realArticles,
        topArticles
    }
}
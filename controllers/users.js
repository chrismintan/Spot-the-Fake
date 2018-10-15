const sha256 = require('js-sha256');
const SALT = 'tbecm';

module.exports = (db) => {

    const index = (req, res) => {
        db.users.index((err, result) => {
            if ( err ) {
                console.log('ERROR: ', err);
                res.sendStatus(500);
            } else {
                res.render('users/index', {users: result.rows, cookies: req.cookies})
            }
        })
    }

    const newForm = (req, res) => {
        if (req.cookies.loggedin) {
            console.log('User is already logged in!');
            res.redirect('/');
        } else {
            res.render('users/new', { cookies: req.cookies });
        };
    };

    const create = (req, res) => {
        db.users.get(req.body, (err, result) => {
            if ( err ) {
                console.log('ERROR: ', err);
                res.sendStatus(500);
            } else if ( result.rowCount >= 1 ) {
                console.log('Username already taken');
                res.render('users/new', {cookies: req.cookies, errorMessage: "A user with this username already exists!"})
            } else {
                if ( req.body.password != req.body.password2 ) {
                    res.render('users/new', {cookies: req.cookies, errorMessage: 'Passwords inputted do not match!'})
                } else {
                    db.users.create(req.body, (err, result) => {
                        if( err ) {
                            console.log('ERROR: ', err);
                            res.sendStatus(500);
                        }
                        if ( result.rowCount >= 1 ) {
                            console.log('User created!');

                            console.log(result.rows)

                            let userid = result.rows[0].id;

                            res.cookie('loggedIn', sha256(userid + SALT));
                            res.cookie('userid', userid);
                            res.cookie('username', req.body.name);
                            res.cookie('green', '0');
                            res.cookie('red', '0');

                            res.redirect('/');
                        } else {
                            console.log('User could not be created.');
                            res.sendStatus(500);
                        }
                    })
                }
            }
        })
    }

    const loginPost = (req, res) => {
        db.users.get(req.body, (err, result) => {
            if ( err ) {
                res.sentStatus(500);
            } else if ( result.rowCount === 0 ) {
                res.render('users/login', {cookies: req.cookies, errorMessage: 'User not found!'});
            } else {

                let userid = result.rows[0].id;
                let username = result.rows[0].username;
                let password = result.rows[0].password;
                let green = result.rows[0].correct;
                let red = result.rows[0].wrong;

                if ( sha256(req.body.password) == password ) {

                    res.cookie('loggedIn', sha256(userid + SALT));
                    res.cookie('userid', userid);
                    res.cookie('username', username);
                    res.cookie('green', green);
                    res.cookie('red', red);

                    res.redirect('/');

                } else {
                    res.render('users/login', {cookies: req.cookies, errorMessage: 'Incorrect password!'});
                }
            }
        })
    }

    const loginForm = (req, res) => {
        if ( req.cookies.loggedIn ) {
            res.redirect('/');
        } else {
            res.render('users/login', {cookies: req.cookies});
        }
    }

    const logout = (req, res) => {
        res.clearCookie('loggedIn');
        res.clearCookie('userid');
        res.clearCookie('username');
        res.clearCookie('green');
        res.clearCookie('red');

        res.redirect('/');
    }

    const plus1 = (req, res) => {
        db.users.plusOne(req.params, (err, result) => {
            if ( err ) {
                res.sendStatus(500);
            } else {
                let current = parseInt(req.cookies.green);
                let current1 = current+1;
                res.cookie('green', current1);
                res.send('');
            }
        })
    }

    const minus1 = (req, res) => {
        db.users.minusOne(req.params, (err, result) => {
            if ( err ) {
                res.sendStatus(500);
            } else {
                let current = parseInt(req.cookies.red);
                let current1 = current+1;
                res.cookie('red', current1);
                res.send('')
            }
        })
    }

    const profile = (req, res) => {
        db.users.getById(req.params, (err, result) => {
            if ( err ) {
                res.sendStatus(500);
            } else if ( result.rowCount == 0 ) {
                res.send('User not found!');
            } else {
                res.render('users/profile', {users: result.rows[0], cookies: req.cookies});
            }
        })
    }

    const home = (req, res) => {
        res.render('users/home', {cookies: req.cookies})
    }

    return {
        index,
        newForm,
        create,
        loginPost,
        loginForm,

        // Clear all cookies
        logout,
        // profile,
        plus1,
        minus1,
        home
    }
}

















const sha256 = require('js-sha256');

module.exports = (pool) => {
    const get = (users, callback) => {

        let text = `SELECT * FROM users WHERE username = '${users.name}'`;
        pool.query(text, (err, result) => {
            callback(err, result);
        })
    }

    const onionById = (play, callback) => {

        console.log(play.id)
        let text = `SELECT * FROM onions WHERE id = '${play.id}'`;
        pool.query(text, (err, result) => {
            callback(err, result);
        })

    }

    const notOnionById = (play, callback) => {
        let text = `SELECT * FROM notonions WHERE id = '${play.id}'`;
        pool.query(text, (err, result) => {
            callback(err, result);
        })
    }

    const plusOnion = (play, callback) => {
        let text = `UPDATE onions SET guess_right = guess_right + 1 WHERE id = '${play.onion_id}'`;
        pool.query(text, (err, result) => {
            callback(err, result);
        })
    }

    const minusOnion = (play, callback) => {
        let text = `UPDATE onions SET guess_wrong = guess_wrong + 1 WHERE id = '${play.onion_id}'`;
        pool.query(text, (err, result) => {
            callback(err, result);
        })
    }

    const plusNotOnion = (play, callback) => {
        let text = `UPDATE notonions SET guess_right = guess_right + 1 WHERE id = '${play.notOnion_id}'`;
        pool.query(text, (err, result) => {
            callback(err, result);
        })
    }

    const minusNotOnion = (play, callback) => {
        let text = `UPDATE notonions SET guess_wrong = guess_wrong + 1 WHERE id = '${play.notOnion_id}'`;
        pool.query(text, (err, result) => {
            callback(err, result);
        })
    }

    const getAllOnions = (play, callback) => {
        let text = `SELECT image_url FROM onions`;
        pool.query(text, (err, result) => {
            callback(err, result);
        })
    }

    const getAllNotOnions = (play, callback) => {
        let text = `SELECT image_url FROM notonions`;
        pool.query(text, (err, result) => {
            callback(err, result);
        })
    }

    return {
        onionById,
        notOnionById,
        plusOnion,
        minusOnion,
        plusNotOnion,
        minusNotOnion,
        getAllOnions,
        getAllNotOnions
    }
}
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

        console.log('5')
        pool.query(text, (err, result) => {
            console.log('6')
            callback(err, result);
        })

    }

    const notOnionById = (play, callback) => {
        let text = `SELECT * FROM notonions WHERE id = '${play.id}'`;

        pool.query(text, (err, result) => {
            callback(err, result);
        })
    }

    return {
        onionById,
        notOnionById
    }
}
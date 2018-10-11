const sha256 = require('js-sha256');

module.exports = (pool) => {
    const create = (users, callback) => {
        let text = 'INSERT INTO users (username, password, correct, wrong) VALUES ($1, $2, $3, $4)'

        let values = [users.name, sha256(users.password), 0, 0];

        pool.query(text, values, (err, result) => {
            callback(err, result);
        })
    }

    const get = (users, callback) => {

        let text = `SELECT * FROM users WHERE username = '${users.name}'`;

        pool.query(text, (err, result) => {
            callback(err, result);
        })
    }

    const getById = (users, callback) => {

        let text = `SELECT * FROM users WHERE id = '${users.id}'`;

        pool.query(text, (err, result) => {
            callback(err, result);
        })
    }

    const index = (callback) => {

        let text = `SELECT * FROM users ORDER BY id ASC`;

        pool.query(text, (err, result) => {
            callback(err, result);
        })
    }

    const plusOne = (users, callback) => {
        let text = `UPDATE users SET correct = correct + 1 WHERE id = '${users.id}'`

        pool.query(text, (err, result) => {
            callback(err, result);
        })
    }

    const minusOne = (users, callback) => {
        let text = `UPDATE users SET wrong = wrong + 1 WHERE id = '${users.id}'`

        pool.query(text, (err, result) => {
            callback(err, result);
        })
    }

    return {
        create,
        get,
        getById,
        index,
        plusOne,
        minusOne
    }
}






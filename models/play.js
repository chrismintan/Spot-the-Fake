const sha256 = require('js-sha256');

module.exports = (pool) => {
    const get = (users, callback) => {

        let text = `SELECT * FROM users WHERE username = '${users.name}'`;
        pool.query(text, (err, result) => {
            callback(err, result);
        })
    }

    const onionById = (play, callback) => {
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

    const allArticles = (play, callback) => {
        let text = `SELECT * FROM onions UNION ALL SELECT * FROM notonions ORDER BY guess_wrong DESC`;

        // ${play.type} ${play.sort}

        pool.query(text, (err, result) => {
            callback(err, result);
        })
    }

    const fakeArticles = (play, callback) => {
        let text = `SELECT * FROM onions ORDER BY guess_wrong DESC`;

        pool.query(text, (err, result) => {
            callback(err, result);
        })
    }

    const realArticles = (play, callback) => {
        let text = `SELECT * FROM notonions ORDER BY guess_wrong DESC`;

        pool.query(text, (err, result) => {
            callback(err, result);
        })
    }

    const insertReal = (play, callback) => {
        // let text = `INSERT INTO notonions (headline, image_url, article_url, reddit_url, guess_right, guess_wrong, type) SELECT '${play.headline}', '${play.image_url}', '${play.article_url}', '${play.reddit_url}', '${play.guess_right}', '${play.guess_wrong}', '${play.type}' WHERE NOT EXISTS ( SELECT 1 FROM notonions WHERE headline = '${play.headline}')`;

        let text = `INSERT INTO notonions (headline, image_url, article_url, reddit_url, guess_right, guess_wrong, type) VALUES ($1, $2, $3, $4, $5, $6, $7)`;

        let values = [play.headline, play.image_url, play.article_url, play.reddit_url, play.guess_right, play.guess_wrong, play.type];


        pool.query(text, values, (err, result) => {
            callback(err, result);
        })
    }

    const insertFake = (play, callback) => {
        // let text = `INSERT INTO onions (headline, image_url, article_url, reddit_url, guess_right, guess_wrong, type) SELECT '${play.headline}', '${play.image_url}', '${play.article_url}', '${play.reddit_url}', '${play.guess_right}', '${play.guess_wrong}', '${play.type}' WHERE NOT EXISTS ( SELECT 1 FROM onions WHERE headline = '${play.headline}')`;

        let text = `INSERT INTO onions (headline, image_url, article_url, reddit_url, guess_right, guess_wrong, type) VALUES ($1, $2, $3, $4, $5, $6, $7)`;

        let values = [play.headline, play.image_url, play.article_url, play.reddit_url, play.guess_right, play.guess_wrong, play.type];

        pool.query(text, values, (err, result) => {
            console.log(err)
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
        getAllNotOnions,
        allArticles,
        fakeArticles,
        realArticles,
        insertReal,
        insertFake
    }
}
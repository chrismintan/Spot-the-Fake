

module.exports = (dbPoolInstance) => {

    const postTweet = (tweet, callback) => {
        let text = 'INSERT INTO tweets (user_id, content) VALUES ($1, $2)';

        let values = [tweet.id, tweet.tweet];

        dbPoolInstance.query(text, values, (err, result) => {
            callback(err, result);
        });
    };

    // Linked from controllers/tweets/callAjax function. 'tweet' is the parameter given in the function
    const testAjax = (tweet, callback) => {
        let text = 'SELECT * FROM tweets WHERE user_id =' + tweet;

        dbPoolInstance.query(text, (err, result) => {
            callback(err, result);
        });
    };

    // Post form which includes which user_id they want records of
    const formAjax = (tweet, callback) => {
        console.log('TESTING:     ', tweet);
        let text = 'SELECT * FROM tweets WHERE user_id =' + tweet.id;

        dbPoolInstance.query(text, (err, result) => {
            callback(err, result);
        });
    };

    const postAjax = (tweet, callback) => {
        console.log('TESTING:    ', tweet.content);
        let text = 'INSERT INTO tweets (content, user_id) VALUES ($1, $2)';

        let values = [tweet.content, tweet.id];

        dbPoolInstance.query(text, values, (err, result) => {
            callback(err, result);
        });
    };

    return {
        postTweet,
        testAjax,
        formAjax,
        postAjax
    };
};
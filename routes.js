module.exports = (app, db) => {

    const users = require('./controllers/users')(db);
    const play = require('./controllers/play')(db);

    // REST routes for user creation and login
    app.get('/users', users.index);
    app.get('/users/new', users.newForm);
    app.post('/users', users.create);

    app.post('/users/logout', users.logout);
    app.post('/users/login', users.loginPost);
    app.get('/users/login', users.loginForm);

    // app.get('/users/:id', users.profile);

    app.get('/play', play.index)

    app.get('/articles/onion/:id', play.onion)
    app.get('/articles/notonion/:id', play.notOnion)

    app.put('/users/plus/:id', users.plus1)
    app.put('/users/minus/:id', users.minus1)

    // Updating Articles scores routes
    app.put('/updatescores/correct', play.correct)
    app.put('/updatescores/wrong', play.wrong)

    app.get('/allarticles/onions', play.allOnions)
    app.get('/allarticles/notonions', play.allNotOnions)

    // Render article page
    app.get('/articles', play.allArticles)

    // Dropdown list JSON rendering
    app.get('/fakearticles', play.fakeArticles)
    app.get('/realarticles', play.realArticles)
    app.get('/toparticles', play.topArticles)

    // Posting new articles into database
    app.post('/postnewreal', play.insertReal)
    app.post('/postnewfake', play.insertFake)

}
















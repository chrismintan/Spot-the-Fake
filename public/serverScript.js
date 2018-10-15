
window.onload = function() {

    document.getElementById('seedFake').addEventListener('click', getFakeArticles);

    document.getElementById('seedReal').addEventListener('click', getRealArticles);

}



function getRealArticles() {

    let ajaxCall = `https://www.reddit.com/r/nottheonion/top/.json?t=month&limit=100`;

    let responseHandler = function() {
        responseObj = JSON.parse(this.responseText);

        console.log(responseObj.data.children)

        for ( let i = 0; i < responseObj.data.children.length; i++ ) {

            let headline = responseObj.data.children[i].data.title;

            let image_url = responseObj.data.children[i].data.thumbnail;

            let article_url = responseObj.data.children[i].data.url;

            let reddit_url = 'http://www.reddit.com/' + responseObj.data.children[i].data.permalink;

            let guess_right = 0;

            let guess_wrong = 0;

            let type = 'Real!'

            let params = `headline=${headline}&&image_url=${image_url}&&article_url=${article_url}&&reddit_url=${reddit_url}&&guess_right=${guess_right}&&guess_wrong=${guess_wrong}&&type=${type}`;

            // % signs have to be passed on as %25 in a query
            let encoded = params.split('%').join('%25');

            let ajaxPost = `/postnewreal?${encoded}`;

            var request = new XMLHttpRequest();

            request.open('POST', ajaxPost);

            request.send();
        }
    }

    let request = new XMLHttpRequest();

    request.addEventListener('load', responseHandler);

    request.open('GET', ajaxCall);

    request.send();

}

function getFakeArticles() {

    let ajaxCall = `https://www.reddit.com/r/TheOnion/top/.json?t=month&limit=100`;

    let responseHandler = function() {
        responseObj = JSON.parse(this.responseText);

        console.log(responseObj)

        for ( let i = 0; i < responseObj.data.children.length; i++ ) {

            let headline = responseObj.data.children[i].data.title;

            let image_url = responseObj.data.children[i].data.thumbnail;

            let article_url = responseObj.data.children[i].data.url;

            let reddit_url = 'http://www.reddit.com/' + responseObj.data.children[i].data.permalink;

            let guess_right = 0;

            let guess_wrong = 0;

            let type = 'Fake!'

            let params = `headline=${headline}&&image_url=${image_url}&&article_url=${article_url}&&reddit_url=${reddit_url}&&guess_right=${guess_right}&&guess_wrong=${guess_wrong}&&type=${type}`;


            // % signs have to be passed on as %25 in a query
            let encoded = params.split('%').join('%25');

            let ajaxPost = `/postnewfake?${encoded}`;

            var request = new XMLHttpRequest();

            request.open('POST', ajaxPost);

            request.send();

        }
    }

    let request = new XMLHttpRequest();

    request.addEventListener('load', responseHandler);

    request.open('GET', ajaxCall);

    request.send();

}










function getFakeArticles() {

    let ajaxCall = `https://www.reddit.com/r/nottheonion/top/.json?t=month&limit=100`;

    let responseHandler = function() {
        responseObj = JSON.parse(this.responseText);

        let headline = responseObj.data.children[i].data.title;

        let image_url = responseObj.data.children[i].data.thumbnail;

        let article_url = responseObj.data.children[i].data.url;

        let reddit_url = 'http://www.reddit.com/' + responseObj.data.children[i].data.permalink;

        let guess_right = 0;

        let guess_wrong = 0;

        let type = 'Real!'

        let ajaxPost = `http://localhost:3000/test1?headline=${headline}&&image_url=${image_url}&&article_url=${article_url}&&reddit_url=${reddit_url}&&guess_right=${guess_right}&&guess_wrong=${guess_wrong}&&type=${type}`;
    }

    let request = new XMLHttpRequest();

    request.addEventListener('load', responseHandler);

    request.open('POST', ajaxCall);

    request.send();

}







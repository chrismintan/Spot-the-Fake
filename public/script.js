console.log('connected!')

window.onload = function() {

    document.querySelector('#start').addEventListener('click', appendArticles);

    document.getElementById('onion').addEventListener('click', appendOnion);

    document.getElementById('notO').addEventListener('click', appendNotOnion);

};

/*

function randomOnionArray() {
    let onionArray = [];

    for ( let i = 1; i < 101; i++ ) {
        onionArray.push(i);
    }

    let shuffledOnions = [];

    for ( let i = 99; i > -1; i-- ) {
        let rNum = Math.ceil(Math.random()*i);
        shuffledOnions.push(onionArray[rNum]);
        onionArray.splice(rNum,1);
    }

    console.log(shuffledOnions);
}

function randomNotOnionArray() {
    let notOnionArray = [];

    for ( let i = 1; i < 101; i++ ) {
        notOnionArray.push(i);
    }

    let shuffledNotOnions = [];

    for ( let i = 99; i > -1; i-- ) {
        let rNum = Math.ceil(Math.random()*i);
        shuffledNotOnions.push(notOnionArray[rNum]);
        notOnionArray.splice(rNum,1);
    }

    console.log(shuffledNotOnions);
}

*/

// Function to change all first letters of all words in Headlines to CAPS
function titleCase(string) {
    return string.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function appendArticles() {
    deColorize();
    clearAll();

    appendOnion();
    appendNotOnion();

    // let rNum = Math.ceil(Math.random() * Math.ceil(2));
    // if ( rNum == 1 ) {
    //     console.log('HERE')
    //     appendOnion();
    //     appendNotOnion();
    // } else {
    //     console.log('HERE')
    //     appendNotOnion();
    //     appendOnion();
    // }
}

// Function to append a random Onion article to the page
function appendOnion() {
    hideScores();
    let rNum = Math.ceil(Math.random() * Math.ceil(100));

    let ajaxCall = `http://localhost:3000/articles/onion/${rNum}`;

    let responseHandler = function() {

        let responseObj = JSON.parse(this.responseText);
        let headline = responseObj.rows[0].headline;
        let image_url = responseObj.rows[0].image_url;
        let article_url = responseObj.rows[0].article_url;
        let reddit_url = responseObj.rows[0].reddit_url;
        let correct = responseObj.rows[0].guess_right;
        let wrong = responseObj.rows[0].guess_wrong;

        onion_url = article_url;
        onion_id = responseObj.rows[0].id

        if ( document.getElementById('headline1').textContent == "" ) {
            article1(image_url, titleCase(headline));
            onion = 1;
            putScores1(correct, wrong);
            console.log('HERE:', correct)
            document.getElementById('article1').addEventListener('click', minusOne, minus);
            document.getElementById('article1').addEventListener('click', minus);
            document.getElementById('article1').style.cursor = 'pointer';

        } else {
            article2(image_url, titleCase(headline));
            onion = 2;
            putScores2(correct, wrong);
            document.getElementById('article2').addEventListener('click', minusOne, minus);
            document.getElementById('article2').addEventListener('click', minus);
            document.getElementById('article2').style.cursor = 'pointer';
        }
    }

    let request = new XMLHttpRequest();

    request.addEventListener('load', responseHandler);

    request.open('GET', ajaxCall);

    request.send();

}

function appendNotOnion() {
    hideScores();
    let rNum = Math.ceil(Math.random() * Math.ceil(100));

    let ajaxCall = `http://localhost:3000/articles/notonion/${rNum}`;

    let responseHandler = function() {
        let responseObj = JSON.parse(this.responseText);

        let headline = responseObj.rows[0].headline;
        let image_url = responseObj.rows[0].image_url;
        let article_url = responseObj.rows[0].article_url;
        let reddit_url = responseObj.rows[0].reddit_url;
        let correct = responseObj.rows[0].guess_right;
        let wrong = responseObj.rows[0].guess_wrong;

        notOnion_url = article_url;
        notOnion_id = responseObj.rows[0].id;

        if ( document.getElementById('headline1').textContent == "" ) {
            article1(image_url, titleCase(headline));
            putScores1(correct, wrong);
            notOnion = 1;
            document.getElementById('article1').addEventListener('click', plusOne);
            document.getElementById('article1').addEventListener('click', plus);
            document.getElementById('article1').style.cursor = 'pointer';
        } else {
            article2(image_url, titleCase(headline));
            notOnion = 2;
            putScores2(correct, wrong);
            document.getElementById('article2').addEventListener('click', plusOne);
            document.getElementById('article2').addEventListener('click', plus);
            document.getElementById('article2').style.cursor = 'pointer';
        }
    }

    let request = new XMLHttpRequest();

    request.addEventListener('load', responseHandler);

    request.open('GET', ajaxCall);

    request.send();

    console.log('sent!', ajaxCall)

}

// Starting game functions
function article1(img, headline) {
    document.getElementById('img1').src = img;
    document.getElementById('headline1').textContent = headline;
    document.getElementById('article1').style.display = 'table';
}

function article2(img, headline) {
    document.getElementById('img2').src = img;
    document.getElementById('headline2').textContent = headline;
    document.getElementById('article2').style.display = 'table';
}

function hideWhileLoad() {
    document.getElementById('article1').style.display = 'none';
    document.getElementById('article2').style.display = 'none';
}

function clearAll() {
    document.getElementById('img1').src = "";
    document.getElementById('headline1').textContent = "";
    document.getElementById('img2').src = "";
    document.getElementById('headline2').textContent = "";
}

function colorize() {
    if ( onion == 1 ) {
        document.getElementById('article1').style.background = 'rgb(188, 62, 62, 0.6)';
        document.getElementById('article2').style.background = 'rgb(125, 244, 66, 0.5)';
    } else {
        document.getElementById('article2').style.background = 'rgb(188, 62, 62, 0.6)';
        document.getElementById('article1').style.background = 'rgb(125, 244, 66, 0.5)';
    }
}

function deColorize() {
    document.getElementById('article2').style.background = "";
    document.getElementById('article1').style.background = "";
}

function plusOne() {
    // + Score just for reference. Will eventually do AJAX post to server
    let current = parseInt(document.getElementById('correct').textContent);
    document.getElementById('correct').textContent = current + 1;

    // Color the onion article red and the real article green
    colorize();

}

// AJAX PUT to update database
function plus() {
    // Remove event listener from articles
    let old_element1 = document.getElementById('article1');
    let new_element1 = old_element1.cloneNode(true);
    old_element1.parentNode.replaceChild(new_element1, old_element1);

    let old_element2 = document.getElementById('article2');
    let new_element2 = old_element2.cloneNode(true);
    old_element2.parentNode.replaceChild(new_element2, old_element2);
    let cookies = parse(document.cookie);
    let ajaxCall = `http://localhost:3000/users/plus/${cookies.userid}`;

    let request = new XMLHttpRequest();

    request.open('PUT', ajaxCall);
    request.send();

    colorize();

    setLinks()
}

function minusOne() {
    // + Score just for reference. Will eventually do AJAX post to server
    let current = parseInt(document.getElementById('wrong').textContent);
    document.getElementById('wrong').textContent = current + 1;
}

// AJAX PUT to update database
function minus() {
    // Remove all event listener from articles. This is done by cloning the old element and replacing the old element with the new element
    let old_element1 = document.getElementById('article1');
    let new_element1 = old_element1.cloneNode(true);
    old_element1.parentNode.replaceChild(new_element1, old_element1);

    let old_element2 = document.getElementById('article2');
    let new_element2 = old_element2.cloneNode(true);
    old_element2.parentNode.replaceChild(new_element2, old_element2);
    let cookies = parse(document.cookie);
    let ajaxCall = `http://localhost:3000/users/minus/${cookies.userid}`;

    let request = new XMLHttpRequest();

    request.open('PUT', ajaxCall);
    request.send();

    colorize();

    setLinks()
}


// Function to parse the cookie
function parse(str) {
    let string = str.split('; ');
    let result = {};
    for ( var i = 0; i < string.length; i++ ) {
        var cur = string[i].split('=');
        result[cur[0]] = cur[1];
    }
    return result;
}

function hideScores() {
    document.getElementById('score1').style.display = 'none';
    document.getElementById('score2').style.display = 'none';
}

function showScores() {
    document.getElementById('score1').style.display = 'table-cell';
    document.getElementById('score2').style.display = 'table-cell';
}

function putScores1(correct, wrong) {
    document.getElementById('right1').textContent = correct;
    document.getElementById('wrong1').textContent = wrong;
}

function putScores2(correct, wrong) {
    document.getElementById('right2').textContent = correct;
    document.getElementById('wrong2').textContent = wrong;
}

function setLinks() {

    document.getElementById('notify').style.display = 'table';

    if ( onion == 1 ) {
        document.getElementById('link1').href = onion_url;
        document.getElementById('link2').href = notOnion_url;
    }

    if ( onion == 2 ) {
        document.getElementById('link1').href = notOnion_url;
        document.getElementById('link2').href = onion_url;
    }
}




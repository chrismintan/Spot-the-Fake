window.onload = function() {
    changeColor();

    document.getElementById('loadMore').addEventListener('click', sortBy);

    document.getElementById('sortby').addEventListener('change', changeSort);
};

current = 0;

function changeColor() {
    for (let i = 0; i < document.getElementsByClassName('headerAll').length; i++) {
        if (document.getElementsByClassName('headerAll')[i].textContent == 'Real!') {
            document.getElementsByClassName('headerAll')[i].style.background = '#3D9970';
        } else {
            document.getElementsByClassName('headerAll')[i].style.background = '#FF4136';
        }
    }
}

function clearArticles() {
    let parent = document.getElementById('mainBody');

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function changeSort() {
    current = 0;

    clearArticles();

    sortBy();
}

function sortBy() {

    // Getting the value from the dropdown list and storing it in a variable
    let sort = document.getElementById('sortby').value;

    // Making the conditionals
    if (sort == 'top') {
        let ajaxCall = `/toparticles`;
        loadArticles(ajaxCall);
    }

    if (sort == 'real') {
        let ajaxCall = `/realarticles`;
        loadArticles(ajaxCall);
    }

    if (sort == 'fake') {
        let ajaxCall = `/fakearticles`;
        loadArticles(ajaxCall);
    }

}

// Includes loading 10 more articles. Current is stored as a global variable and resetted once the sortby option is changed
function loadArticles(ajax) {

    let responseHandler = function() {

        currentArticles = JSON.parse(this.responseText);

        let i = current;

        current = current + 10;

        for ( i; i < current; i++) {
            let headline = currentArticles.rows[i].headline;
            let image_url = currentArticles.rows[i].image_url;
            let article_url = currentArticles.rows[i].article_url;
            let correct = currentArticles.rows[i].guess_right;
            let wrong = currentArticles.rows[i].guess_wrong;
            let type = currentArticles.rows[i].type;

            let mainBody = document.getElementById('mainBody');

            newDoc = document.createElement('div');

            newDoc.innerHTML = `<div class='col-sm-12 container-fluid'>
                                    <div class='row'>
                                        <div class='col-sm-12 hovering'>
                                            <div class='headerAll'>${type}</div>
                                        <a class='linksAll' href=${article_url}>
                                            <div class='col-sm-12 articleAll'>
                                                <span>
                                                    <img class='imgAll' src=${image_url} />
                                                </span>
                                                <span class='headlineAll'>${headline}
                                                </span>&nbsp;
                                                <span ='scoreAll'>
                                                    <i class="tick fas fa-check-circle">&nbsp;<i class='rightAll'>${correct}</i></i><br/>
                                                    <i class="cross fas fa-times-circle">&nbsp;<i class='wrongAll'>${wrong}</i></i>
                                                </span>
                                            </div>
                                        </a>
                                        </div>
                                    </div>
                                </div>`;

            mainBody.appendChild(newDoc);

            changeColor();
        }
    }

    let request = new XMLHttpRequest();

    request.addEventListener('load', responseHandler);

    request.open('GET', ajax);

    request.send();

}

// <div class='container-fluid'>
//     <div class='row'>
//         <div class='col-sm-12 hovering'>
//             <div class='headerAll'>{articles.type}</div>
//         <a class='linksAll' href={articles.article_url}>
//             <div class='col-sm-12 articleAll'>
//                 <span>
//                     <img class='imgAll' src={articles.image_url} />
//                 </span>
//                 <span class='headlineAll'>{articles.headline}
//                 </span>&nbsp;
//                 <span class='scoreAll'>
//                     <i class="tick fas fa-check-circle">&nbsp;<i class='rightAll'>{articles.guess_right}</i></i><br/>
//                     <i class="cross fas fa-times-circle">&nbsp;<i class='wrongAll'>{articles.guess_wrong}</i></i>
//                 </span>
//             </div>
//         </a>
//         </div>
//     </div>
// </div>

// }
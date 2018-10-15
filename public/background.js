console.log('linked!');

function background() {

    backgroundText = `<img class='side' src='`;

    let ajaxCall1 = `/allarticles/onions`;

    let responseHandler1 = function() {
        let responseObj1 = JSON.parse(this.responseText);

        let ajaxCall2 = `/allarticles/notonions`;

        let responseHandler2 = function() {
            let responseObj2 = JSON.parse(this.responseText);

            for ( i = 0; i < 63; i++ ) {
                let rNum = Math.ceil(Math.random() * Math.ceil(2));

                if ( rNum == 1 ) {
                    let rNum2 = Math.ceil(Math.random() * Math.ceil(99));
                    backgroundText = backgroundText + responseObj2.rows[rNum2].image_url + "'><img class='side' src='";
                } else {
                    let rNum3 = Math.ceil(Math.random() * Math.ceil(99));
                    backgroundText = backgroundText + responseObj2.rows[rNum3].image_url + "'><img class='side' src='";
                }
            }

            backgroundText = `<div id='photos'>${backgroundText}</div>`;

            let testing = document.createElement('div');
            testing.innerHTML = backgroundText;
            body = document.querySelector('#topDog');
            body.appendChild(testing);
        }
        let request2 = new XMLHttpRequest();
        request2.addEventListener('load', responseHandler2);
        request2.open('GET', ajaxCall2);
        request2.send();
    }
    let request1 = new XMLHttpRequest();
    request1.addEventListener('load', responseHandler1);
    request1.open('GET', ajaxCall1);
    request1.send();

    // for ( i = 0; i < 60; i++ ) {
    //     let rNum = Math.ceil(Math.random() * Math.ceil(100));
    // }

    // for ( i = 0; i < 60; i++ ) {
    //     let text = `<img class='side' src='https://b.thumbs.redditmedia.com/JeXyWcJjYOn0Qx5gSjWBSFqG977Dke_nDXae-I3HXZw.jpg' />` + text
    // };

    // text = `<div id='photos'>${text}</div>`;

    // testing = document.createElement('div');

    // testing.innerHTML = text;

    // body = document.querySelector('#topDog');

    // body.appendChild(testing);

}

background();
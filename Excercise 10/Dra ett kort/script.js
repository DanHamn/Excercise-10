
((pullcardUri) => {
    pullcardUri.addCard = function (event) {
        event.preventDefault();
        getApi();
    }

    function getApi() {
        let Uri = "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
        fetch(Uri)
            .then(res => res.json())
            .then(data => {
                let img = document.createElement('img')
                img.setAttribute('src',data.cards[0].image)
                document.getElementById("cardOuputArea").innerHTML='';
                document.getElementById("cardOuputArea").appendChild(img);
            })
            .catch(err => console.log(err))
    }

})(window.pullcardUri = window.pullcardUri || {});

document.querySelector('#inputForm').addEventListener('submit', pullcardUri.addCard)



((starWarsUri) => {
    starWarsUri.addInfo = function (event) {
        event.preventDefault();
        const input = this['inputName'];
        let name = capitalizeFirstLetter(input.value);
        let s = `Character: ${name}`;
        document.getElementById("textOuputArea").value = s;
        getApi(input.value);
        input.value = '';
    }

    function getApi(input) {
        let startUri = 'https://www.swapi.tech/api/people/?name='
        fullUri = startUri + input;

        fetch(fullUri)
            .then(res => res.json())
            .then(data => {
                let prop = data.result[0].properties;
                let s = makeString(prop);
                document.getElementById("textOuputArea").value += s;
            })
            .catch(err => {
                document.getElementById("textOuputArea").value += '\nThere is no character with that name';
                console.log(err)
            })
    }

    function makeString(prop) {
        let value = [prop['height'], prop['mass'], prop['gender'], prop['hair_color']];
        value = capitalizeFirstLetter(value);
        let s = `\nHeight: ${value[0]}cm \nMass: ${value[1]}kg \nGender: ${value[2]} \nHair color: ${value[3]}`;
        return s;
    }

    function capitalizeFirstLetter(string) {
        if (Array.isArray(string)) {
            for (let index = 0; index < string.length; index++)
                string[index] = string[index].charAt(0).toUpperCase() + string[index].slice(1);
        }
        else {
            let str = string.split(" ")
            for (let index = 0; index < str.length; index++) {
                str[index] = str[index].charAt(0).toUpperCase() + str[index].slice(1);
            }
            string = str.join(" ");
        }
        return string;
    };



})(window.starWarsUri = window.starWarsUri || {});

document.querySelector('#inputForm').addEventListener('submit', starWarsUri.addInfo)
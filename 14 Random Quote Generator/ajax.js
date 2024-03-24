const el_btn = document.querySelector('.get-quote');
const el_num = document.getElementById('number');
const el_container = document.querySelector('.container');

el_btn.addEventListener('click', getQuote);

function getQuote() {
    if (el_num.value.length == 0) {
        alert('Please enter a valid number')
    } else {
        const https = new XMLHttpRequest();

        https.open('GET', 'https://type.fit/api/quotes', true);

        https.onload = function () {
            if (this.status === 200) {
                let output = '';
                let data = shuffle(JSON.parse(this.responseText));

                for (let i = 0; i < data.length; i++) {
                    if (i == el_num.value) {
                        break;
                    }
                    output += `<ul>
                    <li>${data[i].text}</li>
                    <li>${data[i].author}</li>
                    </ul><hr>`
                }

                const el_quote = document.getElementById('quotes');
                el_quote.innerHTML = output;
            }
        }

        https.send();
    }


}

function shuffle(quotes) {
    let pointer = 0;

    while (pointer < quotes.length) {

        let rand_index = Math.floor(Math.random() * quotes.length);
        let temp;

        temp = quotes[pointer];
        quotes[pointer] = quotes[rand_index];
        quotes[rand_index] = temp;

        pointer++;
    }
    return quotes;
}
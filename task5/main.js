/// Ищем кнопку, по нажатии на которую будет запрос
const btn = document.querySelector('.submit');
// Ищем див для результата
const resultNode = document.querySelector('.result');

function displayResult(apiData) {

}


btn.addEventListener('click', () => {
    const value1 = Number(document.querySelector('#inp1').value);
    const value2 = Number(document.querySelector('#inp2').value);
    console.log(value1, value2);
    if (((value1 >= 1)&&(value1 <= 10))&&((value2 >= 1)&&(value2 <= 10))) { // проверка на попадание введённых чисел в заданный диапазон
        const url = `https://picsum.photos/v2/list?page=${value1}&limit=${value2}`;
        // Делаем запрос за данными
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                let cards = '';

                data.forEach(item => {
                    const cardBlock = `
                  <div class="card">
                    <img
                      src="${item.download_url}"
                      class="card-image"
                    />
                  </div>
                `;
                    cards = cards + cardBlock;
                });

                resultNode.innerHTML = cards;
            })

    } else if (!((value1 >= 1)&&(value1 <= 10))&&!((value2 >= 1)&&(value2 <= 10))){resultNode.textContent = "Номер страницы и лимит вне диапазона от 1 до 10";}
    else if (!((value2 >= 1)&&(value2 <= 10))){resultNode.textContent = "Лимит вне диапазона от 1 до 10";}
    else if(!((value1 >= 1)&&(value1 <= 10))) {
        resultNode.textContent = "Номер страницы вне диапазона от 1 до 10";
    }


});

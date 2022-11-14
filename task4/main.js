/// Ищем кнопку, по нажатии на которую будет запрос
const btn = document.querySelector('.submit');
// Ищем див для результата
const resultNode = document.querySelector('.result');

btn.addEventListener('click', () => {
    const value1 = Number(document.querySelector('#inp1').value);
    const value2 = Number(document.querySelector('#inp2').value);
    console.log(value1, value2);
    if (((value1 >= 100)&&(value1 <= 300))&&((value2 >= 100)&&(value2 <= 300))) { // проверка на попадание введённых чисел в заданный диапазон
        const url = `https://picsum.photos/${value1}/${value2}`;
        // Делаем запрос за данными
        fetch(url)
            .then(response => {
                const card = `
                  <div class="card">
                    <img
                      src= ${response.url}
                      class="card-image"
                    />
                  </div>
                `;
                resultNode.innerHTML = card;
            })

    } else {
        resultNode.textContent = "одно из чисел вне диапазона от 100 до 300";
    }


});

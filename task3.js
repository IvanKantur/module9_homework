// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.submit');
// Ищем див для результата
const resultNode = document.querySelector('.result');

function useRequest(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };

    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    xhr.send();
};

/**
 * Функция обработки полученного результата
 * apiData - объект с результатом запроса
 */
function displayResult(apiData) {
    let cards = '';

    apiData.forEach(item => {
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
}

// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener('click', () => {
    //Ищем результат ввода в инпут
    const value = Number(document.querySelector('input').value);
    // console.log(value);
        if ((value >= 1)&&(value <= 10)) { // проверка на попадание введённого числа в заданный диапазон
            useRequest(`https://picsum.photos/v2/list/?limit=${value}`, displayResult);
        } else {
            resultNode.textContent = "число вне диапазона от 1 до 10";
        }
})

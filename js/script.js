// Variables
// Full URL convention: https://api.giphy.com/v1/gifs/search?api_key=4BWZutNfTNwYrZtQgo7NooXkIwoBLlga&q=&limit=25&offset=0&rating=g&lang=en
const mainURL = 'https://api.giphy.com/v1/gifs/search?';
const APIKEY = '4BWZutNfTNwYrZtQgo7NooXkIwoBLlga';
const limit = 100;
const rating = 'g';


const $input = $('input[type="text"]');
const $form = $('form');
const $img = $('img[class="img1');
const $img2 = $('img[class="img2');

const randNum = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
};


$form.on('submit', getData)

function getData(event) {
  event.preventDefault();
  const query = $input.val();


  $.ajax(`${mainURL}api_key=${APIKEY}&q=${query}&limit=${limit}&rating=${rating}&lang=en`).then(function (data) {
      console.log(data)
      const randomData = randNum(0, data.data.length - 1)
      console.log(randomData)
      const gifData = data.data[randomData].images.fixed_height.url
      console.log(gifData)
      render(gifData)
      $input.val('')
    }),
    function (error) {
      console.log(error)
    }
}

function render(gifData) {
  $img.attr('src', gifData)
};

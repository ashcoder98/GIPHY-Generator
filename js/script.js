
const mainURL = 'https://api.giphy.com/v1/gifs/search?';
const APIKEY = '4BWZutNfTNwYrZtQgo7NooXkIwoBLlga';
const limit = 100;
const rating = 'g';
const $input = $('input[type="text"]');
const $form = $('form');
const $random = $('form[class="random"')
const $img = $('img[class="img1"]');
const $img2 = $('img[class="img2"]');
const randomGifs = [
  'cats', 'pizza', 'skateboard', 'surf', 'hungry', 'eat', 'mad', 'happy'
]
// Random Gif Function
const randNum = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
};
// On form submission
$form.on('submit', getData)


function getData(event) {
  event.preventDefault();
  const query = $input.val();


  $.ajax(`${mainURL}api_key=${APIKEY}&q=${query}&limit=${limit}&rating=${rating}&lang=en`).then(function (data) {
      const randomData = randNum(0, data.data.length - 1)
      const gifData = data.data[randomData].images.fixed_height.url
      render(gifData)
      $input.val('')
    }),
    function (error) {
      console.log(error)
    }
}
// Helper function
function render(gifData) {
  $img.attr('src', gifData)
};

/////////////////////////////
// Random button section
$random.on('submit', getRandomGif)

function getRandomGif(event) {
  event.preventDefault();
  const arraySelect = randNum(0, randomGifs.length)
  const randomGif = randomGifs[arraySelect]

  $.ajax(`${mainURL}api_key=${APIKEY}&q=${randomGif}&limit=${limit}&rating=${rating}&lang=en`).then(function (data) {
    const randomData = randNum(0, data.data.length - 1)
    const gifData = data.data[randomData].images.fixed_height.url
    render(gifData)
    $input.val('')
  }),
  function (error) {
    console.log(error)
  }
}
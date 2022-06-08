const mainURL = 'https://api.giphy.com/v1/gifs/search?';
const trendingURL = 'https://api.giphy.com/v1/gifs/trending?'
const APIKEY = '4BWZutNfTNwYrZtQgo7NooXkIwoBLlga';
const limit = 25;
const rating = 'pg';
const $input = $('input[type="text"]');
const $form = $('form');
const $random = $('form[class="random"]')
const $img = $('img[class="img1"]');
const $images = $('ul[class="images"]')
// Random Gif Function
const randNum = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
};
// On form submission
$form.on('submit', getData)


function getData(event) {
  event.preventDefault();
  const query = $input.val();
  if ($input.val() == ''){
    alert('Please type in a search query')
  }


  $.ajax(

    `${mainURL}api_key=${APIKEY}&q=${query}&limit=${limit}&rating=${rating}&lang=en`
  
   
    ).then(function (data) {
      // console.log(data)
      $.each(data.data, function (index, element) {
        console.log(element.url)
        $images.append(`<li><img src=${element.images.fixed_height.url}></li>`)
      })
      $input.val('')
}),
    function (error) {
      console.log(error)
    }
}

// Helper function
function render(gifData) {
  console.log(gifData)
  $img.attr('src', gifData)
};

/////////////////////////////
// Random button section
$random.on('submit', getTrendingGif)

function getTrendingGif(event) {
  event.preventDefault();

  $.ajax(`${trendingURL}api_key=${APIKEY}&limit=${limit}&rating=${rating}`).then(function (data) {
      console.log(data)
      $.each(data.data, function (index, element) {
        console.log(element.url)
        $images.append(`<li><img src=${element.images.fixed_height.url}></li>`)
      })
    }),
    function (error) {
      console.log(error)
    }
}
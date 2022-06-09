const mainURL = 'https://api.giphy.com/v1/gifs/search?';
const trendingURL = 'https://api.giphy.com/v1/gifs/trending?'
const APIKEY = '4BWZutNfTNwYrZtQgo7NooXkIwoBLlga';
const $limit = $('select[name="limit"]')
const rating = 'pg';
const $input = $('input[type="text"]');
const $search = $('button[class="submit"]')
const $form = $('form');
const $random = $('button[class="trending"]')
const $img = $('img[class="img1"]');
const $images = $('ul[class="images"]')

// Random Gif Function
const randNum = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
};
// On form submission
$search.on('click', getData)


function getData(event) {
  event.preventDefault();
  const query = $input.val();
  const limitnumber = $limit.val();
  if ($input.val() == ''){
    alert('Please type in a search query')
  }


  $.ajax(

    `${mainURL}api_key=${APIKEY}&q=${query}&limit=${limitnumber}&rating=${rating}&lang=en`
  
   
    ).then(function (data) {
      $.each(data.data, function (index, element) {
        console.log(element.url)
        $images.prepend(`<li><img src=${element.images.fixed_height.url}></li>`)
      })
      $input.val('')
}),
    function (error) {
      console.log(error)
    }
}
/////////////////////////////
// Random button section
$random.on('click', getTrendingGif)

function getTrendingGif(event) {
  event.preventDefault();
  const limitnumber = $limit.val();
  $.ajax(`${trendingURL}api_key=${APIKEY}&limit=${limitnumber}&rating=${rating}`).then(function (data) {
      console.log(data)
      $.each(data.data, function (index, element) {
        console.log(element.url)
        $images.prepend(`<li><img src=${element.images.fixed_height.url}></li>`)
      })
    }),
    function (error) {
      console.log(error)
    }
}
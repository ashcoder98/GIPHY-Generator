const mainURL = 'https://api.giphy.com/v1/gifs/search?';
const randURL = 'https://api.giphy.com/v1/gifs/random?'
const APIKEY = '4BWZutNfTNwYrZtQgo7NooXkIwoBLlga';
const limit = 25;
const rating = 'g';
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


  $.ajax(

    `${mainURL}api_key=${APIKEY}&q=${query}&limit=${limit}&rating=${rating}&lang=en`
  
   
    ).then(function (data) {
      console.log(data)
      $.each(data.data, function (index, element) {
        console.log(element.url)
        $images.append(`<li><img src=${element.images.fixed_height.url}></li>`)
      })
      // const randomData = randNum(0, data.data.length - 1)
      // const gifData = data.data[randomData].images.fixed_height.url
      // render(gifData)
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
$random.on('submit', getRandomGif)

function getRandomGif(event) {
  event.preventDefault();

  $.ajax(`${randURL}api_key=${APIKEY}&tag=&rating=g`).then(function (data) {
      console.log(data)
      const gifData = data.data.images.fixed_height.url
      render(gifData)
    }),
    function (error) {
      console.log(error)
    }
}
function showMeme(url, width, height, alt) {

  var jqxhr = $.getJSON(url, function () {
    console.log("success");
  })
    .done(function () {
      console.log("second success");
      console.log(jqxhr.responseJSON.url);

      var img = document.createElement("img");
      img.src = jqxhr.responseJSON.url;
      img.width = width;
      img.height = height;
      img.alt = alt;

      document.body.appendChild(img);
      var text = document.createElement("small");
      var t = document.createTextNode(`by u/${jqxhr.responseJSON.author} from r/${jqxhr.responseJSON.subreddit}`);
      text.appendChild(t);
      document.getElementById("myDIV").appendChild(text);
    })
    .fail(function () {
      console.log("error");
      alert("Oops no memes found :(");
    })
    .always(function () {
      console.log("complete 2");
    });
}

function showGif(url, width, height, alt) {
  fetch(url)
    .then(response =>
      response.json()
    )
    .then(content => {
      //  data, pagination, meta
      console.log(content)
      console.log("complete");
      console.log(url)

      var img = document.createElement("img");
      var len = content.data.length;
      var inst = getRandomInt(len)

      img.src = content.data[inst].images.downsized.url;
      img.alt = content.data[inst].title;
      img.width = width;
      img.height = height;

      document.body.appendChild(img);
    })
    .catch(err => {
      console.error(err);
      alert("Sorry, couldn't find a GIF :(");
    });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

document.addEventListener('DOMContentLoaded', function () {
  var url;
  var toggle = getRandomInt(2);

  switch (toggle) {
    case 0:
      url = `https://meme-api.herokuapp.com/gimme`;
      showMeme(url, 300, 250, 'Da Meme');
      break;

    case 1:
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var title = tabs[0].title;
        console.log(title);
        url = `https://api.giphy.com/v1/gifs/search?api_key=BDPG7aziSZkwiwysYjAdc1v6LutK2Y51&q=${title}&limit=25&offset=0&rating=g&lang=en`
        showGif(url, 300, 250, 'Da Gif')
      });
      break;
  }

}, false);


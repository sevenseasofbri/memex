function show_image(url, width, height, alt) {
    fetch(url)
    .then(response => 
      response.json()
    )
    .then(content => {
              //  data, pagination, meta
              console.log(content)
              console.log( "complete" );
              console.log(url)
              var img = document.createElement("img");
              var len= content.data.length;
              var inst= getRandomInt(len)
              
              img.src = content.data[inst].images.downsized.url;
              img.alt = content.data[inst].title;
              img.width = width;
              img.height = height;
              document.body.appendChild(img);             
            })
            .catch(err => {
              console.error(err);
            });
}
            
          
document.addEventListener('DOMContentLoaded', function() {
  var title;
  var url
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
     title = tabs[0].title;
     console.log(title);
     url=`https://api.giphy.com/v1/gifs/search?api_key=BDPG7aziSZkwiwysYjAdc1v6LutK2Y51&q=${title}&limit=25&offset=0&rating=g&lang=en`
     show_image(url,300,   250, 'Da Meme')
  });
}, false);


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// chrome.runtime.sendMessage({
//   message:"ready"              
// })


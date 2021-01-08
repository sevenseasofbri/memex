function show_image(memeQueryUrl, width, height, alt) {
    var jqxhr = $.getJSON( memeQueryUrl, function() {
        console.log( "success" );
      })
        .done(function() {
          console.log( "second success" );
          console.log(jqxhr.responseJSON.url);
          var img = document.createElement("img");
          img.src = jqxhr.responseJSON.url;
          img.width = width;
          img.height = height;
          img.alt = alt;
          
          document.body.appendChild(img);
          var text = document.createElement("small");                   
          var t = document.createTextNode(`by u/${jqxhr.responseJSON.author} from r/${jqxhr.responseJSON}`);      
          text.appendChild(t);                                          
          document.getElementById("myDIV").appendChild(text); 
        })
        .fail(function() {
          console.log( "error" );
          alert("Oops no memes found :(");
        })
        .always(function() {
            console.log( "complete 2" );
        });
}
//var checkPageButton = document.getElementById('clickIt');
document.addEventListener('DOMContentLoaded', function() {
    let memeQueryUrl = `https://meme-api.herokuapp.com/gimme`;
    show_image(memeQueryUrl, 300, 250, 'Da Meme');  
}, false);

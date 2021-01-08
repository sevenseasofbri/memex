function show_image(width, height, alt) {
    var jqxhr = $.getJSON( "https://meme-api.herokuapp.com/gimme", function() {
        console.log( "success" );
      })
        .done(function() {
          console.log( "second success" );
          console.log(jqxhr.responseJSON.url);
        })
        .fail(function() {
          console.log( "error" );
        })
        .always(function() {
            console.log( "complete" );
            var img = document.createElement("img");
            img.src = jqxhr.responseJSON.url;
            img.width = width;
            img.height = height;
            img.alt = alt;
            //This next line will just add it to the <body> tag
            document.body.appendChild(img);
        });
}
var checkPageButton = document.getElementById('clickIt');
checkPageButton.addEventListener('click', function() {
    show_image(300,   250, 'Da Meme')
}, false);

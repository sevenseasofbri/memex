function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}
var checkPageButton = document.getElementById('clickIt');
checkPageButton.addEventListener('click', function() {
    show_image('https://i.imgur.com/YmmSEz9.png',  300,   250, 'Big Red Kangaroo')
}, false);
document.getElementById("btn").addEventListener('click', show_image('https://i.imgur.com/YmmSEz9.png',  300,   250, 'Big Red Kangaroo')); 




// function show_image() {
//     var jqxhr = $.getJSON( "https://meme-api.herokuapp.com/gimme", function() {
//         console.log( "success" );
//       })
//         .done(function() {
//           console.log( "second success" );
//         })
//         .fail(function() {
//           console.log( "error" );
//         })
//         .always(function() {
//           console.log( "complete" );
//         });

//         var str = JSON.stringify(jqxhr);
//     // This next line will just add it to the <body> tag
//     // but you can adapt to make it append to the element you want.
//     document.body.appendChild(jqxhr.url);
// }

// document.addEventListener('DOMContentLoaded', function() {
    // var checkPageButton = document.getElementById('clickIt');
    // checkPageButton.addEventListener('click', function() {
  
    //   chrome.tabs.getSelected(null, function(tab) {
    //     alert("Hello..! It's my first chrome extension.");
    //   });
    // }, false);
//   }, false);
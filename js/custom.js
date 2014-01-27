$( document ).ready(function() {
  

  $.getJSON("https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=iamcorinaacosta&count=5", function( data ) {
  
  var items = [];

  console.log(data)
  
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "tweets",
    html: items.join( "" )
  }).appendTo( ".tweets-container" );

});


  
});

$(function() {
  var icons = {
    header: "iconClosed",    // custom icon class
    activeHeader: "iconOpen" // custom icon class
  };
  $( "#accordion" ).accordion({
    icons: icons,
    heightStyle: "content"
  });
} );

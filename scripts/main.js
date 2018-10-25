$(function() {
  var icons = {
    header: "iconClosed",    // custom icon class
    activeHeader: "iconOpen" // custom icon class
  };
  $( "#accordion" ).accordion({
    icons: icons,
    heightStyle: "fill"
  });
  $( "#accordion-resizer" ).resizable({
      minHeight: 140,
      minWidth: 176,
      resize: function() {
        $( "#accordion" ).accordion( "refresh" );
      }
  });
} );

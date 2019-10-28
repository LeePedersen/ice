$(document).ready(function(){

  var flavors = ['Rocky Road', 'Caramel', 'Vanilla', 'Chocolate']

  flavors.forEach(function(flavor) {
    var flavorIndex = flavors.indexOf(flavor);
    $('#' + flavorIndex).text(flavor);
  });
});

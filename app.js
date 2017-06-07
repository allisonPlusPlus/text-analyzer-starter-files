// your code here

function getText() {
  $(".js-text-form").submit(function(event) {
      event.preventDefault();
 var text = $(this).find('#user-text').val();
 console.log(text);

});

}



$(function() {
  getText();
});

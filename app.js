function getText() {
  $(".js-text-form").submit(function(event) {
      event.preventDefault();
 var text = $(this).find('#user-text').val();
handleText(text);

});

}
$(function() {
  getText();
});

function handleText(text) {
  console.log(text);
}

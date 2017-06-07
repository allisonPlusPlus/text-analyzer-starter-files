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
  var newText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").trim();
  console.log(newText);
}

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
  var newText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s+/g, " ").trim();
  wordCount(newText);
}

function wordCount(newText) {
var totalCount = newText.split(' ').length;
$(".js-text-report").removeClass("hidden").text(totalCount);

}

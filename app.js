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
    var newText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s+/g, " ").trim();
    wordCount(newText);
}

function wordCount(newText) {
    var totalCount = newText.split(' ').length;
    $(".js-text-report").removeClass("hidden");
    $(".js-word-count").append(" " + totalCount);
    uniqueWords(newText);
}

function uniqueWords(newText) {
    var array = newText.split(" ");
    var uniqueCounter = {};

    for (var i = 0; i < array.length; i++) {
        if (uniqueCounter[array[i]] === undefined) {
            uniqueCounter[array[i]] = 1;
        } else {
            uniqueCounter[array[i]] += 1;
        }
    }
    var uniqueWord = Object.values(uniqueCounter).length;
    $(".js-unique-word").append(" " + uniqueWord);
    averageWordLength(newText);
}

function averageWordLength(newText) {
    var array = newText.split(" ");
    var lengthArray = [];
    for (var i = 0; i < array.length; i++) {
        lengthArray.push(array[i].length);
    }
    var average = lengthArray.reduce(function(a, b) {
        return a + b / lengthArray.length;
    });
    $(".js-word-length").append(" " + average);
}

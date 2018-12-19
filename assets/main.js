$(document).ready(function () {
  $('.collapsible').collapsible();
  testDrive()
});

$(".portfolio-click").click(function () {
  $('.portfolio').show();
});


function testDrive() {
  createCard( {
    gif: "gifs/crystal-col2.gif",
    launch: "https://moralh2.github.io/unit-4-game/",
    code: "https://github.com/moralh2/unit-4-game",
    title: 'Crystal Collector (jQuery)',
    text: 'The objective was to create a game using jQuery. The game, called Crystal Collector, is based on click events on four buttons represented by images.',
  })
}

function createCard(data) {
  var targetDiv = $("#all-the-cards")

  var mainRow = $("<div>").addClass("row")
  var mainCol = $("<div>").addClass("col s12 m6 offset-m3")

  var mainCard = $("<div>").addClass("card")

  var cardImage = $("<div>").addClass("card-image")
  var displayImage = $("<img>").attr("src", data.gif);
  var leftBtn = $("<a>").addClass("btn-floating left halfway-fab waves-effect waves-light deep-purple accent-3").attr("href", data.launch)
  var leftIcon = $("<i>").addClass("material-icons").append('launch')
  leftBtn.append(leftIcon)
  var rightBtn = $("<a>").addClass("btn-floating halfway-fab waves-effect waves-light deep-purple accent-3").attr("href", data.code)
  var rightIcon = $("<i>").addClass("material-icons").append('code')
  rightBtn.append(rightIcon)
  cardImage.append(displayImage).append(leftBtn).append(rightBtn)

  var cardContent = $("<div>").addClass("card-content")
  var cardSpan = $("<span>").addClass("card-title center-align").text(data.title)
  var textP = $("<p>").text(data.text)
  cardContent.append(cardSpan).append(textP)

  mainCard.append(cardImage).append(cardContent)
  mainCol.append(mainCard)
  mainRow.append(mainCol)

  targetDiv.append(mainRow)
}
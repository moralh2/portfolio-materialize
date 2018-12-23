// to make sure items are only loaded once
var loaded

$(document).ready(function () {
  $('.collapsible').collapsible();
  loaded = false
});

$(".portfolio-click").click(function () {
  $('.portfolio').show();
  if (!loaded) {
    loaded = true
    loadItems()
  }
});

function loadItems() {
  $.each(items, function (index, value) {
    createCard(value)
  });
}

function createCard(data) {
  // get target div
  var targetDiv = $("#all-the-cards")
  // create outer row and column
  var mainRow = $("<div>").addClass("row")
  var mainCol = $("<div>").addClass("col s12 m6 offset-m3")
  // create main card div
  var mainCard = $("<div>").addClass("card")
  // create card image section
  var cardImage = $("<div>").addClass("card-image")
  var displayImage = $("<img>").attr("src", data.gif);
  // create card links
  var leftBtn = $("<a>").addClass("btn-floating left halfway-fab waves-effect waves-light deep-purple accent-3").attr("href", data.launch)
  var leftIcon = $("<i>").addClass("material-icons").append('launch')
  leftBtn.append(leftIcon)
  var rightBtn = $("<a>").addClass("btn-floating halfway-fab waves-effect waves-light deep-purple accent-3").attr("href", data.code)
  var rightIcon = $("<i>").addClass("material-icons").append('code')
  rightBtn.append(rightIcon)
  cardImage.append(displayImage)
  if (data.launch) { cardImage.append(leftBtn) }
  cardImage.append(rightBtn)
  // create card content section
  var cardContent = $("<div>").addClass("card-content")
  var cardSpan = $("<span>").addClass("card-title center-align").text(data.title)
  var textP = $("<p>").text(data.text)
  cardContent.append(cardSpan).append(textP)
  // append upwards
  mainCard.append(cardImage).append(cardContent)
  mainCol.append(mainCard)
  mainRow.append(mainCol)
  targetDiv.append(mainRow)
}

var items = [
  {
    gif: "gifs/crystal-col2.gif",
    launch: "https://moralh2.github.io/unit-4-game/",
    code: "https://github.com/moralh2/unit-4-game",
    title: 'Crystal Collector (jQuery)',
    text: 'The objective was to create a game using jQuery. The game, called Crystal Collector, is based on click events on four buttons represented by images.'
  },
  {
    gif: "gifs/word-guess-2.gif",
    launch: "https://moralh2.github.io/Word-Guess-Game/",
    code: "https://github.com/moralh2/Word-Guess-Game",
    title: 'Word-Guess-Game (JS)',
    text: "The Word-Guess-Game is based on a list of shows from Netflix that I've seen recently. As soon as the user types a letter after the screen loads, the game begins. Once a turn is over, the next word off the list is used, and a new turn begins."
  },
  {
    gif: "gifs/futurama2.gif",
    launch: "https://moralh2.github.io/TriviaGame/",
    code: "https://github.com/moralh2/TriviaGame",
    title: "Trivia Game (JS Time Events)",
    text: "This game was created to learn how to use JS Time Events -- specifically setInterval in this case. In the trivia game, the timer determines how long to await for the user to respond; or if the user clicks on an answer, an event stops the timer. The timer object was also used to display certain messages for a set number of seconds."
  },
  {
    gif: "gifs/gifs-2.gif",
    launch: "https://moralh2.github.io/GifTastic/",
    code: "https://github.com/moralh2/GifTastic",
    title: "GifTastic (AJAX)",
    text: "AJAX was used in this assignment to leverage the Giphy API. The theme chosen was 'emotions', since it yields a good mix of different GIFs. When the page first loads, buttons appear, each with an emotion; clicking one of these triggers an AJAX request for 10 GIFs for the associated word, which are then loaded on the page."
  },
  {
    gif: "gifs/trains-2.gif",
    launch: "https://moralh2.github.io/Train-Scheduler/",
    code: "https://github.com/moralh2/Train-Scheduler",
    title: "Train Scheduler (Moment.js, Firebase)",
    text: "The main focus area for this assigment was the use of Firebase in order to load content unto the page from a remote database. In addition, Moment.js was used to make time calculations."
  },
  {
    gif: "gifs/group-project-2.gif",
    launch: "https://moralh2.github.io/Projects-1/",
    code: "https://github.com/moralh2/Projects-1",
    title: "Cool Story Brew (Group Project)",
    text: "In this group project, we decided to pull data from a few APIs (Google Maps, Wikipedia) to create a brewery info and locator app."
  },
  {
    gif: "gifs/liri-2.gif",
    code: "https://github.com/moralh2/liri-node-app",
    title: "Liri (Node.js)",
    text: "This assignment used Node.js to run different packages to create a command-line interface (CLI) application, called LIRI. LIRI takes a command and input combination, and then, according to the command, it searches Spotify for a song, Bands in Town for concerts for a particular band or artist, and OMDB for a speicifc movie."
  },
  {
    gif: "gifs/word-guess-inquirer.gif",
    code: "https://github.com/moralh2/constructor-word-guess",
    title: "Word-Guess Game (JS Constructors)",
    text: "Node.js and JS Constructors were used to create a CLI version of the Word-Guess Game, where the user tries to guess the title of a series from Netflix. Using the `inquirer` Node.js package, input from the user is obtained from the command line; and using methods that belong to the `Word` and `Letter` Constructors, validating the user's guess was pretty straightforward."
  }
]
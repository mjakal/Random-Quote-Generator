// JSON object containing att the quotes
var quotes = [
  {
    image: "http://www.famousscientists.org/fs/wp-content/uploads/2014/07/100-georg-christoph-lichtenberg.jpg",
    quote: "It is strange that only extraordinary men make the discoveries, which later appear so easy and simple.",
    author: "Georg C. Lichtenberg"
  },
  {
    image: "http://www.famousscientists.org/fs/wp-content/uploads/2014/07/100-philolaus-1.png",
    quote: "Actually, everything that can be known has a Number, for it is impossible to grasp anything with the mind or to recognize it without this.",
    author: "Philolaus"
  },
  {
    image: "http://www.famousscientists.org/fs/wp-content/uploads/2014/07/100-paul-erdos.jpg",
    quote: "God created two acts of folly. First, He created the Universe in a Big Bang. Second, He was negligent enough to leave behind evidence for this act, in the form of microwave radiation.",
    author: "Paul Erdős"
  },
  {
    image: "http://www.famousscientists.org/fs/wp-content/uploads/2014/07/william-ramsay.jpg",
    quote: "Progress is made by trial and failure, the failures are generally a hundred times more numerous than the successes, yet, they are usually left unchronicled.",
    author: "William Ramsay"
  },
  {
    image: "http://www.famousscientists.org/fs/wp-content/uploads/2014/07/100-victor-scheffer.jpg",
    quote: "Although Nature needs thousands or millions of years to create a new species, man needs only a few dozen years to destroy one.",
    author: "Victor Scheffer"
  },
  {
    image: "http://www.famousscientists.org/fs/wp-content/uploads/2014/12/100-nic-copernicus.jpg",
    quote: "There may be babblers, wholly ignorant of mathematics, who dare to condemn my hypothesis, upon the authority of some part of the Bible twisted to suit their purpose. I value them not, and scorn their unfounded judgment.",
    author: "Nicolaus Copernicus"
  },
  {
    image: "http://www.famousscientists.org/fs/wp-content/uploads/2014/07/100-ernest-rutherford.jpg",
    quote: "If your experiment needs statistics, you ought to have done a better experiment.",
    author: "Ernest Rutherford"
  },
  {
    image: "http://www.famousscientists.org/fs/wp-content/uploads/2014/07/100-aristotle.jpg",
    quote: "By \"life\", we mean a thing that can nourish itself and grow and decay.",
    author: "Aristotle"
  },
  {
    image: "http://www.famousscientists.org/fs/wp-content/uploads/2014/07/100-george-wald.jpg",
    quote: "A physicist is an atom\'s way of knowing about atoms.",
    author: "George Wald"
  },
  {
    image: "http://www.famousscientists.org/fs/wp-content/uploads/2014/07/100-max-planck.jpg",
    quote: "An experiment is a question which science poses to Nature, and a measurement is the recording of Nature\'s answer.",
    author: "Max Planck"
  }
];

// Keeps track of the current quote index 
var currentQuoteIndex = 0;

// This function returns a random number between 0 and JSON object length
function getRandomInt(min, max) {
  var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  // Check if current quote index is equal to randomly generated number 
  // if so, recursively call the (getRandomInt) function until conditions are met
  if (currentQuoteIndex == randomNum) {
    getRandomInt(min, max);
  } 
  
  currentQuoteIndex = randomNum;
  return randomNum;
}

// This function creates all the html for the quote
function getRandomQuote() {
  var arr = quotes[getRandomInt(0, quotes.length-1)];
  var str = '<div class="row"><div class="col-md-3"><img src="' + arr.image + '" class="img-responsive animated fadeIn"/></div>' +
            '<div class="col-md-9">' + 
            '<p class="animated zoomin">' + arr.quote + '</p>' +
            '<p class="pull-right animated fadein">Author: ' + arr.author + '</p>' +
            '</div></div>';

  return str;
}

// Returns a url for sharing on twitter 
function shareOnTwitter() {
  var arr = quotes[currentQuoteIndex];
  // Prepare the url for twitter
  var url = 'https://twitter.com/intent/tweet?text=' +
            arr.quote + '\n\n' + 'Author: ' + arr.author;
  return encodeURI(url);
}

$(document).ready(function() {
  // Loads first random quote
  $( "#quote" ).html(getRandomQuote());

  // This is waiting for the click event (button "Generate Quote")
  $("#target1").click(function() {
    $("#quote").addClass("animated fadeout");
    $("#quote").html(getRandomQuote());
  });

  // This is waiting for the click event (button "Tweet")
  $("#target2").click(function() {
    $("#target2").attr('href', shareOnTwitter());
  });  
});
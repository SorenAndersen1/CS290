var searchbut = document.getElementById('navbar-search-button');
var twittotal = document.getElementsByClassName('twit');
var modalBackdrop = document.getElementById('modal-backdrop');
var createTwit = document.getElementById('create-twit-button');
var twittext = document.getElementById('twit-text-input');
var modal = document.getElementById('create-twit-modal');
var searchbox = document.getElementById('navbar-search-input');
var cancelModalbutt = document.getElementsByClassName('modal-cancel-button');
var acceptModal = document.getElementsByClassName('modal-accept-button');
var exitModalbutt = document.getElementsByClassName('modal-close-button');
var twitcontainer = document.getElementsByClassName('twit-container');
console.log("createTwit: ", exitModalbutt);



createTwit.addEventListener('click', function(event) {
    modal.style.display = "block";
    modalBackdrop.style.display = "block";
});

cancelModalbutt[0].addEventListener('click', cancelModal);

exitModalbutt[0].addEventListener('click', cancelModal);
// acceptModal[0].addEventListener('click', makeTweet);

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
      modalBackdrop.style.display = "none";
  }
} 

var twittextinput = document.getElementById('twit-text-input');
var twitattributioninput = document.getElementById('twit-attribution-input');


function makeTweet(){
	
	var tweeter = document.createElement('article');
	tweeter.classList.add('twit');
	
	var twiticon = document.createElement('div');
	twiticon.classList.add("twit-icon");
	tweeter.appendChild(twiticon);

	var twiticonpic = document.createElement('i');
	var temp = document.getElementsByClassName("fas fa-bullhorn");
	twiticonpic.classList.add("fas");
	twiticonpic.classList.add("fa-bullhorn");
	twiticon.appendChild(twiticonpic);


	var tweetercontent = document.createElement('div');
	//tweeter.setAttribute("twit-content", twitInput.value); //could be twit-text
	tweetercontent.classList.add("twit-content");
	tweeter.appendChild(tweetercontent);

	var tweetercontentwords = document.createElement("p");
	tweetercontentwords.classList.add("twit-text")
	tweetercontentwords.textContent = twittextinput.value;
	tweetercontent.appendChild(tweetercontentwords);

	var tweeterattribution = document.createElement("p");
	tweeterattribution.classList.add("twit-author")
	tweeterattribution.textContent = twitattributioninput.value;
	tweetercontent.appendChild(tweeterattribution);
	
	twitcontainer[0].appendChild(tweeter);
	// twitcontainer.appendchild(tweeter);

}



function cancelModal() {

    modal.style.display = "none";
    modalBackdrop.style.display = "none";
    document.getElementById('twit-text-input').value = "";
    document.getElementById('twit-attribution-input').value = "";
}


acceptModal[0].onclick = function(){
	if(checkEmptyModal()){
 	cancelModal();
}
	else{
	makeTweet();
	cancelModal();
}

}
searchbut.onclick = function(){
	
	searchTweet();
}
// searchbox.oninput = function(){
// 	searchTweet();
// }
function searchTweet() {
	var tweets = document.getElementsByClassName('twit');
	var input = document.getElementById('navbar-search-input').value;
	checkText(tweets, input);

}



function checkText(alltweets, input){
	var badtweets = alltweets;
	var amount_of_tweets = 0;
	 for(var i = 0; i < alltweets.length; i++) {
	 	
	 	var title = alltweets[i].getElementsByTagName("p")[0].innerText;
	 	var author = alltweets[i].getElementsByTagName("a")[0].innerText;
	 	// console.log("title: ", input);
  
       		
    
        var lowerCase = title.toLowerCase();
        var loweCase = author.toLowerCase();
           		// console.log("title: ", lowerCase);
		if(lowerCase.search(input) == -1 && loweCase.search(input) == -1){
			 badtweets[alltweets - i] = alltweets[i];
			 amount_of_tweets++;
			 alltweets[i].parentNode.removeChild(alltweets[i]);
           	
            // alltweets.removeChild(i);
				i--;
		}
}
}


	


function checkEmptyModal(){
	if(document.getElementById('twit-text-input').value === "" || document.getElementById('twit-attribution-input').value === ""){
		alert("Some sections are left empty, please add the correct data");
		return true;
	}
	else{
	return false;
}
}
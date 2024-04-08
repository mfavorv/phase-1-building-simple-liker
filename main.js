// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const elements = document.querySelectorAll(".like-glyph");
function likeCallback(e){
  const heart = e.target;
  if (heart.innerText === EMPTY_HEART){
   mimicServerCall("bogusUrl") 
   .then(function(){
    heart.innerText = FULL_HEART;
    heart.classList.add( "activated-heart")
   })
   .catch(function(error) {
    const modal = document.getElementById("modal");
    modal.classList.remove("hidden");
    modal.textContent = error;
    setTimeout(() =>  {
      modal.classList.add("hidden");
      modal.textContent = "";
    }, 3000);
  }); 
  }else{
    mimicServerCall("bogusUrl")
      .then(function(){
        heart.innerText = EMPTY_HEART;
        heart.classList.remove("activated-heart");
      })
      .catch(function(error) {
        const modal = document.getElementById("modal");
        modal.classList.remove("hidden");
        modal.textContent = error;
        setTimeout(() =>  {
          modal.classList.add("hidden");
          modal.textContent = "";
        }, 3000);
      });
  }
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let heart = document.querySelector(".like-glyph")
let errorModal = document.querySelector("#modal")
//Add "click" event listener to heart
heart.addEventListener("click", () => {
  //receiving promise from server
  let serverPromise = mimicServerCall()

  //Handling server promise success
  serverPromise.then((value) => {
    
    if(heart.textContent == FULL_HEART){
      heart.classList.remove("activated-heart")
      heart.textContent = EMPTY_HEART 
      console.log(value)
    } else {
      heart.textContent = FULL_HEART
      heart.classList.add("activated-heart")
    }
    
  //Handling server promise error
  }).catch( (error) => {
    // Show errorModal by removing "hidden" class
    errorModal.classList.remove("hidden")
   //Selecting error modal element
   let message = errorModal.querySelector("#modal-message")
   // Assign promise error message to error modal
   message.textContent = error
    console.log(error)

    //In 3 seconds, hiding error message by adding "hidden" class
    setTimeout(() => {
      errorModal.classList.add("hidden")
    }, 3000)
    
  })

})


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

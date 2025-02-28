let input = document.querySelector("input[type='text']")
let submit = document.querySelector("input[type='submit']")
let warningSpan = document.querySelector("input[type='text'] + span")
let re = /\w+@\w+\.\w+/g

// submit.onclick = function (event) {
//   if (re.test(input.value)) {
//     window.location.reload()
//   } else {
//     console.log("please check your email")
//   }
//   input.value = ""
//   event.preventDefault()
// }

warningSpan.style.display = "none"
submit.addEventListener("click", (e) => {validation(input, e)})
window.addEventListener("keypress", (e) => e.key === "Enter" ? validation(input, e) : "")

function validation(theInput, event) {
  if (re.test(theInput.value)) {
    window.location.reload()
  } else {
    warningSpan.style.display = "block"
    console.log("please check your email")
  }
  input.value = ""
  event.preventDefault()
}


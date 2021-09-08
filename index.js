// Main Sections
const homeMain = getEl('#cards')
const bookmarkMain = getEl('#bookmarks')
const createMain = getEl('#create')
const profileMain = getEl('#profile')

// Buttons
const homeButton = getEl('#cards_btn')
const bookmarkButton = getEl('#bookmarks_btn')
const createButton = getEl('#create_btn')
const profileButton = getEl('#profile_btn')

function getEl(selector) {
  const el = document.querySelector(selector)
  return el
}

function hideAll() {
  const mainElArray = document.querySelectorAll('main')
  mainElArray.forEach((mainEl, index) => {
    mainEl.classList.add('main__hidden')
  })
}

function addButtonEventListener(name) {
  getEl(`#${name}_btn`).addEventListener('click', () => {
    hideAll()
    getEl(`#${name}`).classList.remove('main__hidden')
  })
}

addButtonEventListener('cards')
addButtonEventListener('bookmarks')
addButtonEventListener('create')
addButtonEventListener('profile')

// -----------------------------------------------

function getElAll(selector) {
  const el = document.querySelectorAll(selector)
  return el
}

//Card Bookmarks
const bookmarks = getElAll('.card__bookmark')
//console.log(bookmarks)

//Answerbuttons
const answerButtons = getElAll('.card__button')

//Toogle Answer
for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener('click', () => {
    answerButtons[i].nextElementSibling.classList.toggle('card__answer--hidden')
    answerButtons[i].classList.toggle('hide__button')
    if (answerButtons[i].innerText === 'Show answer') {
      answerButtons[i].innerText = 'Hide answer'
    } else {
      answerButtons[i].innerText = 'Show answer'
    }
  })
}

const bookmarkButtonArray = document.querySelectorAll('.card__bookmark_unbook')

bookmarkButtonArray.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('card__bookmark_book')) {
      button.classList.remove('card__bookmark_book')
    } else {
      button.classList.add('card__bookmark_book')
    }
  })
})

const showAnswerArray = document.querySelectorAll('.card__answer--hidden')

showAnswerArray.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('card__answer--hidden')) {
      button.classList.remove('card__answer--hidden')
    } else {
      button.classList.add('card__answer__unhide')
    }
  })
}) 
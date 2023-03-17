let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')

const colorFunc = () => {
    alert("My Favorite Color is yellow")
}

const placeFunc = () => {
    alert('My favorite place is WhatABurger.')
}

const ritualFunc = () => {
    alert('My favorite ritual is having a shower beer.')
}


colorBtn.addEventListener("click", colorFunc)
placeBtn.addEventListener("click", placeFunc)
ritualBtn.addEventListener("click", ritualFunc)
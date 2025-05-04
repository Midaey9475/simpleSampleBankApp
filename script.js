// Account information container
const acctDetails = document.querySelector('.acctInfoDetails')
const acctInfo = document.querySelector('.acctInfo')
acctDetails.addEventListener('click' , ()=>{
    acctInfo.style.display = (acctInfo.style.display === 'grid')? 'none' : 'grid'
})
// Balance Container visibility
const removeBalanceDiv = document.getElementById('removeBal')
const addBalanceDiv = document.getElementById('addToBalance')
const sendMoneyTrigger = document.getElementById('sendMoneyTrigger')
const addMoneyTrigger = document.getElementById('addMoneyTrigger')
sendMoneyTrigger.addEventListener('click' , ()=>{
    removeBalanceDiv.style.display = (removeBalanceDiv.style.display === 'block') ? 'none' : 'block'
    acctInfo.style.display = 'none'
    hamburgerContent.style.display = 'none'
})
addMoneyTrigger.addEventListener('click' , ()=>{
    addBalanceDiv.style.display = (addBalanceDiv.style.display === 'block') ? 'none' : 'block'
    acctInfo.style.display = 'none'
    hamburgerContent.style.display = 'none'
})

// Validating Balance
const acctBalance = document.getElementById('mainBalance')
// Storing the input fields to validate balance
const removeBalanceInput = document.getElementById('removeBalanceInput')
const addBalanceInput = document.getElementById('addBalanceInput')
// the trigger Button to add and remove balance
const removeBalBtn = document.getElementById('removeBalBtn')
const addBalBtn = document.getElementById('addBalBtn')
removeBalBtn.addEventListener('click' , ()=>{
    if(Number(removeBalanceInput.value) > Number(acctBalance.innerHTML)){
        alert('Not Enough Balance to perform the operation')
        acctBalance.innerHTML = acctBalance.innerHTML
    }
    else{
    let a = eval(Number(acctBalance.innerHTML - removeBalanceInput.value))
    acctBalance.innerHTML = a.toFixed(2)
    removeBalanceDiv.style.display = 'none'
    removeBalanceInput.value = ''
    }
})
addBalBtn.addEventListener('click' , ()=>{
    let a = eval(Number(acctBalance.innerHTML) + Number(addBalanceInput.value))
    acctBalance.innerHTML = a.toFixed(2)
    addBalanceInput.value = ''
    addBalanceDiv.style.display = 'none'
})

// Hide and Unhide Balance
const bal = document.querySelector('.bal')
const hideBal = document.querySelector('.hideBal')
const hideEye = document.querySelector('.crossedEye')
 
hideEye.addEventListener('click', () => {
    const toHide = bal.style.display === 'none'
    if(toHide){
        bal.style.display = 'block'
        hideBal.style.display = 'none'
        hideEye.setAttribute('src' , 'crossed-eye.png')
    }
    else{
        bal.style.display = 'none'
        hideBal.style.display = 'block'
        hideEye.setAttribute ('src' , 'eye.png')
    }
});
// Hamburger Menu
const hamburger = document.querySelector('.hamburger')
const hamburgerContent = document.querySelector('.hamContent')
const acctInfo2 = document.querySelector('.acctInfoDetails2')
hamburger.addEventListener('click' , ()=>{
    hamburgerContent.style.display = (hamburgerContent.style.display == 'block') ? 'none' : 'block'
    acctInfo.style.display = 'none'

})
acctInfo2.addEventListener('click' , ()=>{
    acctInfo.style.display = (acctInfo.style.display === 'grid')? 'none' : 'grid'
    // hamburgerContent.style.display = 'none'
})



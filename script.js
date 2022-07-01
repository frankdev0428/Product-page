function preventDefault() {
    event.preventDefault();
}

function setActiveContent(el) {
    var contentBodies = document.getElementsByClassName('content-body');

    // remove .show-active from all elements
    for (var contentBody of contentBodies) {
        contentBody.classList.remove('show-active');
    }
    // add .show-active back to clicked element
    document.
        getElementById(el.textContent.trim())
        .classList.add('show-active');
}

function setActiveTab(el){
    var tabs = document.getElementsByClassName('tab');
    for (var tab of tabs) {
        tab.classList.remove('tab-active');
    }
    el.classList.add('tab-active');
}

// add click listener to each tab
var tabs = document.getElementsByClassName('tab');
for (var tab of tabs) {
    tab.addEventListener('click', function(e) {
        setActiveContent(e.currentTarget);
        setActiveTab(e.currentTarget);
    })
}



let quantityValue = parseInt(document.querySelector('.input-quantity').value) 

document.querySelector('.plus').addEventListener('click',()=>{
    quantityValue = quantityValue + 1
    document.querySelector('.input-quantity').value = `${quantityValue}`
})
document.querySelector('.minus').addEventListener('click',()=>{
    if(quantityValue>1){
        quantityValue = quantityValue - 1
    }
    document.querySelector('.input-quantity').value = `${quantityValue}`
})

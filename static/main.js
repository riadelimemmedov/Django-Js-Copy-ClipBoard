//!Js ile Copy
console.log('Hello World');

const copyBtns = [...document.getElementsByClassName('copy-btn')] 

let previous = null

copyBtns.forEach(function (item) {
    item.addEventListener('click', function () {

        const colorData = item.getAttribute('data-hex')
        navigator.clipboard.writeText(colorData)
        navigator.clipboard.readText().then(function(response){
            console.log(response)
            item.textContent = `Copied ${response}`
        })

        if (previous) {
            previous.textContent = 'Click'
        }

        previous = item
    })
    
})
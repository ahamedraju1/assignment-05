let buttons = document.querySelectorAll('.complete-btn');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        handleButtonClick(button.id); // Pass clicked button's ID
    });
});

function getRandomColor() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

const colorBtn = document.getElementById("colorBtn");
 if(colorBtn){
    colorBtn.addEventListener("click", function(){
        document.body.style.backgroundColor = getRandomColor();  // Change background color
    })
 }
   
document.addEventListener('click', function(){
    const clearHistory = document.getElementById('btnClearHistory');

    clearHistory.addEventListener('click',function(){
        document.getElementById("message").innerHTML = '';
    })
})


document.getElementById('discoverBox')
// .addEventListener('click', function(){

    const discoverBox = document.getElementById('discoverBox');
    if(discoverBox){
        discoverBox.addEventListener('click', function(){
            window.location.href = 'discover.html';
        })
    }
// })

 
const backToDesk = document.getElementById('btnBack');
if(backToDesk){
    backToDesk.addEventListener('click', function(){
        window.location.href ='/index.html';
    })
}

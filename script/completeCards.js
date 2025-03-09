let buttons = document.querySelectorAll('.complete-btn');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        handleButtonClick(button.id); // Pass clicked button's ID
    });
});

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

const colors= ["bg-orange-300",'bg-red-300'];

const colorIndex= 0;
const button = document.getElementById('colorBtn');

function changeBgColor(){
    colorIndex = (colorIndex + 1) % colors.length;
    button.classList.remove.apply(...colors);
    button.classList.add(colors[colorIndex]);

}
button.addEventListener('click', changeBgColor);






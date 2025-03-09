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

const backToDesk = document.getElementById('btnBack');
if(backToDesk){
    backToDesk.addEventListener('click', function(){
        window.location.href ='.index.html';
    })
}
document.getElementById('discoverBox')
.addEventListener('click', function(){

    const discoverBox = document.getElementById('discoverBox');
    if(discoverBox){
        discoverBox.addEventListener('click', function(){
            window.location.href = 'discover.html';
        })
    }
})









function getInnerTextByID(id) {
    let value = document.getElementById(id).innerText;
    return parseInt(value);

}


function handleButtonClick(buttonId){
    alert('Board update successfully');

    const button=document.getElementById(buttonId);
    let taskNumber = getInnerTextByID('number');
    console.log('Current Task Number:', taskNumber);

    let navNumber = getInnerTextByID('navNumber');
    console.log('Current Nav Number:', navNumber);

    let taskTitle = button.closest('.task-card').querySelector('h3').innerText;
    let currentTime = new Date().toLocaleTimeString();
    document.getElementById('message').innerHTML += `
      <div class='log-entry shadow-md rounded-lg'>
        You have completed the task ${taskTitle} mode at Time: ${currentTime};

      </div>  
    `

    if (taskNumber > 0) {
        taskNumber--;
        document.getElementById('number').innerText = taskNumber;
    }

    if (navNumber > 0) {
        navNumber++;
        document.getElementById('navNumber').innerText = navNumber;
    }

    // if (taskNumber === 0) {
        document.getElementById(buttonId).disabled = true;
    // }
    
    if(buttonId === 'btnComplete5'){
        alert('Congrats!! you have completed all the current Task');
    }
} 

const today = new Date();
const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
document.getElementById("currentDate").innerHTML = today.toLocaleDateString('en-US', options).replace(',', ',<br>');

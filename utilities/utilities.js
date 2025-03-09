function getInnerTextByID(id) {
    let value = document.getElementById(id).innerText;
    return parseInt(value);

}

function handleButtonClick(buttonId){
    alert('Board update successfully');

    let taskNumber = getInnerTextByID('number');
    console.log('Current Task Number:', taskNumber);

    let navNumber = getInnerTextByID('navNumber');
    console.log('Current Nav Number:', navNumber);

    let currentTime = new Date().toLocaleTimeString();
    document.getElementById('message').innerHTML += `
        You have completed the task Add dark mode at Time: ${currentTime};
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

} 

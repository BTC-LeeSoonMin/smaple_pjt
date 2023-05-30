let days = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT']

const getCurrentDateTime = () => {
    console.log('getCurrentDateTime() CALLED!!');

    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth() + 1; // 0: 1월
    let date = today.getDate();
    let day = today.getDay(); // 0: 일요일

    return `[${year}/${month}/${date}/${days[day]}] `;
}

const consoleFlag = true;
if(!consoleFlag) {
    console = {};
    console.log = function(){};
    console.warn = function(){};
    console.error = function(){};
}
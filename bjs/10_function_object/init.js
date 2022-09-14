
window.onload = function()
{
function resetToDefaults(){
    document.getElementById('genderOutput').innerText = 'Генерация пола';
    document.getElementById('birthYearOutput').innerText = 'Генерация года рождения';
    document.getElementById('firstNameOutput').innerText = 'Иван';
    document.getElementById('surnameOutput').innerText = 'Генерация фамилии';
    document.getElementById('secondName').innerText = 'Петрович';
    document.getElementById('jobName').innerText = 'кто таков';
    document.getElementById('birthDate').innerText = '01 января';
}
    const initPerson = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText = 'Пол: ' + initPerson.gender;
    document.getElementById('birthYearOutput').innerText = 'Год рождения: ' + initPerson.birthYear;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = 'Фамилия: ' + initPerson.lastName;
    document.getElementById('secondName').innerText = initPerson.secondName;
    document.getElementById('jobName').innerText = initPerson.jobName;
    document.getElementById('birthDate').innerText = initPerson.birthDate;

    document.querySelector('body > div.container > div > div > div > div:nth-child(3) > p > button:nth-child(2)').addEventListener('click', function (event) { 
window.location.reload();
    }, true)
    document.querySelector('body > div.container > div > div > div > div:nth-child(3) > p > button:nth-child(3)').addEventListener('click', function (event) { 
        printJS({ printable:'content',type: 'html', header:'Сгенерированные данные'});
    }, true)
    document.querySelector('body > div.container > div > div > div > div:nth-child(3) > p > button:nth-child(4)').addEventListener('click', function (event) { 
        resetToDefaults();
    }, true)
};


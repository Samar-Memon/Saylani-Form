const register = document.getElementById('reg');
const download = document.getElementById('down');
const results = document.getElementById('res');
const cityInput = document.getElementById('city');
const courseInput = document.getElementById('course');
const campusInput = document.getElementById('campus');
const classInput = document.getElementById('class');
const fullnameInput = document.getElementById('fullname');
const fathernameInput = document.getElementById('fathername');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const cnicInput = document.getElementById('cnic');
const fathercnicInput = document.getElementById('fathercnic');
const dobInput = document.getElementById('dob');
const genderInput = document.getElementById('gender');
const addressInput = document.getElementById('address');
const qualificationInput = document.getElementById('qualification');
const laptopInput = document.getElementById('laptop');
const userImg = document.getElementById('userImage');
const userImageDisplay = document.querySelector('.userImageDisplay');
const cnicSearch = document.getElementById('cnicSearch');
const search = document.querySelector('#search');
const table = document.querySelector('table');
const alertBtn = document.getElementById('alertBtn');

const imageChange = userImg.onchange = function(){
    userImageDisplay.src = URL.createObjectURL(userImg.files[0]);
}

let numbers = '0123456789'
let gen = '';
for(let i = 0; i <= 6; i++){
    gen += numbers.charAt(Math.floor(Math.random() * numbers.length))
}

function submit() {
    if(fullnameInput.value != '' && fathernameInput != '' && emailInput.value != '' && phoneInput.value != '' && cnicInput.value != '' && fathercnicInput.value != '' && dobInput.value != '' && addressInput.value != ''){
        localStorage.setItem('City', cityInput.value);
        localStorage.setItem('course', courseInput.value);
        localStorage.setItem('Campus', campusInput.value);
        localStorage.setItem('Class', classInput.value);
        localStorage.setItem('Full Name', fullnameInput.value);
        localStorage.setItem('Father Name', fathernameInput.value);
        localStorage.setItem('Roll No', gen);
        localStorage.setItem('Email', emailInput.value);
        localStorage.setItem('Phone', phoneInput.value);
        localStorage.setItem('CNIC', cnicInput.value);
        localStorage.setItem('Father CNIC', fathercnicInput.value);
        localStorage.setItem('Date of Birth', dobInput.value);
        localStorage.setItem('Gender', genderInput.value);
        localStorage.setItem('Address', addressInput.value);
        localStorage.setItem('Last Qualification', qualificationInput.value);
        localStorage.setItem('Laptop', laptopInput.value);
        localStorage.setItem('User Image', userImageDisplay.src);
        // Download Display
        document.querySelector('.user-details').style.display = 'none';
        document.querySelector('.id-card').style.display = 'flex';
        download.classList.add('active');
        register.classList.remove('active');
        results.classList.remove('active');
    }else{
        fullnameInput.style.borderColor = 'red';
        fathernameInput.style.borderColor = 'red';
        emailInput.style.borderColor = 'red';
        phoneInput.style.borderColor = 'red';
        cnicInput.style.borderColor = 'red';
        fathercnicInput.style.borderColor = 'red';
        dobInput.style.borderColor = 'red';
        addressInput.style.borderColor = 'red';
    }
}
search.addEventListener('click', () => {
        if(cnicSearch.value.length > 0 && cnicSearch.value.length < 14){
            if(cnicSearch.value === localStorage.getItem('CNIC')){
                trEle = document.createElement('tr');
                table.appendChild(trEle);
                trEle.innerHTML = `<td>${localStorage.getItem('course')}</td><td>${localStorage.getItem('Roll No')}</td><td><button id='downloadBtn'>Download</button></td>`
                }else{
                    document.querySelector('.alert').style.display = 'flex';
                    document.querySelector('.alert button').addEventListener('click', () => {
                    document.querySelector('.alert').style.display = 'none';
                    })
                }
        }
})


register.addEventListener('click', () => {
    document.querySelector('.user-details').style.display = 'flex';
    document.querySelector('.id-card').style.display = 'none';
    document.querySelector('.results').style.display = 'none';

    register.classList.add('active');
    download.classList.remove('active');
    results.classList.remove('active');
})
download.addEventListener('click', () => {
    document.querySelector('.user-details').style.display = 'none';
    document.querySelector('.id-card').style.display = 'flex';
    document.querySelector('.results').style.display = 'none';

    download.classList.add('active');
    register.classList.remove('active');
    results.classList.remove('active');
})
results.addEventListener('click', () => {
    document.querySelector('.user-details').style.display = 'none';
    document.querySelector('.id-card').style.display = 'none';
    document.querySelector('.results').style.display = 'flex';
    document.querySelector('.card').style.display = 'none';
    results.classList.add('active');
    register.classList.remove('active');
    download.classList.remove('active');
});

const resultsSearch = document.getElementById('resultsSearch');
const resultButton = document.getElementById('resultButton');

resultButton.addEventListener('click', () => {
    if(resultsSearch.value == localStorage.getItem('Roll No')){
        document.querySelector('.card').style.display = 'flex';
    }else if(resultsSearch.value!= localStorage.getItem('Roll No') && resultsSearch.value.length > 0){
        alert('User Not Found');
    }
})

const cardUserImg = document.querySelector('.cardUserImg');
const cardUserName = document.querySelector('.cardUserName');
const cardCourseName = document.querySelector('.cardCourseName');
const courseCode = document.querySelector('.course-code');
const cardRollNumber = document.querySelector('.card-roll-number');


cardUserImg.src = localStorage.getItem('User Image');
cardUserName.innerHTML = localStorage.getItem('Full Name');
cardCourseName.innerHTML = localStorage.getItem('course');
cardRollNumber.innerHTML = localStorage.getItem('Roll No')


const userNameBack = document.getElementById('userNameBack');
const fatherNameBack = document.getElementById('fatherNameBack');
const cnicBack = document.getElementById('cnicBack');
const courseBack = document.getElementById('courseBack');

userNameBack.innerHTML = localStorage.getItem('Full Name');
fatherNameBack.innerHTML = localStorage.getItem('Father Name');
cnicBack.innerHTML = localStorage.getItem('CNIC');
if(localStorage.getItem('course') === 'python'){
    courseCode.innerHTML = 'PY';
    courseBack.innerHTML = 'PY';
}else if(localStorage.getItem('course') === 'Graphic Designing'){
    courseCode.innerHTML = 'GD';
    courseBack.innerHTML = 'DG';
}else if(localStorage.getItem('course') === 'Web And App Development'){
    courseCode.innerHTML = 'WMA';
    courseBack.innerHTML = 'WMA';
}else if(localStorage.getItem('course') === 'AI Chatbot'){
    courseCode.innerHTML = 'AI';
    courseBack.innerHTML = 'AI';
}
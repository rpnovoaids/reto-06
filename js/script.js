window.onscroll = function () {
    myFunction()
};

// Get the header
const header = document.getElementById('header-nav');
const brand = document.getElementById('brand');

// Get the offset position of the navbar
const sticky = header.offsetTop;

// Pathname
const pathnameArray = window.location.pathname.split('/');

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add('header-nav__sticky');
        if (pathnameArray[pathnameArray.length - 1]) {
            brand.src = './img/brand/logo.svg';
        }
    } else {
        header.classList.remove('header-nav__sticky');
        if (pathnameArray[pathnameArray.length - 1]) {
            brand.src = './img/brand/logo_white.svg';
        }
    }
}

let users = [];
if (localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'))
} else {
    fetch('./../db/db.json')
        .then(response => {
            return response.json()
        })
        .then(function (data) {
            users = data
            localStorage.setItem('users', JSON.stringify(data))
        });
}

if (localStorage.getItem('user') && pathnameArray[pathnameArray.length - 1] !== 'home.html') {
    location.href = './home.html';
}

function singin(event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const user = users.find(element => (element.email === email && element.password === password))
    if (user) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: '¡Bienvenido ' + user.username + '!',
            showConfirmButton: false,
            timer: 2000
        })
        setTimeout(function(){
            localStorage.setItem('user', JSON.stringify(user))
            location.href = './home.html';
        }, 2000);
    } else {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: '¡Datos incorrectos...!',
            showConfirmButton: false,
            timer: 2000
        })
    }
    event.preventDefault();
}

function singup(event) {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const user = {
        username: username,
        email: email,
        password: password,
    };
    users.push(user)
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Bienvenido ' + user.username + '!',
        showConfirmButton: false,
        timer: 2000
    })
    setTimeout(function(){
        localStorage.clear();
        localStorage.setItem('users', JSON.stringify(users))
        localStorage.setItem('user', JSON.stringify(user))
        location.href = './home.html';
    }, 2000);
    event.preventDefault();
}

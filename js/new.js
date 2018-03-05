if(document.contains(document.getElementById('signUpForm'))) {
    var signUpForm = document.getElementById('signUpForm');
    var signUpCloseBtn = signUpForm.querySelector('.modal-content-close');

    function showSignUpForm() {
        signUpForm.style.display = 'block';
    }

    document.querySelector('.btn-reg').addEventListener('click', showSignUpForm);


    function validateTextFields() {
        var isValid = true;
        var signUpTextFields = signUpForm.querySelectorAll('input[type="text"]');
        for (var i = 0; i < signUpTextFields.length; i++) {

            if (!signUpTextFields[i].value) {
                signUpTextFields[i].classList.add('field-invalid');
                isValid = false;
            } else if (/^[0-9]+$/.test(signUpTextFields[i].value)) {
                signUpTextFields[i].classList.add('field-invalid');
            } else if (signUpTextFields[i].value.length <= 2) {
                signUpTextFields[i].classList.add('field-invalid');
                isValid = false;
            } else {
                signUpTextFields[i].classList.remove('field-invalid');
                signUpTextFields[i].classList.add('field-valid');
            }
        }
        return isValid;
    }

    function validateEmail() {
        var isValid = true;
        var fieldEmail = signUpForm.querySelector('input[type="email"]');
        if (fieldEmail.value == '') {
            fieldEmail.classList.add('field-invalid');
            isValid = false;
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fieldEmail.value)) {
            fieldEmail.classList.add('field-invalid');
            isValid = false;
        } else {
            fieldEmail.classList.remove('field-invalid');
            fieldEmail.classList.add('field-valid');
        }
        return isValid;
    }

    function validatePwd() {
        var isValid = true;
        var fieldsPwd = signUpForm.querySelectorAll('input[type="password"]');
        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;
        for (var i = 0; i < fieldsPwd.length; i++) {
            if (!fieldsPwd[i].value) {
                fieldsPwd[i].classList.add('field-invalid');
                isValid = false;
            } else if (!fieldsPwd[i].value.match(lowerCaseLetters)) {
                fieldsPwd[i].classList.add('field-invalid');
                isValid = false;
            } else if (!fieldsPwd[i].value.match(numbers)) {
                fieldsPwd[i].classList.add('field-invalid');
                isValid = false;
            } else if (!fieldsPwd[i].value.match(upperCaseLetters)) {
                fieldsPwd[i].classList.add('field-invalid');
                isValid = false;
            } else if (fieldsPwd[i].value.length >= 8) {
                fieldsPwd[i].classList.add('field-valid');

            } else if (fieldsPwd[i][0] === fieldsPwd[i][1]) {
                fieldsPwd[i].classList.add('field-valid');

            } else {
                fieldsPwd[i].classList.remove('field-invalid');
                fieldsPwd[i].classList.add('field-valid');
            }
        }
        return isValid;
    }

    function removeClass() {
        var signUpFormFields = signUpForm.querySelectorAll('input, textarea');
        for (var i = 0; i < signUpFormFields.length; i++) {
            if (signUpFormFields[i].classList.contains('field-invalid')) {
                signUpFormFields[i].classList.remove('field-invalid')
            } else if (signUpFormFields[i].classList.contains('field-valid')) {
                signUpFormFields[i].classList.remove('field-valid');
            }
        }
    }
    function hideSignUpForm() {
        signUpForm.reset();
        removeClass();
        signUpForm.style.display = 'none';
    }
    signUpForm.querySelector('.signUp-btn-cancel').addEventListener('click', hideSignUpForm);

    signUpCloseBtn.addEventListener('click', hideSignUpForm);


    /*var formData = new FormData();
    formData.append('firstname', 'Test');
    formData.append('lastname', 'sdfsdf');
    formData.append('password',  'dsfsdf');
    formData.append('email', 'test@test.com');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xhttp.open('POST', 'http://miffka1986.000webhostapp.com/register.php', true);
    xhttp.send();*/

    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var isValidText = validateTextFields();
        var isValidEmail = validateEmail();
        var isValidPwd = validatePwd();
        if (isValidText == true && isValidEmail == true && isValidPwd == true) {
            //signUpForm.submit();
            var formData = new FormData(document.getElementById('signUpForm'));

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var response = this.responseText;
                    console.log(response);
                }
            };
            xhttp.open('POST', 'https://miffka1986.000webhostapp.com/register.php', true);
            xhttp.send(formData);
        }
    });
}
if (document.contains(document.getElementById('write-us-modal'))) {
    var writeUsModal = document.getElementById('write-us-modal');
    var writeUsCancelBtn = writeUsModal.querySelector('.cancel');

    function showWriteUsPopUp() {
        writeUsModal.style.display = 'block';
    }

    function hideWriteUsPopup() {
        writeUsModal.style.display = 'none';
    }

    document.getElementById('write-us-btn').addEventListener('click', showWriteUsPopUp);

    writeUsModal.querySelector('#write-us-close').addEventListener('click', hideWriteUsPopup);

    writeUsCancelBtn.addEventListener('click', hideWriteUsPopup);

}
if (document.contains(document.querySelector('.service-tabs'))) {
    function openServiceFeatures(evt, serviceFeature) {
        var i, serviceTabs, serviceFeatures;
        serviceTabs = document.querySelectorAll('.service-tab');
        for (i = 0; i < serviceTabs.length; i++) {
            serviceTabs[i].className = serviceTabs[i].className.replace(' active', '');

        }
        serviceFeatures = document.querySelectorAll('.services-feature');
        for (i = 0; i < serviceFeatures.length; i++) {
            serviceFeatures[i].className = serviceFeatures[i].className.replace(' active', '');
            serviceFeatures[i].style.display = 'none';
        }
        document.getElementById(serviceFeature).style.display = 'block';
        evt.currentTarget.className += ' active';
    }

    document.getElementById('defaultOpen').click();
}

var addedToCartInfo = document.querySelector('.modal-content-info');
var infoModalCloseBtn = addedToCartInfo.querySelector('.modal-content-close');
var continueBuyingBtn = addedToCartInfo.querySelector('.cancel');

function hideAddedToCartPopUp() {
    addedToCartInfo.style.display = 'none';
}
infoModalCloseBtn.addEventListener('click', hideAddedToCartPopUp);

continueBuyingBtn.addEventListener('click', hideAddedToCartPopUp);



//signUpForm.addEventListener('blur', hideSignUpForm);

function addToCart() {
    var buyGood = document.querySelectorAll('.buy');
    var cartProdNumber = document.querySelector('.cart-prod-number');
    var cartProdCount = parseInt(cartProdNumber.textContent);
    for (var i = 0; i < buyGood.length; i++) {
        buyGood[i].addEventListener('click', function () {
            document.getElementById('info-modal').style.display = 'block';
            cartProdNumber.innerHTML = ++cartProdCount;
            var styleElem = document.head.appendChild(document.createElement("style"));
            styleElem.innerHTML = ".icon-basket:before {color: #ffd180}";
        });
    }
}
addToCart();

function addToBookmarks() {
    var bookmark = document.querySelectorAll('.bookmark');
    var bookmarkNumber = document.querySelector('.bookmark-number');
    var bookmarkCounter = parseInt(bookmarkNumber.textContent);
    for (var i = 0; i < bookmark.length; i++) {
        bookmark[i].addEventListener('click', function() {
            bookmarkNumber.innerHTML = ++bookmarkCounter;
            var styleElem = document.head.appendChild(document.createElement("style"));
            styleElem.innerHTML = ".icon-bookmark:before {color: #ffd180}";
        });
    }
}

addToBookmarks();











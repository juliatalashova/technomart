// window.onload = function() {
//   var writeUsBtn = document.getElementById('write-us-btn');
//   if (typeof(writeUsBtn) != 'undefined' && writeUsBtn != null) {
//     var writeUsModal = document.getElementById('write-us-modal');
//     writeUsBtn.onclick = function() {
//       writeUsModal.classList.remove('error');
//       writeUsModal.classList.add('active');
//     };
//     document.getElementById('write-us-close').onclick = function() {
//       writeUsModal.classList.remove('active');
//     };
//     writeUsModal.querySelector('.cancel').onclick = function () {
//       writeUsModal.classList.remove('active');
//     };
//
//     var form = writeUsModal.querySelector('form');
//     var userName = writeUsModal.querySelector('[name=user-name]');
//     var userEmail = writeUsModal.querySelector('[name=email]');
//     form.addEventListener('submit', function(event) {
//       if (!(userName.value) || !(userEmail.value)) {
//         event.preventDefault();
//         writeUsModal.classList.remove("error");
//         writeUsModal.classList.add("error");
//       }
//     });
//   }
//
//   var mapImg = document.getElementById('map-img');
//   if (typeof(mapImg) != 'undefined' && mapImg != null) {
//     var mapModal = document.getElementById('map-modal');
//     mapImg.onclick = function() {
//       mapModal.style.display = 'block';
//     };
//     document.getElementById('map-close').onclick = function() {
//       mapModal.style.display = 'none';
//     }
//   }
//
//   var infoClose = document.getElementById('info-close');
//   if (typeof(infoClose) != 'undefined' && infoClose != null) {
//     infoClose.addEventListener('click', function(event) {
//       event.preventDefault();
//       closeInfoModal();
//     });
//     document.querySelector('#info-modal .cancel').addEventListener('click', function(event) {
//       event.preventDefault();
//       closeInfoModal();
//     });
//   }
//
//   var serviceTabs = document.querySelectorAll('.service-tabs li');
//   if (typeof(serviceTabs) != 'undefined' && serviceTabs != null) {
//     var serviceFeatureClasses = [
//       '.services-features-delivery',
//       '.services-features-guarantee',
//       '.services-features-credit'
//     ];
//     var serviceFeatures = document.querySelectorAll('.services-features div');
//     for (var i = 0; i < serviceTabs.length; i++) {
//       (function(i) {
//         serviceTabs[i].onclick = function() {
//           removeClass(serviceTabs, 'active');
//           this.classList.add('active');
//
//           removeClass(serviceFeatures, 'active');
//           serviceFeatures[i].classList.add('active');
//         };
//       })(i);
//     }
//   }
// };
//
// function closeInfoModal() {
//   document.getElementById('info-modal').style.display = 'none';
// }
//
// function removeClass(array, className) {
//   var i = 0,
//     len = array.length;
//   for (; i < len; i++) {
//
//     if (array[i].classList) {
//       array[i].classList.remove(className);
//     } else {
//       var names = array[i].className.split(' '),
//         j = 0,
//         sublen = names.length;
//
//       for (; j < sublen; j++) {
//         if (names[j] === className) {
//           names[j] = "";
//         }
//       }
//       array[i].className = names.join('');
//     }
//   }
//}

function addToBookmarks() {
    var bookmark = document.querySelectorAll('.bookmark');
    console.log(bookmark);
    var bookmarkNumber = document.querySelector('.bookmark-number');
    var bookmarkCounter = parseInt(bookmarkNumber.textContent);
    for (var i = 0; i < bookmark.length; i++) {
        bookmark[i].addEventListener('click', function() {
            console.log('clicked');
            bookmarkNumber.innerHTML = ++bookmarkCounter;
            var styleElem = document.head.appendChild(document.createElement("style"));
            styleElem.innerHTML = ".icon-bookmark:before {color: #ffd180}";
        });
    }
}

addToBookmarks();

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



var writeUsModal = document.getElementById('write-us-modal');


function showWriteUsPopUp(){
    var writeUsBtn = document.getElementById('write-us-btn');
    writeUsBtn.addEventListener('click', function () {
        event.preventDefault();
        writeUsModal.style.display = 'block';
    })
}

showWriteUsPopUp();
function hideWriteUsPopup() {
    var btnClose = document.getElementById('write-us-close');
    btnClose.addEventListener('click', function () {
        event.preventDefault();
        writeUsModal.style.display = 'none';
    })
}
hideWriteUsPopup();

function hideWriteUsPopUpCancelBtn() {
    var cancelBtn = document.querySelector('.cancel');
    cancelBtn.addEventListener('click', function () {
        event.preventDefault();
        writeUsModal.style.display = 'none';
    })
}
hideWriteUsPopUpCancelBtn();


function openServiceFeatures(evt, serviceFeature) {
    var i, serviceTabs, serviceFeatures;
    serviceTabs = document.querySelectorAll('.service-tab');
    for(i = 0; i < serviceTabs.length; i++) {
        serviceTabs[i].className = serviceTabs[i].className.replace(' active', '');

    }
    serviceFeatures = document.querySelectorAll('.services-feature');
    for(i = 0; i < serviceFeatures.length; i++) {
        serviceFeatures[i].className = serviceFeatures[i].className.replace(' active', '');
        serviceFeatures[i].style.display = 'none';
    }
    document.getElementById(serviceFeature).style.display = 'block';
    evt.currentTarget.className += ' active';
}
document.getElementById('defaultOpen').click();


function validateUserName() {
    var username = document.forms['write-us-form']['user-name'];
    var letters = /^[A-Za-z]+$/;
    if(username.value.match(letters)) {
        return true;
    } else {
        username.focus();
        return false;
    }
}
validateUserName();
var email = document.forms['write-us-form']['email'];
var comment = document.forms['write-us-form']['comments'];
function showSignUpForm() {
    var signUpBtn = document.querySelector('.btn-reg');
    console.log(signUpBtn);
    signUpBtn.addEventListener('click', function () {
        signUpForm.style.display = 'block';
    })
}
showSignUpForm();
function hideSignUpForm() {
    var btnCancel = signUpForm.querySelector('.signUp-btn-cancel');
    console.log(btnCancel);
}
hideSignUpForm();
//var signUpForm = document.querySelector('.signUp-form');
function showSignUpPopUp() {
    var signUpBtn = document.querySelector('.btn-reg');

    signUpBtn.addEventListener('click', function () {
        event.preventDefault();
        signUpForm.style.display = 'block';
    })
}
showSignUpPopUp();
function hideSignUpPopUp() {
    var btnCancel = document.querySelector('.signUp-btn-cancel');
    console.log(btnCancel);
    btnCancel.addEventListener('click', function () {
        event.preventDefault();
        signUpForm.style.display = 'none';
    })
}
hideSignUpPopUp();
function hideSignUpFormWithCloseBtn() {
    var btnClose = signUpForm.querySelector('.modal-content-close');
    btnClose.addEventListener('click', function () {
        event.preventDefault();
        signUpForm.style.display = 'none';
    })
}
hideSignUpFormWithCloseBtn();


var signUpForm = document.querySelector('.signUp-form');
var signUpFormFields = signUpForm.querySelectorAll('input');
var pwdField = signUpForm.querySelector('#password').value;
var confirmPwdField = signUpForm.querySelector('#confirm-password').value;
var lowerCaseLetters = /[a-z]/g;
var numbers = /[0-9]/g;

for(var i = 0; i < signUpFormFields.length; i++) {
    (function(i) {
        signUpFormFields[i].onblur = function () {
            /*var password = if (passwrod) sdfsds : false;
            if (repassword && password == repassword) {
                safasds
            }*/
            var pwd = function() {
                if(pwdField === confirmPwdField && confirmPwdField === pwdField){
                    return true;
                } else {
                    return false;
                }
            };
            var isValidField = isValidForm(signUpFormFields[i].name, signUpFormFields[i].value);
            if (isValidField || pwd) {
                signUpFormFields[i].style.borderColor = 'green';
            } else {
                signUpFormFields[i].style.borderColor = 'red';
            }
        };
    })(i)
}
/*var isValidPwd = function () {
    console.log(pwdField.match(lowerCaseLetters));
    if(pwdField !== confirmPwdField) {
        return false;
    } else if (pwdField == null && confirmPwdField == null) {
        return false;
    } else if (!pwdField.match(lowerCaseLetters) && !confirmPwdField.match(lowerCaseLetters)) {
        return true;
    } else if (!pwdField.match(numbers) && !confirmPwdField.match(numbers)) {
        return true;
    } else if (pwdField.length > 6 && confirmPwdField.length > 6) {
        return false;
    } else {
        return true;
    }

};*/




function removeError() {
    var errors = signUpForm.querySelectorAll('.error');

    for (var j = 0; j < errors.length; j++) {
        errors[j].remove();
    }
}
signUpForm.addEventListener('submit', function (event) {
    event.preventDefault();


    for(var i = 0; i < signUpFormFields.length; i++) {

        if (!signUpFormFields[i].value) {
            console.log(signUpFormFields[i], 'field is blank');
            var error = document.createElement('div');
            error.className = 'error';
            error.style.color = 'red';
            error.innerHTML = 'Cannot be empty';
            signUpForm[i].parentElement.insertBefore(error, signUpFormFields[i]);
            signUpFormFields[i].style.borderColor = 'red';
        } else {
            signUpFormFields[i].style.borderColor = 'green';
        }
    }

});

function isValidForm(name, value) {
    if (name === "email") {
        if(value === " ") {
            return false;
        } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
            return true;
        } else {
            return false;
        }
    }
    if(name === "user-name" || name == "last-name" || name == "middle-name") {
        if(value == " ") {
            return false;
        } else if(value <= 2 ){
            return false;
        } else if(/^[0-9]+$/.test(value)) {
            return false;
        } else {
            return true;
        }
    }
    if (name == "pwd" || name == "confirm-pwd") {
        if(value == " ") {
            return false;
        } else if(!value.match(lowerCaseLetters)) {
            return false;
        } else if (!value.match(numbers)) {
            return false;
        } else if(value.length > 8) {
            return false;
        } else {
            return true;
        }
    }
}

function signUpFormValidate(event) {
    event.preventDefault(); // event обьекта нет, это хорошо, но тебе нужно написать подписку на событие без onsubmit
    console.log('empty');
    /*console.log('clicked on validate');
    var errors = signUpForm.querySelectorAll('.error');

    for (var j = 0; j < errors.length; j++) {
        errors[j].remove();
    }

    for(var i = 0; i <= signUpFormFields.length; i++) {
        if(!signUpFormFields[i].value) {
            console.log(signUpFormFields[i], 'field is blank');
            var error = document.createElement('div');
            error.className='error';
            error.style.color = 'red';
            error.innerHTML = 'Cannot be empty';
            signUpForm[i].parentElement.insertBefore(error, signUpFormFields[i]);
            signUpFormFields[i].style.borderColor = 'red';
        }
    }*/

}

/*
//function validateSignUpForm() {
    var inputs = document.querySelectorAll('#signUpForm input[type=text]');
    var pwdInputs = document.querySelectorAll('#signUpForm input[type=password]');
    var signUpEmail = document.querySelector('#signUpForm input[type=email');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var isValid = true;
    console.log(signUpEmail, inputs);
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value == null || inputs[i].value == " ") {
                inputs[i].style.borderColor = 'red';
                isValid = false;
            } else if (inputs[i].value <= 2) {
                inputs[i].style.borderColor = 'red';
                isValid = false;
            } else if (/^[0-9]+$/.test(inputs[i].value)) {
                inputs[i].style.borderColor = 'red';
                isValid = false;
            } else {
                inputs[i].style.borderColor = 'green';
                isValid = true;
            }
            inputs[i].onblur = function() {
                if (isValid = false) {
                    inputs[i].style.borderColor = 'red';
                } else {
                    inputs[i].style.borderColor = 'green';
                }
            }
            console.log(inputs[i]);
        }
    signUpEmail.onblur = function () {
        if(signUpEmail.value === " ") {
            signUpEmail.style.borderColor = 'red';
        } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signUpEmail.value)) {
            signUpEmail.style.borderColor = 'green';
        } else {
            signUpEmail.style.borderColor = 'red';
        }
    };
    for(var j = 0; j < pwdInputs.length; j++) {
        if (pwdInputs[j].value == null || pwdInputs[j].value == " ") {
            pwdInputs[j].style.borderColor = 'red';
    } else if(pwdInputs[0] !== pwdInputs[1]){
            pwdInputs[j].style.borderColor = 'red';
        } else if(!pwdInputs[j].value.match(lowerCaseLetters)){
            pwdInputs[j].style.borderColor = 'red';
        } else if(!pwdInputs[j].value.match(upperCaseLetters)) {
            pwdInputs[j].style.borderColor = 'red';
        } else if(!pwdInputs[j].value.match(numbers)) {
            pwdInputs[j].style.borderColor = 'red';
        } else if(!pwdInputs[j].value.length >= 8) {
            pwdInputs[j].style.borderColor = 'red';
        } else {
            pwdInputs[j].style.borderColor = 'green';
        }
    }
//}
//validateSignUpForm();*/

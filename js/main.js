window.onload = function() {
  var writeUsBtn = document.getElementById('write-us-btn');
  if (typeof(writeUsBtn) != 'undefined' && writeUsBtn != null) {
    var writeUsModal = document.getElementById('write-us-modal');
    writeUsBtn.onclick = function() {
      writeUsModal.classList.remove('error');
      writeUsModal.classList.add('active');
    };
    document.getElementById('write-us-close').onclick = function() {
      writeUsModal.classList.remove('active');
    };
    writeUsModal.querySelector('.cancel').onclick = function () {
      writeUsModal.classList.remove('active');
    };

    var form = writeUsModal.querySelector('form');
    var userName = writeUsModal.querySelector('[name=user-name]');
    var userEmail = writeUsModal.querySelector('[name=email]');
    form.addEventListener('submit', function(event) {
      if (!(userName.value) || !(userEmail.value)) {
        event.preventDefault();
        writeUsModal.classList.remove("error");
        writeUsModal.classList.add("error");
      }
    });
  }

  var mapImg = document.getElementById('map-img');
  if (typeof(mapImg) != 'undefined' && mapImg != null) {
    var mapModal = document.getElementById('map-modal');
    mapImg.onclick = function() {
      mapModal.style.display = 'block';
    };
    document.getElementById('map-close').onclick = function() {
      mapModal.style.display = 'none';
    }
  }

  var infoClose = document.getElementById('info-close');
  if (typeof(infoClose) != 'undefined' && infoClose != null) {
    infoClose.addEventListener('click', function(event) {
      event.preventDefault();
      closeInfoModal();
    });
    document.querySelector('#info-modal .cancel').addEventListener('click', function(event) {
      event.preventDefault();
      closeInfoModal();
    });
  }

  var serviceTabs = document.querySelectorAll('.service-tabs li');
  if (typeof(serviceTabs) != 'undefined' && serviceTabs != null) {
    var serviceFeatureClasses = [
      '.services-features-delivery',
      '.services-features-guarantee',
      '.services-features-credit'
    ];
    var serviceFeatures = document.querySelectorAll('.services-features div');
    for (var i = 0; i < serviceTabs.length; i++) {
      (function(i) {
        serviceTabs[i].onclick = function() {
          removeClass(serviceTabs, 'active');
          this.classList.add('active');

          removeClass(serviceFeatures, 'active');
          serviceFeatures[i].classList.add('active');
        };
      })(i);
    }
  }
};

function showInfoModal() {
  document.getElementById('info-modal').style.display = 'block';
}

function closeInfoModal() {
  document.getElementById('info-modal').style.display = 'none';
}

function removeClass(array, className) {
  var i = 0,
    len = array.length;
  for (; i < len; i++) {

    if (array[i].classList) {
      array[i].classList.remove(className);
    } else {
      var names = array[i].className.split(' '),
        j = 0,
        sublen = names.length;

      for (; j < sublen; j++) {
        if (names[j] === className) {
          names[j] = "";
        }
      }
      array[i].className = names.join('');
    }
  }
}
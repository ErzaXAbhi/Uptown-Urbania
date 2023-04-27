
// sticky phone icon js code
document.querySelector('.phone-icon').addEventListener('click', function() {
    window.location.href = 'tel:+919004550102';
  });

  // sticky message icon js code
  document.querySelector('.message-icon').addEventListener('click', function() {
    window.open('https://api.whatsapp.com/send?phone=919004550102&text=Hi!%20I%20am%20interested%20to%20know%20more%20about%20Uptown%20Urbania,%20Thane.%20Please%20share%20details.', 'Chat Window', 'width=400,height=600');
  });
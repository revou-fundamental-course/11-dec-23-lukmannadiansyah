document.getElementById('your-name').innerHTML = 'LUKMAN';

let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');
const totalImages = images.length;

function changeImage() {
  images[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % totalImages;
  images[currentIndex].style.display = 'block';
}

setInterval(changeImage, 2000);

function validateForm() {
  let name = document.forms['my-form']['fname'].value;
  let birthDate = document.forms['my-form']['fbirthDate'].value;
  let gender = document.forms['my-form']['fgender'].value;
  let message = document.forms['my-form']['fmessage'].value;

  if (name === '' || birthDate === '' || gender === '' || message === '') {
    alert('can not be empty!');
    return false;
  }

  const displayValuesElement = document.getElementById('displayValues');
  displayValuesElement.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Birth Date:</strong> ${birthDate}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;
  return false;
}

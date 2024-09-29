const passwordBox = document.getElementById('password-input');
const length = 12;
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numbersChars = '0123456789';
const symbolsChars = '-=+/!@#$%^&*';
const allChars = uppercaseChars + lowercaseChars + numbersChars + symbolsChars;

function createPassword() {
  let password = '';
  password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
  password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
  password += numbersChars[Math.floor(Math.random() * numbersChars.length)];
  password += symbolsChars[Math.floor(Math.random() * symbolsChars.length)];
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand('copy');
}

const generateBtn = document.querySelector('#generate');
const passwordDiv = document.querySelector('#password');

function generatePassword(length) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
}

generateBtn.addEventListener('click', () => {
  const passwordLength = document.querySelector('#length').value;
  const password = generatePassword(passwordLength);
  passwordDiv.innerText = password;
});

function copyPassword(){
  navigator.clipboard.writeText(passwordDiv.innerText);
}
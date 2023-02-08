const btn_s = document.querySelector('#btn_s');
const head3 = document.querySelector('#head3');

buttonA.onclick = () => {
  const name = prompt('What is your name?');
  alert(`Hello ${name}, nice to see you!`);
  head3.textContent = `Welcome ${name}`;
}

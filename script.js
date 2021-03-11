const Open = document.querySelector('#open');
//open -> 예약어 -> Open
const Close = document.querySelector('#close');
//close -> 예약어 -> close
const container = document.querySelector('.container');

Open.addEventListener('click', () => container.classList.add('show-nav'));
Close.addEventListener('click', () => container.classList.remove('show-nav'));

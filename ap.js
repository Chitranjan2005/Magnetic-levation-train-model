document.getElementById('start').addEventListener('click', function () {
  const train = document.getElementById('train');

  const val1 = parseInt(document.getElementById('input1').value);
  const val2 = parseInt(document.getElementById('input2').value);
  const val3 = parseInt(document.getElementById('input3').value);

  const distance = val1 * val2 * (val3 / 10);
  const duration = 3000;

  train.style.transition = `left ${duration}ms linear`;
  train.style.left = `${distance}px`;

  setTimeout(() => {
    train.style.transition = 'left 1s';
    train.style.left = '0px';
  }, duration + 1000);
});
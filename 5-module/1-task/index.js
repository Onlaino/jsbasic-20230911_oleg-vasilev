const hideSelf = () => {
  let btn = document.querySelector('.hide-self-button');
  btn.addEventListener('click', () => {
    btn.hidden = true;
  });
}

hideSelf()

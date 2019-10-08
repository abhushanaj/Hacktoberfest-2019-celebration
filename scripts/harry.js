const btn = document.querySelector('#harryBtn');
btn.addEventListener("click", function() {
    btn.innerHTML = `💩`;
    btn.classList.add('active');
})
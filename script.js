
var pics = document.querySelectorAll(".photos").forEach(item => {
  item.addEventListener('click', function() {
    item.classList.toggle("fullscreen")
    item.classList.toggle("photos")
  })
});


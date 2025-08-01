var s = skrollr.init();

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const prevBtn = document.querySelector(".btn-prev");
  const nextBtn = document.querySelector(".btn-next");

  const itemWidth = 300; // 每張圖片寬度
  const itemsPerPage = 3;
  const totalItems = document.querySelectorAll(".carousel-item").length;
  const maxIndex = Math.ceil(totalItems / itemsPerPage) - 1;

  let currentIndex = 0;

  function updateCarousel() {
    const offset = currentIndex * itemWidth * itemsPerPage;
    track.style.transform = `translateX(-${offset}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
});

var vm=new Vue({
  el: "#app",
  data: {
    classes: []
  }
});

$.ajax({
  url: "https://jsonkeeper.com/b/ZSHYE",
  success: function(res){
    vm.classes=res;
  }
});
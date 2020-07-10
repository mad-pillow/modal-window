document.addEventListener("DOMContentLoaded", () => {
  const openModalBtns = document.querySelectorAll("[data-openModalBtn]");
  const modalWindow = document.querySelector("[data-modalWindow]");
  const closeModalBtn = document.querySelector("[data-closeModalBtn]");
  const modalWindowBlock = modalWindow.querySelector("[data-modalWindowBlock]");

  function toggleModalWindow() {
    if (modalWindow) {
      if (modalWindow.classList.contains("hidden")) {
        modalWindow.classList.remove("hidden");
        setTimeout(() => {
          modalWindowBlock.classList.remove("minimized");
        }, 10);
        document.body.style.overflow = "hidden";
      } else {
        modalWindowBlock.classList.add("minimized");
        setTimeout(() => {
          modalWindow.classList.add("hidden");
        }, 200);
        document.body.style.overflow = "visible";
      }
    }
  }

  openModalBtns.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      toggleModalWindow();
    });
  });

  modalWindow.addEventListener("click", (e) => {
    if (e.target === modalWindow || e.target === closeModalBtn) {
      e.preventDefault();
      toggleModalWindow();
    }
  });
});

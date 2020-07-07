document.addEventListener("DOMContentLoaded", () => {
  const openModalBtns = document.querySelectorAll("[data-openModalBtn]"),
    modalWindow = document.querySelector("[data-modalWindow]"),
    closeModalBtn = document.querySelector("[data-closeModalBtn]"),
    modalWindowBlock = modalWindow.querySelector("[data-modalWindowBlock]");

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
    item.addEventListener("click", (ev) => {
      ev.preventDefault();
      toggleModalWindow();
    });
  });

  window.addEventListener("click", (ev) => {
    if (ev.target === modalWindow || ev.target === closeModalBtn) {
      ev.preventDefault();
      toggleModalWindow();
    }
  });
});

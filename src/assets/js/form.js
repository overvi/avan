const selects = document.querySelectorAll(".has-arrow");
const toggleOptions = document.querySelectorAll(".toggle-option");

selects.forEach((select) => {
  select.addEventListener("click", (e) => {
    e.stopPropagation();

    selects.forEach((otherSelect) => {
      if (otherSelect !== select) {
        otherSelect.parentElement
          .querySelector(".select-icon")
          .classList.remove("rotate-180");
      }
    });

    select.parentElement
      .querySelector(".select-icon")
      .classList.toggle("rotate-180");
  });
});

document.addEventListener("click", (e) => {
  if (e.target.closest(".has-arrow")) return;
  selects.forEach((select) => {
    select.parentElement
      .querySelector(".select-icon")
      .classList.remove("rotate-180");
  });
});

if (toggleOptions.length) {
  toggleOptions.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var group = this.dataset.toggleGroup;
      document
        .querySelectorAll("[data-toggle-group=" + group + "]")
        .forEach(function (el) {
          el.classList.remove("bg-black", "text-white");
          el.classList.add("border", "border-gray-300");
        });
      this.classList.add("bg-black", "text-white");
      this.classList.remove("border", "border-gray-300");
    });
  });
}

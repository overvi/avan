import DatePicker from "../../../lib/datepicker.esm";

const selects = document.querySelectorAll(".has-arrow");
const toggleOptions = document.querySelectorAll(".toggle-option");

selects.forEach((select) => {
  select.addEventListener("click", (e) => {
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
  if (e.target.closest(".has-arrow , .date_picker_calendar")) return;
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

document.addEventListener("click", (event) => {
  document.querySelectorAll(".dp").forEach((picker) => {
    const input = picker.querySelector(".date");
    const calendar = picker.querySelector(".date_picker_calendar");

    if (input.contains(event.target)) {
      document.querySelectorAll(".date_picker_calendar").forEach((cal) => {
        if (cal !== calendar) cal.classList.add("hidden");
      });
      calendar.classList.toggle("hidden");
      picker.classList.toggle("open");
    } else if (!picker.contains(event.target)) {
      calendar.classList.add("hidden");
      picker.classList.remove("open");
    }
  });
});

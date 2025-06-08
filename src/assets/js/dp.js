document.querySelectorAll(".datepicker-wrapper").forEach((wrapper) => {
  const textInput = wrapper.querySelector(".text-input");
  const dateInput = wrapper.querySelector(".datepicker-input");

  dateInput.addEventListener("change", (event) => {
    textInput.textContent = event.target.value;
    wrapper.classList.add("init");

    wrapper.querySelector(".select-icon").classList.remove("rotate-180");
    event.target.value = "";
  });
});

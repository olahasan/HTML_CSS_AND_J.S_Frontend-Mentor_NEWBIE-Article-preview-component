document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".sh_box");
  const shareOptions = document.querySelector(".oo");

  button.addEventListener("click", () => {
    shareOptions.classList.toggle("hide");
    button.classList.toggle("color");
  });

  //   document.addEventListener("click", (event) => {
  //     if (
  //       !button.contains(event.target) &&
  //       !shareOptions.contains(event.target)
  //     ) {
  //       shareOptions.classList.add("hide");
  //       button.classList.remove("color");
  //     }
  //   });
});

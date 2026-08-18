document.addEventListener("DOMContentLoaded", function () {
  const switcher = document.getElementById("switcher");
  const root = document.documentElement;
  const container = document.getElementById("container");

  switcher.addEventListener("change", function (evt) {
    root.style.setProperty("--var-col", evt.target.value);

    console.log("Seleccionado:", evt.target.value);
    console.log(
      "Variable:",
      getComputedStyle(root).getPropertyValue("--var-col"),
    );
    console.log("Columnas:", getComputedStyle(container).gridTemplateColumns);
  });
});

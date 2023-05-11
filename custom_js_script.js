console.log("custom_js_script.js called");
var enabled = window.localStorage.getItem("enabled"); //default
(function () {
  setTimeout(() => {
    const allElements = document.getElementsByTagName("*");

    // Loop through each element and replace the background color property
    for (let i = 0; i < allElements.length; i++) {
      const styles = window.getComputedStyle(allElements[i]);
      if (styles.backgroundColor !== "transparent") {
        allElements[i].style.backgroundColor = "#181a1b"; // Replace with your desired color
      }
      if (styles.color) {
        allElements[i].style.color = "#fff"; // Replace with your desired color
      }
      if (styles.borderColor !== "transparent") {
        allElements[i].style.borderColor = "#373c3e"; // Replace with your desired color
      }
    }
  }, 500);
})();

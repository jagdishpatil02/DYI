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
      if (styles.color !== "transparent") {
        allElements[i].style.color = "#fff"; // Replace with your desired color
      }
      if (styles.borderColor !== "transparent") {
        allElements[i].style.borderColor = "#373c3e"; // Replace with your desired color
      }

      // Check for hover styles and replace background color property
      const hoverStyles = window.getComputedStyle(allElements[i], ":hover");
      if (hoverStyles.backgroundColor !== "transparent") {
        allElements[i].addEventListener("mouseenter", function () {
          this.style.backgroundColor = "#181a1b"; // Replace with your desired hover color
        });
        allElements[i].addEventListener("mouseleave", function () {
          this.style.backgroundColor = "#181a1b"; // Replace with your desired default color
        });
      }
    }

    // Get all SVG elements in the DOM
    const svgs = document.getElementsByTagName("svg");

    // Loop through each SVG element
    for (let i = 0; i < svgs.length; i++) {
      // Get all path elements inside the SVG
      const paths = svgs[i].getElementsByTagName("path");
      // Loop through each path element and apply the white stroke color
      for (let j = 0; j < paths.length; j++) {
        paths[j].setAttribute("stroke", "#FFFFFF"); // Set the stroke color to white
      }
    }
  }, 1000);
})();

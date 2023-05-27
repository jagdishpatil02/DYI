(function () {
  const newBgColor = window.localStorage.getItem("bgcolor");
  const newTextcolor = window.localStorage.getItem("txtcolor");
  // Loop through all stylesheets on the page
  changeColor(newBgColor, newTextcolor);
  const svgColor = "#fff";
  changeSVGIcons(svgColor);

  function changeSVGIcons(svgColor) {
    // Get all SVG elements in the DOM
    const svgs = document.querySelectorAll("svg");
    // Loop through each SVG element
    for (let i = 0; i < svgs.length; i++) {
      // Get all path elements inside the SVG
      const paths = svgs[i].querySelectorAll("path");
      // Loop through each path element and apply the white stroke color
      for (const path of paths) {
        path.setAttribute("stroke", svgColor);
      }
    }
  }

  function changeColor(newBgColor, newTextcolor) {
    const styleSheets = document.styleSheets;

    for (const styleSheet of styleSheets) {
      const rules = styleSheet.rules || styleSheet.cssRules;

      for (const rule of rules) {
        if (rule.style && rule.style.backgroundColor) {
          rule.style.backgroundColor = newBgColor;
        }
        if (rule.style && rule.style.color) {
          rule.style.color = newTextcolor;
        }
      }
    }
  }
})();

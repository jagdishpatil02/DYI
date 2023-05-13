console.log("custom_js_script.js called");

var enabled = window.localStorage.getItem("enabled"); //default
console.log("enabled", enabled);

if (enabled == "true") {
  const newBgColor = "#181a1b"; // Replace with your new background color
  const newTextcolor = "#fff";
  // Loop through all stylesheets on the page
  changeColor(newBgColor, newTextcolor);
  const svgColor = "#fff";
  changeSVGIcons(svgColor);
} else {
  console.log("---------------");
  // Loop through all elements on the page
  const newBgColor = "#fff"; // Replace with your new background color
  const newTextcolor = "#000";
  const svgColor = "#000";
  changeSVGIcons(svgColor);
  // Loop through all stylesheets on the page
  changeColor(newBgColor, newTextcolor);
}

function changeSVGIcons(svgColor) {
  // Get all SVG elements in the DOM
  const svgs = document.getElementsByTagName("svg");
  // Loop through each SVG element
  for (let i = 0; i < svgs.length; i++) {
    // Get all path elements inside the SVG
    const paths = svgs[i].getElementsByTagName("path");
    // Loop through each path element and apply the white stroke color
    for (let j = 0; j < paths.length; j++) {
      paths[j].setAttribute("stroke", svgColor); // Set the stroke color to white
    }
  }
}

function changeColor(newBgColor, newTextcolor) {
  const styleSheets = document.styleSheets;
  for (let i = 0; i < styleSheets.length; i++) {
    const styleSheet = styleSheets[i];

    // Loop through all rules in the stylesheet
    const rules = styleSheet.rules || styleSheet.cssRules;
    for (let j = 0; j < rules.length; j++) {
      const rule = rules[j];

      // Check if the rule has a background color property
      if (rule.style && rule.style.backgroundColor) {
        oldBgColor = rule.style.backgroundColor;
        // Replace the rule's background color with the new color
        rule.style.backgroundColor = newBgColor;
      }
      if (rule.style && rule.style.color) {
        oldTextColor = rule.style.color;
        // Replace the rule's background color with the new color
        rule.style.color = newTextcolor;
      }
    }
  }
}

var enabled = window.localStorage.getItem("enabled"); //default

if (enabled == "true") {
  // Check if the user prefers a light or dark color scheme
  if (
    document.body.hasAttribute("data-theme") ||
    document.documentElement.hasAttribute("data-theme") ||
    document.documentElement.hasAttribute("data-dark-theme")
  ) {
    document.documentElement.style.setProperty("--color-scheme", "dark");
    document.documentElement.style.setProperty("color-scheme", "dark");
    document.documentElement.setAttribute("data-color-mode", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    document.body.setAttribute("data-theme", "dark");
  } else {
    const newBgColor = "#181a1b"; // Replace with your new background color
    const newTextcolor = "#fff";
    // Loop through all stylesheets on the page
    changeColor(newBgColor, newTextcolor);
    const svgColor = "#fff";
    changeSVGIcons(svgColor);
  }
} else {
  if (
    document.body.hasAttribute("data-theme") ||
    document.documentElement.hasAttribute("data-theme") ||
    document.documentElement.hasAttribute("data-dark-theme")
  ) {
    document.documentElement.style.setProperty("--color-scheme", "light");
    document.documentElement.style.setProperty("color-scheme", "light");
    document.documentElement.setAttribute("data-color-mode", "light");
    document.documentElement.setAttribute("data-theme", "light");
    document.body.setAttribute("data-theme", "light");
  } else {
    const newBgColor = "#fff"; // Replace with your new background color
    const newTextcolor = "#000";
    // Loop through all stylesheets on the page
    changeColor(newBgColor, newTextcolor);
    const svgColor = "#fff";
    changeSVGIcons(svgColor);
  }
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

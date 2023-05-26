var enabled = window.localStorage.getItem("enabled"); //default
if (enabled == "true") {
  const rootElement = document.documentElement;
  const bodyElement = document.body;
  // Check if the user prefers a light or dark color scheme
  if (
    document.body.hasAttribute("data-theme") ||
    document.documentElement.hasAttribute("data-theme") ||
    document.documentElement.hasAttribute("data-dark-theme")
  ) {
    rootElement.style.setProperty("--color-scheme", "dark");
    rootElement.style.setProperty("color-scheme", "dark");
    rootElement.setAttribute("data-color-mode", "dark");
    rootElement.setAttribute("data-theme", "dark");
    bodyElement.setAttribute("data-theme", "dark");
  } else {
    // Loop through all stylesheets on the page
    const newBgColor = window.localStorage.getItem("bgcolor");
    console.log("newBgColor", newBgColor);
    const newTextcolor = window.localStorage.geItem("txtcolor");
    changeColor(newBgColor, newTextcolor);
    const svgColor = "#fff";
    changeSVGIcons(svgColor);
  }
} else {
  const rootElement = document.documentElement;
  const bodyElement = document.body;
  if (
    document.body.hasAttribute("data-theme") ||
    document.documentElement.hasAttribute("data-theme") ||
    document.documentElement.hasAttribute("data-dark-theme")
  ) {
    rootElement.style.setProperty("--color-scheme", "light");
    rootElement.style.setProperty("color-scheme", "light");
    rootElement.setAttribute("data-color-mode", "light");
    rootElement.setAttribute("data-theme", "light");
    bodyElement.setAttribute("data-theme", "light");
  } else {
    const newBgColor = window.localStorage.getItem("bgcolor");
    const newTextcolor = window.localStorage.getItem("txtcolor");
    // Loop through all stylesheets on the page
    changeColor(newBgColor, newTextcolor);
    const svgColor = "#fff";
    changeSVGIcons(svgColor);
  }
}
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

var enabled = "false"; //disabled by default
var storageKey = "enabled";
var myButton = document.getElementById("toggle");

document.querySelector("#colorisbg").addEventListener("click", (e) => {
  Coloris({
    el: ".colorisipbg",
    format: "rgb",
    defaultColor: "#000000",
    onChange: (color) => {
      // window.localStorage.setItem("bgcolor", color);
      let strValue = `'${color}'`;
      chrome.storage.sync.set({ bgcolor: strValue });
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        chrome.tabs.executeScript(
          tab.id,
          { code: `localStorage.setItem("bgcolor", ${strValue});` },
          (data) => {}
        );
        chrome.tabs.executeScript(tab.id, { file: "./custom_js_script.js" });
      });
    },
  });
});

document.querySelector("#coloristxt").addEventListener("click", (e) => {
  Coloris({
    el: ".colorisiptxt",
    onChange: (color) => {
      // window.localStorage.setItem("color", color);
      let strValue = `'${color}'`;

      chrome.storage.sync.set({ txtcolor: strValue });

      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        chrome.tabs.executeScript(
          tab.id,
          { code: `localStorage.setItem("txtcolor", ${strValue});` },
          (data) => {}
        );
        chrome.tabs.executeScript(tab.id, { file: "./custom_js_script.js" });
      });
    },
  });
});

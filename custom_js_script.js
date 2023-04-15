console.log('custom_js_script.js called');
var enabled = window.localStorage.getItem('enabled'); //default

if (enabled) {
  setTimeout(() => {
    let allTextClasses = [
      {
        className: 'text-primary',
      },
      {
        className: 'text-light',
      },
      {
        className: 'text-gray',
      },
      {
        className: 'lg:text-base',
      },
    ];

    let allBgClasses = [
      {
        className: 'bg-white',
      },
      {
        className: 'bg-gray-bg1',
      },
      {
        className: 'bg-gray-gray0',
      },
    ];
    let textWrapperCollec = [];
    let textWrapperArr = [];
    allTextClasses.forEach((element) => {
      textWrapperCollec.push(
        document.getElementsByClassName(element.className)
      );
    });
    textWrapperCollec.forEach((element) => {
      textWrapperArr.push(Array.prototype.slice.call(element));
    });

    let bgWrapperCollec = [];
    let bgWrapperArr = [];
    allBgClasses.forEach((element) => {
      bgWrapperCollec.push(document.getElementsByClassName(element.className));
    });
    bgWrapperCollec.forEach((element) => {
      bgWrapperArr.push(Array.prototype.slice.call(element));
    });

    bgWrapperArr.forEach((textParentNodes) => {
      textParentNodes.forEach((textChildNodes) => {
        textChildNodes.style.backgroundColor = '#242924';
        textChildNodes.style.color = '#fff';
      });
    });

    textWrapperArr.forEach((textParentNodes) => {
      textParentNodes.forEach((textChildNodes) => {
        textChildNodes.style.color = '#fff';
      });
    });

    console.log('called');
  }, 1500);
}

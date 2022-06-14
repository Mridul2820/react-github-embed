export const copyTextToClipboard = (copyMe, setCopyMsg) => {
  //Chrome
  if (navigator.clipboard != undefined) {
    navigator.clipboard.writeText(copyMe).then(
      function () {
        setCopyMsg('Copied!');
      },
      function (err) {
        console.error('Could not copy text: ', err);
      }
    );
  }

  // Internet Explorer
  else if (window.clipboardData) {
    window.clipboardData.setData('Text', copyMe);
  }
};

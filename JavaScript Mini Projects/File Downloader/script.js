const fileInput = document.querySelector(".fileInput");
const downloadBtn = document.querySelector(".downloadBtn");

downloadBtn.addEventListener("click", () => {
  if (isValidURL(fileInput.value)) {
    fetchFile(fileInput.value);
  } else {
    alert("Please enter a valid URL to download");
  }
});

const isValidURL = (url) => {
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlPattern.test(url);
};

const fetchFile = (url) => {
  fetch(url)
    .then((res) => res.blob())
    .then((file) => {
      let TempURL = URL.createObjectURL(file);
      let aTag = document.createElement("a");
      aTag.href = TempURL;
      let fileName = url.substring(url.lastIndexOf("/") + 1).replace(" ", "_");
      aTag.download = fileName;
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
      URL.revokeObjectURL(TempURL);

      // Clear the input field value after download
      fileInput.value = "";
    })
    .catch(() => {
      alert("Failed to Download");
    });
};

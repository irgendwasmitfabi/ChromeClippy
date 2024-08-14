const dropZone = document.querySelector('.drop-zone');
const fileInput = document.getElementsByClassName("image-file-input")[0];

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('drag-over');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('drag-over');
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.classList.remove('drag-over');
  
  var files = e.dataTransfer.files;
  if (files.length > 0) {
    fileInput.files = files;
  }
});

fileInput.addEventListener('change', (e) => {
  // TODO: display file
});

let imgBox = document.querySelector(".imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let inputGroup = document.querySelector(".input-group");

function generateQR(){
  if(qrText.value.trim().length > 0){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value.trim());
    imgBox.classList.add("show-img");
    inputGroup.classList.add("has-value");
  } else {
    qrText.classList.add('error');
    setTimeout(()=>{
        qrText.classList.remove('error');
    },1000);
  }
}

function clearText(){
  qrText.value = "";
  qrText.focus();
  inputGroup.classList.remove("has-value");
  imgBox.classList.remove("show-img");
  qrImage.src = "";
}

qrText.addEventListener('input', ()=>{
  if(qrText.value.trim().length > 0){
    inputGroup.classList.add('has-value');
  } else {
    inputGroup.classList.remove('has-value');
  }
});

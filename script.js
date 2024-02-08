let TotalCount = document.getElementById("TotalCount");
let WrittenText = document.getElementById("Written");
let TextArea = document.getElementById("textarea");

TextArea.addEventListener("keyup", function () {
  TextCharacterUpdate();
});

function TextCharacterUpdate() {
  TotalCount.innerText =
    TextArea.getAttribute("maxlength") - TextArea.value.length;
  WrittenText.innerText = TextArea.value.length;
}

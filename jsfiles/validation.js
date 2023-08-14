function validateNumber() {
    var threeNumArea = document.getElementById('threenum').value;
    if (threeNumArea.trim() === '') {
        alert("Please enter your Three number.");
    } else {
        alert("Thank you for entering your number");
    }
}
function validateText() {
    var textSearch = document.getElementById('randomtext').value;
    if (textSearch.trim() === '') {
        alert("Please enter something in the Text area.");
    } else {
        alert("Thankyou  for typing the search text");
    }
}
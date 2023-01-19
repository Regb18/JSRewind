// Separation of Concerns

// element IDs
// userString


//entry point AKA controller
function getValues() {
    let inputString = document.getElementById('userString').value;

    let reversedString = reverseAString(inputString);

    displayString(reversedString);

}

// logic function
// reverse a string
function reverseAString(userString) {
    let revString = '';
    
    // reverse the string
    for(let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
    }
    return revString;
}

// view function
function displayString(revString) {
    document.getElementById('results').textContent = revString;
    document.getElementById('alert').classList.remove('invisible');
}
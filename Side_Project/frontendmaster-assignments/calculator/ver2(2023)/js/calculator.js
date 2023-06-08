//define variables
let value = 0;
const currentDisplay = document.getElementById("screen");
let currentString = "";
let storedString = "";
let writeIn = 1;
let operator = 'none';
const buttonsListner = document.getElementsByTagName("button");
/*
add follow codes for debugging
console.log('current value is ', value);
console.log('current display is ', currentDisplay.textContent);
console.log('current string is ', currentString);
console.log('current storedString is ', storedString);
console.log('current writeMode is ', writeIn);
console.log('current operator is ', operator);
for(let i = 0; i < buttonsListner.length; i++) {
    buttonsListner[i].addEventListener('click', function (event) {
        console.log(`${event.target.textContent} is pressed`);
    });
}
*/

buttonsListner[0].addEventListener('click', function (event) {
    reset();
    console.log('current value is ', value);
    console.log('current display is ', currentDisplay.textContent);
    console.log('current string is ', currentString);
    console.log('current storedString is ', storedString);
    console.log('current writeMode is ', writeIn);
    console.log('current operator is ', operator);
});
buttonsListner[1].addEventListener('click', function (event) {
    if (writeIn == 1 && operator == "none") {
        currentString = currentString.substring(0, currentString.length - 1);
        currentDisplay.textContent = currentString;
        if (currentString.length == 0)
            resetScreen();
    }
    else {
        operator = "none";
        console.log("reset operator");
    }
    console.log('current value is ', value);
    console.log('current display is ', currentDisplay.textContent);
    console.log('current string is ', currentString);
    console.log('current storedString is ', storedString);
    console.log('current writeMode is ', writeIn);
    console.log('current operator is ', operator);
});
buttonsListner[2].addEventListener('click', function (event) {
    if (storedString !== "" && currentString !== "") {
        equal(operator, currentString, storedString);
    }
    else if (currentString == "") {
        equal(operator, currentString, storedString);
    }
    operator = '/';
    storeString();
    console.log('current value is ', value);
    console.log('current display is ', currentDisplay.textContent);
    console.log('current string is ', currentString);
    console.log('current storedString is ', storedString);
    console.log('current writeMode is ', writeIn);
    console.log('current operator is ', operator);
});
buttonsListner[3].addEventListener('click', function (event) {
    if (writeIn == 1) {
        currentString += '7';
        currentDisplay.textContent = currentString;
    }
    console.log('current value is ', value);
    console.log('current display is ', currentDisplay.textContent);
    console.log('current string is ', currentString);
    console.log('current storedString is ', storedString);
    console.log('current writeMode is ', writeIn);
    console.log('current operator is ', operator);
});
buttonsListner[4].addEventListener('click', function (event) {
    if (writeIn == 1) {
        currentString += '8';
        currentDisplay.textContent = currentString;
    }
    console.log('current value is ', value);
    console.log('current display is ', currentDisplay.textContent);
    console.log('current string is ', currentString);
    console.log('current storedString is ', storedString);
    console.log('current writeMode is ', writeIn);
    console.log('current operator is ', operator);
});
buttonsListner[5].addEventListener('click', function (event) {
    if (writeIn == 1) {
        currentString += '9';
        currentDisplay.textContent = currentString;
    }
    console.log('current value is ', value);
    console.log('current display is ', currentDisplay.textContent);
    console.log('current string is ', currentString);
    console.log('current storedString is ', storedString);
    console.log('current writeMode is ', writeIn);
    console.log('current operator is ', operator);
});
buttonsListner[6].addEventListener('click', function (event) {
    if (storedString !== "" && currentString !== "") {
        equal(operator, currentString, storedString);
    }
    else if (currentString == "") {
        equal(operator, currentString, storedString);
    }
    operator = '*';
    if (storedString !== "")
        return;
    else
        storeString();
    console.log('current value is ', value);
    console.log('current display is ', currentDisplay.textContent);
    console.log('current string is ', currentString);
    console.log('current storedString is ', storedString);
    console.log('current writeMode is ', writeIn);
    console.log('current operator is ', operator);
});
buttonsListner[7].addEventListener('click', function (event) {
    if (writeIn == 1) {
        currentString += '4';
        currentDisplay.textContent = currentString;
    }
    console.log('current value is ', value);
    console.log('current display is ', currentDisplay.textContent);
    console.log('current string is ', currentString);
    console.log('current storedString is ', storedString);
    console.log('current writeMode is ', writeIn);
    console.log('current operator is ', operator);
});
buttonsListner[8].addEventListener('click', function (event) {
    if (writeIn == 1) {
        currentString += '5';
        currentDisplay.textContent = currentString;
    }
    console.log('current value is ', value);
    console.log('current display is ', currentDisplay.textContent);
    console.log('current string is ', currentString);
    console.log('current storedString is ', storedString);
    console.log('current writeMode is ', writeIn);
    console.log('current operator is ', operator);
});
buttonsListner[9].addEventListener('click', function (event) {
    if (writeIn == 1) {
        currentString += '6';
        currentDisplay.textContent = currentString;
    }
    console.log('current value is ', value);
    console.log('current display is ', currentDisplay.textContent);
    console.log('current string is ', currentString);
    console.log('current storedString is ', storedString);
    console.log('current writeMode is ', writeIn);
    console.log('current operator is ', operator);
});
buttonsListner[10].addEventListener('click', function (event) {
    if (storedString !== "" && currentString !== "") {
        equal(operator, currentString, storedString);
    }
    else if (currentString == "") {
        equal(operator, currentString, storedString);
    }
    operator = '-';
    if (storedString !== "")
        return;
    else
        storeString();
    console.log('current value is ', value);
    console.log('current display is ', currentDisplay.textContent);
    console.log('current string is ', currentString);
    console.log('current storedString is ', storedString);
    console.log('current writeMode is ', writeIn);
    console.log('current operator is ', operator);

});
buttonsListner[11].addEventListener('click', function (event) {
    if (writeIn == 1) {
        currentString += '1';
        currentDisplay.textContent = currentString;
    }
    console.log('current value is ', value);
    console.log('current display is ', currentDisplay.textContent);
    console.log('current string is ', currentString);
    console.log('current storedString is ', storedString);
    console.log('current writeMode is ', writeIn);
    console.log('current operator is ', operator);
});
buttonsListner[12].addEventListener('click', function (event) {
    if (writeIn == 1) {
        currentString += '2';
        currentDisplay.textContent = currentString;
    }
    console.log('current value is ', value);
    console.log('current display is ', currentDisplay.textContent);
    console.log('current string is ', currentString);
    console.log('current storedString is ', storedString);
    console.log('current writeMode is ', writeIn);
    console.log('current operator is ', operator);
});
buttonsListner[13].addEventListener('click', function (event) {
    if (writeIn == 1) {
        currentString += '3';
        currentDisplay.textContent = currentString;
    }
    console.log('current value is ', value);
    console.log('current display is ', currentDisplay.textContent);
    console.log('current string is ', currentString);
    console.log('current storedString is ', storedString);
    console.log('current writeMode is ', writeIn);
    console.log('current operator is ', operator);
});
buttonsListner[14].addEventListener('click', function (event) {
    if (storedString !== "" && currentString !== "") {
        equal(operator, currentString, storedString);
    }
    else if (currentString == "") {
        equal(operator, currentString, storedString);
    }
    operator = '+';
    if (storedString !== "")
        return;
    else
        storeString();
    console.log('current value is ', value);
    console.log('current display is ', currentDisplay.textContent);
    console.log('current string is ', currentString);
    console.log('current storedString is ', storedString);
    console.log('current writeMode is ', writeIn);
    console.log('current operator is ', operator);
});
buttonsListner[15].addEventListener('click', function (event) {
    if (writeIn == 1) {
        if (currentString.length == 0)
            return;
        currentString += '0';
        currentDisplay.textContent = currentString;
    }
    console.log('current value is ', value);
    console.log('current display is ', currentDisplay.textContent);
    console.log('current string is ', currentString);
    console.log('current storedString is ', storedString);
    console.log('current writeMode is ', writeIn);
    console.log('current operator is ', operator);
});
buttonsListner[16].addEventListener('click', function (event) {
    console.log('current value is ', value);
    console.log('current display is ', currentDisplay.textContent);
    console.log('current string is ', currentString);
    console.log('current storedString is ', storedString);
    console.log('current writeMode is ', writeIn);
    console.log('current operator is ', operator);
    equal(operator, currentString, storedString);
    console.log('current value is ', value);
    console.log('current display is ', currentDisplay.textContent);
    console.log('current string is ', currentString);
    console.log('current storedString is ', storedString);
    console.log('current writeMode is ', writeIn);
    console.log('current operator is ', operator);
});

function reset() {
    value = 0;
    resetScreen();
    currentString = "";
    storedString = "";
    writeIn = 1;
    operator = 'none';
}

function storeString() {
    storedString = currentString;
    currentString = "";
    writeIn = 1;
    resetScreen();
}

function equal(oper, string1, string2) {
    if (string1 == ""){
        value = parseInt(string2);
        oper = "none";
    }
    else {
        if (oper == 'none') {
            value = parseInt(string1);
        } else if (oper == '/') {
            value = parseInt(string2) / parseInt(string1);
            storedString = "";
        }
        else if (oper == '*') {
            value = parseInt(string2) * parseInt(string1);
            storedString = "";
        }
        else if (oper == '+') {
            value = parseInt(string2) + parseInt(string1);
            storedString = "";
        }
        else if (oper == '-') {
            value = parseInt(string2) - parseInt(string1);
            storedString = "";
        }
    }   
    currentString = value.toString();
    writeIn = 1;
    operator = "none";
    currentDisplay.textContent = value.toString();
}

function resetScreen() {
    currentDisplay.textContent = "0";
}

function MainCalculator() {
    reset();
}
MainCalculator();

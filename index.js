let display = document.getElementById('display');
let numDisplay = '0';
let numberOperation = []
let typeOperation = []

function show() {
    display.innerHTML = numDisplay;
}

function calculator(value) {
    if (typeof (value) == 'number' || value == '.') {
        if (value == '.' && numDisplay.length == 1 && numDisplay[0] == 0) {
            value = '0.'
        }
        if (numDisplay.length <= 8) {
            numDisplay += '' + value
            if (numDisplay.charAt(0) == '0' && numDisplay.charAt(1) != '.') {
                numDisplay = numDisplay.substring(1, numDisplay.length);
            }
        } else {
            alert('Terlalu banyak angka untuk ditampilkan')
        }
        show()
    } else {
        let numDisplayArray = ""
        let lastNumber = ""
        switch (value) {
            case "del":
                if (numDisplay[numDisplay.length - 1] == '+' || numDisplay[numDisplay.length - 1] == '-' || numDisplay[numDisplay.length - 1] == '*' || numDisplay[numDisplay.length - 1] == '/') {
                    typeOperation = typeOperation.slice(0, typeOperation.length - 1)
                    numberOperation = numberOperation.slice(0, numberOperation.length - 1)
                }
                numDisplay = numDisplay.substring(0, numDisplay.length - 1);
                if (numDisplay == '') {
                    numDisplay = '0'
                    typeOperation = []
                    numberOperation = []
                }
                show();
                break;
            case "-":
                numDisplayArray = numDisplay.split(typeOperation[typeOperation.length - 1])
                lastNumber = numDisplayArray[numDisplayArray.length - 1].toString()
                numberOperation.push(lastNumber)
                typeOperation.push('-')
                if (numDisplay.length <= 8) {
                    numDisplay += '' + value
                    if (numDisplay.charAt(0) == '0' && numDisplay.charAt(1) != '.') {
                        numDisplay = numDisplay.substring(1, numDisplay.length);
                    }
                } else {
                    alert('Terlalu banyak angka untuk ditampilkan')
                }
                show();
                break;
            case "+":
                numDisplayArray = numDisplay.split(typeOperation[typeOperation.length - 1])
                lastNumber = numDisplayArray[numDisplayArray.length - 1].toString()
                numberOperation.push(lastNumber)
                typeOperation.push('+')
                if (numDisplay.length <= 8) {
                    numDisplay += '' + value
                    if (numDisplay.charAt(0) == '0' && numDisplay.charAt(1) != '.') {
                        numDisplay = numDisplay.substring(1, numDisplay.length);
                    }
                } else {
                    alert('Terlalu banyak angka untuk ditampilkan')
                }
                show();
                break;
            case "x":
                numDisplayArray = numDisplay.split(typeOperation[typeOperation.length - 1])
                lastNumber = numDisplayArray[numDisplayArray.length - 1].toString()
                numberOperation.push(lastNumber)
                typeOperation.push('x')
                if (numDisplay.length <= 8) {
                    numDisplay += '' + value
                    if (numDisplay.charAt(0) == '0' && numDisplay.charAt(1) != '.') {
                        numDisplay = numDisplay.substring(1, numDisplay.length);
                    }
                } else {
                    alert('Terlalu banyak angka untuk ditampilkan')
                }
                show();
                break;
            case "/":
                numDisplayArray = numDisplay.split(typeOperation[typeOperation.length - 1])
                lastNumber = numDisplayArray[numDisplayArray.length - 1].toString()
                numberOperation.push(lastNumber)
                typeOperation.push('/')
                if (numDisplay.length <= 8) {
                    numDisplay += '' + value
                    if (numDisplay.charAt(0) == '0' && numDisplay.charAt(1) != '.') {
                        numDisplay = numDisplay.substring(1, numDisplay.length);
                    }
                } else {
                    alert('Terlalu banyak angka untuk ditampilkan')
                }
                show();
                break;
            case "reset":
                numDisplay = '0'
                typeOperation = []
                numberOperation = []
                show()
                break;
            case "equal":
                numDisplayArray = numDisplay.split(typeOperation[typeOperation.length - 1])
                lastNumber = numDisplayArray[numDisplayArray.length - 1].toString()
                numberOperation.push(lastNumber)
                let result = 0

                while (typeOperation.includes('x') || typeOperation.includes('/')) {
                    if (typeOperation.indexOf('x') < typeOperation.indexOf('/')) {
                        if (typeOperation.indexOf('x') == -1) {
                            let index = typeOperation.indexOf('/')
                            let resultOperation = numberOperation[index] / numberOperation[index + 1]
                            numberOperation.splice(index, 2, resultOperation)
                            typeOperation.splice(index, 1)
                        } else {
                            let index = typeOperation.indexOf('x')
                            let resultOperation = numberOperation[index] * numberOperation[index + 1]
                            numberOperation.splice(index, 2, resultOperation)
                            typeOperation.splice(index, 1)
                        }
                    } else {
                        if (typeOperation.indexOf('/') == -1) {
                            let index = typeOperation.indexOf('x')
                            let resultOperation = numberOperation[index] * numberOperation[index + 1]
                            numberOperation.splice(index, 2, resultOperation)
                            typeOperation.splice(index, 1)
                        } else {
                            let index = typeOperation.indexOf('/')
                            let resultOperation = numberOperation[index] / numberOperation[index + 1]
                            numberOperation.splice(index, 2, resultOperation)
                            typeOperation.splice(index, 1)
                        }
                    }
                }

                result = Number(numberOperation[0])

                for (let i = 0; i < numberOperation.length - 1; i++) {
                    if (i == 0) {
                        if (typeOperation[i] === '+') {
                            result = Number(numberOperation[i]) + Number(numberOperation[i + 1])
                        } else if (typeOperation[i] === '-') {
                            result = Number(numberOperation[i]) - Number(numberOperation[i + 1])
                        } else {
                            alert("Error")
                        }
                    } else {
                        if (typeOperation[i] === '+') {
                            result = result + Number(numberOperation[i + 1])
                        } else if (typeOperation[i] === '-') {
                            result = result - Number(numberOperation[i + 1])
                        } else {
                            alert("Error")
                        }
                    }
                }

                numDisplay = result.toString()
                typeOperation = []
                numberOperation = []
                show()
                break;
        }
    }
}
let currentInput = '';
let previousInput = '';
let operation = null;
const display = document.getElementById('display');

// обработка цифровпх кнопок
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        display.value = currentInput;
    });
});

// обработка операторов
document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '√') {
            currentInput = Math.sqrt(parseFloat(currentInput)).toString();
            display.value = currentInput;
        } else {
            previousInput = currentInput;
            currentInput = '';
            operation = button.textContent;
        }
    });
});

// кнопка очистки
document.querySelector('.clear').addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    operation = null;
    display.value = '';
});

// кнопка равно
document.querySelector('.equals').addEventListener('click', () => {
    if (previousInput && currentInput && operation) {
        const a = parseFloat(previousInput);
        const b = parseFloat(currentInput);
        let result;

        switch (operation) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '×':
                result = a * b;
                break;
            case '÷':
                if (b === 0) {
                    result = 'на ноль делить нельзя!';
                } else {
                    result = a / b;
                }
                break;
            case '%':
                result = a % b;
                break;
            case '**':
                result = a ** b;
                if (!isFinite(result)) {
                    result = 'слишком большое число!';
                }
                break;
            default:
                result = 'ты че ввел петрович';
        }

        currentInput = result.toString();
        display.value = currentInput;
        operation = null;
    }
});
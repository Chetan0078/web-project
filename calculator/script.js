const buttons = document.querySelectorAll('.click');
const display = document.querySelector('.answer-area');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === 'AC') {
            currentInput = '';
            display.innerText = '0';
        } 
        else if (value === '<') {
            currentInput = currentInput.slice(0, -1);
            display.innerText = currentInput || '0';
        } 
        else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
                display.innerText = currentInput;
            } catch {
                display.innerText = 'Error';
                currentInput = '';
            }
        } 
        else {
            currentInput += value;
            display.innerText = currentInput;
        }
    });
});

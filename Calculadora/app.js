function insert(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteChar() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display').value;
    try {
        display = display.replace(/pi/g, 'Math.PI')
                         .replace(/sqrt/g, 'Math.sqrt')
                         .replace(/log/g, 'Math.log10')
                         .replace(/ln/g, 'Math.log')
                         .replace(/sin/g, 'Math.sin')
                         .replace(/cos/g, 'Math.cos')
                         .replace(/tan/g, 'Math.tan')
                         .replace(/\^/g, '**');
        document.getElementById('display').value = eval(display);
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

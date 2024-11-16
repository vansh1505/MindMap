function getSum() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    
    if (num1 === '' || num2 === '') {
        document.getElementById("result").textContent = 'Please enter both numbers.';
        document.getElementById("result").style.color = 'red';
        return;
    }

    const sum = parseFloat(num1) + parseFloat(num2);
    document.getElementById("result").textContent = `Result: ${sum}`;
    document.getElementById("result").style.color = '#2196F3';
}

const add_numbers = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    alert(num1 + num2);
    alert(Number(num1) + Number(num1));
}

document.getElementById('add_button').onclick = add_numbers;
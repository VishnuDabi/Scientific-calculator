
function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById("display");
    let expression = display.value;
    let result;

    try {
        // Convert trigonometric function inputs from degrees to radians
        expression = expression.replace(/(\d+)([a-z]+)(\()/gi, "$1*$2$3");

        console.log(expression);

        expression = expression.replace(/sin\(/g, 'Math.sin(');
        console.log(expression);
        expression = expression.replace(/cos\(/g, 'Math.cos(');
        expression = expression.replace(/tan\(/g, 'Math.tan(');
        console.log(expression);
        expression = expression.replaceAll('sin-1(', 'Math.asin(');
        expression = expression.replaceAll('cos-1(', 'Math.acos(');
        expression = expression.replaceAll('tan-1(', 'Math.atan(');
        console.log(expression);

        expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
        expression = expression.replaceAll('log10', 'Math.LN10');
        expression = expression.replace(/log10\(/g, 'Math.LN10');
        expression = expression.replaceAll('%', '*100');
        console.log(expression);
        expression = expression.replace(/log\(/g, 'Math.log(');
        // expression = 'Math.sin(30)+5^3';

        // expression = expression.replace(/(\d+)\^(\d+)/g, 'Math.pow($1, $2)');
        expression = expression.replace(/(\d+(?:\.\d+)?)\^(\d+(?:\.\d+)?)/g, 'Math.pow($1, $2)');
        expression = expression.replace(/(\d+)\((\d+)/g, '$1*($2');
        expression = expression.replaceAll(')(', "*")
        expression = expression.replace(/(Math\.[a-z]+\([\d.]+\))(Math\.[a-z]+\([\d.]+\))/gi, "$1 * $2");
        expression = expression.replace(/(\d+)([a-z]+)/gi, "$1*$2");
        expression = expression.replaceAll('exp(', 'Math.exp(')
        expression = expression.replace(/pi/g, "Math.PI");
        expression = expression.replace('E(', 'Math.E*(')
        expression = expression.replaceAll("()", '1');
        console.log('last exp:', expression);
        result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}
function fact() {
    let x = document.getElementById('display').value;
    var fact = 1;
    for (let i = x; i >= 1; i--) {
        // alert('for');
        fact = fact * i;
    }
    if (x !== '') {
        document.getElementById('display').value = fact;
    }
    else {
        alert('invalid input');
    }

}
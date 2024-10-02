const checkNumber = (input, res, btn) => {
    let inp = document.getElementById(input), pattern = /^[0-9]*$/;
    let b = document.getElementById(btn);
    if (pattern.test(inp.value)) {
        document.getElementById(res).innerHTML = null
        b.removeAttribute("disabled")
    } else {
        document.getElementById(res).innerHTML = "Invalid Input value!!!"
        b.setAttribute("disabled", "true")
    }
    return false
}
// ==================================================================================
const checkfield = (input, msg) => {
    let inp = document.getElementById(input), pattern = /^[0-9]*$/;
    let b = document.querySelectorAll("button");
    b.forEach(element => {
        if (pattern.test(inp.value)) {
            document.getElementById(msg).innerHTML = null
            element.removeAttribute("disabled")
        } else {
            document.getElementById(msg).innerHTML = "Invalid Input value!!!"
            element.setAttribute("disabled", "true")
        }
    });
    return false
}
const addition = (n1, n2, msg) => {
    let num1 = Number(document.getElementById(n1).value);
    let num2 = Number(document.getElementById(n2).value);
    document.getElementById(msg).innerHTML = num1 + num2
    return false
}
const subtract = (n1, n2, msg) => {
    let num1 = Number(document.getElementById(n1).value);
    let num2 = Number(document.getElementById(n2).value);
    document.getElementById(msg).innerHTML = num1 - num2
    return false
}
const multiplication = (n1, n2, msg) => {
    let num1 = Number(document.getElementById(n1).value);
    let num2 = Number(document.getElementById(n2).value);
    document.getElementById(msg).innerHTML = num1 * num2
    return false
}
const division = (n1, n2, msg) => {
    let num1 = Number(document.getElementById(n1).value);
    let num2 = Number(document.getElementById(n2).value);
    document.getElementById(msg).innerHTML = num1 / num2
    return false
}
const modules = (n1, n2, msg) => {
    let num1 = Number(document.getElementById(n1).value);
    let num2 = Number(document.getElementById(n2).value);
    document.getElementById(msg).innerHTML = num1 % num2
    return false
}
// ===================================================================================
const odd_even = () => {
    let num = document.getElementById("num").value;
    let res = num % 2;
    if (res == 0) {
        document.getElementById("msg1").innerHTML = `${num} is even`;
        document.getElementById("num").value = ""
    } else {
        document.getElementById("msg1").innerHTML = `${num} is odd`;
        document.getElementById("num").value = ""
    }
    return false;
}
// ==================================================================
const tog = () => {
    let index = document.getElementById("index");
    index.style.display = "block"
}
const closemenu = () => {
    let index = document.getElementById("index");
    index.style.display = "none"
}
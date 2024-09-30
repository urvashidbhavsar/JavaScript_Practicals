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
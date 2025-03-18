function showPayMethod(sel_id, show) {
    let radio_sel = document.getElementById(sel_id)
    let show_block = document.getElementById(show);
    if (radio_sel.checked) {
        show_block.classList.add("pay-show")
    } else {
        show_block.classList.remove("pay-show")
    }

    const allPay = document.querySelectorAll('.pay');
    allPay.forEach((blocks) => {
        if (blocks.id != show) {
            blocks.classList.remove("pay-show");
        }
    })
}

var nameValidate = (ex, msg) => {
    let ptn = /^[a-zA-Z.\s]*$/
    let field = document.getElementById(ex)
    if (!ptn.test(field.value)) {
        document.getElementById(msg).innerHTML = "Invalid value!!!"
        field.classList.add("error")
    } else {
        document.getElementById(msg).innerHTML = ""
        field.classList.remove("error")
    }
}
var amount = (ex, msg) => {
    let ptn = /^[0-9]*$/
    let field = document.getElementById(ex)
    if (!ptn.test(field.value)) {
        document.getElementById(msg).innerHTML = "Invalid value!!!"
        field.classList.add("error")
    } else {
        document.getElementById(msg).innerHTML = ""
        field.classList.remove("error")
    }
}

var calculate = (total, amt, remain) => {
    let tot = document.getElementById(total);
    let res;
    res = Number(tot.value) - Number(amt.value);
    document.getElementById(remain).value = res;
    console.log(res);
}

var printpage = () => {
    window.print()
}
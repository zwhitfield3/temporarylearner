document.addEventListener('DOMContentLoaded', function (event) {
    const radio = document.getElementById("radioButton1")
    radio.addEventListener('change', changeHandler)
    // console.log('something', event)

});
function changeHandler() {
    console.log('a radio was clicked!')

    // if (radioButton1.checked) {
    //     radioButton1.checked = false
    // }
    // else {
    //     radioButton1.checked = true
    // }
}

document.addEventListener('DOMContentLoaded', function () {
    const newInfoAvailableRadio = document.getElementById("subscriptionCadence-newInfoAvailable")
    const onceAWeekRadio = document.getElementById("subscriptionCadence-onceAWeek")
    // radio.addEventListener('change', changeHandler)
    newInfoAvailableRadio.addEventListener('change', changeHandler)
    onceAWeekRadio.addEventListener('change', changeHandler)

});
function changeHandler(event) {
    if (event.target.id === 'subscriptionCadence-newInfoAvailable') {
        console.log('WE MADE IT!')
    }


    console.log('a radio was clicked!')



    // if (radioButton1.checked) {
    //     radioButton1.checked = false
    // }
    // else {
    //     radioButton1.checked = true
    // }
}

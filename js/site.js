//get starting values from the screen
//Controller Function
function getValues() {
    Alert("Hello App");
}

function getValues2() {
    let msg = "";

    msg = document.getElementById("message").value;

    Swal.fire(
        'APP NAME',
        msg,
        'success'
    )
}
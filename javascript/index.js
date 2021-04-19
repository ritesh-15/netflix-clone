function validate() {
    let email = document.getElementById("email-input").value;
    if (email.length < 5) {
        msg("displayMsg", "Please enter email id", "danger")
        clear("displayMsg")
        
    }
}

function msg(id, msg, color) {
    document.getElementById(`${id}`).innerHTML = `<p class="text-${color} ">${msg}</p>`
}

function clear(id){
    setTimeout(() => {
        document.getElementById(`${id}`).innerHTML = ""
    }, 3000);
}

console.log("This is javascript using")
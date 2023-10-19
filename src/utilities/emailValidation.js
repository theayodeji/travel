const validateForm = () => {
    // Reset any previous error messages and styling
    document.getElementById("emailError").textContent = "";
    document.getElementById("email").style.border = "";

    var email = document.getElementById('email').value;
    var emailPattern = /^\S+@\S+\.\S+$/;

    if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        document.getElementById("email").style.border = "2px solid red";
        return false;
    }

    // If validation passes, the form can be submitted
    return true;
}

export default validateForm;
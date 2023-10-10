function submitForm() {
    // Get values from the form fields
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    // Check if all fields are filled
    if (firstName === undefined || lastName === undefined || dob === undefined || country === undefined || profession === undefined || email === undefined || mobile === undefined) {
        alert("Please fill in all the fields.");
        return
    }

    // Display the values in a popup
    var popupMessage = "First Name: " + firstName + "\n";
    popupMessage += "Last Name: " + lastName + "\n";
    popupMessage += "Date of Birth: " + dob + "\n";
    popupMessage += "Country: " + country + "\n";
    popupMessage += "Gender: " + gender + "\n";
    popupMessage += "Profession: " + profession + "\n";
    popupMessage += "Email: " + email + "\n";
    popupMessage += "Mobile Number: " + mobile + "\n";

    alert(popupMessage);

    // Reset the form
    document.getElementById("surveyForm").reset();
}

function resetForm() {
    // Reset the form
    document.getElementById("surveyForm").reset();
}
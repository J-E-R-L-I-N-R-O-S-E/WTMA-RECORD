document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let isValid = true;

    function showError(input, message) {
        input.nextElementSibling.textContent = message;
        isValid = false;
    }

    function clearError(input) {
        input.nextElementSibling.textContent = "";
    }

    let firstName = document.getElementById("firstName");
    if (!/^[A-Za-z]{4,}$/.test(firstName.value)) {
        showError(firstName, "First Name must be at least 4 letters long and contain only alphabets.");
    } else {
        clearError(firstName);
    }

    let lastName = document.getElementById("lastName");
    if (!/^[A-Za-z ]{1,}$/.test(lastName.value)) {
        showError(lastName, "Last Name must contain only alphabets and spaces.");
    } else {
        clearError(lastName);
    }

    let email = document.getElementById("email");
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        showError(email, "Invalid email format.");
    } else {
        clearError(email);
    }

    let dob = document.getElementById("dob");
    if (!dob.value) {
        showError(dob, "Please select a valid date.");
    } else {
        clearError(dob);
    }

    let age = document.getElementById("age");
    if (!/^\d{2}$/.test(age.value)) {
        showError(age, "Age must be a 2-digit number.");
    } else {
        clearError(age);
    }

    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        showError(document.getElementsByName("gender")[0], "Select a gender.");
    } else {
        clearError(document.getElementsByName("gender")[0]);
    }

    let phone = document.getElementById("phone");
    if (!/^\d{10}$/.test(phone.value)) {
        showError(phone, "Phone number must be 10 digits.");
    } else {
        clearError(phone);
    }

    let address = document.getElementById("address");
    if (address.value.trim() === "") {
        showError(address, "Address cannot be empty.");
    } else {
        clearError(address);
    }

    if (isValid) {
        let formData = {
            "First Name": firstName.value,
            "Last Name": lastName.value,
            "Email": email.value,
            "Date of Birth": dob.value,
            "Age": age.value,
            "Gender": gender.value,
            "Phone Number": phone.value,
            "Address": address.value
        };

        let allUsers = JSON.parse(localStorage.getItem("users")) || [];
        allUsers.push(formData);
        localStorage.setItem("users", JSON.stringify(allUsers));

        window.location.href = "display.html";
    }
});

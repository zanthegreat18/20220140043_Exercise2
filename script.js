document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        phone: document.getElementById("phone").value,
        date: document.getElementById("date").value,
        comment: document.getElementById("comment").value
    };
    
    // Check if form is empty
    if (isFormEmpty(formData)) {
        alert("Please fill out all fields");
    } else {
        // Display values
        displayFormData(formData);
        // Reset form
        resetForm();
    }
});

function isFormEmpty(formData) {
    for (var key in formData) {
        if (formData[key] === "") {
            return true;
        }
    }
    return false;
}

function displayFormData(formData) {
    var message = "Name: " + formData.name + "\n" +
                  "Email: " + formData.email + "\n" +
                  "Address: " + formData.address + "\n" +
                  "Phone: " + formData.phone + "\n" +
                  "Date: " + formData.date + "\n" +
                  "Comment: " + formData.comment;
    alert(message);
}

function resetForm() {
    document.getElementById("myForm").reset();
}

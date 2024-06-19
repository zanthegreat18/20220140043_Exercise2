document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    // Display form values in the result container
    document.getElementById('resultName').textContent = `Nama: ${name}`;
    document.getElementById('resultEmail').textContent = `Email: ${email}`;
    document.getElementById('resultFeedback').textContent = `Masukan: ${feedback}`;
});

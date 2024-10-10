document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Fetching input values
    const fullName = document.getElementById('fullName').value;
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const creditScore = parseInt(document.getElementById('creditScore').value);
    const income = parseFloat(document.getElementById('income').value);

    // Basic validation logic
    let message = "";
    let messageClass = "";

    if (creditScore < 300 || creditScore > 850) {
        message = "Invalid credit score. Please enter a value between 300 and 850.";
        messageClass = "error";
    } else if (income < (loanAmount / 10)) {
        message = "Loan verification failed. Monthly income should be at least 1/10th of the loan amount.";
        messageClass = "error";
    } else if (creditScore >= 700) {
        message = `Congratulations ${fullName}, your loan is approved!`;
        messageClass = "success";
    } else if (creditScore >= 600) {
        message = `${fullName}, your loan is conditionally approved. Improve your credit score for a better rate.`;
        messageClass = "success";
    } else {
        message = `${fullName}, your loan application is denied due to a low credit score.`;
        messageClass = "error";
    }

    // Displaying the result message
    const resultMessage = document.getElementById('resultMessage');
    resultMessage.textContent = message;
    resultMessage.className = `alert ${messageClass}`;
    resultMessage.classList.remove('d-none');
});

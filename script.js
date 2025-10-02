document.addEventListener('DOMContentLoaded', function() {
    const messageElement = document.getElementById('message');
    const changeButton = document.getElementById('changeButton');

    const messages = [
        "Thank you for inspiring us!",
        "Happy Teacher's Day!",
        "You are the best teacher ever!",
        "Wishing you a day filled with joy!"
    ];

    changeButton.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        messageElement.textContent = messages[randomIndex];
    });
});
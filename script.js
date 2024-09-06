document.getElementById('clickMe').addEventListener('click', function() {
    const messages = ['You clicked the button!', 'Great job!', 'Keep clicking!', 'You got this!'];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message').textContent = randomMessage;
});

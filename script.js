document.getElementById('eidi-button').addEventListener('click', function() {
    const moneyAnimation = document.getElementById('money-animation');
    moneyAnimation.style.display = 'block';
    moneyAnimation.innerHTML = '&#x1F4B8; &#x1F4B8; &#x1F4B8;'; // Flying money emojis
    moneyAnimation.style.animation = 'money-fall 1s infinite';
    setTimeout(() => {
        moneyAnimation.style.display = 'none';
    }, 3000); // Hide animation after 3 seconds
});

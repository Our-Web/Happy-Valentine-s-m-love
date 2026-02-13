function openLetter() {
    const wrapper = document.querySelector('.envelope-wrapper');
    wrapper.classList.toggle('open');
    
    // Add a little console flex for your CS background
    console.log("Love status: Executed successfully.");
}

function openLetter() {
    const wrapper = document.querySelector('.envelope-wrapper');
    wrapper.classList.toggle('open');
    
    // Only spawn flowers when opening
    if (wrapper.classList.contains('open')) {
        createFlowerShower();
    }
}

function createFlowerShower() {
    const container = document.getElementById('flower-container');
    const flowers = ['🌸', '🌹', '🌷', '✨', '💖', '🌺'];
    
    // Create 50 petals with random positions and delays
    for (let i = 0; i < 50; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.innerText = flowers[Math.floor(Math.random() * flowers.length)];
        
        // Randomize the horizontal start position
        petal.style.left = Math.random() * 100 + 'vw';
        
        // Randomize size and animation speed
        const size = Math.random() * 20 + 20 + 'px';
        petal.style.fontSize = size;
        
        const duration = Math.random() * 3 + 2 + 's';
        petal.style.animationDuration = duration;
        
        const delay = Math.random() * 2 + 's';
        petal.style.animationDelay = delay;

        container.appendChild(petal);

        // Clean up the DOM after animation finishes
        setTimeout(() => {
            petal.remove();
        }, (parseFloat(duration) + parseFloat(delay)) * 1000);
    }
}

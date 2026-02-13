function openLetter() {
    const wrapper = document.querySelector('.envelope-wrapper');
    wrapper.classList.toggle('open');

    if (wrapper.classList.contains('open')) {
        createFlowerShower();
    }
}

function createFlowerShower() {
    const container = document.getElementById('flower-container');
    const flowers = ['🌸','🌹','🌷','✨','💖','🌺'];

    for (let i = 0; i < 40; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.innerText = flowers[Math.floor(Math.random()*flowers.length)];

        petal.style.left = Math.random()*100 + 'vw';
        petal.style.fontSize = (Math.random()*20 + 20) + 'px';
        petal.style.animationDuration = (Math.random()*3 + 2) + 's';
        petal.style.animationDelay = Math.random()*2 + 's';

        document.body.appendChild(petal);

        setTimeout(() => petal.remove(), 6000);
    }
}        petal.style.animationDuration = duration;
        
        const delay = Math.random() * 2 + 's';
        petal.style.animationDelay = delay;

        container.appendChild(petal);

        // Clean up the DOM after animation finishes
        setTimeout(() => {
            petal.remove();
        }, (parseFloat(duration) + parseFloat(delay)) * 1000);
    }
}

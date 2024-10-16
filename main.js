let bush = document.querySelector('.bush');
console.log(bush);

let animals = document.querySelectorAll('.animals img');
console.log(animals);

let kolobok = document.querySelector('.kolobok img');

let currentAnimal = 0;

bush.addEventListener('click', function () {
    animals[currentAnimal].style.opacity = 0;
    if (currentAnimal === animals.length - 1) {
        currentAnimal = 0;
    } else {
        currentAnimal++;
    }
    animals[currentAnimal].style.opacity = 1;
})

bush.addEventListener('click', function () {
    kolobok.classList.toggle('active');
    setTimeout(function () {
        kolobok.classList.toggle('active');
    }, 2000);
    console.log(kolobok)
})
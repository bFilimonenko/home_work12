let bush = document.querySelector('.bush');

let animals = document.querySelectorAll('.animals div .animal');

let kolobok = document.querySelector('.kolobok img');

let bushShake = document.querySelectorAll('div.bush_container img');

bush.addEventListener('click', function () {
    bushShake.forEach(bush => bush.classList.toggle('active'));
    setTimeout(function () {
        bushShake.forEach(bush => bush.classList.toggle('active'));
    }, 1500);
})

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
    animals[currentAnimal].classList.toggle('animated')
    setTimeout(function () {
        animals[currentAnimal].classList.toggle('animated')
    }, 2000);

    console.log(animals[currentAnimal]);
})


bush.addEventListener('click', function () {
    kolobok.classList.toggle('active');
    setTimeout(function () {
        kolobok.classList.toggle('active');
    }, 2000);
})


let animalText = document.querySelectorAll('.animals div .text');

let animalAction = document.querySelector('.animals');

animalAction.addEventListener('click', function () {
    animalText.forEach(animal => animal.classList.toggle('active'));
})

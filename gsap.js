const moon = document.querySelector(`.moon`);
const animationState = document.querySelector(`.controls__animation-state`);
const animationRestart = document.querySelector(`.controls__animation-restart`);
const water = document.querySelector(`.water`);

const spanishOne = document.querySelector(`.spanish-one`);
const spanishTwo = document.querySelector(`.spanish-two`);
const spanishThree = document.querySelector(`.spanish-three`);
const englishOne = document.querySelector(`.english-one`);
const englishTwo = document.querySelector(`.english-two`);
const englishThree = document.querySelector(`.english-three`);
const englishFour = document.querySelector(`.english-four`);


gsap.to(moon, {y: `0`, x: `0`, opacity: 1, duration: 1});

let timeline = gsap.timeline({defaults: {duration: 0.3}});

timeline.to(englishFour, {x: 170, y: 100})
        .to(englishThree, {x: 160, y: 50})
        .to(englishTwo, {x: 150})
        .to(englishOne, {x: 280, y: 50})
        .to(spanishThree, {x: -250, y: 40})
        .to(spanishTwo, {x: -200})
        .set(spanishOne, {zIndex: 100})
        .to(spanishOne, {x: -190, y: 100})
        .to(englishOne, {rotation: -30, y: 100, opacity: 0})
        .to(spanishThree, {totation: 30, y: 100, opacity: 0})
        .to(englishTwo, {rotation: -20, y: 100, opacity: 0})
        .to(englishThree, {rotationY: 180})
        .to(englishThree, {x: -200})
        .set(englishFour, {zIndex: 101})
        .to(englishFour, {x: 400, y: 100})
        .to(spanishOne, {rotation: 30, opacity: 0})
        .to(spanishTwo, {rotation: 20, opacity: 0})
        .to(englishFour, {rotationY: 180})
        .to(englishFour, {x: -200});

animationState.addEventListener('click', () => {
    if (animationState.classList.contains(`controls__animation-state--active`)) {
        animationState.classList.remove(`controls__animation-state--active`);
        water.classList.add(`water--paused`);

        timeline.pause();
    } else {
        animationState.classList.add(`controls__animation-state--active`);
        water.classList.remove(`water--paused`);
        timeline.play();
    }
})

animationRestart.addEventListener(`click`, () => {
    timeline.restart();
});
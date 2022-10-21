const sections = document.querySelectorAll('section')
const leftButton = document.querySelector('.left')
const rightButton = document.querySelector('.right')
const carName = document.querySelector('.name')
const carDescription = document.querySelector('.description')

rightButton.addEventListener('click', handleRight)
leftButton.addEventListener('click', handleLeft)

console.log(sections)

let current = 0;

const cars = {
  0: {
    name: 'Tesla Model 3',
    description: 'Offal mumblecore unicorn ethical pitchfork post-ironic poutine shabby chic meh palo santo fingerstache kitsch. Messenger bag farm-to-table wayfarers cronut.'
  },
  1: {
    name: 'BMW 525i',
    description: 'Thundercats flexitarian wolf, direct trade vaporware artisan vinyl portland occupy pork belly. Craft beer occupy schlitz, vegan butcher adaptogen PBR&B taxidermy cardigan paleo.'
  },
  2: {
    name: 'Mazda CX5',
    description: 'Venmo pabst next level ennui organic lo-fi hella seitan lomo austin affogato taiyaki. Air plant leggings selfies yes plz bruh four loko put a bird on it. Kinfolk prism cray single-origin coffee mumblecore normcore jianbing, dreamcatcher tousled master cleanse la croix tacos keffiyeh.'
  },
  3: {
    name: 'Mazda CX9',
    description: 'Hashtag retro try-hard flexitarian put a bird on it heirloom woke vice kogi vegan pork belly. Health goth cliche tumblr succulents green juice. Scenester twee 8-bit umami sustainable,'
  }
}

const {name, description} = cars[current];
carName.innerText = name;
carDescription.innerText = description;

const infoFadeIn = [
  { opacity: 0, top: `50px` },
  { opacity: 1, top: 0 }
];

const infoFadeInTiming = {
  duration: 500,
  iterations: 1,
}
function changeText() {
  const info = document.querySelector('.info');
  const {name, description} = cars[current];
  carName.innerText = name;
  carDescription.innerText = description;
  info.animate(infoFadeIn, infoFadeInTiming);
}

function handleRight() {
  sections[current].style.opacity = 0;
  current++;
  if (current >= sections.length) {
    current = 0;
  }
  sections[current].style.opacity = 1;
  changeText();
}

function handleLeft() {
  sections[current].style.opacity = 0;
  current--;
  if (current < 0) {
    current = sections.length - 1;
  }
  sections[current].style.opacity = 1;
 changeText();
}

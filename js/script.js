const logo = document.getElementById('logo');
const menu = document.getElementById('menu');
const menuShow = document.getElementById('menu-show');
const mainBody = document.getElementById('main');
const menuClose = document.getElementById('menu-close');
const menuList = document.querySelectorAll('.menu-item');

// Mobile menu
const openMenu = () => {
  menuShow.classList.add('show-menu');
  logo.classList.add('blur-filter');
  menu.classList.add('blur-filter');
  mainBody.classList.add('blur-filter');
};

const closeMenu = () => {
  menuShow.classList.remove('show-menu');
  logo.classList.remove('blur-filter');
  menu.classList.remove('blur-filter');
  mainBody.classList.remove('blur-filter');
};

menu.addEventListener('click', openMenu);

menuClose.addEventListener('click', closeMenu);

menuList.forEach((item) => {
  item.addEventListener('click', closeMenu);
});

// Project Details
const cardWorksWrapper = document.getElementById('card-works-wrapper');
const popupCardDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea";
const projectDetails = [
  {
    title: 'Doctor Appointment',
    description:
      'This is a two-app simple doctor appointment web application. This app allows keeping a record of doctor appointments by creating or deleting doctors and appointments. Built with ReactJS, Redux, Ruby on Rails, and PostgreSQL',
    image: './images/large/doctor-appointment.png',
    alt: 'doctor appointment image',
    companyRoles: ['Microverse', 'Student', '2023'],
    skills: ['ReactJS', 'Redux', 'Ruby', 'Rails', 'PostgreSQL'],
    liveLink: { link: 'https://doctor-appointment-3o4a.onrender.com/' },
    sourceLink: { link: 'https://github.com/abel-tefera/doctor-appointment-back-end' },
    buttonText: 'See Project',
    id: 1,
  },
  {
    title: 'Budget App',
    description:
      'Budget App is a Ruby on Rails mobile web application where users can manage their budget: users have a list of transactions associated with a category, so that users can see how much money the users spent on what.',
    image: './images/large/budget-app.png',
    alt: 'budget app image',
    companyRoles: ['Microverse', 'Student', '2023'],
    skills: ['Ruby', 'Rails', 'PostgreSQL'],
    liveLink: { link: 'https://budget-app-3e3v.onrender.com' },
    sourceLink: { link: 'https://github.com/lenkon/Budget-App' },
    buttonText: 'See Project',
    id: 2,
    flip: 1,
  },
  {
    title: 'Metrics App - Community TV Data',
    description:
      'This React capstone project is about building a mobile web application to check a list of metrics (numeric values) that is created making use of React and Redux.',
    image: './images/large/metrics-app.png',
    alt: 'metrics app image',
    companyRoles: ['Microverse', 'Student', '2023'],
    skills: ['React', 'Redux', 'JavaScript'],
    liveLink: { link: 'https://react-capstone-project-metrics-webapp.onrender.com/' },
    sourceLink: { link: 'https://github.com/lenkon/react-capstone-project-metrics-webapp' },
    buttonText: 'See Project',
    id: 3,
  },
  {
    title: 'Capstone 1 - Concert Page',
    description:
      'This is a capstone project for the first module where I create a concert festival page using HTML, CSS and JavaScript.',
    image: './images/large/concert.png',
    alt: 'concert festival image',
    companyRoles: ['Microverse', 'Student', '2022'],
    skills: ['html', 'css', 'javascript'],
    liveLink: { link: 'https://lenkon.github.io/capstone-concert-page/' },
    sourceLink: { link: 'https://github.com/lenkon/capstone-concert-page' },
    buttonText: 'See Project',
    id: 4,
    flip: 1,
  },

  {
    title: 'Awesome Books - ES6',
    description:
      'This is a simple online library application, which is an upgraded version of the Awesome Books app, that has features to keep a record of books in the library. It can add, remove and show books from the library. Built with JavaScript, HTML, CSS, and ES6.',
    image: './images/large/awesome-books.png',
    alt: 'awesome books project image',
    companyRoles: ['Microverse', 'Student', '2022'],
    skills: ['html', 'css', 'javascript'],
    liveLink: { link: 'https://lenkon.github.io/awesome-books-es6/' },
    sourceLink: { link: 'https://github.com/lenkon/awesome-books-es6' },
    buttonText: 'See Project',
    id: 5,
  },
];

// Work details
const createProjectDetails = (item) => {
  const card = document.createElement('div');
  if (item.flip === 1) {
    card.classList.add('card-works-container', 'card-interchange');
  } else {
    card.classList.add('card-works-container');
  }
  const roles = item.companyRoles.map((value, index) => {
    if (index !== 0) {
      return `<div class="card-bullet-separator"></div> <span class="card-canopy card-canopy-details">${value}</span>`;
    }
    return `<span class="card-canopy">${value}</span>`;
  });

  const skillsList = item.skills.map(
    (count) => `<li class="card-tools">${count}</li>`,
  );

  const innerHtml = `
    <img src="${item.image}" alt="${item.alt}">
    <div class="card-sizing">
      <h2 class="card-title-text">${item.title}</h2>
      <div class="card-list">
        ${roles.join('')}
      </div>
      <p class="card-main-text">${item.description}</p>
      <div class="card-tools-list">
        <ul>
          ${skillsList.join('')}
        </ul>
      </div>
      <div class="card-button-box">
        <button card-id=${
  item.id
} class="card-button popup-card-button">See Project</button>
      </div>
    </div>
  `;
  card.innerHTML = innerHtml;
  cardWorksWrapper.appendChild(card);
};

projectDetails.forEach((item) => createProjectDetails(item));

const popupDetails = (item) => {
  const roles = item.companyRoles.map((value, index) => {
    if (index !== 0) {
      return `<div class="card-bullet-separator"></div> <span class="card-canopy card-canopy-details">${value}</span>`;
    }
    return `<span class="card-canopy">${value}</span>`;
  });

  const skillsList = item.skills.map(
    (count) => `<li class="card-tools">${count}</li>`,
  );

  const innerHtml = `<div id="popup-card-container"></div>
  <section id="popup-card-section">
    <article class="popup-card">
      <header class="popup-details-header">
        <nav class="popup-card-details">
          <h2 class="card-title-text">${item.title}</h2>
          <button id="popup-close-button" class="popup-close-button">
            <img src="./images/Popup-close-Icon.png" alt="popup close icon">
          </button>
        </nav>
        <div class="card-list">
          ${roles.join('')}
        </div>
      </header>
      <section class="popup-details-container">
        
          <img src="${item.image}" alt="${item.alt}">
        
        <div class="popup-card-details-container"> 
          <p class="card-main-text popup-card-description">${popupCardDescription}</p>
          <div class="popup-tools-sizing">
            <ul class="card-tools-list">
              ${skillsList.join('')}
            </ul>
            <div class="popup-card-separator"></div>
            <div class="popup-card-links">
              <a href="${
  item.liveLink.link
}" target="_blank" rel="noopener" class="card-button popup-button">
                <span>See live</span>
                <img src="./images/live-link-Icon.png" alt="live link icon">
              </a>
              <a href="${
  item.sourceLink.link
}" target="_blank" rel="noopener" class="card-button popup-button">
                <span>See source</span>
                <img src="./images/github-Vector.png" alt="github link icon">
              </a>

            </div>
          </div>
        </div>
      </section>
    </article>
  </section>`;
  return innerHtml;
};

// Work details popup
const createPopup = (button, callback = () => null) => {
  const id = parseInt(button.getAttribute('card-id'), 10);
  const data = projectDetails.filter((item) => item.id === id);
  // add below
  logo.classList.add('blur-filter');
  menu.classList.add('blur-filter');
  mainBody.classList.add('blur-filter');
  document.getElementById('popup-project-card-section').innerHTML = popupDetails(data[0]);
  return callback();
};

// Close popup
const closePopup = () => {
  const popupCardContainer = document.getElementById('popup-card-container');
  const popupCloseButton = document.getElementById('popup-close-button');

  logo.classList.add('blur-filter');
  menu.classList.add('blur-filter');
  mainBody.classList.add('blur-filter');

  popupCloseButton.addEventListener('click', () => {
    document.getElementById('popup-project-card-section').innerHTML = '';
    document.body.style.margin = '';
    document.body.style.overflow = '';
    logo.classList.remove('blur-filter');
    menu.classList.remove('blur-filter');
    mainBody.classList.remove('blur-filter');
  });
  popupCardContainer.addEventListener('click', () => {
    document.getElementById('popup-project-card-section').innerHTML = '';
    document.body.style.margin = '';
    document.body.style.overflow = '';
  });
  for (let i = 0; i < popupCardContainer.childNodes.length; i += 1) {
    popupCardContainer.childNodes[i].addEventListener('click', (event) => {
      event.stopPropagation();
    });
  }
};

const cardButton = document.querySelectorAll('.popup-card-button');
cardButton.forEach((button) => {
  button.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    createPopup(button, closePopup);
  });
});

// Email validation
const isUpperCaseEmail = (email) => {
  if (/[A-Z]/.test(email)) {
    return true;
  }
  return false;
};

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const errorMsg = document.querySelector('.email-error-msg');
  const validEmail = !isUpperCaseEmail(email);

  if (validEmail) {
    errorMsg.style.display = 'none';
    form.submit();
  } else {
    errorMsg.style.display = 'block';
    errorMsg.innerHTML = 'Please write email in small letters';
  }
});

// Preserve form data
const formInput = document.getElementById('form');

const store = (key, value) => {
  localStorage.setItem(key, value);
};

const saveForm = (event) => {
  const data = {};
  event.preventDefault();
  if (formInput.elements.name.value) {
    data.name = formInput.elements.name.value;
  }
  if (formInput.elements.email.value) {
    data.email = formInput.elements.email.value;
  }
  if (formInput.elements.message.value) {
    data.message = formInput.elements.message.value;
  }
  store('data', JSON.stringify(data));
  window.localStorage.setItem('formdata', data);
};
formInput.elements.name.addEventListener('blur', saveForm);
formInput.elements.email.addEventListener('blur', saveForm);
formInput.elements.message.addEventListener('blur', saveForm);

const showSavedData = () => {
  if (localStorage.getItem('data')) {
    const userData = JSON.parse(localStorage.getItem('data'));
    formInput.elements.name.value = userData.name;
    formInput.elements.email.value = userData.email;
    formInput.elements.message.value = userData.message;
  }
};

showSavedData();

formInput.addEventListener('submit', saveForm);

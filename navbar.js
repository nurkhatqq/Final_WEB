const navbar = document.createElement('nav');
navbar.className = 'navbar navbar-expand-lg navbar-dark bg-dark';

const brand = document.createElement('a');
brand.className = 'navbar-brand';
brand.href = 'index.html';

const logo = document.createElement('img');
logo.src = 'logo.png';
logo.className = 'logo';
logo.alt = 'Your Gym';

brand.appendChild(logo);
navbar.appendChild(brand);

const toggler = document.createElement('button');
toggler.className = 'navbar-toggler';
toggler.type = 'button';
toggler.dataset.toggle = 'collapse';
toggler.dataset.target = '#navbarNav';
toggler.setAttribute('aria-controls', 'navbarNav');
toggler.setAttribute('aria-expanded', 'false');
toggler.setAttribute('aria-label', 'Toggle navigation');

const togglerIcon = document.createElement('span');
togglerIcon.className = 'navbar-toggler-icon';
toggler.appendChild(togglerIcon);
navbar.appendChild(toggler);

const collapse = document.createElement('div');
collapse.className = 'collapse navbar-collapse';
collapse.id = 'navbarNav';

const navList = document.createElement('ul');
navList.className = 'navbar-nav ml-auto';

const homeNavItem = document.createElement('li');
homeNavItem.className = 'nav-item active';

const homeLink = document.createElement('a');
homeLink.className = 'nav-link';
homeLink.href = 'index.html';
homeLink.textContent = 'Home';

homeNavItem.appendChild(homeLink);
navList.appendChild(homeNavItem);

const trainersNavItem = document.createElement('li');
trainersNavItem.className = 'nav-item';

const trainersLink = document.createElement('a');
trainersLink.className = 'nav-link';
trainersLink.href = 'trainers.html';
trainersLink.textContent = 'Trainers';

trainersNavItem.appendChild(trainersLink);
navList.appendChild(trainersNavItem);

const storeNavItem = document.createElement('li');
storeNavItem.className = 'nav-item';

const storeLink = document.createElement('a');
storeLink.className = 'nav-link';
storeLink.href = 'store.html';
storeLink.textContent = 'Store';

storeNavItem.appendChild(storeLink);
navList.appendChild(storeNavItem);

const priceNavItem = document.createElement('li');
priceNavItem.className = 'nav-item';

const priceLink = document.createElement('a');
priceLink.className = 'nav-link';
priceLink.href = 'price.html';
priceLink.textContent = 'Price';

priceNavItem.appendChild(priceLink);
navList.appendChild(priceNavItem);

const contactsNavItem = document.createElement('li');
contactsNavItem.className = 'nav-item';

const contactsLink = document.createElement('a');
contactsLink.className = 'nav-link';
contactsLink.href = 'contacts.html';
contactsLink.textContent = 'Contacts';

contactsNavItem.appendChild(contactsLink);
navList.appendChild(contactsNavItem);

collapse.appendChild(navList);
navbar.appendChild(collapse);

document.body.appendChild(navbar);
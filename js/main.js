const menuItems = [
  { id: 'classic-veg', name: 'Classic Veg Steamed', category: 'Steamed', description: 'Garden-fresh cabbage, carrot, and ginger in our soft hand-folded wrapper.', price: 149, type: 'Veg', tag: 'Best seller', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80', alt: 'Fresh steamed dumplings served with red dipping sauce' },
  { id: 'chicken-steamed', name: 'Himalayan Chicken', category: 'Steamed', description: 'Juicy chicken, spring onion, and just the right amount of warming spice.', price: 179, type: 'Non-veg', tag: 'House favorite', image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80', alt: 'A freshly cooked savory dumpling dish' },
  { id: 'paneer-fried', name: 'Crispy Paneer Fried', category: 'Fried', description: 'Golden, crunchy edges wrapped around our spiced paneer and herb filling.', price: 169, type: 'Veg', tag: 'Golden & crispy', image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=800&q=80', alt: 'Golden pan-fried dumplings on a serving plate' },
  { id: 'chicken-fried', name: 'Chilli Chicken Fried', category: 'Fried', description: 'A crisp shell, savory chicken filling, and a cheeky chilli-soy dip.', price: 199, type: 'Non-veg', tag: 'A little heat', image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?auto=format&fit=crop&w=800&q=80', alt: 'Crispy golden dumplings ready to share' },
  { id: 'tandoori-paneer', name: 'Tandoori Paneer', category: 'Tandoori', description: 'Smoky tandoori-spiced paneer, charred edges, and a cooling mint dip.', price: 199, type: 'Veg', tag: 'Smoky favorite', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80', alt: 'Spiced grilled dumplings with fresh herbs' },
  { id: 'tandoori-chicken', name: 'Tandoori Chicken', category: 'Tandoori', description: 'Our chicken classic gets the clay-oven treatment. Smoky, juicy, lovely.', price: 229, type: 'Non-veg', tag: 'From the tandoor', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80', alt: 'Tandoori-style chicken dish with bright spices' },
  { id: 'kurkure-veg', name: 'Kurkure Veg Crunch', category: 'Kurkure', description: 'A seriously crunchy coat around a colorful, seasoned vegetable center.', price: 189, type: 'Veg', tag: 'Extra crunch', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', alt: 'Crispy golden bites served with a dipping sauce' },
  { id: 'kurkure-chicken', name: 'Kurkure Chicken', category: 'Kurkure', description: 'Crispy outside, tender chicken inside. Best friends with our chilli dip.', price: 219, type: 'Non-veg', tag: 'Crunch time', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80', alt: 'Crunchy fried chicken pieces served hot' },
  { id: 'cheese-corn', name: 'Cheesy Corn Melt', category: 'Cheese', description: 'Sweet corn, gooey cheese, and a peppery little kick in every bite.', price: 189, type: 'Veg', tag: 'Cheese pull', image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80', alt: 'Warm savory bites with a golden, cheesy filling' },
  { id: 'cheese-chicken', name: 'Chicken & Cheese', category: 'Cheese', description: 'Our tender chicken filling gets the full, melty cheese treatment.', price: 229, type: 'Non-veg', tag: 'Comfort food', image: 'https://images.unsplash.com/photo-1603088549155-6ae9395b928f?auto=format&fit=crop&w=800&q=80', alt: 'A savory chicken and cheese dish fresh from the kitchen' },
  { id: 'chocolate', name: 'Choco Lava Momo', category: 'Chocolate', description: 'A soft little parcel with warm, molten chocolate inside. Dessert sorted.', price: 159, type: 'Veg', tag: 'Sweet finish', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80', alt: 'Rich chocolate dessert with a soft molten center' },
  { id: 'banana-chocolate', name: 'Choco Banana Bliss', category: 'Chocolate', description: 'Banana, chocolate, and a dusting of cocoa in a lightly crisp wrapper.', price: 169, type: 'Veg', tag: 'Sweet & sunny', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80', alt: 'Chocolate dessert with a rich cocoa finish' }
];

const testimonials = [
  { quote: 'The chilli chicken momos are unreal. We came for a quick lunch and ended up ordering another round for the table.', name: 'Aarav Mehta', location: 'Delhi · regular since 2022' },
  { quote: 'Finally, a place with genuinely lovely vegetarian options. The paneer fried momos have become our Friday ritual.', name: 'Riya Kapoor', location: 'Delhi · neighborhood local' },
  { quote: 'Warm people, beautiful food, and the kind of atmosphere that makes a meal feel like a little celebration.', name: 'Kabir Anand', location: 'Delhi · momo enthusiast' }
];

const money = (amount) => `₹${amount}`;
const cartStorageKey = 'momoMagicCart';
let cart = readCart();

function readCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem(cartStorageKey) || '[]');
    if (!Array.isArray(savedCart)) throw new TypeError('Saved cart is not an array.');
    return savedCart.filter((entry) => menuItems.some((item) => item.id === entry.id) && Number.isInteger(entry.quantity) && entry.quantity > 0);
  } catch (error) {
    console.error('Unable to read the saved Momo Magic cart:', error);
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(cartStorageKey, JSON.stringify(cart));
  } catch (error) {
    console.error('Unable to save the Momo Magic cart:', error);
  }
}

function renderFoodCard(item, extraClass = '') {
  const typeClass = item.type === 'Veg' ? 'veg' : 'non-veg';
  return `<article class="food-card ${extraClass}">
    <div class="food-image-wrap"><img class="food-image" src="${item.image}" alt="${item.alt}" loading="lazy"><span class="food-badge">${item.tag}</span></div>
    <div class="food-card-content">
      <div class="food-card-top"><h3>${item.name}</h3><span class="food-price">${money(item.price)}</span></div>
      <p>${item.description}</p>
      <div class="food-card-bottom"><span class="food-type ${typeClass}"><i class="type-mark" aria-hidden="true"></i>${item.type}</span><button class="add-cart-button" type="button" data-add-to-cart="${item.id}" aria-label="Add ${item.name} to cart">Add to cart +</button></div>
    </div>
  </article>`;
}

const menuGrid = document.querySelector('#menu-items');
const menuCategoryButtons = [...document.querySelectorAll('.category-button')];
let selectedCategory = 'All';

function renderMenu() {
  if (!menuGrid) return;
  const query = document.querySelector('#menu-search').value.trim().toLowerCase();
  const vegOnly = document.querySelector('#veg-only').checked;
  const nonVegOnly = document.querySelector('#nonveg-only').checked;
  const matchingItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = `${item.name} ${item.category} ${item.description} ${item.type}`.toLowerCase().includes(query);
    const matchesDiet = (!vegOnly || item.type === 'Veg') && (!nonVegOnly || item.type === 'Non-veg');
    return matchesCategory && matchesSearch && matchesDiet;
  });
  menuGrid.innerHTML = matchingItems.map((item) => renderFoodCard(item, 'menu-card')).join('');
  document.querySelector('#menu-results-count').textContent = `${matchingItems.length} ${matchingItems.length === 1 ? 'momo' : 'momos'} to make you happy`;
  document.querySelector('#menu-no-results').hidden = matchingItems.length > 0;
}

function renderFeatured() {
  const featured = document.querySelector('#featured-momos');
  if (!featured) return;
  featured.innerHTML = [menuItems[0], menuItems[4], menuItems[10]].map((item) => renderFoodCard(item, 'featured-card')).join('');
}

function updateCart() {
  const itemCount = cart.reduce((sum, entry) => sum + entry.quantity, 0);
  const total = cart.reduce((sum, entry) => {
    const item = menuItems.find((menuItem) => menuItem.id === entry.id);
    return sum + (item ? item.price * entry.quantity : 0);
  }, 0);
  document.querySelectorAll('.cart-count').forEach((counter) => { counter.textContent = String(itemCount); });
  document.querySelectorAll('.cart-total').forEach((element) => { element.textContent = money(total); });
  const panel = document.querySelector('.cart-panel');
  const cartItems = document.querySelector('.cart-items');
  if (!panel || !cartItems) return;
  panel.classList.toggle('is-empty', itemCount === 0);
  cartItems.innerHTML = cart.map((entry) => {
    const item = menuItems.find((menuItem) => menuItem.id === entry.id);
    if (!item) return '';
    return `<article class="cart-line">
      <img src="${item.image}" alt="${item.alt}" loading="lazy">
      <div><h3>${item.name}</h3><span>${money(item.price)} each</span><div class="quantity-control"><button type="button" data-cart-change="-1" data-item-id="${item.id}" aria-label="Remove one ${item.name}">−</button><span>${entry.quantity}</span><button type="button" data-cart-change="1" data-item-id="${item.id}" aria-label="Add one ${item.name}">+</button></div></div>
      <span class="cart-line-price">${money(item.price * entry.quantity)}</span>
    </article>`;
  }).join('');
}

function changeCart(itemId, amount) {
  const existing = cart.find((entry) => entry.id === itemId);
  if (existing) existing.quantity += amount;
  else if (amount > 0 && menuItems.some((item) => item.id === itemId)) cart.push({ id: itemId, quantity: amount });
  cart = cart.filter((entry) => entry.quantity > 0);
  saveCart();
  updateCart();
}

function setCartOpen(isOpen) {
  const panel = document.querySelector('.cart-panel');
  const overlay = document.querySelector('.cart-overlay');
  if (!panel || !overlay) return;
  panel.classList.toggle('is-open', isOpen);
  panel.setAttribute('aria-hidden', String(!isOpen));
  overlay.hidden = !isOpen;
  document.body.classList.toggle('cart-open', isOpen);
  if (isOpen) panel.querySelector('.cart-close').focus();
}

function setupNavigation() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    links.classList.toggle('is-open', isOpen);
  });
  links.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
    links.classList.remove('is-open');
  }));
}

function setupTheme() {
  const button = document.querySelector('.theme-toggle');
  if (!button) return;
  const savedTheme = localStorage.getItem('momoMagicTheme');
  if (savedTheme === 'dark') document.body.classList.add('dark-mode');
  const updateButton = () => {
    const darkMode = document.body.classList.contains('dark-mode');
    button.setAttribute('aria-label', `Switch to ${darkMode ? 'light' : 'dark'} mode`);
    button.querySelector('span').textContent = darkMode ? '☀' : '☾';
  };
  updateButton();
  button.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('momoMagicTheme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    updateButton();
  });
}

function setupTestimonials() {
  const quote = document.querySelector('#testimonial-quote');
  const dots = document.querySelector('#testimonial-dots');
  if (!quote || !dots) return;
  let currentIndex = 0;
  let rotationTimer;
  const showTestimonial = (index) => {
    currentIndex = (index + testimonials.length) % testimonials.length;
    const testimonial = testimonials[currentIndex];
    quote.textContent = `“${testimonial.quote}”`;
    document.querySelector('#testimonial-name').textContent = testimonial.name;
    document.querySelector('#testimonial-location').textContent = testimonial.location;
    document.querySelector('#testimonial-initials').textContent = testimonial.name.split(' ').map((part) => part[0]).join('');
    [...dots.children].forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === currentIndex);
      dot.setAttribute('aria-current', String(dotIndex === currentIndex));
    });
  };
  dots.innerHTML = testimonials.map((testimonial, index) => `<button type="button" class="slider-dot${index === 0 ? ' active' : ''}" aria-label="Show testimonial from ${testimonial.name}" aria-current="${index === 0}"></button>`).join('');
  const restartRotation = () => {
    window.clearInterval(rotationTimer);
    rotationTimer = window.setInterval(() => showTestimonial(currentIndex + 1), 6000);
  };
  document.querySelector('[data-testimonial-prev]').addEventListener('click', () => { showTestimonial(currentIndex - 1); restartRotation(); });
  document.querySelector('[data-testimonial-next]').addEventListener('click', () => { showTestimonial(currentIndex + 1); restartRotation(); });
  dots.addEventListener('click', (event) => {
    const target = event.target.closest('.slider-dot');
    if (!target) return;
    showTestimonial([...dots.children].indexOf(target));
    restartRotation();
  });
  showTestimonial(0);
  restartRotation();
}

function setupContactForm() {
  const form = document.querySelector('#contact-form');
  if (!form) return;
  const fields = {
    name: { input: form.elements.name, error: document.querySelector('#name-error'), validate: (value) => value.trim().length > 0 ? '' : 'Please enter your name.' },
    email: { input: form.elements.email, error: document.querySelector('#email-error'), validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()) ? '' : 'Please enter a valid email address.' },
    phone: { input: form.elements.phone, error: document.querySelector('#phone-error'), validate: (value) => /^\d{10}$/.test(value.trim()) ? '' : 'Please enter a 10-digit phone number.' },
    message: { input: form.elements.message, error: document.querySelector('#message-error'), validate: (value) => value.trim().length >= 10 ? '' : 'Your message must be at least 10 characters.' }
  };
  Object.values(fields).forEach(({ input, error }) => {
    input.addEventListener('input', () => {
      if (input.getAttribute('aria-invalid') === 'true') {
        error.textContent = '';
        input.removeAttribute('aria-invalid');
      }
    });
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let firstInvalidField;
    for (const [fieldName, field] of Object.entries(fields)) {
      const errorMessage = field.validate(field.input.value);
      field.error.textContent = errorMessage;
      field.input.setAttribute('aria-invalid', String(Boolean(errorMessage)));
      if (errorMessage && !firstInvalidField) firstInvalidField = field.input;
      if (fieldName === 'name' && !field.input.value.trim()) field.error.textContent = 'Please enter your name.';
    }
    if (firstInvalidField) {
      firstInvalidField.focus();
      document.querySelector('#form-success').hidden = true;
      return;
    }
    document.querySelector('#form-success').hidden = false;
    form.reset();
    Object.values(fields).forEach(({ input }) => input.removeAttribute('aria-invalid'));
  });
}

function setupScrollEffects() {
  const backToTop = document.querySelector('.back-to-top');
  const onScroll = () => backToTop.classList.toggle('visible', window.scrollY > 450);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  const fadeElements = document.querySelectorAll('.fade-in');
  if (!('IntersectionObserver' in window)) {
    fadeElements.forEach((element) => element.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  fadeElements.forEach((element) => observer.observe(element));
}

document.addEventListener('click', (event) => {
  const addButton = event.target.closest('[data-add-to-cart]');
  if (addButton) {
    changeCart(addButton.dataset.addToCart, 1);
    const originalText = addButton.textContent;
    addButton.textContent = 'Added ✓';
    window.setTimeout(() => { addButton.textContent = originalText; }, 1000);
  }
  const changeButton = event.target.closest('[data-cart-change]');
  if (changeButton) changeCart(changeButton.dataset.itemId, Number(changeButton.dataset.cartChange));
});

document.querySelectorAll('.cart-button').forEach((button) => button.addEventListener('click', () => setCartOpen(true)));
document.querySelectorAll('.cart-close').forEach((button) => button.addEventListener('click', () => setCartOpen(false)));
document.querySelectorAll('.cart-overlay').forEach((overlay) => overlay.addEventListener('click', () => setCartOpen(false)));
document.querySelectorAll('.checkout-button').forEach((button) => button.addEventListener('click', () => {
  let message = document.querySelector('.checkout-message');
  if (!message) {
    message = document.createElement('p');
    message.className = 'checkout-message';
    button.insertAdjacentElement('afterend', message);
  }
  message.textContent = 'Online checkout is not connected yet. Please call us to place your order.';
}));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setCartOpen(false);
});

document.querySelectorAll('[data-year]').forEach((element) => { element.textContent = String(new Date().getFullYear()); });
menuCategoryButtons.forEach((button) => button.addEventListener('click', () => {
  selectedCategory = button.dataset.category;
  menuCategoryButtons.forEach((categoryButton) => {
    const isActive = categoryButton === button;
    categoryButton.classList.toggle('active', isActive);
    categoryButton.setAttribute('aria-pressed', String(isActive));
  });
  renderMenu();
}));
document.querySelector('#menu-search')?.addEventListener('input', renderMenu);
document.querySelector('#veg-only')?.addEventListener('change', (event) => {
  if (event.target.checked) document.querySelector('#nonveg-only').checked = false;
  renderMenu();
});
document.querySelector('#nonveg-only')?.addEventListener('change', (event) => {
  if (event.target.checked) document.querySelector('#veg-only').checked = false;
  renderMenu();
});

setupNavigation();
setupTheme();
setupTestimonials();
setupContactForm();
setupScrollEffects();
renderFeatured();
renderMenu();
updateCart();

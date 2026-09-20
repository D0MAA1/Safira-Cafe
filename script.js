const menuData = [
  { id: 'coffee', number: '01', name: 'Coffee', accent: 'Earthy espresso, perfectly pulled. The familiar made extraordinary.', className: 'coffee', features: [
    ['Spanish Latte', 'Espresso · milk · caramel', '85 EGP', 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85'],
    ['Cloud Cappuccino', 'Espresso · milk foam', '75 EGP', 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=85'],
    ['Iced Caramel', 'Espresso · caramel · ice', '90 EGP', 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=85']],
    items: [['Americano','Espresso · water','60 EGP'],['Flat White','Double ristretto · milk','75 EGP'],['Vanilla Latte','Espresso · milk · vanilla','80 EGP'],['Mocha','Espresso · chocolate · milk','85 EGP'],['Cold Brew','Slow-steeped coffee · ice','75 EGP'],['Cortado','Espresso · steamed milk','65 EGP']] },
  { id: 'non-coffee', number: '02', name: 'Non-<em>coffee</em>', accent: 'Bright, botanical, and brewed for any hour of the day.', className: 'non-coffee', features: [
    ['Matcha Latte', 'Ceremonial matcha · milk', '95 EGP', 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=85'],
    ['Berry Hibiscus', 'Hibiscus · strawberry · ice', '80 EGP', 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=85'],
    ['Citrus Cooler', 'Lemon · mint · soda', '75 EGP', 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=85']],
    items: [['Hot Chocolate','Dark cocoa · milk','80 EGP'],['Iced Matcha','Matcha · oat milk · ice','95 EGP'],['Peach Iced Tea','Black tea · peach','75 EGP'],['Mango Passion','Mango · passionfruit','85 EGP'],['Fresh Lemonade','Lemon · mint','65 EGP'],['Chai Latte','Spiced black tea · milk','80 EGP']] },
  { id: 'signature', number: '03', name: '<em>Safira</em><br>signatures', accent: 'A few favourites, made only our way. Stay for one more.', className: 'signature', features: [
    ['Tahini Date Latte', 'Espresso · date · tahini cream', '105 EGP', 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85'],
    ['Rose Pistachio', 'Milk · rose · pistachio', '110 EGP', 'https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?auto=format&fit=crop&w=800&q=85'],
    ['Saffron Fizz', 'Saffron · citrus · soda', '100 EGP', 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=85']],
    items: [['Olive Oil Espresso','Espresso · olive oil crema','95 EGP'],['Cardamom Cold Brew','Cold brew · cardamom','90 EGP'],['Black Sesame Mocha','Cocoa · sesame · espresso','100 EGP'],['Honey Cloud','Espresso · wildflower honey','100 EGP']] },
  { id: 'desserts', number: '04', name: '<em>Sweet</em><br>things', accent: 'Small comforts, composed with buttery precision.', className: 'desserts', features: [
    ['Saffron Cake', 'Almond · saffron · cream', '95 EGP', 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85'],
    ['Tiramisu Cup', 'Mascarpone · coffee · cocoa', '110 EGP', 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=85'],
    ['Date Cookie', 'Medjool date · sea salt', '50 EGP', 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=85']],
    items: [['Basque Cheesecake','Vanilla bean · berry compote','105 EGP'],['Chocolate Mousse','70% cocoa · cream','90 EGP'],['Banana Bread','Brown butter · walnut','65 EGP'],['Pistachio Croissant','Pistachio frangipane','75 EGP'],['Daily Loaf','Ask us what is baking','60 EGP'],['Espresso Cookie','Dark chocolate · espresso','50 EGP']] },
  { id: 'specials', number: '05', name: 'The <em>seasonal</em><br>edit', accent: 'Brief encounters worth lingering over. Available this season only.', className: 'specials', features: [
    ['Fig Leaf Latte', 'Fig leaf · espresso · oat milk', '115 EGP', 'https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&w=1100&q=85'],
    ['Plum Tonic', 'Plum · cold brew · tonic', '105 EGP', 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=85'],
    ['Wild Honey Toast', 'Ricotta · honeycomb · thyme', '120 EGP', 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=85']],
    items: [['September Affogato','Vanilla gelato · espresso','95 EGP'],['Spiced Pear Tea','Pear · cinnamon · black tea','85 EGP'],['Plum Galette','Plum · almond · butter pastry','100 EGP'],['Nightcap Espresso','Espresso · orange peel','70 EGP']] }
];

const root = document.querySelector('#menu-root');
const featureTemplate = ([name, description, price, image]) => `<figure class="feature"><div class="feature-image"><img src="${image}" alt="${name}" loading="lazy"></div><figcaption class="feature-meta"><h3>${name}</h3><strong>${price}</strong><p>${description}</p></figcaption></figure>`;
const itemTemplate = ([name, description, price]) => `<article class="menu-item"><h3>${name}</h3><b>${price}</b><p>${description}</p></article>`;
root.innerHTML = menuData.map(section => `<section class="menu-section ${section.className}" id="${section.id}"><div class="section-head"><span class="section-index">${section.number} / 05</span><h2 class="section-title">${section.name}</h2><p class="section-note">${section.accent}</p></div><div class="feature-grid">${section.features.map(featureTemplate).join('')}</div><div class="menu-list">${section.items.map(itemTemplate).join('')}</div></section>`).join('');

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
menuButton.addEventListener('click', () => { const open = mobileNav.classList.toggle('open'); menuButton.classList.toggle('active', open); menuButton.setAttribute('aria-expanded', open); menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); });
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { mobileNav.classList.remove('open'); menuButton.classList.remove('active'); menuButton.setAttribute('aria-expanded', 'false'); }));
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.menu-section').forEach(section => observer.observe(section));

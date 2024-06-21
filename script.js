const menuItems = [
    { name: 'Home', link: '#' },
    { name: 'Kundli', link: '#' },
    { name: 'Matchmaking', link: '#' },
    { name: 'Horoscope', link: '#' },
    { name: 'Live', link: '#' },
    { name: 'Panchang', link: '#' },
    { name: 'Calendar', link: '#' },
    { name: 'Resource', link: '#' },
    { name: 'Blog', link: '#' }
];

const nav = document.getElementById('main-nav');
const ul = document.createElement('ul');

menuItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = item.name;
    a.href = item.link;
    li.appendChild(a);
    ul.appendChild(li);
});

nav.appendChild(ul);

document.querySelector('.chat-btn').addEventListener('click', () => {
    alert('Chat with Astrologer clicked');
});

document.querySelector('.call-btn').addEventListener('click', () => {
    alert('Talk with Astrologer clicked');
});

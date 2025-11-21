// 🌸 Kuromi Website JavaScript

// Language Toggle
const langToggle = document.getElementById('langToggle');
const body = document.body;

// Check for saved language preference
const savedLang = localStorage.getItem('language') || 'japanese';
body.classList.add(savedLang);
updateLangButton();

langToggle.addEventListener('click', () => {
    if (body.classList.contains('japanese')) {
        body.classList.remove('japanese');
        body.classList.add('english');
        localStorage.setItem('language', 'english');
    } else {
        body.classList.remove('english');
        body.classList.add('japanese');
        localStorage.setItem('language', 'japanese');
    }
    updateLangButton();
});

function updateLangButton() {
    if (body.classList.contains('japanese')) {
        langToggle.textContent = 'English';
    } else {
        langToggle.textContent = '日本語';
    }
}

// 🌸 Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);
});

// 🌸 Smooth Scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// 🌸 Navigation Active State
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// 🌸 Music Player
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const nextBtn = document.getElementById('nextBtn');
const bgMusic = document.getElementById('bgMusic');
const progressBar = document.querySelector('.progress');

let isPlaying = false;

playBtn.addEventListener('click', () => {
    bgMusic.play();
    isPlaying = true;
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';
});

pauseBtn.addEventListener('click', () => {
    bgMusic.pause();
    isPlaying = false;
    pauseBtn.style.display = 'none';
    playBtn.style.display = 'inline-block';
});

// Simulate progress (since we're using a placeholder audio)
setInterval(() => {
    if (isPlaying) {
        const currentWidth = parseFloat(progressBar.style.width) || 0;
        if (currentWidth < 100) {
            progressBar.style.width = (currentWidth + 0.5) + '%';
        } else {
            progressBar.style.width = '0%';
        }
    }
}, 100);

// 🌸 Contact Form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Show success message (in Japanese or English based on current language)
    const isJapanese = body.classList.contains('japanese');
    const successMessage = isJapanese 
        ? `ありがとう、${name}！メッセージを受け取ったよ！💜`
        : `Thanks, ${name}! I received your message!💜`;
    
    alert(successMessage);
    
    // Reset form
    contactForm.reset();
});

// 🌸 Gallery Items Animation
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
    item.addEventListener('click', () => {
        // Add a cute animation when clicked
        item.style.transform = 'scale(0.95)';
        setTimeout(() => {
            item.style.transform = 'scale(1)';
        }, 150);
        
        // Show a cute message
        const isJapanese = body.classList.contains('japanese');
        const messages = {
            cute: isJapanese ? 'かわいいね！' : 'So cute!',
            cool: isJapanese ? 'かっこいい！' : 'So cool!',
            mischief: isJapanese ? 'いたずらしちゃう！' : 'Time for mischief!',
            friends: isJapanese ? 'ともだちだね！' : 'We\'re friends!'
        };
        
        const category = item.dataset.category;
        alert(messages[category]);
    });
});

// 🌸 Floating Elements Animation
const floatingItems = document.querySelectorAll('.floating-item');

floatingItems.forEach((item, index) => {
    const duration = 10 + (index * 2);
    const delay = index * 1;
    item.style.animation = `float-diagonal ${duration}s infinite linear ${delay}s`;
});

// 🌸 Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-image');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// 🌸 Easter Egg - Konami Code
let konamiCode = [];
const correctCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > correctCode.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === correctCode.join(',')) {
        // Secret Kuromi mode!
        document.body.style.animation = 'rainbow 2s infinite';
        const isJapanese = body.classList.contains('japanese');
        alert(isJapanese ? 'ひみつのクロミモード！' : 'Secret Kuromi mode activated!');
        
        // Reset after 5 seconds
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
        
        konamiCode = [];
    }
});

// Add rainbow animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// 🌸 Console Message
console.log(`
🖤💜 Welcome to Kuromi's World! 💜🖤

    ／＞　　フ
   | 　_　_| 
  ／'ミ＿xノ 
 /　　　 |
/　 ヽ　　 ﾉ
│　　|　|　|
／￣|　　 |　|　|
(￣ヽ＿_ヽ_)__)
＼二つ

Thanks for visiting! 💜
`);

// 🌸 Add some sparkle on click
document.addEventListener('click', (e) => {
    if (e.target.closest('button') || e.target.closest('a')) return;
    
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = 'sparkle 1s ease-out forwards';
    sparkle.style.fontSize = '1.5rem';
    sparkle.style.zIndex = '9999';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
});

// Add sparkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle {
        0% { transform: scale(0) rotate(0deg); opacity: 1; }
        100% { transform: scale(2) rotate(180deg); opacity: 0; }
    }
`;
document.head.appendChild(sparkleStyle);
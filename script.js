// ============================
// Typing Effect
// ============================

const text = "Happy 26th Birthday, Bhai ❤️";
const typing = document.getElementById("typing");

let i = 0;

function typeWriter() {

    if (i < text.length) {

        typing.innerHTML += text.charAt(i);
        i++;

        setTimeout(typeWriter, 90);

    }

}

window.addEventListener("load", () => {

    setTimeout(typeWriter, 3500);

});

// ============================
// Loader
// ============================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 3000);

});

// ============================
// Gift Button
// ============================

const btn = document.getElementById("giftBtn");
const main = document.getElementById("mainContent");

main.style.display = "none";

btn.addEventListener("click", () => {

    main.style.display = "block";

    main.scrollIntoView({

        behavior: "smooth"

    });

    confettiBurst();

});

// ============================
// Floating Hearts
// ============================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.top = window.innerHeight + "px";

    heart.style.fontSize = (18 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 5000);

}

setInterval(createHeart, 900);

// ============================
// Cake Click
// ============================

const cake = document.getElementById("cake");

cake.addEventListener("click", () => {

    for (let i = 0; i < 35; i++) {

        setTimeout(createHeart, i * 80);

    }

    confettiBurst();

});

// ============================
// Scroll Reveal
// ============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(80px)";
    section.style.transition = "1s";

    observer.observe(section);

});

// ============================
// Image Lightbox
// ============================

const images = document.querySelectorAll(".grid img");

const lightbox = document.createElement("div");

lightbox.style.position = "fixed";
lightbox.style.top = "0";
lightbox.style.left = "0";
lightbox.style.width = "100%";
lightbox.style.height = "100%";
lightbox.style.background = "rgba(0,0,0,.92)";
lightbox.style.display = "none";
lightbox.style.justifyContent = "center";
lightbox.style.alignItems = "center";
lightbox.style.cursor = "pointer";
lightbox.style.zIndex = "999999";

const img = document.createElement("img");

img.style.maxWidth = "90%";
img.style.maxHeight = "90%";
img.style.borderRadius = "20px";
img.style.boxShadow = "0 0 60px rgba(255,255,255,.15)";

lightbox.appendChild(img);

document.body.appendChild(lightbox);

images.forEach(photo => {

    photo.addEventListener("click", () => {

        img.src = photo.src;

        lightbox.style.display = "flex";

    });

});

lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

// ============================
// Confetti
// ============================

function confettiBurst() {

    for (let i = 0; i < 180; i++) {

        const piece = document.createElement("div");

        piece.style.position = "fixed";
        piece.style.width = "8px";
        piece.style.height = "14px";

        const colors = [
            "#FFD166",
            "#FF6B6B",
            "#4ECDC4",
            "#FFFFFF",
            "#F9C74F",
            "#90BE6D"
        ];

        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.left = Math.random() * window.innerWidth + "px";
        piece.style.top = "-20px";

        piece.style.opacity = "1";
        piece.style.borderRadius = "2px";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        piece.style.transition =
            `${3 + Math.random() * 3}s linear`;

        document.body.appendChild(piece);

        requestAnimationFrame(() => {

            piece.style.top = window.innerHeight + 50 + "px";

            piece.style.left =
                (parseFloat(piece.style.left) +
                (Math.random() - 0.5) * 300) + "px";

            piece.style.opacity = "0";

            piece.style.transform =
                `rotate(${Math.random() * 1080}deg)`;

        });

        setTimeout(() => {

            piece.remove();

        }, 6000);

    }

}

// ============================
// Auto Confetti
// ============================

setTimeout(() => {

    confettiBurst();

}, 4200);
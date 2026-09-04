function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

const particleBox = document.getElementById("particles");

for (let i = 0; i < 70; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = (5 + Math.random() * 8) + "s";
    p.style.animationDelay = Math.random() * 8 + "s";
    p.style.opacity = 0.2 + Math.random() * 0.8;
    particleBox.appendChild(p);
}

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    { threshold: .15 }
);

document.querySelectorAll(
    ".story-text, .butter-text, .card, .heading, .dahi-content"
).forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 1s cubic-bezier(.2,.8,.2,1)";
    observer.observe(el);
});

document.querySelectorAll(".card, .krishna-card").forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y / rect.height) - .5) * -8;
        const rotateY = ((x / rect.width) - .5) * 8;
        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.02)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
    });
});
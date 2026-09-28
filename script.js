/* ==========================================
   APOLOGY WEBSITE
   ========================================== */


/* ------------------------------------------
   OPEN LETTER
------------------------------------------ */

function openLetter() {

    const intro = document.getElementById("intro");
    const envelope = document.getElementById("envelopeSection");

    intro.classList.add("hide");

    setTimeout(() => {

        intro.classList.add("hidden");
        envelope.classList.remove("hidden");

    }, 1000);
}


/* ------------------------------------------
   OPEN ENVELOPE
------------------------------------------ */

let envelopeOpened = false;

function openEnvelope() {

    const envelope = document.querySelector(".envelope");
    const envelopeSection = document.getElementById("envelopeSection");
    const journal = document.getElementById("journal");

    if (envelopeOpened) return;

    envelopeOpened = true;

    envelope.classList.add("open");

    setTimeout(() => {

        envelopeSection.style.opacity = "0";
        envelopeSection.style.transform = "translateY(-30px)";

    }, 1100);

    setTimeout(() => {

        envelopeSection.classList.add("hidden");

        journal.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        revealPages();

    }, 1900);
}


/* ------------------------------------------
   REVEAL PAPER PAGES
------------------------------------------ */

function revealPages() {

    const pages = document.querySelectorAll(".paper");

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.12
        }

    );

    pages.forEach(page => {

        observer.observe(page);

    });
}


/* ------------------------------------------
   SMALL TYPEWRITER EFFECT
------------------------------------------ */

window.addEventListener("load", () => {

    const introText = document.querySelector(".small-intro");

    if (!introText) return;

    const originalText = introText.innerText;

    introText.innerText = "";

    let index = 0;

    function typeText() {

        if (index < originalText.length) {

            introText.innerText += originalText.charAt(index);

            index++;

            setTimeout(typeText, 45);

        }

    }

    setTimeout(typeText, 800);

});


/* ------------------------------------------
   RANDOM DUST
------------------------------------------ */

function createDust() {

    const room = document.querySelector(".room");

    if (!room) return;

    const dust = document.createElement("div");

    dust.className = "dust";

    dust.style.left =
        Math.random() * 100 + "%";

    dust.style.top =
        Math.random() * 100 + "%";

    dust.style.animationDuration =
        (7 + Math.random() * 8) + "s";

    room.appendChild(dust);

    setTimeout(() => {

        dust.remove();

    }, 15000);
}


setInterval(createDust, 1800);
document.addEventListener("DOMContentLoaded", () => {


    // Animation générale des éléments

    const animatedElements = document.querySelectorAll(
        "header, main section, .projet-card, .cv div, .contacts, footer"
    );


    animatedElements.forEach((element) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "0.7s ease";

    });


    animatedElements.forEach((element, index) => {

        setTimeout(() => {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }, index * 120);

    });



    // Menu hamburger mobile

    const hamburger = document.querySelector("#hamburger");
    const navList = document.querySelector(".nav-list");


    if (hamburger && navList) {

        hamburger.addEventListener("change", () => {

            if (hamburger.checked) {

                navList.style.display = "flex";

            } else {

                navList.style.display = "none";

            }

        });

    }



    // Animation des cartes projets

    const projectCards = document.querySelectorAll(".projet-card");


    projectCards.forEach((card) => {


        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px)";
            card.style.transition = "0.3s";

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";

        });


    });



    // Animation des images projets et photo profil

    const images = document.querySelectorAll(
        ".projet-card img, .photo img"
    );


    images.forEach((image) => {


        image.addEventListener("mouseenter", () => {

            image.style.transform = "scale(1.05)";
            image.style.transition = "0.3s";

        });


        image.addEventListener("mouseleave", () => {

            image.style.transform = "scale(1)";

        });


    });



    // Validation formulaire contact

    const form = document.querySelector(".contact-form form");


    if (form) {


        form.addEventListener("submit", (event) => {


            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();



            if (!name || !email || !message) {

                event.preventDefault();

                alert("Veuillez remplir tous les champs.");

                return;

            }



            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailRegex.test(email)) {

                event.preventDefault();

                alert("Adresse email invalide.");

                return;

            }


            alert("Votre message est envoyé.");

        });


    }



    // Effet sur les réseaux sociaux

    const socialIcons = document.querySelectorAll(".social-links a");


    socialIcons.forEach((icon) => {


        icon.addEventListener("mouseenter", () => {

            icon.style.transform = "scale(1.2)";
            icon.style.transition = "0.3s";

        });



        icon.addEventListener("mouseleave", () => {

            icon.style.transform = "scale(1)";

        });


    });



    // Mise à jour automatique de l'année

    const copyright = document.querySelector("footer p:last-child");


    if (copyright) {

        copyright.textContent =
        `© ${new Date().getFullYear()} alexandrins Paul Kakoba Jr`;

    }


});
document.addEventListener("DOMContentLoaded", () => {

    // Animation des éléments au chargement
    const elements = document.querySelectorAll(
        "header, section, .projet-card, .cv, .contacts .container, footer"
    );

    elements.forEach((element, index) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "0.6s ease";

        setTimeout(() => {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }, index * 150);

    });


    // Menu hamburger mobile
    const hamburger = document.querySelector("#hamburger");
    const navList = document.querySelector(".nav-list");


    if (hamburger && navList) {

        hamburger.addEventListener("change", () => {

            if (hamburger.checked) {
                navList.style.display = "flex";
            } else {
                navList.style.display = "none";
            }

        });

    }


    // Effet sur les cartes projets
    const cards = document.querySelectorAll(".projet-card");


    cards.forEach((card) => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px)";

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";

        });

    });



    // Effet zoom images
    const images = document.querySelectorAll(
        ".projet-card img, .photo img"
    );


    images.forEach((image) => {

        image.addEventListener("mouseenter", () => {

            image.style.transform = "scale(1.05)";
            image.style.transition = "0.3s";

        });


        image.addEventListener("mouseleave", () => {

            image.style.transform = "scale(1)";

        });

    });



    // Validation formulaire contact
    const form = document.querySelector(".contact-form form");


    if (form) {

        form.addEventListener("submit", (event) => {

            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();


            if (!name || !email || !message) {

                event.preventDefault();

                alert("Veuillez remplir tous les champs.");

                return;
            }


            const emailValid =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailValid.test(email)) {

                event.preventDefault();

                alert("Veuillez entrer un email valide.");

                return;
            }


            alert("Message envoyé avec succès.");

        });

    }



    // Année automatique du footer
    const copyright = document.querySelector("footer p:last-child");


    if (copyright) {

        copyright.textContent =
        `© ${new Date().getFullYear()} alexandrins Paul Kakoba Jr`;

    }

});
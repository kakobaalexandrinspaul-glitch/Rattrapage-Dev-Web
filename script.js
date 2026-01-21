const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const button = item.querySelector('.faq-question');

    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';

        // Fermer toutes les autres questions
        faqItems.forEach(i => {
            i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });

        // Ouvrir ou fermer la question actuelle
        button.setAttribute('aria-expanded', !expanded);
    });
});

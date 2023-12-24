document.addEventListener('DOMContentLoaded', () => {

    const faqContainer = document.querySelector('.faq-body');
    faqContainer.addEventListener('click', (e) => {

        const groupHeader = e.target.closest('.faq-question')

        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-answer');
        const iconImg = groupHeader.querySelector('i');

        iconImg.classList.toggle('fa-rotate-270');

        groupBody.classList.toggle('active');
    });
});
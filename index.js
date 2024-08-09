document.querySelector('.Hire_btn').addEventListener('click', function() {
    const email = 'jakemayores05@gmail.com';
    const subject = 'Hire Request';
    const body = `Hello Jake,

    I'm interested in hiring you for a project. Please provide more details on your availability and rates.

    Thank you!
    [Your Name]`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

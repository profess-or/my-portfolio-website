function redirectToGmail(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const project = document.getElementById('project').value;
    const message = document.getElementById('message').value;

    const subject = `New Inquiry: ${project}`;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;

    window.location.href = `mailto:aprofessor2077@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(`Received ${entry}`);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach(entry => {
    observer.observe(entry)
})
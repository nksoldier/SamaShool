function scrollToSection(sectionId){
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      removeNonVisibleEntries(entries);
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => {
  observer.observe(section);
});

function removeNonVisibleEntries(entries){
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      entry.target.classList.remove('active');
    }
  });
}

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function() {
      this.classList.add('clicked');
  });
});



document.addEventListener('DOMContentLoaded', () => {

    const counters = document.querySelectorAll('.counter');


    counters.forEach(counter => {

        const animateCounter = () => {

            const target = +counter.getAttribute('data-target');

            const current = +counter.innerText;

            const increment = target / 200;


            if (current < target) {

                counter.innerText = Math.ceil(current + increment);

                requestAnimationFrame(animateCounter);
            } else {

                counter.innerText = target;

                counter.classList.add('animate');
            }
        };


        animateCounter();
    });
});
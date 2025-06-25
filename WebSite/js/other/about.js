document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.ico-d').forEach(function(icon) {
        icon.addEventListener('click', function() {
            var nextSection = icon.closest('section').nextElementSibling;
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

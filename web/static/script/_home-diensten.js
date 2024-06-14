document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.hover-background').forEach(function(el) {
        var bgUrl = el.getAttribute('data-bg-url');
        if (bgUrl) {
            el.style.setProperty('--bg-image', 'url(' + bgUrl + ')');
        }
    });
});




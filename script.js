// Page transition animation
function createPageTransition() {
    const transition = document.createElement('div');
    transition.className = 'page-transition';
    document.body.appendChild(transition);
    return transition;
}

// Handle navigation clicks with smooth transition
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const transition = createPageTransition();
        
        // Trigger the transition animation
        setTimeout(() => {
            transition.classList.add('active');
        }, 10);
        
        // Navigate to the new page
        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});

// Add page load animation
window.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Enhanced hover effect for links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(2px)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});
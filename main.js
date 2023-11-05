const the_animation = document.querySelectorAll('.card')
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-card')
        }
        else {
            entry.target.classList.remove('scroll-card')
        }
    })
},
    {
        threshold: 0.5
    });
for (let i = 0; i < the_animation.length; i++) {
    const elements = the_animation[i];
    observer.observe(elements);
} 
// ************
var typed = new Typed(".tanimation",{
    strings: ["Web Developer", "UI UX Designer"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
});
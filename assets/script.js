function scrollToSection(id0){
    const container = document.querySelector('.right-panel');
    const target = document.getElementById(id);
    if (container && target){
        const top = target.offsetTop;
        container.scrollTo({
            top: top,
            behavior: 'smooth'
        });
    }
}

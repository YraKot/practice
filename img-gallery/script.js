const panels = document.querySelectorAll('.panel');
function toggleOpen() {
    if (!this.classList.contains('open')) {
        const el = Array.from(panels);
        el.map(cl => {
            if (cl.classList.contains('open')) {
                cl.classList.remove('open');
            }
        });
    }
    this.classList.toggle('open');
}
function toggleActive(e) {
    // console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
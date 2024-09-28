const togglebutton = document.getElementById('button') as HTMLButtonElement

const skillssection = document.getElementById('skills') as HTMLElement

togglebutton.addEventListener('click', ()=> {
    if(skillssection.style.display === 'none') {
        skillssection.style.display = 'block'
} else {
    skillssection.style.display = 'none'
}
});

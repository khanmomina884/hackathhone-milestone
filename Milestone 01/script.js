var togglebutton = document.getElementById('button');
var skillssection = document.getElementById('skills');
togglebutton.addEventListener('click', function () {
    if (skillssection.style.display === 'none') {
        skillssection.style.display = 'block';
    }
    else {
        skillssection.style.display = 'none';
    }
});

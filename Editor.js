const button = document.querySelector('.dropdown-button');

button.addEventListener('click', function () {
    const dropdown = document.getElementById('dropdown-menu');
    if (dropdown.disabled) {
        dropdown.disabled = false;
        dropdown.focus();
    }
});
document.getElementById('dropdown-menu').addEventListener('change', function () {
    this.disabled = true;
});

document.querySelectorAll('.checkbox-group').forEach(group => {
    group.addEventListener('change', vanha => {
        if (vanha.target.type === 'checkbox' && vanha.target.checked) {
            group.querySelectorAll('input[type="checkbox"]').forEach(box => {
                if (box !== vanha.target) box.checked = false;
            });
        }
    });
});

const button = document.querySelector('.dropdown-button');
const dropdown = document.getElementById('dropdown-menu');

button.addEventListener("click", function () {
    dropdown.disabled = false;
    dropdown.size = dropdown.options.length;
    dropdown.focus();
});

dropdown.addEventListener("change", closeDropdown);
dropdown.addEventListener("blur", closeDropdown);

function closeDropdown() {
    dropdown.disabled = true;
    dropdown.size = 1;
}

const submission = document.querySelector(".submit-button");

submission.addEventListener("click", function (event) {
    event.preventDefault();
    Validation();
});
function Validation() {
    KäyttäjäID();
    Salasana();
    Nimi();
    Osoite();
    Maa();
    Postinumero();
    Sähköposti();
    Sukupuoli();
    finish();
}
function KäyttäjäID() {
    if (document.getElementById("KäyttäjäID").value === "") {
        document.getElementById("1Virheilmoitus").innerHTML = "<sub>Pakollinen</sub>";
    }
    else if (document.getElementById("KäyttäjäID").value.length > 6) {
        document.getElementById("1Virheilmoitus").innerHTML = "<sub>Ei voi olla yli 6 merkkiä</sub>";
    }
    else {
        document.getElementById("1Virheilmoitus").innerHTML = "";
    }
}
function Salasana() {
    if (document.getElementById("Salasana").value === "") {
        document.getElementById("2Virheilmoitus").innerHTML = "<sub>Pakollinen</sub>";
    }
    else if (document.getElementById("Salasana").value.length < 6) {
        document.getElementById("2Virheilmoitus").innerHTML = "<sub>Salasanan tulee olla vähintään 6 merkkiä</sub>";
    }
    else if (!/[a-zA-Z]/.test(document.getElementById("Salasana").value) ||
        !/[0-9]/.test(document.getElementById("Salasana").value) ||
        !/[!@£$€&%#]/.test(document.getElementById("Salasana").value)){
        document.getElementById("2Virheilmoitus").innerHTML = "<sub>Salasanan tulee sisältää ainakin yksi kirjain, numero, joku erikoismerkeistä !@£$€&%#</sub>";
    }
    else {
        document.getElementById("2Virheilmoitus").innerHTML = "";
    }
}
function Nimi() {
    if (document.getElementById("Nimi").value === "") {
        document.getElementById("3Virheilmoitus").innerHTML = "<sub>Pakollinen</sub>";
    }
    else {
        document.getElementById("3Virheilmoitus").innerHTML = "";
    }
}
function Osoite() {
    if (document.getElementById("Osoite").value === "") {
        document.getElementById("4Virheilmoitus").innerHTML = "<sub>Pakollinen</sub>";
    }
    else {
        document.getElementById("4Virheilmoitus").innerHTML = "";
    }
}
function Maa() {
    if (document.getElementById("dropdown-menu").value === "NULL") {
        document.getElementById("5Virheilmoitus").innerHTML = "<sub>Pakollinen</sub>";
    }
    else {
        document.getElementById("5Virheilmoitus").innerHTML = "";
    }
}
function Postinumero() {
    if (document.getElementById("Postinumero").value === "") {
        document.getElementById("6Virheilmoitus").innerHTML = "<sub>Pakollinen</sub>";
    }
    else if (!/^[0-9]{5}$/.test(document.getElementById("Postinumero").value)) {
        document.getElementById("6Virheilmoitus").innerHTML = "<sub>Postinumeron tulee olla 5 numeroa</sub>";
    }
    else {
        document.getElementById("6Virheilmoitus").innerHTML = "";
    }
}
function Sähköposti() {
    if (document.getElementById("Sähköposti").value === "") {
        document.getElementById("7Virheilmoitus").innerHTML = "<sub>Pakollinen</sub>";
    }
    else if (document.getElementById("Sähköposti").value.indexOf("@") === -1 || document.getElementById("Sähköposti").value.indexOf(".") === -1) {
        document.getElementById("7Virheilmoitus").innerHTML = "<sub>Virheellinen sähköpostiosoite</sub>";
    }
    else {
        document.getElementById("7Virheilmoitus").innerHTML = "";
    }
}
function Sukupuoli() {
    if (!document.querySelector('input[name="sukupuoli"]:checked'))
    {
        document.getElementById("8Virheilmoitus").innerHTML = "<sub>Pakollinen</sub>";
    }
    else {
        document.getElementById("8Virheilmoitus").innerHTML = "";
    }
}
function finish() {
    if (document.getElementById("1Virheilmoitus").innerHTML === "" &&
        document.getElementById("2Virheilmoitus").innerHTML === "" &&
        document.getElementById("3Virheilmoitus").innerHTML === "" &&
        document.getElementById("4Virheilmoitus").innerHTML === "" &&
        document.getElementById("5Virheilmoitus").innerHTML === "" &&
        document.getElementById("6Virheilmoitus").innerHTML === "" &&
        document.getElementById("7Virheilmoitus").innerHTML === "" &&
        document.getElementById("8Virheilmoitus").innerHTML === "") {
        document.getElementById("tarkistus").innerHTML = "Valmis!";
        console.log(document.getElementById("KäyttäjäID").value);
        console.log(document.getElementById("Salasana").value);
        console.log(document.getElementById("Nimi").value);
        console.log(document.getElementById("Osoite").value);
        console.log(document.getElementById("dropdown-menu").value);
        console.log(document.getElementById("Postinumero").value);
        console.log(document.getElementById("Sähköposti").value);
    }
    else {
        document.getElementById("tarkistus").innerHTML = "";
    }
}

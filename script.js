
// Menu navigasi untuk tampilan HP

const andiToggle = document.getElementById("andi_toggle");
const andiMenu = document.getElementById("andi_menu");

if (andiToggle && andiMenu) {
    andiToggle.addEventListener("click", function() {
        andiMenu.classList.toggle("andi_show");
    });
}


// Validasi formulir Contact

const andiForm = document.getElementById("andi_contact_form");

if (andiForm) {
    andiForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const andiName = document.getElementById("andi_name").value;

        document.getElementById("andi_form_result").textContent =
            "Terima kasih, " + andiName +
            ". Pesan berhasil divalidasi.";

        andiForm.reset();

    });
}

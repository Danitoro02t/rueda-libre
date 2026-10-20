document.addEventListener("DOMContentLoaded", () => {
    console.log("¡Rueda Libre cargado correctamente!");

    const whatsappSection = document.getElementById("reserva-whatsapp");

    if (whatsappSection) {
        whatsappSection.style.cursor = "pointer";
        whatsappSection.addEventListener("click", () => {
            alert("¡Hola! Te estamos redirigiendo para gestionar tu reserva por WhatsApp.");
        });
    }
});
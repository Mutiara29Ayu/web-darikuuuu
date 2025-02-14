document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("open");
    const closeButton = document.getElementById("close");
    const envelope = document.querySelector(".envelope");
    const letter1 = document.getElementById("letter1");
    const letter2 = document.getElementById("letter2");

    let step = 0;

    openButton.addEventListener("click", function () {
        if (step === 0) {
            // Buka amplop dan tampilkan surat pertama
            envelope.classList.add("opened");
            letter1.classList.add("show");
            step++;
        } else if (step === 1) {
            // Sembunyikan surat pertama, tampilkan surat kedua
            letter1.classList.remove("show");
            letter2.classList.remove("hidden");
            letter2.classList.add("show");
            step++;
        }  else if (step === 2) {
            // Sembunyikan surat kedua, tampilkan surat kedua
            letter2.classList.remove("show");
            letter3.classList.remove("hidden");
            letter3.classList.add("show");
            step++;
        }else if (step === 3) {
        // Sembunyikan surat kedua, tampilkan surat kedua
        letter3.classList.remove("show");
        letter4.classList.remove("hidden");
        letter4.classList.add("show");
        step++;
        }else if (step === 4) {
        // Redirect ke love.html
        window.location.href = "love.html";
    }
    });

    closeButton.addEventListener("click", function () {
        // Tutup amplop dan sembunyikan surat
        envelope.classList.remove("opened");
        letter1.classList.remove("show");
        letter2.classList.remove("show");
        letter2.classList.add("hidden");
        step = 0;
    });
});

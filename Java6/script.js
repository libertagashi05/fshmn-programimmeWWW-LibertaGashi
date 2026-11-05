
function llogarit(cmimi, persona, buxheti) {

    // Kontrollojme numrat e fundem
    if (
        !Number.isFinite(cmimi) ||
        !Number.isFinite(persona) ||
        !Number.isFinite(buxheti)
    ) {
        return {
            ok: false,
            error: "Te gjitha vlerat duhet te jene numra te fundem."
        };
    }

    // Kontrollojme vlerat negative
    if (cmimi < 0 || buxheti < 0) {
        return {
            ok: false,
            error: "Cmimi dhe buxheti nuk mund te jene negative."
        };
    }

    // Kontrollojme numrin e personave
    if (!Number.isInteger(persona) || persona < 1 || persona > 5) {
        return {
            ok: false,
            error: "Numri i personave duhet te jete nga 1 deri ne 5."
        };
    }

    // Euro ne cent
    const cmimiCente = Math.round(cmimi * 100);
    const buxhetiCente = Math.round(buxheti * 100);

    // Llogaritjet
    const totalCente = cmimiCente * persona;
    const mbetjaCente = buxhetiCente - totalCente;

    return {
        ok: true,
        total: totalCente / 100,
        mbetja: mbetjaCente / 100,
        brenda: totalCente <= buxhetiCente
    };
}


// Lidhja me HTML
document.addEventListener("DOMContentLoaded", function () {

    const butoni = document.getElementById("llogaritBtn");

    butoni.addEventListener("click", function () {

        const cmimiInput = document.getElementById("cmimi").value;
        const personaInput = document.getElementById("persona").value;
        const buxhetiInput = document.getElementById("buxheti").value;

        const rezultati = document.getElementById("rezultati");

        // Kontrollojme fushat boshe
        if (
            cmimiInput.trim() === "" ||
            personaInput.trim() === "" ||
            buxhetiInput.trim() === ""
        ) {
            rezultati.className = "rezultati gabim";
            rezultati.innerHTML =
                "<h3>Gabim!</h3><p>Plotesoni te gjitha fushat.</p>";
            return;
        }

        // Marrim vlerat
        const cmimi = Number(cmimiInput);
        const persona = Number(personaInput);
        const buxheti = Number(buxhetiInput);

        // Therrasim funksionin
        const rezultat = llogarit(cmimi, persona, buxheti);

        // Kontrollojme gabimet
        if (!rezultat.ok) {

            rezultati.className = "rezultati gabim";

            rezultati.innerHTML =
                "<h3>Gabim!</h3><p>" + rezultat.error + "</p>";

            return;
        }

        // Aktiviteti brenda buxhetit
        if (rezultat.brenda) {

            rezultati.className = "rezultati sukses";

            rezultati.innerHTML =
                "<h3>Aktiviteti eshte brenda buxhetit!</h3>" +
                "<p>Totali: " + rezultat.total.toFixed(2) + " €</p>" +
                "<p>Mbetja: " + rezultat.mbetja.toFixed(2) + " €</p>";

        }

        // Aktiviteti jashte buxhetit
        else {

            rezultati.className = "rezultati gabim";

            rezultati.innerHTML =
                "<h3>Aktiviteti tejkalon buxhetin!</h3>" +
                "<p>Totali: " + rezultat.total.toFixed(2) + " €</p>" +
                "<p>Mungojne: " +
                Math.abs(rezultati.mbetja).toFixed(2) + " €</p>";
        }

    });

});

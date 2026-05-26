function calculatePrice(basePrice) {

    let total = basePrice;

    let addons = document.querySelectorAll(".addon");

    addons.forEach(function(addon) {

        if (addon.checked) {
            total += Number(addon.value);
        }

    });

    document.getElementById("total").innerText = total;
}
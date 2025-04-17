const accordionItems = document.querySelectorAll(".accordion-item");
const multipleAllowCheckbox = document.querySelector("#multipleAllow");

const closeAllAccordions = () => {
    accordionItems.forEach(item => {
        item.querySelector(".accordion-panel").classList.remove("open");
        item.querySelector(".icon").classList.remove("open");
    });
};

accordionItems.forEach(item => {
    const header = item.querySelector(".accordion-header");
    const panel = item.querySelector(".accordion-panel");
    const icon = item.querySelector(".icon");

    header.addEventListener("click", () => {
        const isOpen = panel.classList.contains("open");

        if (!multipleAllowCheckbox.checked) {
            closeAllAccordions();
        }

        if (!isOpen) {
            panel.classList.add("open");
            icon.classList.add("open");
        } else {
            panel.classList.remove("open");
            icon.classList.remove("open");
        }
    });
});

const tbtn = document.querySelectorAll(".tabs");
const tabs = document.querySelectorAll(".content");

tbtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let selectBtn = item;
        let btnId = selectBtn.getAttribute("tab-index");
        let selectTab = document.querySelector(btnId);

        tbtn.forEach(function(item) {
            item.classList.remove('disabled')
        });
        tabs.forEach(function(item) {
            item.classList.add('disabled')
        });

        selectBtn.classList.add('disabled');
        selectTab.classList.remove('disabled');

    })
})
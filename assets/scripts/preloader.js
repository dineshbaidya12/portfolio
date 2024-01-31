// ----------- Preloader ----------------
let percentage = 0;
const loadingPercentageElement = $('#loadingPercentage');
const loadingContentElement = $('#loadingContent');

function updatePercentage() {
    if (percentage < 80) {
        setTimeout(() => {
            percentage += 12;
            loadingPercentageElement.html(percentage + '%');
            updatePercentage();
        }, 900);
    }
}

updatePercentage();

// ----------- Preloader ----------------
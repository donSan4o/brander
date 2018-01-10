// Page init function
$(document).ready(initPage);

function initPage() {

    $('select').selecter({
        mobile: true
    });

    var rangeSlider = document.getElementById('nouslider-amount');

    noUiSlider.create(rangeSlider, {
        start: [15],
        step: 1,
        behaviour: 'drag',
        connect: true,
        range: {
            'min': 1,
            'max': 30
        },
        format: wNumb({
            decimals: 0,
            thousand: ''
        })
    });
    $('.noUi-handle').attr("id", "handle");
    var rangeSliderValueElement = document.getElementById('handle');

    rangeSlider.noUiSlider.on("update", function(values, handle) {
        if (values > 4 && values < 21 || values > 24) {
            rangeSliderValueElement.innerHTML = values[handle] + ' Дней';
        } else
        if (values == 1 || values == 21) {
            rangeSliderValueElement.innerHTML = values[handle] + ' День';
        } else {
            rangeSliderValueElement.innerHTML = values[handle] + ' Дня';
        }
    });
};
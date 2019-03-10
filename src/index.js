import * as $ from 'jquery';

var drag_buffer;
const drag_handler = function (event) {
    drag_buffer = event.target.id;
    event.preventDefault();
}
var fin_num = 0;
const drop_handler = function (event) {
    event.preventDefault();

    if (event.target.id.split('-')[1] == drag_buffer.split('f')[1]) {
        $("#" + event.target.id).toggleClass('dragfin');
        $("#" + drag_buffer).hide();
        fin_num++;
        console.log(fin_num)
        if (fin_num == 4)
            go_to_food_page();
    }
}
const dragover_handler = function (event) {
    event.preventDefault();
}

for (let i = 1; i <= 4; i++) {
    document.getElementById('dra-f' + i).ondrag = drag_handler;
    document.getElementById('food-' + i).ondrop = drop_handler;
    document.getElementById('food-' + i).ondragover = dragover_handler;
}
var page_position;
const go_to_food_page = () => {
    page_position = 1;
    $("#bottom-bar").animate({ 'left': '-25vw' }, 1500);
    $("#bg").animate({
        'top': '-100vh',
        'left': '25vw'
    }, 1000, function () {
        $("#center-container").fadeOut(1000);
        $("#center2-container").css({ 'visibility': 'visible' })
        $("#center2-container").animate({ 'bottom': '0px' }, () => {
            $("#bottom-color").animate({ 'bottom': '0px' }, 1000)
            for (let i = 1; i <= 5; i++) {
                setTimeout(() => {
                    $("#Meal-" + i).animate({ 'height': '80%' }, 1000)
                    document.getElementsByClassName('order-btn')[i - 1].style.opacity = 1;
                }, i * 200)
            }
            setTimeout(() => {
                $(".Meals-container>p").animate({ 'opacity': '1' }, 500)
            }, 2000)
        })
    })
}
$("#nav-logo").click(() => {
    go_to_home_page();
})
const go_to_home_page = () => {
    if (page_position) {
        $("#bottom-color").animate({ 'bottom': '-35vh' }, 1000, () => {
            for (let i = 1; i <= 5; i++) {
                setTimeout(() => {
                    $("#Meal-" + i).animate({ 'height': '0' }, 1000)
                    document.getElementsByClassName('order-btn')[i - 1].style.opacity = 0;
                }, i * 200)
            }
            $(".Meals-container>p").animate({ 'opacity': '0' }, 500, () => {
                $("#bg").animate({
                    'top': '0px',
                    'left': '0px'
                }, 1000, function () {
                    $("#center2-container").animate({ 'bottom': '-100vh' })
                    $("#center2-container").css({ 'visibility': 'hidden' });
                    $("#center-container").fadeIn(1500);
                    $("#bottom-bar").animate({ 'left': '0vw' }, 1500);
                });
            })

        });

    }
    page_position = 0;
}

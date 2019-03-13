import * as $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
import { DH_CHECK_P_NOT_SAFE_PRIME } from 'constants';

window.onload = () => {
    $(".Meal-content p").toggleClass('hiding-p');
    $(".dfood").draggable({
        revert: true, opacity: 0.7, helper: "original",
        start: function (event) {
            drag_buffer = event.target.id;
            console.log(drag_buffer)
        },/*
        drag: function () {
        },
        stop: function () {
            if (event.target.id.split('-')[1] == drag_buffer.split('f')[1]) {
                $("#" + event.target.id).toggleClass('dragfin');
                $("#" + drag_buffer).hide();
                fin_num++;
                console.log(fin_num)
                if (fin_num == 4)
                    go_to_food_page();
            }
        }*/
    });
    //  go_to_food_page();
}
var drag_buffer;
var fin_num = 0;

$(".food").droppable({
    drop: function (event) {
        if (event.target.id && event.target.id.split('-')[1] == drag_buffer.split('f')[1]) {
            $("#" + event.target.id).toggleClass('dragfin');
            $("#" + drag_buffer).hide();
            fin_num++;
            console.log(fin_num)
            if (fin_num == 4) {
                $("#big-square-container").addClass('btn-to-FoodPage');
                go_to_food_page();
                document.getElementById('big-square-container').onclick = (event) => {
                    event.stopPropagation();
                    go_to_food_page();
                }
            }
        }
    }
});
$("#nav-logo").click(() => {
    go_to_home_page();
})

var page_position;

const go_to_food_page = () => {
    if(page_position)
        return;
    console.log('food')
    $("#bottom-bar").animate({ 'left': '-=25vw' }, 1500);
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
                $(".Meal-content p").toggleClass('hiding-p');
                $(".Meals-container>p").animate({ 'opacity': '1' }, 500)
            }, 2000)
        })
    })
    page_position = 1;
}

const go_to_home_page = () => {
    if (page_position) {
        console.log('home')
        $("#bottom-color").animate({ 'bottom': '-35vh' }, 800, () => {
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
                    $("#center-container").fadeIn(1100);
                    $("#bottom-bar").animate({ 'left': '0vw' }, 1100);
                    $(".Meal-content p").toggleClass('hiding-p');
                });
            })
        });
    }
    page_position = 0;
}

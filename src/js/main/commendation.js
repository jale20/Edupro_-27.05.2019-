$(document).ready(function () {
    $('.owl-2 .item:even').children().addClass('commendation--1')
        .children(":first-child").addClass("commendation__circle--big commendation__circle--big-1")
        .siblings(":nth-child(2)").addClass("commendation__circle--small commendation__circle--small-1")
        .siblings(":nth-child(3)").addClass("commendation__circle--small commendation__circle--small-1_1");
        
    $('.owl-2 .item:odd').children().addClass('commendation--2')
        .children(":first-child").addClass("commendation__circle--small commendation__circle--small-2")
        .siblings(":nth-child(2)").addClass("commendation__circle--small commendation__circle--small-2_2")
        .siblings(":nth-child(3)").addClass("commendation__circle--big commendation__circle--big-2");;
});
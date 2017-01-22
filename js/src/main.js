$(document).ready(function () {
    var elem = document.getElementById('gender');

    if (elem.addEventListener) {
        if ('onwheel' in document) {
            // IE9+, FF17+, Ch31+
            elem.addEventListener("wheel", onWheel);
        } else if ('onmousewheel' in document) {
            // устаревший вариант события
            elem.addEventListener("mousewheel", onWheel);
        } else {
            // Firefox < 17
            elem.addEventListener("MozMousePixelScroll", onWheel);
        }
    } else { // IE8-
        elem.attachEvent("onmousewheel", onWheel);
    }

});


function onWheel(e) {
    e = e || window.event;

    var delta = e.deltaY || e.detail || e.wheelDelta;

    if (delta>=0){
        var isLastElementSelected = $('#gender > option:selected').index() == $('#gender > option').length -1;

        if (!isLastElementSelected) {
            $('#gender > option:selected').removeAttr('selected').next('option').attr('selected', 'selected');
        } else {
            $('#gender > option:selected').removeAttr('selected');
            $('#gender > option').first().attr('selected', 'selected');
        }
    } else {
        var isFirstElementSelected = $('#gender > option:selected').index() == 0;

        if (!isFirstElementSelected) {
            $('#gender > option:selected').removeAttr('selected').prev('option').attr('selected', 'selected');
        } else {
            $('#gender > option:selected').removeAttr('selected');
            $('#gender > option').last().attr('selected', 'selected');
        }
    }

    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}
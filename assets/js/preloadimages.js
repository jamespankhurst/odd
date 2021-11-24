/*==========================================*/
/*========== ORION DICE DECIDE =============*/
/* www.jamespankhurst.co.uk/odd1            */
/* jamespankhurst180@gmail.com              */
/* sample code: github.com/jamespankhurst   */
/* repository: gitlab.com/jamespankhurst180 */
/*==========================================*/

/*-----------------------*/
/*--- PRE-LOAD IMAGES ---*/
/*-----------------------*/

let _ni_imgs = new Array(); 
let _te_imgs = new Array(); 
let _ja_imgs = new Array(); 
let _qu_imgs = new Array(); 
let _ki_imgs = new Array(); 
let _ac_imgs = new Array();
let _qm_imgs = new Array();

function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

/*--- dice images ---*/
for (var x = 1; x <= 60; x++) {	_ni_imgs[(x - 1)] = "assets/img/ni/x0/" + x + ".png" }; preloadImages(_ni_imgs);
for (var x = 1; x <= 60; x++) {	_te_imgs[(x - 1)] = "assets/img/te/x0/" + x + ".png" }; preloadImages(_te_imgs);
for (var x = 1; x <= 60; x++) {	_ja_imgs[(x - 1)] = "assets/img/ja/x0/" + x + ".png" }; preloadImages(_ja_imgs);
for (var x = 1; x <= 60; x++) {	_qu_imgs[(x - 1)] = "assets/img/qu/x0/" + x + ".png" }; preloadImages(_qu_imgs);
for (var x = 1; x <= 60; x++) {	_ki_imgs[(x - 1)] = "assets/img/ki/x0/" + x + ".png" }; preloadImages(_ki_imgs);
for (var x = 1; x <= 60; x++) {	_ac_imgs[(x - 1)] = "assets/img/ac/x0/" + x + ".png" }; preloadImages(_ac_imgs);
for (var x = 1; x <= 60; x++) {	_qm_imgs[(x - 1)] = "assets/img/qm/x0/" + x + ".png" }; preloadImages(_ac_imgs);
for (var x = 1; x <= 60; x++) {	_ni_imgs[(x - 1)] = "assets/img/ni/xex/" + x + ".png" }; preloadImages(_ni_imgs);
for (var x = 1; x <= 60; x++) {	_te_imgs[(x - 1)] = "assets/img/te/xex/" + x + ".png" }; preloadImages(_te_imgs);
for (var x = 1; x <= 60; x++) {	_ja_imgs[(x - 1)] = "assets/img/ja/xex/" + x + ".png" }; preloadImages(_ja_imgs);
for (var x = 1; x <= 60; x++) {	_qu_imgs[(x - 1)] = "assets/img/qu/xex/" + x + ".png" }; preloadImages(_qu_imgs);
for (var x = 1; x <= 60; x++) {	_ki_imgs[(x - 1)] = "assets/img/ki/xex/" + x + ".png" }; preloadImages(_ki_imgs);
for (var x = 1; x <= 60; x++) {	_ac_imgs[(x - 1)] = "assets/img/ac/xex/" + x + ".png" }; preloadImages(_ac_imgs);
for (var x = 1; x <= 60; x++) {	_qm_imgs[(x - 1)] = "assets/img/qm/xex/" + x + ".png" }; preloadImages(_ac_imgs);


/*--- dice end images ---*/
preloadImages([
'assets/img/ni/x0/end.png', 
'assets/img/te/x0/end.png', 
'assets/img/ja/x0/end.png', 
'assets/img/qu/x0/end.png', 
'assets/img/ki/x0/end.png', 
'assets/img/ac/x0/end.png',
'assets/img/qm/x0/end.png'
]);
/*--- bgani images ---*/
preloadImages([
'assets/img/ey/eyehorus_0.png',
'assets/img/or/orion_pulse.png',
'assets/img/or/orion_pulse_8.png',
'assets/img/or/orion_pulse_8_1.png',
'assets/img/or/orion_pulse_7_1.png',
'assets/img/or/orion_pulse_5.png',
'assets/img/or/orion_pulse_6.png',
'assets/img/sh/shaker_pulse.png',
'assets/img/sh/shaker_pulse_0_1.png',
'assets/img/sh/shaker_pulse_1_4.png',
'assets/img/sh/shaker_pulse_7.png',
'assets/img/ho/holder_pulse.png',
'assets/img/ho/holder_pulse_0.png',
'assets/img/or/or_0.png', 
'assets/img/or/or_1.png',  
'assets/img/or/or_2.png',  
'assets/img/or/or_3.png',  
'assets/img/or/or_4.png',
'assets/img/or/or_5.png',
'assets/img/or/or_6.png',  
'assets/img/or/or_7.png',
'assets/img/or/or_7_1.png',
'assets/img/or/or_8.png',
'assets/img/or/or_8_1.png',
'assets/img/or/or_9.png',
'assets/img/or/or_10.png',
'assets/img/py/py_0.png',
'assets/img/py/py_1.png',
'assets/img/py/py_2.png',
'assets/img/py/py_3.png',
'assets/img/py/py_4.png'
]);
/*---------------------------*/
/*--- END PRE-LOAD IMAGES ---*/
/*---------------------------*/



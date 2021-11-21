/*==============================*/
/*===== ORION DICE DECIDE ======*/
/* www.jamespankhurst.co.uk/odd */
/* jamespankhurst180@gmail.com  */
/* github.com/jamespankhurst    */
/* gitlab.com/jamespankhurst180 */
/*==============================*/

/*--- ANIMATE FUNCTIONS ---*/
function bgAnimate(prx, frs, dur, spd) {

      for( var j = 1; j<= frs; ++j ) {
        var idNo = j;
        var anispd = j * spd;
        aniBg(prx, idNo, anispd);
        }
        setTimeout(function(){ bgFinal(prx); }, 3000); 
};

function aniBg(prx, idNo, anispd) {

      var divid = prx + idNo;
      var hspd = anispd + 20;
      setTimeout(function(){ bgShow(divid); }, anispd);
      setTimeout(function(){ bgHide(divid); }, hspd);
};

function bgFinal(prx) {
      var finalDiv = prx + "final";
      var elem = document.getElementById(finalDiv);
      elem.style.display = "block";
      elem.style.zIndex = "1";
};

function bgShow(divid) { var elem = document.getElementById(divid);  elem.style.zIndex = "1";  elem.style.display = "block"; };
function bgHide(divid) { var elem = document.getElementById(divid);  elem.style.zIndex = "-1"; elem.style.display = "none"; };


/*--- INDEX ANIMATION ---*/

function i_pulse(frs, dur, spd) {
     
	  setTimeout(function(){ bgAnimate("i_ey1_", frs, dur, spd); }, 500);

      setTimeout(function(){ bgAnimate("i_py1_", frs, dur, spd); }, 400);
      setTimeout(function(){ bgAnimate("i_ho1_", frs, dur, spd); }, 500);
	  setTimeout(function(){ bgAnimate("i_sh1_", frs, dur, spd); }, 700);
      setTimeout(function(){ bgAnimate("i_or1_", frs, dur, spd); }, 700); 
	  setTimeout(function(){ bgAnimate("i_sh1_", frs, dur, spd); }, 900);
	  setTimeout(function(){ bgAnimate("i_or1_", frs, dur, spd); }, 1100);
	  setTimeout(function(){ bgAnimate("i_ho1_", frs, dur, spd); }, 1200);
	  setTimeout(function(){ bgAnimate("i_py1_", frs, dur, spd); }, 1400);

	  //setTimeout(function(){ reRoll(2, 1, 1, 1); }, 600);
	  //setTimeout(function(){ restart(); }, 6600);
};


    /*==============================*/
    /*  ARGUMENTS:                  */
    /*  1. prx: frame id prefix     */
    /*  2. frs: number of frames    */
    /*  3. dur: length of animation */
    /*  4. spd: speed of animation  */
    /*==============================*/
    /*  TIMINGS                     */
    /*  Frames  Dur   Spd     Dur+  */
    /*  60      600   10            */
    /*  60      1200  20            */
    /*  60      2400  40            */
    /*  60      4800  80            */
    /*  60      9400  155           */
    /*  60      9800  160           */
    /*  60      19600 320           */
    /*==============================*/
   
    function runAni(){
	$('loading_bar').style.display = "none";
	//bg ani
    setTimeout(function(){ i_pulse(18, 22000, 99); }, 10);
	//dice ? ani
    setTimeout(function(){ ani('f_', 120, 22000, 25); }, 1000);

    }

	function ani(prx, frs, dur, spd) {
      for( var j = 1; j <= frs; ++j ) {
      var idNo = j;
      var anispd = j * spd;
      aniDice(prx, idNo, anispd);
      }
      setTimeout(function(){ lastFrame(prx); }, 3000);
     };
	function aniDice(prx, idNo, anispd) {
      var dface = prx + idNo;   
      var hspd = anispd + 30;
      setTimeout(function(){ show(dface); }, anispd);
      setTimeout(function(){ hide(dface); }, hspd);
     };
	function show(dface) {
      var elem = document.getElementById(dface);
      elem.style.zIndex = "1";
      elem.style.display = "block";
    };
	function hide(dface) {
      var elem = document.getElementById(dface);
      elem.style.zIndex = "-1";
      elem.style.display = "none";
    };
	function lastFrame(prx) {
      var strlastFrame = prx + "end";
      var elem = document.getElementById(strlastFrame);
      elem.style.display = "block";
      elem.style.zIndex = "1";
      showiButtonPanel();
    };

/*-----------------*/
/*--- MOVE DICE ---*/
/*-----------------*/

function moveDdown(dObj, sxpos, expos, rollNo) {
	let elem;
	if(rollNo == 1) {
	elem = $(dObj['d_no']);
	} else {
	elem = $(dObj['d_nor2']);
	}
    var newX = expos;
    var anispeed = 1;
    var pos = sxpos;
    var id = setInterval(frame, anispeed);
    function frame() { if (pos == newX) { clearInterval(id); } else { pos++; elem.style.top = pos + "px"; }; }
};

function moveDup(dObj, sxpos, expos, rollNo) {
	let elem;
	if(rollNo == 1) {
	elem = $(dObj['d_no']);
	} else {
	elem = $(dObj['d_nor2']);
	}
    var newX = expos;
    var anispeed = 1;
    var pos = sxpos;
    var id = setInterval(frame, anispeed);
    function frame() { if (pos == newX) { clearInterval(id); } else { pos--; elem.style.top = pos + "px"; }; }
};

function moveDright(dObj, sypos, eypos, rollNo) {
	let elem;
	if(rollNo == 1) {
	elem = $(dObj['d_no']);
	} else {
	elem = $(dObj['d_nor2']);
	}
    var newY = eypos;
    var anispeed = 1;
    var pos = sypos;
    var id = setInterval(frame, anispeed);
    function frame() { if (pos == newY) { clearInterval(id); } else { pos--; elem.style.left = pos + "px"; }; }
};
function moveDleft(dObj, sypos, eypos, rollNo) {
	let elem;
	if(rollNo == 1) {
	elem = $(dObj['d_no']);
	} else {
	elem = $(dObj['d_nor2']);
	}
    var newY = eypos;
    var anispeed = 1;
    var pos = sypos;
    var id = setInterval(frame, anispeed);
    function frame() { if (pos == newY) { clearInterval(id); } else { pos++; elem.style.left = pos + "px"; }; }
};

/*-----------------*/
/*--- DRAW DICE ---*/
/*-----------------*/

const xCentre =  165; 

function drawDice(dObj, destdiv, rollNo) {	
	let canvas;
	switch(destdiv) {
		case 'dec':		canvas = $(dObj.d_dec);		break;
		case 'dec2':	canvas = $(dObj.d_dec2);	break;
		case 'held':	canvas = $(dObj.d_held);	break;
		case 'final':	canvas = $(dObj.d_final);	break;
	}; 

	/*--- draw dice image in appropriate canvas ---*/
	let ctx = canvas.getContext("2d");
	let img = document.getElementById(dObj.d_end);
	ctx.drawImage(img, 0, 0);
	
	
	if(rollNo == 1) {
	$(dObj.d_no).style.display = "none"; 
	} else {
	$(dObj.d_nor2).style.display = "none"; 
	}
	
	
}; //end drawDice


/*-------------------------------------*/
/*--- NODES: ADD/REMOVE - SHOW/HIDE ---*/
/*-------------------------------------*/
function remCnv(divID, cnvID) {
const parent = document.getElementById(divID);
const child = $(cnvID);
parent.removeChild(child);
};

function rmAllD2() {
remCnv("comm_panel", "d1d2");
remCnv("comm_panel", "d2d2");
remCnv("comm_panel", "d3d2");
remCnv("comm_panel", "d4d2");
remCnv("comm_panel", "d5d2");
};
function rmAllRoll1d() {
remCnv("orion", "d1");
remCnv("orion", "d2");
remCnv("orion", "d3");
remCnv("orion", "d4");
remCnv("orion", "d5");
};
function rmAllHeld() {
remCnv("hold_panel", "d1h");
remCnv("hold_panel", "d2h");
remCnv("hold_panel", "d3h");
remCnv("hold_panel", "d4h");
remCnv("hold_panel", "d5h");
};


function showDec1Cnvs() {
$('d1d1').style.display = "block";
$('d1d1').zIndex = "1";
$('d2d1').style.display = "block";
$('d2d1').zIndex = "1";
$('d3d1').style.display = "block";
$('d3d1').zIndex = "1";
$('d4d1').style.display = "block";
$('d4d1').zIndex = "1";
$('d5d1').style.display = "block";
$('d5d1').zIndex = "1";
};
function hideDec1Cnvs() {
$('d1d1').style.display = "none";
$('d1d1').zIndex = "-1";
$('d2d1').style.display = "none";
$('d2d1').zIndex = "-1";
$('d3d1').style.display = "none";
$('d3d1').zIndex = "-1";
$('d4d1').style.display = "none";
$('d4d1').zIndex = "-1";
$('d5d1').style.display = "none";
$('d5d1').zIndex = "-1";
};

function showDec2Cnvs() {
$('d1d2').style.display = "block";
$('d1d2').zIndex = "1";
$('d2d2').style.display = "block";
$('d2d2').zIndex = "1";
$('d3d2').style.display = "block";
$('d3d2').zIndex = "1";
$('d4d2').style.display = "block";
$('d4d2').zIndex = "1";
$('d5d2').style.display = "block";
$('d5d2').zIndex = "1";
};
function hideDec2Cnvs() {
$('d1d2').style.display = "none";
$('d1d2').zIndex = "-1";
$('d2d2').style.display = "none";
$('d2d2').zIndex = "-1";
$('d3d2').style.display = "none";
$('d3d2').zIndex = "-1";
$('d4d2').style.display = "none";
$('d4d2').zIndex = "-1";
$('d5d2').style.display = "none";
$('d5d2').zIndex = "-1";
};

function showHoldCnvs() {
$('d1h').style.display = "block";	
$('d1h').zIndex = "1";
$('d2h').style.display = "block";	
$('d2h').zIndex = "1";
$('d3h').style.display = "block";	
$('d3h').zIndex = "1";
$('d4h').style.display = "block";	
$('d4h').zIndex = "1";
$('d5h').style.display = "block";
$('d5h').zIndex = "1";
};
function hideHoldCnvs() {
$('d1h').style.display = "none";
$('d1h').zIndex = "-1";	
$('d2h').style.display = "none";	
$('d2h').zIndex = "-1";	
$('d3h').style.display = "none";	
$('d3h').zIndex = "-1";	
$('d4h').style.display = "none";	
$('d4h').zIndex = "-1";	
$('d5h').style.display = "none";
$('d5h').zIndex = "-1";	
};

function showHoldPanel() {
$('hold_panel').style.display = "block";
$('hold_panel').zIndex = "1";	
};
function hideHoldPanel() {
$('hold_panel').style.display = "none";
$('hold_panel').zIndex = "-1";	
};

function showasteriod2() {
$('asteriod2').style.display = "block";
$('asteriod2').zIndex = "1";	
};
function hideasteriod2() {
$('asteriod2').style.display = "none";
$('asteriod2').zIndex = "-1";	
};


function showRollDiv(dNoDiv) {
$(dNoDiv).style.display = "block";
$(dNoDiv).style.zIndex = "1";	
};
function hideRollDiv(dNoDiv) {
$(dNoDiv).style.display = "none";
$(dNoDiv).style.zIndex = "-1";	
};

function showCtrlPanel() {
$('ctrl-panel').style.display = "block";
$('ctrl-panel').style.zIndex = "1";	
};
function hideCtrlPanel() {
$('ctrl-panel').style.display = "none";
$('ctrl-panel').style.zIndex = "-1";	
};

function showButtonPanel() {
$('button_panel').style.display = "block";
$('button_panel').style.zIndex = "1";	
};
function hideButtonPanel() {
$('button_panel').style.display = "none";
$('button_panel').style.zIndex = "-1";	
};
function showiButtonPanel() {
$('i_button_panel').style.display = "block";
$('i_button_panel').style.zIndex = "1";	
};
function hideiButtonPanel() {
$('i_button_panel').style.display = "none";
$('i_button_panel').style.zIndex = "-1";	
};


/*--------------------*/
/*--- BG ANIMATION ---*/
/*--------------------*/
function aniBgSec(prx, idNo, anispd) { 
	var divid = prx + idNo; 
	var hspd = anispd + 20; 
	setTimeout(function(){ bgShowSec(divid); }, anispd); 
	setTimeout(function(){ bgHideSec(divid); }, hspd); 
};
function bgShowSec(divid) { var elem = document.getElementById(divid);  elem.style.zIndex = "1";  elem.style.display = "block"; };
function bgHideSec(divid) { var elem = document.getElementById(divid);  elem.style.zIndex = "-1"; elem.style.display = "none"; };

function secBgAnimate(prx, stdiv, endiv, spd) {
for( var j = stdiv; j<= endiv; ++j ) {
	var idNo = j;
    var anispd = j * spd;
    aniBgSec(prx, idNo, anispd);
    }
};
function orAni_1(fNo, spd) { secBgAnimate("or1_", 1, fNo, spd); };
function orAni_2(fNo, spd) { secBgAnimate("or2_", 1, fNo, spd); };
function orAni_3(fNo, spd) { secBgAnimate("or3_", 1, fNo, spd); };
function orAni_4(fNo, spd) { secBgAnimate("or4_", 1, fNo, spd); };      

function asAni_1(fNo, spd) { secBgAnimate("as1_", 1, fNo, spd); };
function asAni_2(fNo, spd) { secBgAnimate("as2_", 1, fNo, spd); };
function asAni_3(fNo, spd) { secBgAnimate("as3_", 1, fNo, spd); };
function asAni_4(fNo, spd) { secBgAnimate("as4_", 1, fNo, spd); };

function pyAni_1(fNo, spd) { secBgAnimate("py1_", 1, fNo, spd); };
function pyAni_2(fNo, spd) { secBgAnimate("py2_", 1, fNo, spd); };
function pyAni_3(fNo, spd) { secBgAnimate("py3_", 1, fNo, spd); };
function pyAni_4(fNo, spd) { secBgAnimate("py4_", 1, fNo, spd); };



/*--------------------------*/
/*--- GENERATE RANDOM BG ---*/
/*--------------------------*/
function genRndBg() {
var x = getRndInteger (1, 4);
switch (x) {
case 1: 
orAni_1(24, 50);
//asAni_1(24, 50);
pyAni_1(24, 50);
break;
case 2: 
orAni_2(24, 50);
//asAni_2(24, 50);
pyAni_1(24, 50);	
break;
case 3: 
orAni_3(24, 50);
//asAni_3(24, 50);	
pyAni_1(24, 50);
break;
case 4: 
orAni_4(24, 50);
//asAni_4(24, 50);
pyAni_2(24, 50);	
break;
default: 
orAni_1(24, 50);
//asAni_1(24, 50); 
pyAni_1(24, 50);
};
};
/*--- END GENERATE RANDOM BG ---*/

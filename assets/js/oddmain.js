/*==========================================*/
/*========== ORION DICE DECIDE =============*/
/* www.jamespankhurst.co.uk/odd1            */
/* jamespankhurst180@gmail.com              */
/* sample code: github.com/jamespankhurst   */
/* repository: gitlab.com/jamespankhurst180 */
/*==========================================*/

/*-------------*/
/*--- UTILS ---*/
/*-------------*/
function $(id){ return document.getElementById(id) };
function getRndInteger(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };
function pad(num, size) { var s = num+""; while (s.length < size) s = "0" + s;  return s; }; //add 0 to numbers below 10
function restart(){ window.location.replace("index.html"); };
function unHoldDice() { _d1.dh = 0;	_d2.dh = 0;	_d3.dh = 0;	_d4.dh = 0;	_d5.dh = 0; };

/*--------------------*/
/*--- FACE OBJECTS ---*/
/*--------------------*/
const _qm = {	
				f_name: 'question',
				fprx: 'qm', 
				fv: 0, 
				f_loc: 'assets/img/qm/xex/',  
				f_img: "<img src='assets/img/qm/xex/end.png' alt='qm' />", 
				f_ico: "<img src='assets/img/qm_ico.png' alt='QUESTION' width='25' height='25' />"
			};
const _ni = {	
				f_name: 'nine', 
				fprx: 'ni', 
				fv: 1, 
				f_loc: 'assets/img/ni/xex/',  
				f_img: "<img src='assets/img/ni/xex/end.png' alt='ni' />", 
				f_ico: "<img src='assets/img/nine_ico.png' alt='NINE' width='25' height='25' />"
			};
const _te = { 
				f_name: 'ten', 
				fprx: 'te', 
				fv: 2, 
				f_loc: 'assets/img/te/xex/',  
				f_img: "<img src='assets/img/te/xex/end.png' alt='te' />", 
				f_ico: "<img src='assets/img/ten_ico.png' alt='TEN' width='25' height='25' />"
			};
const _ja = {	
				f_name: 'jack', 
				fprx: 'ja', 
				fv: 3, 
				f_loc: 'assets/img/ja/xex/',  
				f_img: "<img src='assets/img/ja/xex/end.png' alt='ja' />",
				f_ico: "<img src='assets/img/jack_ico.png' alt='JACK' width='25' height='25' />"
			};
const _qu = { 
				f_name: 'queen',
				fprx: 'qu', 
				fv: 4, 
				f_loc: 'assets/img/qu/xex/',   
				f_img: "<img src='assets/img/qu/xex/end.png' alt='qu' />", 
				f_ico: "<img src='assets/img/queen_ico.png' alt='QUEEN' width='25' height='25' />"
			};
const _ki = { 
				f_name: 'king', 
				fprx: 'ki', 
				fv: 5, 
				f_loc: 'assets/img/ki/xex/',  
				f_img: "<img src='assets/img/ki/xex/end.png' alt='ki' />", 
				f_ico: "<img src='assets/img/king_ico.png' alt='KING' width='25' height='25' />"
			};
const _ac = { 
				f_name: 'ace', 
				fprx: 'ac', 
				fv: 6, 
				f_loc: 'assets/img/ac/xex/',  
				f_img: "<img src='assets/img/ac/xex/end.png' alt='ac' />", 
				f_ico: "<img src='assets/img/ace_ico.png' alt='ACE' width='25' height='25' />"
			};

/*--------------------*/
/*--- DICE OBJECTS ---*/
/*--------------------*/

const _d1 = { 
				d_Obj: '_d1', 
				d_no: 'd1',
				d_nor1: 'd1r1',
				d_nor2: 'd1r2',
				d_dec: 'd1d1', 
				d_dec2: 'd1d2', 
				d_held: 'd1h', 
				d_final: 'd1f',
				d_end: 'd160end', 
				d_face: _qm.fprx, 
				dv: _qm.fv, 
				dr: 0, 
				dh: 0, 
				d_ord: 1,
				d_sxpos: 0,
				d_expos: 20,
				d_sypos: 45,
				d_eypos: 45,
				d_hexpos: 100,
				d_ani: 'assets/xhttp/d1.html', 
				d_css: 'assets/css/d1.css', 
				d_cbf: loadD1,
				d_cbf2: loadD1r2, 
				floc: _qm.f_loc, 
				imgloc: _qm.f_img, 
				heldimgloc: _qm.f_held_img 
			};

const _d2 = { 
				d_Obj: '_d2', 
				d_no: 'd2',
				d_nor1: 'd2r1', 
				d_nor2: 'd2r2',
				d_dec: 'd2d1', 
				d_dec2: 'd2d2', 
				d_held: 'd2h', 
				d_final: 'd2f',
				d_end: 'd260end', 
				d_face: _qm.fprx, 
				dv: _qm.fv, 
				dr: 0, 
				dh: 0, 
				d_ord: 2, 
				d_sxpos: 0,
				d_expos: 20,
				d_sypos: 285,
				d_eypos: 285, 
				d_hexpos: 100,
				d_ani: 'assets/xhttp/d2.html', 
				d_css: 'assets/css/d2.css', 
				d_cbf: loadD2, 
				d_cbf2: loadD2r2,
				floc: _qm.f_loc, 
				imgloc: _qm.f_img, 
				heldimgloc: _qm.f_held_img
			};
				 
const _d3 = { 
				d_Obj: '_d3', 
				d_no: 'd3',
				d_nor1: 'd3r1', 
				d_nor2: 'd3r2',
				d_dec: 'd3d1', 
				d_dec2: 'd3d2', 
				d_held: 'd3h',
				d_final: 'd3f', 
				d_end: 'd360end', 
				d_face: _qm.fprx, 
				dv: _qm.fv, 
				dr: 0, 
				dh: 0, 
				d_ord: 3, 
				d_sxpos: 0,
				d_expos: 20,
				d_sypos: 105,
				d_eypos: 105,
				d_hexpos: 100, 
				d_ani: 'assets/xhttp/d3.html', 
				d_css: 'assets/css/d3.css', 
				d_cbf: loadD3, 
				d_cbf2: loadD3r2,
				floc: _qm.f_loc, 
				imgloc: _qm.f_img, 
				heldimgloc: _qm.f_held_img 
			}; 
const _d4 = { 
				d_Obj: '_d4', 
				d_no: 'd4',
				d_nor1: 'd4r1',
				d_nor2: 'd4r2', 
				d_dec: 'd4d1', 
				d_dec2: 'd4d2', 
				d_held: 'd4h',
				d_final: 'd4f', 
				d_end: 'd460end', 
				d_face: _qm.fprx, 
				dv: _qm.fv, 
				dr: 0, 
				dh: 0, 
				d_ord: 4, 
				d_sxpos: 0,
				d_expos: 20,
				d_sypos: 225,
				d_eypos: 225,
				d_hexpos: 100, 
				d_ani: 'assets/xhttp/d4.html', 
				d_css: 'assets/css/d4.css', 
				d_cbf: loadD4, 
				d_cbf2: loadD4r2,
				floc: _qm.f_loc, 
				imgloc: _qm.f_img, 
				heldimgloc: _qm.f_held_img
			}; 
const _d5 = {	d_Obj: '_d5', 
				d_no: 'd5',
				d_nor1: 'd5r1',
				d_nor2: 'd5r2', 
				d_dec: 'd5d1', 
				d_dec2: 'd5d2', 
				d_held: 'd5h',
				d_final: 'd5f', 
				d_end: 'd560end', 
				d_face: _qm.fprx, 
				dv: _qm.fv, 
				dr: 0, 
				dh: 0, 
				d_ord: 5,
				d_sxpos: 0,
				d_expos: 20,
				d_sypos: 165,
				d_eypos: 165, 
				d_hexpos: 100,
				d_ani: 'assets/xhttp/d5.html', 
				d_css: 'assets/css/d5.css', 
				d_cbf: loadD5,
				d_cbf2: loadD5r2, 
				floc: _qm.f_loc, 
				imgloc: _qm.f_img, 
				heldimgloc: _qm.f_held_img 
			};

/*--------------------*/
/*--- GAME OBJECTS ---*/
/*--------------------*/
let _playerObj_1 = { pid: 1, name: 'Dealer', wins: 0, points: 0	};
let _playerObj_2 = { pid: 2, name: 'Player', wins: 0, points: 0	};

const _gameObj = {
					gid: 1,	
					dealername: _playerObj_1.name,
					dealerwins: 0,
					dealerpoints: 0,
					playername: _playerObj_2.name,
					playerwins: 0,
					playerpoints: 0,
					bgani: 0,
					ctrlpanel: 0,
					_hands: {
						k5_txt: "Five of a kind",
						k4_txt: "Four of a kind",
						fh_txt: "Full House", 
						k3_txt: "Three of a kind", 
						p2_txt: "Two pair", 
						p1_txt: "One pair", 
						hc_txt: "High card"
					},
					_comms: {
						openingtxt: "Someting you just can't decide? Toss a coin?..or play a game of..",
						roll1txt: "First roll",
						roll2txt: "Second roll",
						rolltobeat: "Roll to beat:"
					},
					_autohold: {
						nines: 0,
						tens: 0,
						jacks: 0,
						queens: 0,
						kings: 0,
						aces: 0,
						autoheld: 0
					}
				};

let _roundObj = {
					gid: _gameObj.gid,
					rdNo: 1
};


let _dealerhand = {
				gid: _gameObj.gid,
				pid: _playerObj_1.pid,
				rdNo: _roundObj.rdNo,
				pv: 0,
				hc: 'default',
				tm: 'default',
				d1: 0,
				d1_ico: _qm.f_ico,
				d2: 0,
				d2_ico: _qm.f_ico,
				d3: 0,
				d3_ico: _qm.f_ico,
				d4: 0,
				d4_ico: _qm.f_ico,
				d5: 0,
				d5_ico: _qm.f_ico
	};

let _playerhand = {
				gid: _gameObj.gid,
				pid: _playerObj_2.pid,
				rdNo: _roundObj.rdNo,
				pv: 0,
				hc: 'default',
				tm: 'default',
				d1: 0,
				d1_ico: _qm.f_ico,
				d2: 0,
				d2_ico: _qm.f_ico,
				d3: 0,
				d3_ico: _qm.f_ico,
				d4: 0,
				d4_ico: _qm.f_ico,
				d5: 0,
				d5_ico: _qm.f_ico
	};


const _scoreBoardObj = {
					gid: 1,	
					rdNo: 1,
					dtm: _dealerhand.tm,
					dhc: _dealerhand.hc,
					ptm: _playerhand.tm,
					phc: _playerhand.hc,
				};



const _historyObj = {
					gid: 1,
					rdNo: 1,	
					dealername: _gameObj.dealername,
					dealerhand: _scoreBoardObj.dhc,
					dealerpoints: _gameObj.dealerpoints,
					playerhand: _gameObj.playername,
					playerhand: _scoreBoardObj.phc,
					playerpoints: _gameObj.playerpoints
				};




/*--- SCOREBOARD ---*/

function scoreBoardDisplay(gid, pid, rd, pv, hc, tn, tm) {

	// strip out first 2 chars i.e K5 five of a kind, HC high card
	let hcode = hc.substr(0, 2);

		if(pid == 1) {
			_scoreBoardObj.dhc = hcode;
		} else {
			_scoreBoardObj.phc = hcode;
		}

	// strip out 4th to 7th chars i.e A_A aces, N_T nines tens
	let hcode_hnd = hc.substr(3, 3);
	console.log('card values: '  + hcode_hnd);

};


function resetScoreBoard(pid, rollNo) {
//console.log('resetscoreboard pid: ' + pid + ' rollNo: ' + rollNo);

	$('K5').innerHTML = _gameObj._hands.k5_txt; 
	$('K4').innerHTML = _gameObj._hands.k4_txt; 
	$('FH').innerHTML = _gameObj._hands.fh_txt; 
	$('K3').innerHTML = _gameObj._hands.k3_txt; 
	$('P2').innerHTML = _gameObj._hands.p2_txt; 
	$('P1').innerHTML = _gameObj._hands.p1_txt; 
	$('HC').innerHTML = _gameObj._hands.hc_txt; 


};
/*--- END SCOREBOARD ---*/




/*--------------*/
/*--- ARRAYS ---*/
/*--------------*/
let _roll = new Array(); 
let _hold = new Array(); 
let _rroll = new Array();  
let _final = new Array();

function arrReset() { 
	_roll.length = 0;	
	_rroll.length = 0; 
	_hold.length = 0; 	
	_final.length = 0; 
};

/*---------------------------*/
/*--- CALL BACK FUNCTIONS ---*/
/*---------------------------*/
function loadD1(xhttp) { $("d1r1").innerHTML = xhttp.responseText; };
function loadD2(xhttp) { $("d2r1").innerHTML = xhttp.responseText; };
function loadD3(xhttp) { $("d3r1").innerHTML = xhttp.responseText; };
function loadD4(xhttp) { $("d4r1").innerHTML = xhttp.responseText; };
function loadD5(xhttp) { $("d5r1").innerHTML = xhttp.responseText; };

function loadD1r2(xhttp) { $("d1r2").innerHTML = xhttp.responseText; };
function loadD2r2(xhttp) { $("d2r2").innerHTML = xhttp.responseText; };
function loadD3r2(xhttp) { $("d3r2").innerHTML = xhttp.responseText; };
function loadD4r2(xhttp) { $("d4r2").innerHTML = xhttp.responseText; };
function loadD5r2(xhttp) { $("d5r2").innerHTML = xhttp.responseText; };

/*----------------*/
/*--- GET FACE ---*/
/*----------------*/
function getFace(dObj) {
let rnd = getRndInteger (1, 6);
	switch (rnd) {
		case 1: 
			dObj.d_img = _ni['f_img']; 
			dObj['d_face'] = _ni['fprx']; 
			dObj['dv'] = _ni['fv']; 
			dObj['floc'] = _ni['f_loc']; 
			dObj['heldimgloc'] = _ni['f_held_img'];	
		break;
		case 2: 
			dObj.d_img = _te['f_img']; 
			dObj['d_face'] = _te['fprx']; 
			dObj['dv'] = _te['fv']; 
			dObj['floc'] = _te['f_loc']; 
			dObj['heldimgloc'] = _te['f_held_img'];	
		break;
		case 3: 
			dObj.d_img = _ja['f_img']; 
			dObj['d_face'] = _ja['fprx']; 
			dObj['dv'] = _ja['fv']; 
			dObj['floc'] = _ja['f_loc']; 
			dObj['heldimgloc'] = _ja['f_held_img'];	
		break;
		case 4: 
			dObj.d_img = _qu['f_img']; 
			dObj['d_face'] = _qu['fprx']; 
			dObj['dv'] = _qu['fv']; 
			dObj['floc'] = _qu['f_loc']; 
			dObj['heldimgloc'] = _qu['f_held_img'];	
		break;
		case 5: 
			dObj.d_img = _ki['f_img']; 
			dObj['d_face'] = _ki['fprx']; 
			dObj['dv'] = _ki['fv']; 
			dObj['floc'] = _ki['f_loc']; 
			dObj['heldimgloc'] = _ki['f_held_img'];	
		break;
		case 6: 
			dObj.d_img = _ac['f_img']; 
			dObj['d_face'] = _ac['fprx']; 
			dObj['dv'] = _ac['fv']; 
			dObj['floc'] = _ac['f_loc']; 
			dObj['heldimgloc'] = _ac['f_held_img'];	
		break;
	};
};


/*----------------*/
/*--- ROLL DIE ---*/
/*----------------*/
function rollDie(dObj, rollNo) {
let dface = getFace(dObj);
	switch(rollNo) {
		case 1: 
			_roll.push(dObj);
			showDec1Cnvs();
			axLoadDie(dObj, rollNo);
		break;
		case 2:
			showDec2Cnvs();
			axLoadDie(dObj, rollNo);
		break;
	};
};
function axLoadDie(dObj, rollNo) {
	let dicefile = dObj['d_ani']; 
	let dface = dObj['d_face'];
	let cbFunction;

	if(rollNo == 1) {
	cbFunction = dObj['d_cbf'];
	} else {
	cbFunction = dObj['d_cbf2'];
	}

	let xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		cbFunction(this);
		}
	};
	xhttp.open("GET", dicefile, true);
	xhttp.onload = function () {  loadFrames(dObj, rollNo); };
	xhttp.send();
}; 
function loadFrames(dObj, rollNo) {
let dNo = dObj['d_no'];
	for(var i = 1; i<=60; ++i) {
		var frmId = dNo + i;
		var heldImgId = dObj['d_held'];
		var frmImagePath = dObj['floc'];
		var frmImageName = i + ".png";
		var frmImgScr = "<img src='" + frmImagePath + frmImageName + "' />";
		$(frmId).innerHTML = frmImgScr;
		}

/*-- SET _gameObj.bgani TO 1 - TURN OFF BG ANIMATION --*/
if(_gameObj.bgani == 0) { genRndBg(); }

setTimeout(function(){ diceAni(dObj, 60, 600, 10, rollNo); }, 1000);
};
function diceAni(dObj, frs, dur, spd, rollNo) {
	for( var j = 1; j <= frs; ++j ) {
		let dNo = dObj.d_no;
		let idNo = j;
		var anispd = j * spd;
		aniDiceRoll(dNo, idNo, anispd, rollNo);
		}
	setTimeout(function() { finalFrame(dObj, rollNo); }, dur+20);
};
function aniDiceRoll(dNo, idNo, anispd, rollNo) {
	let dface = dNo + idNo;
	let hspd = anispd + 20;
	setTimeout(function(){ show(dface); }, anispd);
	setTimeout(function(){ hide(dface); }, hspd);
};
function show(dface) { var elem = document.getElementById(dface); elem.style.zIndex = "1"; elem.style.display = "block"; };
function hide(dface) { var elem = document.getElementById(dface); elem.style.zIndex = "-1"; elem.style.display = "none"; };

function finalFrame(dObj, rollNo) {
	
	let elem;
	if(rollNo == 1) {
	elem = $(dObj.d_no);
	} else {
	elem = $(dObj.d_nor2);
	}
	let frmImagePath = dObj.floc;
	let frmEnd = dObj.d_end;
	let frmImgEnd = "<img id='" + frmEnd + "' draggable='true' ondragstart='drag(event)' src='" + frmImagePath + "end.png" + "' />";
	elem.innerHTML = frmImgEnd;
	elem.style.display = "block";
	elem.style.zIndex = "1";

	/*---==============---*/
	/*--- DICE ANIMATE ---*/
	/*---==============---*/
	/*--- move down after end of roll ---*/
	setTimeout(function(){ 
		moveDdown(dObj, 20, 130, rollNo);
	}, 
	10); 
	/*--- move left/right, above div ---*/
	setTimeout(function(){ 
		let endpos = dObj.d_eypos;
			if(endpos < xCentre) {
				moveDright(dObj, xCentre, endpos, rollNo);
			} else {
				moveDleft(dObj, xCentre, endpos, rollNo);
			}
		}, 
	500);
	/*--- move down to d1 div ---*/
	setTimeout(function(){ 
		moveDdown(dObj, 130, 190, rollNo);
	}, 
	1000);
	/*--- draw dice image in appropriate d1 / d1r2 canvas ---*/  
	if(rollNo == 1) {
	setTimeout(function() { 
		drawDice(dObj, 'dec', 2); 
		}, 
	2000);
	} else {
	setTimeout(function() { 
		drawDice(dObj, 'dec2', 2); 
		}, 
	2000);	
	};
}; 

/*--------------------*/
/*--- END ROLL DIE ---*/
/*--------------------*/


/*-----------------------*/
/*----- MANUAL HOLD -----*/
/*-----------------------*/
function allowDrop(ev) { 
ev.preventDefault(); 
}
function drag(ev) {
var strHldDNo = ev.target.id;
var dNo = strHldDNo.substr(0, 2);
ev.dataTransfer.setData("text", ev.target.id);
hold(dNo);
}
function drop(ev) {
ev.preventDefault();
var data = ev.dataTransfer.getData("text");
ev.target.appendChild(document.getElementById(data));
}

function hold(strDobj) {	

	hideDec1Cnvs(strDobj.d_dec);

	switch (strDobj) {
		case 'd1':	
			_hold.push(_d1); 
			_d1.dh = 1;
		break;
		case 'd2':	
			_hold.push(_d2); 
			_d2.dh = 1; 
		break;
		case 'd3':	
			_hold.push(_d3); 
			_d3.dh = 1; 
		break;
		case 'd4':	
			_hold.push(_d4); 
			_d4.dh = 1; 
		break;
		case 'd5':	
			_hold.push(_d5); 
			_d5.dh = 1; 
		break;	
		}
};

/*---------------------------*/
/*----- END MANUAL HOLD -----*/
/*---------------------------*/

/*-----------------*/
/*--- AUTO HOLD ---*/
/*-----------------*/
function autoHold(pid, rollNo) {
calcHeld();

let dheld = _gameObj._autohold.autoheld;

	if(dheld == 5){
		console.log('ERROR: VERY OCCASIONALLY freezes if all 5 held? last 12.11.21');
		hideDec1Cnvs();
		for (j=1; j<=5; j++) {
		var dObj = _hold[(j -1)];
		drawDice(dObj, 'held', 1);
		}
	setTimeout(function(){ diceRoll(pid, 2); }, 1000);
	} else {
		for(var i = 1; i <=dheld; i++){
		var dObj = _hold[(i -1)];
		drawDice(dObj, 'held', 1);
		}
	setTimeout(function(){ diceRoll(pid, 2); }, 1000);
	};
}; 

/*-----------------*/
/*--- CALC HELD ---*/
/*-----------------*/
function calcHeld() {
var count=0;
var nines=0; 
var tens=0; 
var jacks=0; 
var queens=0; 
var kings=0; 
var aces=0;
 
	for (var i = 1; i<=5; ++i) {
		//load value of dice from first roll 
		switch(i) { 
			case 1: fc = _d1.dv; break; 
			case 2: fc = _d2.dv; break; 
			case 3: fc = _d3.dv; break; 
			case 4: fc = _d4.dv; break; 
			case 5: fc = _d5.dv; break; 
		};
		//and count number of each face
		switch(fc) { 
			case 1: nines++; break; 
			case 2: tens++; break; 
			case 3: jacks++; break; 
			case 4: queens++; break; 
			case 5: kings++; break; 
			case 6: aces++; break; 
		};
	}

if(nines >= 2){
	for (var i = 0; i<=4; ++i) { 
		if( _roll[i].dv == 1 ) {
		count++;
		switch(i){	
			case 0: _d1.dh = 1; _hold.push(_d1); break;	
			case 1: _d2.dh = 1; _hold.push(_d2); break;	
			case 2: _d3.dh = 1; _hold.push(_d3); break;	
			case 3: _d4.dh = 1; _hold.push(_d4); break;	
			case 4: _d5.dh = 1; _hold.push(_d5); break;	
			}; 			
		};
	};
}; // end nines if	
if(tens >= 2){
	for (var i = 0; i<=4; ++i) {  
		if( _roll[i].dv == 2 ) {
		count++;
		switch(i){	
			case 0: _d1.dh = 1; _hold.push(_d1); break;	
			case 1: _d2.dh = 1; _hold.push(_d2); break;	
			case 2: _d3.dh = 1; _hold.push(_d3); break;	
			case 3: _d4.dh = 1; _hold.push(_d4); break;	
			case 4: _d5.dh = 1; _hold.push(_d5); break;	
			};
		}; 
	}; 
}; // end tens if
if(jacks >= 2){
	for (var i = 0; i<=4; ++i) {  
		if( _roll[i].dv == 3 ) 	{
		count++;
		switch(i){	
			case 0: _d1.dh = 1; _hold.push(_d1); break;	
			case 1: _d2.dh = 1; _hold.push(_d2); break;	
			case 2: _d3.dh = 1; _hold.push(_d3); break;	
			case 3: _d4.dh = 1; _hold.push(_d4); break;	
			case 4: _d5.dh = 1; _hold.push(_d5); break;	
			}; 
		}; 
	};
}; // end jacks if
if(queens >= 2){
	for (var i = 0; i<=4; ++i) {  
		if( _roll[i].dv == 4 ) 	{
		count++;
		switch(i){	
			case 0: _d1.dh = 1; _hold.push(_d1); break;	
			case 1: _d2.dh = 1; _hold.push(_d2); break;	
			case 2: _d3.dh = 1; _hold.push(_d3); break;	
			case 3: _d4.dh = 1; _hold.push(_d4); break;	
			case 4: _d5.dh = 1; _hold.push(_d5); break;	
			}; 
		}; // end if
	};
}; // end queens if
if(kings >= 2){
	for (var i = 0; i<=4; ++i) {  
		if( _roll[i].dv == 5 ) 	{
		count++;
		switch(i){	
			case 0: _d1.dh = 1; _hold.push(_d1); break;	
			case 1: _d2.dh = 1; _hold.push(_d2); break;	
			case 2: _d3.dh = 1; _hold.push(_d3); break;	
			case 3: _d4.dh = 1; _hold.push(_d4); break;	
			case 4: _d5.dh = 1; _hold.push(_d5); break;	
			}; 
		};
	};
}; // end kings if
if(aces >= 2){
	for (var i = 0; i<=4; ++i) {  
		if( _roll[i].dv == 6 ) 	{
		count++;
		switch(i){	
			case 0: _d1.dh = 1; _hold.push(_d1); break;	
			case 1: _d2.dh = 1; _hold.push(_d2); break;	
			case 2: _d3.dh = 1; _hold.push(_d3); break;	
			case 3: _d4.dh = 1; _hold.push(_d4); break;	
			case 4: _d5.dh = 1; _hold.push(_d5); break;	
			}; 
		};
	};
}; // end aces if

_gameObj._autohold.nines = nines;
_gameObj._autohold.tens = tens;
_gameObj._autohold.jacks = jacks;
_gameObj._autohold.queens = queens;
_gameObj._autohold.kings = kings;
_gameObj._autohold.aces = aces;
_gameObj._autohold.autoheld = count;


};


/*----------------------*/
/*--- CALCULATE ROLL ---*/
/*----------------------*/
function calcRoll(pid, rd, rollNo) {
let _finalhand = _rroll.concat(_final); 

	if(pid == 1) {
		_dealerhand = calculate( _finalhand[0], _finalhand[1], _finalhand[2], _finalhand[3], _finalhand[4], pid, 1, rd, rollNo); 
		$('dlast').innerHTML =  _dealerhand.d1_ico + _dealerhand.d3_ico +  _dealerhand.d5_ico + _dealerhand.d4_ico + _dealerhand.d2_ico;
		
		display_roll( _dealerhand.gid, _dealerhand.pid, rd, _dealerhand.pv, _dealerhand.hc, 1, _dealerhand.tm);

		//scoreBoardDisplay(_dealerhand.gid, _dealerhand.pid, rd, _dealerhand.pv, _dealerhand.hc, 1, _dealerhand.tm);


	} else {
		_playerhand = calculate( _finalhand[0], _finalhand[1], _finalhand[2], _finalhand[3], _finalhand[4], pid, 1, rd, rollNo); 
		$('plast').innerHTML =  _playerhand.d1_ico + _playerhand.d3_ico +  _playerhand.d5_ico + _playerhand.d4_ico + _playerhand.d2_ico;

		display_roll( _playerhand.gid, _playerhand.pid, rd, _playerhand.pv, _playerhand.hc, 1, _playerhand.tm);

		//scoreBoardDisplay(_playerhand.gid, _playerhand.pid, rd, _playerhand.pv, _playerhand.hc, 1, _playerhand.tm);

	};
	
};


/*------------------------*/
/*--- CALCULATE WINNER ---*/
/*------------------------*/
function calcWinner() {

	let dpv = _dealerhand.pv;
	let ppv = _playerhand.pv;

	let dealerwins = _gameObj.dealerwins;
	let playerwins = _gameObj.playerwins;

	let pv_total = (parseInt(dpv) + parseInt(ppv));
	let dpc = ((parseInt(dpv) / parseInt(pv_total))*100); 
	let ppc = ((parseInt(ppv) / parseInt(pv_total))*100);

	let marginpx = 0;
	let adjvpc = 0;

		/*---------- give player the tie? FIX RE-PLAY --------------*/
		if (ppc >= dpc){
			rondVmCalc('pos');
			_gameObj.playerwins++; 
			setTimeout(function(){ axEndRound(2); }, 2500);
		} else {
			rondVmCalc('neg');
			_gameObj.dealerwins++;
			setTimeout(function(){ axEndRound(1); }, 2500);
		};
		
};
/*---------------------*/
/*--- ROUND SUMMARY ---*/
/*---------------------*/

function roundSummary(pid) {

	if(pid == 1) {
	$('winner_banner').innerHTML = "You lose, the answer to your question is NO";
	} else {
	$('winner_banner').innerHTML = "You win, the answer to your question is YES";
	}

 $('dealer_final').innerHTML = _dealerhand.d1_ico + _dealerhand.d2_ico + _dealerhand.d3_ico + _dealerhand.d4_ico +_dealerhand.d5_ico;
 $('player_final').innerHTML = _playerhand.d1_ico + _playerhand.d2_ico + _playerhand.d3_ico + _playerhand.d4_ico +_playerhand.d5_ico;
}



function display_roll(gid, pid, rd, pv, hc, tn, tm) {

	//console.log('gid: ' + _dealerhand.gid + 'pid: ' +  _dealerhand.pid + ' rd: ' +  rd + ' pv: ' + _dealerhand.pv + ' hc: ' + _dealerhand.hc + ' tn - TURN REDUNDANT: 2, tm: ' +  _dealerhand.tm);

	/*----SCORE BOARD------*/	  
	var hc = hc + "|" + gid + "|" + pid + "|" + rd + "|" + tn;

	var dice_txt = " not set";
	
	var hcode_hnd = hc.substr(3, 3);
	switch(hcode_hnd)
	{
	case 'A_A': var dice_txt = " aces"; break; 
	case 'K_K': var dice_txt = " kings"; break; 
	case 'Q_Q': var dice_txt = " queens"; break;	
	case 'J_J': var dice_txt = " jacks"; break;
	case 'T_T': var dice_txt = " tens"; break; 
	case 'N_N': var dice_txt = " nines"; break; 
	case 'A_K': var dice_txt = " aces kings"; break;	
	case 'K_A': var dice_txt = " kings aces"; break;
	case 'A_Q': var dice_txt = " aces queens"; break; 
	case 'Q_A': var dice_txt = " queens aces"; break;	
	case 'A_J': var dice_txt = " aces jacks"; break; 
	case 'J_A': var dice_txt = " jacks aces"; break;
	case 'A_T': var dice_txt = " aces tens"; break;	
	case 'T_A': var dice_txt = " tens aces"; break;	
	case 'A_N': var dice_txt = " aces nines"; break; 
	case 'N_A': var dice_txt = " nines aces"; break;
	case 'K_Q': var dice_txt = " kings queens"; break; 
	case 'Q_K': var dice_txt = " queens kings"; break; 
	case 'K_J': var dice_txt = " kings jacks"; break;	
	case 'J_K': var dice_txt = " jacks kings"; break;
	case 'K_T': var dice_txt = " kings tens"; break; 
	case 'T_K': var dice_txt = " tens kings"; break; 
	case 'K_N': var dice_txt = " kings nines"; break;	
	case 'N_K': var dice_txt = " nines kings"; break;
	case 'Q_J': var dice_txt = " queens jacks"; break; 
	case 'J_Q': var dice_txt = " jacks queens"; break; 
	case 'Q_T': var dice_txt = " queens tens"; break;	
	case 'T_Q': var dice_txt = " tens queens"; break;
	case 'Q_N': var dice_txt = " queens nines"; break; 
	case 'N_Q': var dice_txt = " nines queens"; break; 
	case 'J_T': var dice_txt = " jacks tens"; break; 
	case 'T_J': var dice_txt = " tens jacks"; break;
	case 'J_N': var dice_txt = " jacks nines"; break; 
	case 'N_J': var dice_txt = " nines jacks"; break;	
	case 'T_N': var dice_txt = " tens nines"; break; 
	case 'N_T': var dice_txt = " nines tens"; break;
	};

	var hcode_bg = hc.substr(0, 2);
	var k5_txt = "Five of a kind"; 
	var k4_txt = "Four of a kind"; 
	var fh_txt = "Full House"; 
	var k3_txt = "Three of a kind"; 
	var p2_txt = "Two pair"; 
	var p1_txt = "One pair"; 
	var hc_txt = "High card";

	var _bg = "#000";
	var _tx = "#fff";
	var _tt = "capitalize";
	var _txcol = "#fff";
	var _ttupp = "uppercase";
	var _bgcol = "#000";

	if( pid == 1 ){
	var _bgcol = "#fe0000"; //red
	} else {
	var _bgcol = "#3dc238"; //green
	};

	var _ttx = "";
	var _cdtx = "";
	var _cqtx = "";

	switch (hcode_bg)
	{
	case 'K5': 

	_ttx = k5_txt + "<br />" + dice_txt;

	$('K5').innerHTML = _ttx; 
	$('K5').style.textTransform = _ttupp; 
	$('K5').style.background = _bgcol; 
	$('K5').style.color = _txcol;
	$('K4').style.textTransform = _tt;	
	$('K4').style.background = _bg; 
	$('K4').style.color = _tx; 
	$('K4').innerHTML = k4_txt;	
	$('FH').style.textTransform = _tt;
	$('FH').style.background = _bg; 
	$('FH').style.color = _tx; 
	$('FH').innerHTML = fh_txt;	
	$('K3').style.textTransform = _tt;
	$('K3').style.background = _bg; 
	$('K3').style.color = _tx; 
	$('K3').innerHTML = k3_txt;	
	$('P2').style.textTransform = _tt;
	$('P2').style.background = _bg; 
	$('P2').style.color = _tx; 
	$('P2').innerHTML = p2_txt;	
	$('P1').style.textTransform = _tt;
	$('P1').style.background = _bg; 
	$('P1').style.color = _tx; 
	$('P1').innerHTML = p1_txt;	
	$('HC').style.textTransform = _tt;
	$('HC').style.background = _bg; 
	$('HC').style.color = _tx; 
	$('HC').innerHTML = hc_txt;	
	break;

	case 'K4': 
	_ttx = k4_txt + "<br />" + dice_txt;

	$('K4').innerHTML = _ttx;	
	$('K4').style.textTransform = _ttupp; 
	$('K4').style.background = _bgcol; 	
	$('K4').style.color = _txcol; 	
	$('K5').style.textTransform = _tt;
	$('K5').style.background = _bg;
	$('K5').style.color = _tx;	
	$('K5').innerHTML = k5_txt;	
	$('FH').style.textTransform = _tt;
	$('FH').style.background = _bg;	
	$('FH').style.color = _tx;	
	$('FH').innerHTML = fh_txt;
	$('K3').style.textTransform = _tt;
	$('K3').style.background = _bg;	
	$('K3').style.color = _tx;	
	$('K3').innerHTML = k3_txt;	
	$('P2').style.textTransform = _tt;
	$('P2').style.background = _bg;	
	$('P2').style.color = _tx;
	$('P2').innerHTML = p2_txt;	
	$('P1').style.textTransform = _tt;
	$('P1').style.background = _bg;	
	$('P1').style.color = _tx;	
	$('P1').innerHTML = p1_txt;	
	$('HC').style.textTransform = _tt;
	$('HC').style.background = _bg;
	$('HC').style.color = _tx;	
	$('HC').innerHTML = hc_txt;	
	break;

	case 'FH': 
	_ttx = fh_txt + "<br />" + dice_txt;

	$('FH').innerHTML = _ttx;	
	$('FH').style.textTransform = _ttupp; 
	$('FH').style.background = _bgcol; 	
	$('FH').style.color = _txcol;	
	$('K5').style.textTransform = _tt;
	$('K5').style.background = _bg;
	$('K5').style.color = _tx;	
	$('K5').innerHTML = k5_txt;	
	$('K4').style.textTransform = _tt;
	$('K4').style.background = _bg;	
	$('K4').style.color = _tx;	
	$('K4').innerHTML = k4_txt;
	$('K3').style.textTransform = _tt;
	$('K3').style.background = _bg;	
	$('K3').style.color = _tx;	
	$('K3').innerHTML = k3_txt;	
	$('P2').style.textTransform = _tt;
	$('P2').style.background = _bg;	
	$('P2').style.color = _tx;
	$('P2').innerHTML = p2_txt;	
	$('P1').style.textTransform = _tt;
	$('P1').style.background = _bg;	
	$('P1').style.color = _tx;	
	$('P1').innerHTML = p1_txt;	
	$('HC').style.textTransform = _tt;
	$('HC').style.background = _bg;
	$('HC').style.color = _tx;	
	$('HC').innerHTML = hc_txt;	
	break;

	case 'K3': 
	_ttx = k3_txt + "<br />" + dice_txt;

	$('K3').innerHTML = _ttx;	
	$('K3').style.textTransform = _ttupp; 
	$('K3').style.background = _bgcol; 	
	$('K3').style.color = _txcol;	
	$('K5').style.textTransform = _tt;
	$('K5').style.background = _bg;
	$('K5').style.color = _tx;	
	$('K5').innerHTML = k5_txt;	
	$('K4').style.textTransform = _tt;
	$('K4').style.background = _bg;	
	$('K4').style.color = _tx;	
	$('K4').innerHTML = k4_txt;
	$('FH').style.textTransform = _tt;
	$('FH').style.background = _bg;	
	$('FH').style.color = _tx;	
	$('FH').innerHTML = fh_txt;	
	$('P2').style.textTransform = _tt;
	$('P2').style.background = _bg;	
	$('P2').style.color = _tx;
	$('P2').innerHTML = p2_txt;	
	$('P1').style.textTransform = _tt;
	$('P1').style.background = _bg;	
	$('P1').style.color = _tx;	
	$('P1').innerHTML = p1_txt;	
	$('HC').style.textTransform = _tt;
	$('HC').style.background = _bg;
	$('HC').style.color = _tx;	
	$('HC').innerHTML = hc_txt;	
	break;

	case 'P2': 

	_ttx = p2_txt + "<br />" + dice_txt;

	$('P2').innerHTML = _ttx;	

	$('P2').style.textTransform = _ttupp; 
	$('P2').style.background = _bgcol;  	
	$('P2').style.color = _txcol;	
	$('K5').style.textTransform = _tt;
	$('K5').style.background = _bg;
	$('K5').style.color = _tx;	
	$('K5').innerHTML = k5_txt;	
	$('K4').style.textTransform = _tt;
	$('K4').style.background = _bg;	
	$('K4').style.color = _tx;	
	$('K4').innerHTML = k4_txt;
	$('FH').style.textTransform = _tt;
	$('FH').style.background = _bg;	
	$('FH').style.color = _tx;	
	$('FH').innerHTML = fh_txt;	
	$('K3').style.textTransform = _tt;
	$('K3').style.background = _bg;	
	$('K3').style.color = _tx;
	$('K3').innerHTML = k3_txt;	
	$('P1').style.textTransform = _tt;
	$('P1').style.background = _bg;	
	$('P1').style.color = _tx;	
	$('P1').innerHTML = p1_txt;	
	$('HC').style.textTransform = _tt;
	$('HC').style.background = _bg;
	$('HC').style.color = _tx;	
	$('HC').innerHTML = hc_txt;	
	break;

	case 'P1': 

	_ttx = p1_txt + "<br />" + dice_txt;

	$('P1').innerHTML = _ttx;	
	$('P1').style.textTransform = _ttupp; 
	$('P1').style.background = _bgcol; 	
	$('P1').style.color = _txcol;	
	$('K5').style.textTransform = _tt;
	$('K5').style.background = _bg;
	$('K5').style.color = _tx;	
	$('K5').innerHTML = k5_txt;	
	$('K4').style.textTransform = _tt;
	$('K4').style.background = _bg;	
	$('K4').style.color = _tx;	
	$('K4').innerHTML = k4_txt;
	$('FH').style.textTransform = _tt;
	$('FH').style.background = _bg;	
	$('FH').style.color = _tx;	
	$('FH').innerHTML = fh_txt;	
	$('K3').style.textTransform = _tt;
	$('K3').style.background = _bg;	
	$('K3').style.color = _tx;
	$('K3').innerHTML = k3_txt;	
	$('P2').style.textTransform = _tt;
	$('P2').style.background = _bg;	
	$('P2').style.color = _tx;	
	$('P2').innerHTML = p2_txt;	
	$('HC').style.textTransform = _tt;
	$('HC').style.background = _bg;
	$('HC').style.color = _tx;	
	$('HC').innerHTML = hc_txt;	
	break;

	case 'HC': 
	_ttx = hc_txt + "<br />" + dice_txt;

	$('HC').innerHTML = _ttx;	
	$('HC').style.textTransform = _ttupp; 
	$('HC').style.background = _bgcol; 	
	$('HC').style.color = _txcol;	
	$('K5').style.textTransform = _tt;
	$('K5').style.background = _bg;
	$('K5').style.color = _tx;	
	$('K5').innerHTML = k5_txt;	
	$('K4').style.textTransform = _tt;
	$('K4').style.background = _bg;	
	$('K4').style.color = _tx;	
	$('K4').innerHTML = k4_txt;
	$('FH').style.textTransform = _tt;
	$('FH').style.background = _bg;	
	$('FH').style.color = _tx;	
	$('FH').innerHTML = fh_txt;	
	$('K3').style.textTransform = _tt;
	$('K3').style.background = _bg;	
	$('K3').style.color = _tx;
	$('K3').innerHTML = k3_txt;	
	$('P2').style.textTransform = _tt;
	$('P2').style.background = _bg;	
	$('P2').style.color = _tx;	
	$('P2').innerHTML = p2_txt;	
	$('P1').style.textTransform = _tt;
	$('P1').style.background = _bg;
	$('P1').style.color = _tx; 
	$('P1').innerHTML = p1_txt; 
	break;	

	case 'ND': 
	$('K5').style.background = _bg;
	$('K5').style.color = _tx;	
	$('K5').innerHTML = k5_txt;	
	$('K4').style.background = _bg;	
	$('K4').style.color = _tx;	
	$('K4').innerHTML = k4_txt;
	$('FH').style.background = _bg;	
	$('FH').style.color = _tx;	
	$('FH').innerHTML = fh_txt;	
	$('K3').style.background = _bg;	
	$('K3').style.color = _tx;
	$('K3').innerHTML = k3_txt;	
	$('P2').style.background = _bg;	
	$('P2').style.color = _tx;	
	$('P2').innerHTML = p2_txt;	
	$('P1').style.background = _bg; 
	$('P1').style.color = _tx; 
	$('P1').innerHTML = p1_txt;
	$('HC').style.background = _bg;
	$('HC').style.color = _tx;	
	$('HC').innerHTML = hc_txt;	
	break;
	};
	

	
}; // end function

/*-----------------*/
/*--- VIBOMETER ---*/
/*-----------------*/

function rondVmCalc(posneg) {
	
	let dpv = _dealerhand.pv;
	let ppv = _playerhand.pv;
	let dealerwins = _gameObj.dealerwins;
	let playerwins = _gameObj.playerwins;
	let pv_total = (parseInt(dpv) + parseInt(ppv));
	let dpc = ((parseInt(dpv) / parseInt(pv_total))*100); 
	let ppc = ((parseInt(ppv) / parseInt(pv_total))*100);

	let vneed = document.getElementById("vibneedle");

	if(posneg == 'pos') {
		marginpx = ppc - dpc;  
		adjvpc = (parseInt(marginpx) / 2); // 50% to fit scale            
		vneed.style.background = "#66ff33";
		let pos = 0;
		let id = setInterval(frame, 20);
		function frame(){ 
		if (pos == parseInt(adjvpc)) { clearInterval(id); }  else {  pos++; vneed.style.left = pos + "px"; } 
		}
	} else {
		marginpx = dpc - ppc;              
		adjvpc = (parseInt(marginpx) / 2); // 50% to fit scale
		let neg_vpc = parseInt(adjvpc) - parseInt(marginpx); // set end position to negative value
		vneed.style.background = "#ff0000";
		let pos = 0;
		let id = setInterval(frame, 20);
		function frame(){	
		if (pos == neg_vpc) { clearInterval(id); }  else {  pos--; vneed.style.left = pos + "px"; } }
		}
};

/*-------------------------*/
/*-- ROUND NUMBER SLIDER --*/
/*-------------------------*/
function rdslider(dws, qws, rd){
	
	$('rdNo').innerHTML = pad(rd, 2);

    drdslider(dws, rd);
    qrdslider(qws, rd);
};

function drdslider(ws, rd) {

    var drdneed = $("drdneedle");

    drdneed.innerHTML = ws;

    var slider_width = 0;

    switch(rd){
    case 1: slider_width = 35; break;
    case 2: slider_width = 25; break;
    case 3: slider_width = 15; break;
    case 4: slider_width = 14; break;
    case 5: slider_width = 13; break;
    case 6: slider_width = 12; break;
    case 7: slider_width = 11; break;
    case 8: slider_width = 10; break;
	case 9: slider_width = 9; break;
	case 10: slider_width = 8; break;
	case 11: slider_width = 7; break;
	case 12: slider_width = 6; break;
	case 13: slider_width = 5; break;
	default: slider_width = 5;
    };
    
    var ws_slider = (parseInt(ws) * slider_width); 
    
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame()
    {
    if (pos == ws_slider) { clearInterval(id); }  else {  pos++; drdneed.style.width = pos + "px"; } }
};

function qrdslider(ws, rd) {
    var qrdneed = $("qrdneedle");
    qrdneed.innerHTML = ws;
    
    var slider_width = 0;

    switch(rd){
    case 1: slider_width = 35; break;
    case 2: slider_width = 25; break;
    case 3: slider_width = 15; break;
    case 4: slider_width = 14; break;
    case 5: slider_width = 13; break;
    case 6: slider_width = 12; break;
    case 7: slider_width = 11; break;
    case 8: slider_width = 10; break;
	case 9: slider_width = 9; break;
	case 10: slider_width = 8; break;
	case 11: slider_width = 7; break;
	case 12: slider_width = 6; break;
	case 13: slider_width = 5; break;
	default: slider_width = 5;
    };
    
    var ws_slider = (parseInt(ws) * slider_width);

    var pos = 0;
    var id = setInterval(frame, 10);
    function frame()
    {
    if (pos == ws_slider) { clearInterval(id); }  else {  pos++; qrdneed.style.width = pos + "px"; } }
};







/*--- 03.11.21 REDUNDANT SCOREBOARD NOT REQUIRED YET ---*/



/*------------------------------THROW HISTORY ------------------------------*/

function update_roll(pid, gid, tn, rd, pv, tm){
    
	var dpv = sessionStorage.getItem("dpv"); //dealer points value
    var dtm = sessionStorage.getItem("dtm"); //dealer throw message
    var qpv = sessionStorage.getItem("qpv"); //qu points value
    var qtm = sessionStorage.getItem("qtm"); //qu throw message
    var rd = sessionStorage.getItem("rd"); //round
    var ws = sessionStorage.getItem("ws"); //wins?
	var dws = sessionStorage.getItem("dws"); //de wins
	var qws = sessionStorage.getItem("qws"); //qu wins
    var dtot = sessionStorage.getItem("dtot"); //running tot points
    var qtot = sessionStorage.getItem("qtot"); //running tot points 

    var winbonus = 4; //=400 points
	
	//if (pid == 1){
	//sessionStorage.setItem("pid", 2);
	//sessionStorage.setItem("tn", 2);
	//}
	//else{
	//sessionStorage.setItem("pid", 1);
	//sessionStorage.setItem("tn", 1);
	//sessionStorage.setItem("hc", "ND|A_A|10"); 
	//rd++;
	//sessionStorage.setItem("rd", rd);

	//DICEMAN
	//dtot = (parseInt(dtot) + parseInt(dpv_100));
	//dtot = (parseInt(dtot) + parseInt(dpv));
    //sessionStorage.setItem("dtot", dtot);

	//record last throw de message
    //sessionStorage.setItem("xdtm", dtm);
	
	//record last de dice 
	//var xdd1 = sessionStorage.getItem("dd1");
	//switch (parseInt(xdd1)){
	//case 1: xdd1_i = i_nine_i; break;
	//case 2: xdd1_i = i_ten_i; break;
	//case 3: xdd1_i = i_jack_i; break;
	//case 4: xdd1_i = i_queen_i; break;
	//case 5: xdd1_i = i_king_i; break;
	//case 6: xdd1_i = i_ace_i; break;
	//};
	//sessionStorage.setItem("xdd1_i", xdd1_i);
	//sessionStorage.setItem("xdd1", xdd1);

	//see dicedecide.js for xdd2 etc..
	
	//QUESTIONER
	//qtot = (parseInt(qtot) + parseInt(qpv_100));
	//qtot = (parseInt(qtot) + parseInt(qpv));
    //sessionStorage.setItem("qtot", qtot);
	//sessionStorage.setItem("xqtm", qtm);
	
	//var xqd1 = sessionStorage.getItem("qd1");
	//switch (parseInt(xqd1)){
	//case 1: xqd1_i = i_nine_i; break;
	//case 2: xqd1_i = i_ten_i; break;
	//case 3: xqd1_i = i_jack_i; break;
	//case 4: xqd1_i = i_queen_i; break;
	//case 5: xqd1_i = i_king_i; break;
	//case 6: xqd1_i = i_ace_i; break;
	//};
	//sessionStorage.setItem("xqd1_i", xqd1_i);
	//sessionStorage.setItem("xqd1", xqd1);
	

}; // end function




/*==========================================*/
/*========== ORION DICE DECIDE =============*/
/* www.jamespankhurst.co.uk/odd1            */
/* jamespankhurst180@gmail.com              */
/* sample code: github.com/jamespankhurst   */
/* repository: gitlab.com/jamespankhurst180 */
/*==========================================*/

/*----------------------------*/
/*--- SET UP / START ROUND ---*/
/*----------------------------*/
function setUpGame(pName, strd) {
	let rdNo = _roundObj.rdNo; 
		_roundObj.rdNo++; 
	let dealerwins = _gameObj.dealerwins; 
	let playerwins = _gameObj.playerwins;

	hideScoreboardPanel();

	if( strd == 1) {
	$('ctrl-panel').style.display = "block";
	}

	rdslider(dealerwins, playerwins, rdNo);
	startRoll(1, 1);
};
/*------------------*/
/*--- START ROLL ---*/
/*------------------*/ 
function startRoll(pid, rollNo) {
	let xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	document.getElementById("arena-container").innerHTML =  this.responseText;
	}
};
xhttp.open("GET", "assets/xhttp/arena.html", true);
xhttp.onload = function () {  diceRoll(pid, rollNo); };
xhttp.send();
};
/*-----------------*/
/*--- DICE ROLL ---*/
/*-----------------*/
function diceRoll(pid, rollNo) {

resetScoreBoard(pid, rollNo);

	switch(pid) {
		case 1:
			$('comms-panel').innerHTML = _gameObj._comms.roll1txt;
		break;
		case 2: 
			let dtm = _dealerhand.tm;
			let lastroll = _dealerhand.d1_ico + _dealerhand.d2_ico + _dealerhand.d3_ico + _dealerhand.d4_ico +_dealerhand.d5_ico;
			$('comms-panel').innerHTML = _gameObj._comms.rolltobeat + dtm + "<br />" + lastroll;
			$('dscore').innerHTML = ""; 
			showScoreboardPanel();
		break;
	} 

	switch(rollNo) {
		case 1:
			for (let x = 1; x <= 5; x++) {
				/*
				CODERS NOTE: The unnecessary inclusion of a SWITCHed FOR loop makes 
				the on-screen execution of the animation code much smoother. 
				Not sure why, perhaps the micro-second of proceesor time oils the wheels? 
				The code works perfectly well without.
				*/
				switch (x) {
				case 1: 
					setTimeout(function(){ rollDie(_d1, rollNo); }, 1000); 
				break;
				case 2: 
					setTimeout(function(){ rollDie(_d2, rollNo); }, 3500); 
				break;
				case 3: 
					setTimeout(function(){ rollDie(_d3, rollNo); }, 6000); 
				break;
				case 4: 
					setTimeout(function(){ rollDie(_d4, rollNo); }, 8500); 
				break;
				case 5: 
					setTimeout(function(){ rollDie(_d5, rollNo); }, 11000); 
				break;
				}
			}
			if(pid == 1){
			setTimeout(function(){ showHoldCnvs(); }, 14000); 
			setTimeout(function(){ autoHold(pid, rollNo); }, 15000);
			} else {
			setTimeout(function(){ showHoldPanel(); }, 12000); 
			setTimeout(function(){ showButtonPanel(); }, 12000); 
			};
		break;

		case 2:

			rmAllRoll1d();
			showDec2Cnvs();
			rmAllHeld();

			$("hold_panel").innerHTML = "";

			if(pid == 1){
				$('comms-panel').innerHTML = _gameObj._comms.roll2txt;
			} else {
			hideHoldPanel();
			}
			
			for (var x = 1; x <= 5; x++) {
				let dNo;
				switch (x){
					case 1: dNo = _d1; break;
					case 2: dNo = _d2; break;
					case 3: dNo = _d3; break;
					case 4: dNo = _d4; break;
					case 5: dNo = _d5; break;
				} // end x switch			
				switch (dNo.dh){
					case 0: 
						_rroll.push(dNo);
						remCnv('asteriod', dNo.d_dec);
					break;
					case 1:  
						hideRollDiv(dNo.d_dec);
						_final.push(dNo); 
					break;
				} // end dNo.dh switch
			};

			for ( let z = 1; z <= _final.length; z++ ) {
			let dObj = _final[(z - 1)];
			setTimeout(function(){ showRollDiv(dObj.d_dec); }, 500);
			}

			for ( let y = 1; y <= _rroll.length; y++ ) {
				let dObj = _rroll[(y - 1)];
				let rollgap = 1000 + ((y-1)*2500);
				setTimeout(function(){ rollDie( dObj, rollNo); }, rollgap);
			};
			let calcTimer = _rroll.length * 2600;
			setTimeout(function(){ endRoll(pid, 1, rollNo); }, calcTimer);

		break;		

	}; // end rollNo switch

};
/*--- END DICE ROLL ---*/

/*-------------------*/
/*----- END ROLL ----*/
/*-------------------*/

function endRoll(pid, rollNo) {
	calcRoll(pid, 1, rollNo);

	switch(pid) {
		case 1: 
			let dpv = _gameObj.dealerpoints;
			let dtm = _dealerhand.tm;
			$('dscore').innerHTML = dtm;
		break;
		case 2:
			let ppv = _gameObj.playerpoints;
			let ptm = _playerhand.tm;
			$('pscore').innerHTML = ptm;
			calcWinner();
		break;
	};
	
	unHoldDice();
	arrReset();
	
	if(pid ==1) { 
	setTimeout(function(){ startRoll(2, 1); }, 5000);
	};

};

/*-----------------*/
/*--- END ROUND ---*/
/*-----------------*/ 
function axEndRound(pid) {
	let xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	document.getElementById("arena-container").innerHTML =  this.responseText;
	}
};
xhttp.open("GET", "assets/xhttp/endround.html", true);
xhttp.onload = function () {  roundSummary(pid); };
xhttp.send();
};




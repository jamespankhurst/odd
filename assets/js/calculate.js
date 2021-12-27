/*==========================================*/
/*========== ORION DICE DECIDE =============*/
/* www.jamespankhurst.co.uk/odd1            */
/* jamespankhurst180@gmail.com              */
/* sample code: github.com/jamespankhurst   */
/* repository: gitlab.com/jamespankhurst180 */
/*==========================================*/

/*=================*/
/*--- CALCULATE ---*/
/*=================*/

function calculate(dObj1, dObj2, dObj3, dObj4, dObj5, pid, gid, rd, tn) {


/*----------POINTS / TEXT FIVE OF A KIND-----------*/
const A5=1200; 
const A5T = "five of a kind aces"; 
const K5=1150; 
const K5T = "five of a kind kings"; 
const Q5=1100; 
const Q5T = "five of a kind queens"; 
const J5=1060; 
const J5T = "five of a kind jacks"; 
const T5=1030; 
const T5T = "five of a kind tens"; 
const N5=1010; 
const N5T = "five of a kind nines";
/*---------POINTS / TEXT FOUR OF A KIND------*/
const A4=724; 
const A4T = "four of a kind aces"; 
const K4=720; 
const K4T = "four of a kind kings"; 
const Q4=716; 
const Q4T = "four of a kind queens"; 
const J4=712; 
const J4T = "four of a kind jacks"; 
const T4=708; 
const T4T = "four of a kind tens"; 
const N4=704; 
const N4T = "four of a kind nines";
/*----------POINTS / TEXT FULL HOUSE---------*/
const A3__K2=530; 
const A3__K2T = "full house aces over kings"; 
const A3__Q2=529; 
const A3__Q2T = "full house aces over queens"; 
const A3__J2=528; 
const A3__J2T = "full house aces over jacks"; 
const A3__T2=527; 
const A3__T2T = "full house aces over tens"; 
const A3__N2=526; 
const A3__N2T = "full house aces over nines";  
const K3__A2=525; 
const K3__A2T = "full house kings over aces"; 
const K3__Q2=524; 
const K3__Q2T = "full house kings over queens"; 
const K3__J2=523; 
const K3__J2T = "full house kings over jacks";	
const K3__T2=522; 
const K3__T2T = "full house kings over tens"; 
const K3__N2=521; 
const K3__N2T = "full house kings over nines";
const Q3__A2=520; 
const Q3__A2T = "full house queens over aces";	
const Q3__K2=519; 
const Q3__K2T = "full house queens over kings"; 
const Q3__J2=518; 
const Q3__J2T = "full house queens over jacks"; 
const Q3__T2=517; 
const Q3__T2T = "full house queens over tens"; 
const Q3__N2=516; 
const Q3__N2T = "full house queens over nines";
const J3__A2=515; 
const J3__A2T = "full house jacks over aces"; 
const J3__K2=514; 
const J3__K2T = "full house jacks over kings"; 
const J3__Q2=513; 
const J3__Q2T = "full house jacks over queens"; 
const J3__T2=512; 
const J3__T2T = "full house jacks over tens";	
const J3__N2=511; 
const J3__N2T = "full house jacks over nines";
const T3__A2=510; 
const T3__A2T = "full house tens over aces"; 
const T3__K2=509; 
const T3__K2T = "full house tens over kings"; 
const T3__Q2=508; 
const T3__Q2T = "full house tens over queens"; 
const T3__J2=507; 
const T3__J2T = "full house tens over jacks";	
const T3__N2=506; 
const T3__N2T = "full house tens over nines";
const N3__A2=505; 
const N3__A2T = "full house nines over aces"; 
const N3__K2=504; 
const N3__K2T = "full house nines over kings"; 
const N3__Q2=503; 
const N3__Q2T = "full house nines over queens";	
const N3__J2=502; 
const N3__J2T = "full house nines over jacks";	
const N3__T2=501; 
const N3__T2T = "full house nines over tens";
	/*----------POINTS / TEXT THREE OF A KIND----------*/
const A3=324; 
const A3T = "three of a kind aces"; 
const K3=320; 
const K3T = "three of a kind kings"; 
const Q3=316; 
const Q3T = "three of a kind queens"; 
const J3=312; 
const J3T = "three of a kind jacks"; 
const T3=308; 
const T3T = "three of a kind tens"; 
const N3=304; 
const N3T = "three of a kind nines"; 
/*----------POINTS / TEXT TWO PAIR----------*/
const A2__K2=230; 
const A2__K2T = "two pair aces kings"; 
const K2__A2=230; 
const K2__A2T = "two pair kings aces"; 
const A2__Q2=228; 
const A2__Q2T = "two pair aces queens"; 
const Q2__A2=228; 
const Q2__A2T = "two pair queens aces"; 
const A2__J2=226; 
const A2__J2T = "two pair aces jacks"; 
const J2__A2=226; 
const J2__A2T = "two pair jacks aces";
const A2__T2=224; 
const A2__T2T = "two pair aces tens";	
const T2__A2=224; 
const T2__A2T = "two pair tens aces";	
const A2__N2=222; 
const A2__N2T = "two pair aces nines"; 
const N2__A2=222; 
const N2__A2T = "two pair nines aces"; 
const K2__Q2=220; 
const K2__Q2T = "two pair kings queens";	
const Q2__K2=220; 
const Q2__K2T = "two pair queens kings";
const K2__J2=218; 
const K2__J2T = "two pair kings jacks"; 
const J2__K2=218; 
const J2__K2T = "two pair jacks kings";	
const K2__T2=216; 
const K2__T2T = "two pair kings tens"; 
const T2__K2=216; 
const T2__K2T = "two pair tens kings"; 
const K2__N2=214; 
const K2__N2T = "two pair kings nines"; 
const N2__K2=214; 
const N2__K2T = "two pair nines kings";
const Q2__J2=212; 
const Q2__J2T = "two pair queens jacks"; 
const J2__Q2=212; 
const J2__Q2T = "two pair jacks queens"; 
const Q2__T2=210; 
const Q2__T2T = "two pair queens tens";	
const T2__Q2=210; 
const T2__Q2T = "two pair tens queens"; 
const Q2__N2=208; 
const Q2__N2T = "two pair queens nines"; 
const N2__Q2=208; 
const N2__Q2T = "two pair nines queens";
const J2__T2=206; 
const J2__T2T = "two pair jacks tens"; 
const T2__J2=206; 
const T2__J2T = "two pair tens jacks"; 
const J2__N2=204; 
const J2__N2T = "two pair jacks nines";	
const N2__J2=204; 
const N2__J2T = "two pair nines jacks"; 
const T2__N2=202; 
const T2__N2T = "two pair tens nines"; 
const N2__T2=202; 
const N2__T2T = "two pair nines tens";
/*----------POINTS / TEXT ONE PAIR----------*/
const A2=124; 
const A2T = "one pair aces"; 
const K2=120; 
const K2T = "one pair kings"; 
const Q2=116; 
const Q2T = "one pair queens";	
const J2=112; 
const J2T = "one pair jacks";	
const T2=118; 
const T2T = "one pair tens"; 
const N2=104; 
const N2T = "one pair nines";
/*----------POINTS / TEXT HIGH CARD---------*/
const AH=24; 
const AHT = "high card ace"; 
const KH=20; 
const KHT = "high card king"; 
const QH=16; 
const QHT = "high card queen";	
const JH=12; 
const JHT = "high card jack"; 
const TH=08; 
const THT = "high card ten"; 
const NH=04; 
const NHT = "high card nine"; 

/*--- RESULT OBJECT ---*/
let _handresult = {
	gid: _gameObj.gid,
	pid: pid,
	rdNo: _gameObj.rdNo,
	pv: 0,
	hc: 'default',
	tn: 1,
	tm: 'Fist throw',
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

/*--- INITIALISE VARIABLES ---*/
var nines=0; 
var tens=0; 
var jacks=0; 
var queens=0; 
var kings=0; 
var aces=0; 
var qty9=0; 
var qty10=0; 
var qtyj=0; 
var qtyq=0; 
var qtyk=0; 
var qtya=0;
var d_no=0; 
var throw_txt=''; 
var throw_data=''; 
start_row=0; 
var hand_txt = ''; 
var points_code = ''; 
var points_value=0; 
var full_points_code = '';

/*--- load dice values ---*/
for (var j = 1; j<=5; ++j)	{ 

	switch(j) { 
		case 1: 
			d_no = dObj1['dv']; 
			switch(d_no) {
				case 0: _handresult.d1_ico = _qm.f_ico; break;
				case 1: _handresult.d1_ico = _ni.f_ico; break;
				case 2: _handresult.d1_ico = _te.f_ico; break;
				case 3: _handresult.d1_ico = _ja.f_ico; break;
				case 4: _handresult.d1_ico = _qu.f_ico; break;
				case 5: _handresult.d1_ico = _ki.f_ico; break;
				case 6: _handresult.d1_ico = _ac.f_ico; break;
				default: _handresult.d1_ico = _qm.f_ico;
			}
		break; 
		case 2: 
			d_no = dObj2['dv']; 
			switch(d_no) {
				case 0: _handresult.d2_ico = _qm.f_ico; break;
				case 1: _handresult.d2_ico = _ni.f_ico; break;
				case 2: _handresult.d2_ico = _te.f_ico; break;
				case 3: _handresult.d2_ico = _ja.f_ico; break;
				case 4: _handresult.d2_ico = _qu.f_ico; break;
				case 5: _handresult.d2_ico = _ki.f_ico; break;
				case 6: _handresult.d2_ico = _ac.f_ico; break;
				default: _handresult.d2_ico = _qm.f_ico;
			}
		break; 
		case 3: 
			d_no = dObj3['dv']; 
			switch(d_no) {
				case 0: _handresult.d3_ico = _qm.f_ico; break;
				case 1: _handresult.d3_ico = _ni.f_ico; break;
				case 2: _handresult.d3_ico = _te.f_ico; break;
				case 3: _handresult.d3_ico = _ja.f_ico; break;
				case 4: _handresult.d3_ico = _qu.f_ico; break;
				case 5: _handresult.d3_ico = _ki.f_ico; break;
				case 6: _handresult.d3_ico = _ac.f_ico; break;
				default: _handresult.d3_ico = _qm.f_ico;
			}
		break;	
		case 4: 
			d_no = dObj4['dv']; 
			switch(d_no) {
				case 0: _handresult.d4_ico = _qm.f_ico; break;
				case 1: _handresult.d4_ico = _ni.f_ico; break;
				case 2: _handresult.d4_ico = _te.f_ico; break;
				case 3: _handresult.d4_ico = _ja.f_ico; break;
				case 4: _handresult.d4_ico = _qu.f_ico; break;
				case 5: _handresult.d4_ico = _ki.f_ico; break;
				case 6: _handresult.d4_ico = _ac.f_ico; break;
				default: _handresult.d4_ico = _qm.f_ico;
			}
		break; 
		case 5: 
			d_no = dObj5['dv']; 
			switch(d_no) {
				case 0: _handresult.d5_ico = _qm.f_ico; break;
				case 1: _handresult.d5_ico = _ni.f_ico; break;
				case 2: _handresult.d5_ico = _te.f_ico; break;
				case 3: _handresult.d5_ico = _ja.f_ico; break;
				case 4: _handresult.d5_ico = _qu.f_ico; break;
				case 5: _handresult.d5_ico = _ki.f_ico; break;
				case 6: _handresult.d5_ico = _ac.f_ico; break;
				default: _handresult.d5_ico = _qm.f_ico;
			}
		break;
	}

/*--- count number of each face - add to total ---*/
	switch(d_no) { 
		case 1: nines++; break; 
		case 2: tens++; break; 
		case 3: jacks++; break; 
		case 4: queens++; break; 
		case 5: kings++; break; 
		case 6: aces++; break; 
	}
};

	switch(nines) { 
		case 0: qty9 = 0; break; 
		case 1: qty9 = 1; break; 
		case 2: qty9 = 2; break; 
		case 3: qty9 = 3; break; 
		case 4: qty9 = 4; break; 
		case 5: qty9 = 5; break; 
	};
	if(qty9==0){ 
	throw_data = throw_data; 
	} else { 
	throw_data = 'N' + nines; 
	//if a nine is rolled start the row
	start_row=1 
	};

	switch(tens) { 
		case 0: qty10 = 0; break; 
		case 1: qty10 = 1; break; 
		case 2: qty10 = 2; break; 
		case 3: qty10 = 3; break; 
		case 4: qty10 = 4; break; 
		case 5: qty10 = 5; break;
	};
	if(qty10==0){
	throw_data = throw_data; 
	} else {	
		if(start_row==1){ 
		// the row has been started
		throw_data = throw_data + '|' + 'T' + tens; 
		} else { 
		// the row has not been started
		throw_data = 'T' + tens; 
		start_row=1; 
		}	
	};

	switch(jacks) { 
		case 0: qtyj = 0; break; 
		case 1: qtyj = 1; break; 
		case 2: qtyj = 2; break; 
		case 3: qtyj = 3; break; 
		case 4: qtyj = 4; break; 
		case 5: qtyj = 5; break; 
	};	
	if(qtyj==0)	{
	throw_data = throw_data;
	} else { 
		if(start_row==1){	
		throw_data = throw_data + '|' + 'J' + jacks;
		} else { 
		throw_data = 'J' + jacks; 
		start_row=1;	
		}	
	};

	switch(queens) { 
		case 0: qtyq = 0; break; 
		case 1: qtyq = 1; break; 
		case 2: qtyq = 2; break; 
		case 3: qtyq = 3; break; 
		case 4: qtyq = 4; break; 
		case 5: qtyq = 5; break; 
	};
	if(qtyq==0)	{
	throw_data = throw_data;
	} else { 
		if(start_row==1){ 
		throw_data = throw_data + '|' + 'Q' + queens;	
		} else { 
		throw_data = 'Q' + queens; 
		start_row=1;
		} 
	};

	switch(kings) {	
		case 0: qtyk = 0; break; 
		case 1: qtyk = 1; break; 
		case 2: qtyk = 2; break; 
		case 3: qtyk = 3; break; 
		case 4: qtyk = 4; break; 
		case 5: qtyk = 5; break; 
		};	
	if(qtyk==0)	{
	throw_data = throw_data;
	} else { 
		if(start_row==1) { 
		throw_data = throw_data + '|' + 'K' + kings;
		} else { 
		throw_data = 'K' + kings; 
		start_row=1;
		}; 
	};

	switch(aces) { 
		case 0: qtya = 0; break; 
		case 1: qtya = 1; break; 
		case 2: qtya = 2; break; 
		case 3: qtya = 3; break; 
		case 4: qtya = 4; break; 
		case 5: qtya = 5; break; 
		};
	if(qtya==0)	{
	throw_data = throw_data;
	} else { 
		if(start_row==1) { 
		throw_data = throw_data + '|' + 'A' + aces;
		} else { 
		throw_data = 'A' + aces; 
		start_row=1;
	}; 
};

/*--- CONVERT STRING TO ARRAY ---*/

var hand_data = throw_data.split('|');

/*--- NUMBER OF ROWS DECIDES HANDS ---*/
var nr = hand_data.length;

var throw_txt = 'odd: throw_txt not set';

switch(nr) {
	case 1: // 1 ROW = FIVE OF A KIND
			var f = hand_data[0];
			switch(f)
			{
            case 'N5': 
			hand_code = 'K5|N_N'; 
			points_value = N5; 
			throw_txt = N5T; 
			break;
            case 'T5': 
			hand_code = 'K5|T_T'; 
			points_value = T5; 
			throw_txt = T5T; 
			break;
            case 'J5': 
			hand_code = 'K5|J_J'; 
			points_value = J5; 
			throw_txt = J5T; 
			break;
            case 'Q5': 
			hand_code = 'K5|Q_Q'; 
			points_value = Q5; 
			throw_txt = Q5T; 
			break;
            case 'K5': 
			hand_code = 'K5|K_K'; 
			points_value = K5; 
			throw_txt = K5T; 
			break;
            case 'A5': 
			hand_code = 'K5|A_A'; 
			points_value = A5; 
			throw_txt = A5T; 
			break;
			};
			hand_code = hand_code + "|" + points_value;
			break;
	case 2: // 2 ROWS = FOUR OF A KIND OR FULL HOUSE
			var four_txt = ''; var four_or_full = ''; var three_txt = ''; var two_txt = ''; var points_code_pt1 = '';  var points_code_pt2 = '';
			for (var j = 0; j <=1; ++j)
            {
            var f = hand_data[j];
                switch(f) 
                {
                // FOUR OF A KIND
                case 'N4': 
				four_txt = 'K4|N_N'; 
				four_or_full = '4'; 
				points_value = N4; 
				throw_txt = N4T; 
				break;
                case 'T4': 
				four_txt = 'K4|T_T'; 
				four_or_full = '4'; 
				points_value = T4; 
				throw_txt = T4T; 
				break;
                case 'J4': 
				four_txt = 'K4|J_J'; 
				four_or_full = '4'; 
				points_value = J4; 
				throw_txt = J4T; 
				break;
                case 'Q4': 
				four_txt = 'K4|Q_Q'; 
				four_or_full = '4'; 
				points_value = Q4; 
				throw_txt = Q4T; 
				break;
                case 'K4': 
				four_txt = 'K4|K_K'; 
				four_or_full = '4'; 
				points_value = K4; 
				throw_txt = K4T; 
				break;
                case 'A4': 
				four_txt = 'K4|A_A'; 
				four_or_full = '4'; 
				points_value = A4; 
				throw_txt = A4T; 
				break;
                // FULL HOUSE TREBLE
                case 'N3': 
				three_txt = 'FH|N_'; 
				four_or_full = '5'; 
				points_code_pt1 = 'N3_'; 
				break;
                case 'T3': 
				three_txt = 'FH|T_'; 
				four_or_full = '5'; 
				points_code_pt1 = 'T3_'; 
				break;
                case 'J3': 
				three_txt = 'FH|J_'; 
				four_or_full = '5'; 
				points_code_pt1 = 'J3_'; 
				break;
                case 'Q3': 
				three_txt = 'FH|Q_'; 
				four_or_full = '5'; 
				points_code_pt1 = 'Q3_'; 
				break;
                case 'K3': 
				three_txt = 'FH|K_'; 
				four_or_full = '5'; 
				points_code_pt1 = 'K3_'; 
				break;
                case 'A3': 
				three_txt = 'FH|A_'; 
				four_or_full = '5'; 
				points_code_pt1 = 'A3_'; 
				break;
                // FULL HOUSE DOUBLE
                case 'N2': 
				two_txt = 'N'; 
				points_code_pt2 = '_N2'; 
				break;
                case 'T2': 
				two_txt = 'T'; 
				points_code_pt2 = '_T2'; 
				break;
                case 'J2': 
				two_txt = 'J'; 
				points_code_pt2 = '_J2'; 
				break;
                case 'Q2': 
				two_txt = 'Q'; 
				points_code_pt2 = '_Q2'; 
				break;
                case 'K2': 
				two_txt = 'K'; 
				points_code_pt2 = '_K2'; 
				break;
                case 'A2': 
				two_txt = 'A'; 
				points_code_pt2 = '_A2'; 
				break;
                };
            };

            if(four_or_full == '4') { hand_code = four_txt; };		
			if(four_or_full == '5') 
            { 
			full_points_code = points_code_pt1 + points_code_pt2;
              switch(full_points_code)
                { /*----------POINTS / TEXT FULL HOUSE---------*/
                case 'A3__K2': 
				points_code = A3__K2; 
				throw_txt = A3__K2T; 
				break; 
				case 'A3__Q2': 
				points_code = A3__K2; 
				throw_txt = A3__Q2T; 
				break; 
				case 'A3__J2': 
				points_code = A3__J2; 
				throw_txt = A3__J2T; 
				break;  
				case 'A3__T2': 
				points_code = A3__T2; 
				throw_txt = A3__T2T; 
				break; 
				case 'A3__N2': 
				points_code = A3__N2; 
				throw_txt = A3__N2T; 
				break; 
				case 'K3__A2': 
				points_code = K3__A2; 
				throw_txt = K3__A2T; 
				break;
				case 'K3__Q2': 
				points_code = K3__Q2; 
				throw_txt = K3__Q2T; 
				break; 
				case 'K3__J2': 
				points_code = K3__J2; 
				throw_txt = K3__J2T; 
				break; 
				case 'K3__T2': 
				points_code = K3__T2; 
				throw_txt = K3__T2T; 
				break;
				case 'K3__N2': 
				points_code = K3__N2; 
				throw_txt = K3__N2T; 
				break; 
				case 'Q3__A2': 
				points_code = Q3__A2; 
				throw_txt = Q3__A2T; 
				break; 
				case 'Q3__K2': 
				points_code = Q3__K2; 
				throw_txt = Q3__K2T; 
				break; 
				case 'Q3__J2': 
				points_code = Q3__J2; 
				throw_txt = Q3__J2T; 
				break; 
				case 'Q3__T2': 
				points_code = Q3__T2; 
				throw_txt = Q3__T2T; 
				break; 
				case 'Q3__N2': 
				points_code = Q3__N2; 
				throw_txt = Q3__N2T; 
				break;
				case 'J3__A2': 
				points_code = J3__A2; 
				throw_txt = J3__A2T; 
				break; 
				case 'J3__K2': 
				points_code = J3__K2; 
				throw_txt = J3__K2T; 
				break; 
				case 'J3__Q2': 
				points_code = J3__Q2; 
				throw_txt = J3__Q2T; 
				break;
				case 'J3__T2': 
				points_code = J3__T2; 
				throw_txt = J3__T2T; 
				break; 
				case 'J3__N2': 
				points_code = J3__N2; 
				throw_txt = J3__N2T; 
				break; 
				case 'T3__A2': 
				points_code = T3__A2; 
				throw_txt = T3__A2T; 
				break;
				case 'T3__K2': 
				points_code = T3__K2; 
				throw_txt = T3__K2T; 
				break; 
				case 'T3__Q2': 
				points_code = T3__Q2; 
				throw_txt = T3__Q2T; 
				break; 
				case 'T3__J2': 
				points_code = T3__J2; 
				throw_txt = T3__J2T; 
				break;
                case 'T3__N2': 
				points_code = T3__N2; 
				throw_txt = T3__N2T; 
				break; 
				case 'N3__A2': 
				points_code = N3__A2; 
				throw_txt = N3__A2T; 
				break; 
				case 'N3__K2': 
				points_code = N3__K2; 
				throw_txt = N3__K2T; 
				break;
				case 'N3__Q2': 
				points_code = N3__Q2; 
				throw_txt = N3__Q2T; 
				break; 
				case 'N3__J2': 
				points_code = N3__J2; 
				throw_txt = N3__J2T; 
				break; 
				case 'N3__T2': 
				points_code = N3__T2; 
				throw_txt = N3__T2T; 
				break;

                default: points_code = 0; throw_txt = 'DD: error';
                };
			points_value = points_code;
			points_code = full_points_code;
            hand_code = three_txt + two_txt;            
            };
			hand_code = hand_code + "|" + points_value;
            break;

	case 3: // 3 ROWS = THREE OF A KIND OR TWO PAIR
            var t_txt = ''; var twopair_or_treble = ''; var first_pr_txt = ''; var second_pr_txt = ''; var pt_1 = ''; var points_code_pt1 = '';  var points_code_pt2 = '';
            for (k = 0; k <=2; ++k)  
            {
              var f = hand_data[k];
                switch(f)
                {
                // THREE OF A KIND
                case 'N3': 
				t_txt = 'N'; 
				twopair_or_treble = 'treble'; 
				points_code = N3; 
				throw_txt = N3T; 
				break;
                case 'T3': 
				t_txt = 'T'; 
				twopair_or_treble = 'treble'; 
				points_code = T3; 
				throw_txt = T3T; 
				break;
                case 'J3': 
				t_txt = 'J'; 
				twopair_or_treble = 'treble'; 
				points_code = J3; 
				throw_txt = J3T; 
				break;
                case 'Q3': 
				t_txt = 'Q'; 
				twopair_or_treble = 'treble'; 
				points_code = Q3; 
				throw_txt = Q3T; 
				break;
                case 'K3': 
				t_txt = 'K'; 
				twopair_or_treble = 'treble'; 
				points_code = K3; 
				throw_txt = K3T; 
				break;
                case 'A3': 
				t_txt = 'A'; 
				twopair_or_treble = 'treble'; 
				points_code = A3; 
				throw_txt = A3T; 
				break;
                };
            };
              
            for (k = 0; k <=2; ++k)
            { // TWO PAIR
              var f = hand_data[k];  
                if(f == 'N2') { 
				first_pr_txt = 'N_'; 
				pt_1='v'; 
				twopair_or_treble = 'twopair'; 
				points_code_pt1 = 'N2_'; 
				};
                if(f == 'T2') { 
					if(pt_1=='v') { 
					second_pr_txt = 'T'; 
					points_code_pt2 = '_T2'; } 
					else { 
					first_pr_txt = 'T_'; 
					pt_1='v'; 
					twopair_or_treble = 'twopair'; 
					points_code_pt1 = 'T2_'; 
					} 
				};  
                if(f == 'J2') { 
					if(pt_1=='v') { 
					second_pr_txt = 'J'; 
					points_code_pt2 = '_J2'; 
					} 
					else { 
					first_pr_txt = 'J_'; 
					pt_1='v'; 
					twopair_or_treble = 'twopair'; 
					points_code_pt1 = 'J2_'; 
					}
				};
                if(f == 'Q2') { 
					if(pt_1=='v') { 
					second_pr_txt = 'Q'; 
					points_code_pt2 = '_Q2'; 
					} 
					else { 
					first_pr_txt = 'Q_'; 
					pt_1='v'; 
					twopair_or_treble = 'twopair'; 
					points_code_pt1 = 'Q2_'; 
					} 
				};
                if(f == 'K2') { 
					if(pt_1=='v') { 
					second_pr_txt = 'K'; 
					points_code_pt2 = '_K2'; 
					} 
					else { 
					first_pr_txt = 'K_'; 
					pt_1='v'; 
					twopair_or_treble = 'twopair'; 
					points_code_pt1 = 'K2_'; 
					} 
				};
                if(f == 'A2') { 
					if(pt_1=='v') { 
					second_pr_txt = 'A'; 
					points_code_pt2 = '_A2'; 
					} 
					else { 
					first_pr_txt = 'A_'; 
					pt_1='v'; 
					twopair_or_treble = 'twopair'; 
					points_code_pt1 = 'A2_'; 
					} 
				};
            };
            var full_points_code = points_code_pt1 + points_code_pt2;
            
            switch(full_points_code)
            { /*----------POINTS / TEXT TWO PAIRS---------*/
                case 'A2__K2': 
				points_code = A2__K2; 
				throw_txt = A2__K2T; 
				break; 
				case 'K2__A2': 
				points_code = K2__A2; 
				throw_txt = K2__A2T; 
				break; 
				case 'A2__Q2': 
				points_code = A2__Q2; 
				throw_txt = A2__Q2T; 
				break;
                case 'Q2__A2': 
				points_code = Q2__A2; 
				throw_txt = Q2__A2T; 
				break; 
				case 'A2__J2': 
				points_code = A2__J2; 
				throw_txt = A2__J2T; 
				break; 
				case 'J2__A2': 
				points_code = J2__A2; 
				throw_txt = J2__A2T; 
				break;
                case 'A2__T2': 
				points_code = A2__T2; 
				throw_txt = A2__T2T; 
				break; 
				case 'T2__A2': 
				points_code = T2__A2; 
				throw_txt = T2__A2T;
				break; 
				case 'A2__N2': 
				points_code = A2__N2; 
				throw_txt = A2__N2T; 
				break;
                case 'N2__A2': 
				points_code = N2__A2; 
				throw_txt = N2__A2T; 
				break;
                case 'K2__Q2': 
				points_code = K2__Q2; 
				throw_txt = K2__Q2T; 
				break; 
				case 'Q2__K2': 
				points_code = Q2__K2; 
				throw_txt = Q2__K2T; 
				break; 
				case 'K2__J2': 
				points_code = K2__J2; 
				throw_txt = K2__J2T; 
				break;
                case 'J2__K2': 
				points_code = J2__K2; 
				throw_txt = J2__K2T; 
				break; 
				case 'K2__T2': 
				points_code = K2__T2; 
				throw_txt = K2__T2T; 
				break; 
				case 'T2__K2': 
				points_code = T2__K2; 
				throw_txt = T2__K2T; 
				break;
                case 'K2__N2': 
				points_code = K2__N2; 
				throw_txt = K2__N2T; 
				break; 
				case 'N2__K2': 
				points_code = N2__K2; 
				throw_txt = N2__K2T; 
				break;
                case 'Q2__J2': 
				points_code = Q2__J2; 
				throw_txt = Q2__J2T; 
				break; 
				case 'J2__Q2': 
				points_code = J2__Q2; 
				throw_txt = J2__Q2T; 
				break; 
				case 'Q2__T2': 
				points_code = Q2__T2; 
				throw_txt = Q2__T2T; 
				break;
                case 'T2__Q2': 
				points_code = T2__Q2; 
				throw_txt = T2__Q2T; 
				break; 
				case 'Q2__N2': 
				points_code = Q2__N2; 
				throw_txt = Q2__N2T; 
				break; 
				case 'N2__Q2': 
				points_code = N2__Q2; 
				throw_txt = N2__Q2T; 
				break;
                case 'J2__T2': 
				points_code = J2__T2; 
				throw_txt = J2__T2T; 
				break; 
				case 'T2__J2': 
				points_code = T2__J2; 
				throw_txt = T2__J2T; 
				break; 
				case 'J2__N2': 
				points_code = J2__N2; 
				throw_txt = J2__N2T; 
				break;
                case 'N2__J2': 
				points_code = N2__J2; 
				throw_txt = N2__J2T; 
				break;
                case 'T2__N2': 
				points_code = T2__N2; 
				throw_txt = T2__N2T; 
				break; 
				case 'N2__T2': 
				points_code = N2__T2; 
				throw_txt = N2__T2T; 
				break;    
            };           
            switch (twopair_or_treble)
            {
            case 'treble': hand_code = 'K3|' + t_txt + "_" + t_txt; break;
            case 'twopair': hand_code = 'P2|' + first_pr_txt + second_pr_txt; break;
            };
			points_value = points_code;
			points_code = full_points_code;
			hand_code = hand_code + "|" + points_value;
            break;  

    case 4: // 4 ROWS = ONE PAIR
            var one_pair = ''; 
            for (k = 0; k <=3; ++k)
            {
              var f = hand_data[k];
              switch(f)
              {
              // ONE PAIR
              case 'N2': 
			  one_pair = 'N'; 
			  throw_txt = N2T; 
			  points_code = N2; 
			  break;
              case 'T2': 
			  one_pair = 'T'; 
			  throw_txt = T2T; 
			  points_code = T2; 
			  break;
              case 'J2': 
			  one_pair = 'J'; 
			  throw_txt = J2T; 
			  points_code = J2; 
			  break;
              case 'Q2': 
			  one_pair = 'Q'; 
			  throw_txt = Q2T; 
			  points_code = Q2; 
			  break;
              case 'K2': 
			  one_pair = 'K'; 
			  throw_txt = K2T; 
			  points_code = K2; 
			  break;
              case 'A2': 
			  one_pair = 'A'; 
			  throw_txt = A2T; 
			  points_code = A2; 
			  break;
              };
            };
			points_value = points_code;
            hand_code = 'P1|' + one_pair + "_" + one_pair;        
			hand_code = hand_code + "|" + points_value;
            break;
    
    case 5: // 5 ROWS = HIGH CARD
            var high_card = new Array();
            for (k = 0; k <= 4; ++k)
            { 
                  var f = hand_data[k];
                  switch (f)
                  {
                    case 'A1': 
					high_card[k] = 6; 
					points_code = AH; 
					throw_txt = AHT; 
					top_face = 'A'; 
					break;
                    case 'K1': 
					high_card[k] = 5; 
					points_code = KH; 
					throw_txt = KHT; 
					top_face = 'K'; 
					break;
                    case 'Q1': 
					high_card[k] = 4; 
					points_code = QH; 
					throw_txt = QHT; 
					top_face = 'Q'; 
					break;
                    case 'J1': 
					high_card[k] = 3; 
					points_code = JH; 
					throw_txt = JHT; 
					top_face = 'J'; 
					break;
                    case 'T1': 
					high_card[k] = 2; 
					points_code = TH; 
					throw_txt = THT; 
					top_face = 'T'; 
					break;
                    case 'N1': 
					high_card[k] = 1; 
					points_code = NH; 
					throw_txt = NHT; 
					top_face = 'N'; 
					break;
                  };
            };
			high_card.sort(function(a, b){return b - a});

			/*---------------- ----------------*/
			var face = high_card[0];          
            switch (face)
                  {
                   case 1: var top_face = 'N-err'; break; /*--IMPOSSIBLE--*/
                   case 2: var top_face = 'T-err'; break; /*--IMPOSSIBLE--*/
                   case 3: var top_face = 'J-err'; break; /*--IMPOSSIBLE--*/
                   case 4: var top_face = 'Q-err'; break; /*--IMPOSSIBLE--*/
                   case 5: var top_face = 'K'; break;
                   case 6: var top_face = 'A'; break;
                  };
			points_value = points_code;
            hand_code = 'HC|' + top_face + "_" + top_face;
			hand_code = hand_code + "|" + points_value;
            break;
	};

	_handresult.gid = gid;
	_handresult.pid = pid;
	_handresult.rd = rd;
	_handresult.pv = points_value;
	_handresult.hc = hand_code;
	_handresult.tm = throw_txt;
	_handresult.d1 = _d1.dv;
	_handresult.d2 = _d2.dv;
	_handresult.d3 = _d3.dv;
	_handresult.d4 = _d4.dv;
	_handresult.d5 = _d5.dv;
	
	return (_handresult);

}; 

/*----- END CALCULATE -----*/

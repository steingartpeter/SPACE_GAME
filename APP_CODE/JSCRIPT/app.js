//<M>
//×-
//@-FILENÉV   : PROJECT NAME - app.js-@
//@-SZERZŐ    : AX07057-@
//@-LÉTREHOZVA: 2017. szept. 26.-@
//@-FÜGGŐSÉGEK:
//×-
// @-- RQRD_FILE01.js-@
// @-- RQRD_FILE02.js-@
// @-- RQRD_FILE03.js-@
// @-- RQRD_FILE04.js-@
//-@
//-×
//-@
//@-LEÍRÁS    :
//Ez az javascript file készült arra a feladatra, hogy ...
//@-MÓDOSÍTÁSOK :
//×-
// @-- ... -@
//-×
//-×
//</M>
var APP_JS = APP_JS || {};


$(function(){
//<SF>
// 2017. dec. 31.<br>
// Az alap inicializációs függvény, amit a lap OnReady() függvényének triggereléseko fut, 
// ezt a JQuery adja.<br>
// PARAMÉTEREK:
//×-
// @-- @param ... = ... -@
//-×
// MÓDOSÍTÁSOK:
//×-
// @-- ... -@
//-×
//</SF>
	//alert("Hello --> jQuery = OK");
});

//==============================================================================================
//###############             FÜGGVÉNYEK APP. OBJEKTUMBA ÁGYAZÁSA        #######################
//==============================================================================================
APP_JS.teszt01 = teszt01;
APP_JS.createOneStar = createOneStar;
APP_JS.createOneStarSVG = createOneStarSVG;
APP_JS.genRND = genRND;
APP_JS.genRNDName = genRNDName;

//==============================================================================================
//###############               FÜGGVÉNYEK IMPLEMENTÁCIÓJA               #######################
//==============================================================================================
function teszt01(){
	alert("Hívás OK :)");
}

function createOneStar(){
//<SF>
// 2017. szept. 26.<br>
// Egy csillag legenerálása random elemekkel<br>
// PARAMÉTEREK:
//×-
// @-- @param ... = nincs paraméter -@
//-×
//MÓDOSÍTÁSOK:
//×-
// @-- ... -@
//-×
//</SF>
	
	//<nn>
	// Creation of an empty star prototype
	//</nn>
	var star01 ={
		"type":" ",
		"ef_temp":1.1,
		"chrom":"white",
		"mass":3.999,
		"rad":1.999,
		"lumin":0.99
	};
	
	//<nn>
	// Fill up the properties with random data...
	//</nn>
	
	var tp = "";
	var chrom = "";
	var ix = Math.floor(APP_JS.genRND(0,7));
	console.log("ix = " + ix);
	tp = APP_JS.CONSTS.STELGEN.STARTYPES[ix];
	chrom = APP_JS.CONSTS.STELGEN.STARCROM[ix];
	console.log("tp: " + tp);
	var nm = APP_JS.genRNDName();
	
	//<nn>
	// Write the data onto the page...
	//</nn>
	$("#strTp").text(" STAR TYPE: " + tp);
	$("#strTp").addClass("filled");
	$("#strNm").text(" STAR NAME: " + nm);
	$("#strNm").addClass("filled");
	$("#strChrm").text(" STAR CHROM: " + chrom);
	$("#strChrm").addClass("filled");
	//TODO: code to be written
	
	//<nn>
	// Creat SVG graphics for the rnd star
	//</nn>
	
	//TODO: code to be written
}

function createOneStarSVG(divId){
//<SF>
// 2018. jan. 16.<br>
// Ez a függvény generál egy SVG csillagképet,illanatnyilag a legegyszerűbb grafikával.<br>
// Az SVG.js-el van egy kis probléma, nem támogatja filterek DEFS-be helyezését.
// Enélkül pedig nem lehet, csak alapelemeket generálni. Emiatt mégis vanilla js kódot kell írni.<br>
// PARAMÉTEREK:
//×-
// @-- @param divId = sztring, az SVG objektumot tartalmazó div id-je. -@
//-×
//MÓDOSÍTÁSOK:
//×-
// @-- ... -@
//-×
//</SF>
	
	if(divId === undefined){
		divId = "svg-canvas01";
		console.info("ID = undefined, default value applied!");
	}
	
	var cntnr = SVG(divId).size(400,400);
	var rect = cntnr.rect(400,400).attr({fill:"#CDCDCD"});
	
}


//==============================================================================================
//################          HELPER FÜGGVÉNYEK IMPLEMENTÁCIÓJA            #######################
//==============================================================================================
function genRND(min, max){
//<SF>
// 2017. dec. 31.<br>
// Véletlenszám generátor, maximum, és minimum értékekkel.<br>
// PARAMÉTEREK:
//×-
// @-- @param ... = ... -@
//-×
//MÓDOSÍTÁSOK:
//×-
// @-- ... -@
//-×
//</SF>
	if(min === undefined){
		min = 1;
	}
	if(max === undefined){
		max = 100;
	}
	var diff = max - min;
	var r = 0;
	r = (Math.random() * diff)+min;
	
	return r;
}
 
function genRNDName(){
//<SF>
// 2017. dec. 31.<br>
// Ez a függvény véletlen nevet generál a frissen létrehozott csillagnak<br>
// A névformátum 2 betű 3 szám egy betű, egy szám lesz.
// PARAMÉTEREK:
//×-
// @-- @param ... = ... -@
//-×
//MÓDOSÍTÁSOK:
//×-
// @-- ... -@
//-×
//</SF>
	var nev = "";
	
	var nev = String.fromCharCode(97 + APP_JS.genRND(1,25));
	nev += String.fromCharCode(97 + APP_JS.genRND(1,25)) + "-";
	var nr = APP_JS.genRND(1,1000);
	nr = "000" + nr;
	nev += nr.substr(nr.length-3);
	nev += "-" + String.fromCharCode(97 + APP_JS.genRND(1,25)) + Math.floor(APP_JS.genRND(1,10));
	
	
	return nev.toUpperCase();
}
 
 
 
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
APP_JS.animateStar = animateStar;
APP_JS.genRND = genRND;
APP_JS.genRNDName = genRNDName;


//==============================================================================================
//###############               FÜGGVÉNYEK IMPLEMENTÁCIÓJA               #######################
//==============================================================================================
function teszt01(sz){
	//alert("Hívás OK :)");	
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
// Ez a függvény generál egy SVG csillagképet, pillanatnyilag a legegyszerűbb grafikával.<br>
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
	
	var cntnr = document.getElementById("svg-canvas01");
	var svg = document.createElementNS(APP_JS.CONSTS.SVGNS, "svg");
	svg.setAttribute('id','svg-star01');
	svg.style.height = 400;
	svg.style.width = 400;
	
	//<nn>
	// A filtertárolólétrehozása, majd feltöltése.
	//</nn>
	var defs = document.createElementNS(APP_JS.CONSTS.SVGNS, "defs");
	defs.setAttribute('id','defs001');
	
	//<nn>
	// Az első linerargradient.
	//</nn>
	var lg1 = document.createElementNS(APP_JS.CONSTS.SVGNS, "linearGradient");
	lg1.setAttribute('id','linGrad01');
	
	//<nn>
	//Az első lin.grad első stopja (fehér, teli).
	//</nn>
	var stop0101 = document.createElementNS(APP_JS.CONSTS.SVGNS, "stop");
	stop0101.setAttribute('id','lg01-stop01');
	stop0101.setAttribute('offset','0');
	stop0101.setAttribute('style','stop-color:#ffffff;stop-opacity:1;');
	lg1.appendChild(stop0101);
	//<nn>
	//Az első lin.grad első stopja (fehér, teli).
	//</nn>
	var stop0102 = document.createElementNS(APP_JS.CONSTS.SVGNS, "stop");
	stop0102.setAttribute('id','lg01-stop02');
	stop0102.setAttribute('offset','1');
	stop0102.setAttribute('style','stop-color:#ffffff;stop-opacity:0;');
	lg1.appendChild(stop0102);
	
	//<nn>
	// Most jöhet egy filter.
	//</nn>
	var fltr01 = document.createElementNS(APP_JS.CONSTS.SVGNS, "filter");
	fltr01.setAttribute('id','fltr01');
	fltr01.setAttribute('height',1.096);
	fltr01.setAttribute('width',1.096);
	fltr01.setAttribute('y',-0.048);
	fltr01.setAttribute('x',-0.048);
	
	//<nn>
	// A filter gaussian blur-je:
	//</nn>
	var feGausBlr01 =document.createElementNS(APP_JS.CONSTS.SVGNS, "feGaussianBlur");
	feGausBlr01.setAttribute('id','fGausBlur01');
	feGausBlr01.setAttribute('stdDeviation',6.3);
	
	//<nn>
	// Beteszük a filterbe a blur-t.
	//</nn>
	fltr01.appendChild(feGausBlr01);
	
	//<nn>
	// Most jöhet egy radiál gradinet.
	//</nn>
	var rGrad01 = document.createElementNS(APP_JS.CONSTS.SVGNS, "radialGradient");
	rGrad01.setAttribute('id','radGrad01');
	
	//<nn>
	//Az első lin.grad első stopja (fehér, teli).
	//</nn>
	var stop0101 = document.createElementNS(APP_JS.CONSTS.SVGNS, "stop");
	stop0101.setAttribute('id','rg01-stop01');
	stop0101.setAttribute('offset','35%');
	stop0101.setAttribute('style','stop-color:#ffffff;stop-opacity:.75;');
	rGrad01.appendChild(stop0101);
	//<nn>
	//Az első lin.grad első stopja (fehér, teli).
	//</nn>
	var stop0102 = document.createElementNS(APP_JS.CONSTS.SVGNS, "stop");
	stop0102.setAttribute('id','rg01-stop02');
	stop0102.setAttribute('offset','75%');
	stop0102.setAttribute('style','stop-color:#ffffff;stop-opacity:.01;');
	rGrad01.appendChild(stop0102);
	
	//<nn>
	// Betesszük az első feltöltött lin.grad-ot a defs-be.<br>
	// Aztán a filtert.<br>
	// Aztán a RadialGradient-et is.
	//</nn>
	defs.appendChild(lg1);
	defs.appendChild(fltr01);
	defs.appendChild(rGrad01);
	//<nn>
	// Betesszük a feltöltött defs-t az svg-be. 
	//</nn>
	svg.appendChild(defs);
	
	//<nn>
	// A háttér g(layer) hozzáadása egy feketete rect-tel.
	//</nn>
	var lyr01 = document.createElementNS(APP_JS.CONSTS.SVGNS, "g");
	lyr01.setAttribute('id', 'lyr-bgrnd');
	svg.appendChild(lyr01);
	
	var rect = document.createElementNS(APP_JS.CONSTS.SVGNS, "rect");
	rect.setAttribute("x", "0");
	rect.setAttribute("y", "0");
	rect.setAttribute("height", "400");
	rect.setAttribute("width", "400");
	rect.setAttribute("id", "spaceBGRect");
	rect.setAttribute("style", 'fill:#050510;fill-opacity:1;');
	lyr01.appendChild(rect);
	
	//<nn>
	// Egy újabb layer, ide genrálunk majd távoli csillagokat.
	//</nn>
	var lyr02 = document.createElementNS(APP_JS.CONSTS.SVGNS, "g");
	lyr02.setAttribute('id', 'lyr-dstntStars');
	svg.appendChild(lyr02);
	
	
	//<nn>
	// Egy újabb layer, ide genrálunk majd távoli csillagokat.
	//</nn>
	var lyr03 = document.createElementNS(APP_JS.CONSTS.SVGNS, "g");
	lyr03.setAttribute('id', 'lyr-main-star');
	
	//<nn>
	// A csillagot felépítő circle-k legenerálásnak kódja.<br>
	// - az első a hátsó fény.<br>
	// - A második maga a csilag.<br>
	// - A harmadik pedig a 3D fény.<br>
	//</nn>
	var crcl01 = document.createElementNS(APP_JS.CONSTS.SVGNS, "circle");
	crcl01.setAttribute("cx", 210);
	crcl01.setAttribute("cy", 210);
	crcl01.setAttribute("r", 100);
	crcl01.setAttribute("id", "hatsoFeny");
	crcl01.setAttribute("style", 'fill:#DEAD05;fill-opacity:1;filter:url(#fltr01);');
	lyr03.appendChild(crcl01);
	
	var crcl02 = document.createElementNS(APP_JS.CONSTS.SVGNS, "circle");
	crcl02.setAttribute("cx", 210);
	crcl02.setAttribute("cy", 210);
	crcl02.setAttribute("r", 90);
	crcl02.setAttribute("id", "csillagAlap");
	crcl02.setAttribute("style", 'fill:#FFCE1E;fill-opacity:1;');
	lyr03.appendChild(crcl02);
	
	var crcl03 = document.createElementNS(APP_JS.CONSTS.SVGNS, "circle");
	crcl03.setAttribute("cx", 210);
	crcl03.setAttribute("cy", 210);
	crcl03.setAttribute("r", 90);
	crcl03.setAttribute("id", "fenyEloter");
	crcl03.setAttribute("style", 'fill:url(#radGrad01);fill-opacity:1;');
	lyr03.appendChild(crcl03);
	
	svg.appendChild(lyr03);
	
	//<nn>
	// A felépített SVG elemet a tároló DIV-hez adjuk.
	//</nn>
	cntnr.appendChild(svg);
	
	
}

function animateStar(sz){
//<SF>
// 2018. jan. 16.<br>
// Egy tesztanmimáció, ami 10 szer játszódik le...<br>
// PARAMÉTEREK:
//×-
// @-- @param ... = ... -@
//-×
//MÓDOSÍTÁSOK:
//×-
// @-- ... -@
//-×
//</SF>
	var op = $("#hatsoFeny").css("opacity");
	console.log("Hivas: " + sz);
	if(sz === undefined){
		sz = 1;
	}else if(sz > 10){
		return;
	}else{
	}
	if(op > .5){
		$("#hatsoFeny").animate({
			"opacity":.35
		},500,function(){
			sz++;
			APP_JS.animateStar(sz);
		});
	}else{
		$("#hatsoFeny").animate({
			"opacity":.85
		},1150,function(){
			sz++;
			APP_JS.animateStar(sz);
		});
	}
	
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
 
 
 
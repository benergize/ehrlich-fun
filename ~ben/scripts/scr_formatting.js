/*__________________________________________________________________________________
//
//	FILENAME: scr_formatting.js
//	CREATED: 12/11/17
//	AUTHOR: Ben Ehrlich
//	PURPOSE: Appends different elements of the script to the script variable, which
//	(cont.) eventually gets printed out.
//
//
*/

function dialogue(charName,toSay) {
	if(typeof toSay == "string") { script.push("<div class = 'characterName'>" + charName.toUpperCase() + "</div><div class = 'dialogue'>" + toSay + "</div>"); }
	else if(typeof toSay == "function") { script.push("<div class = 'characterName'>" + charName.toUpperCase() + "</div><div class = 'dialogue'>" + toSay() + "</div>"); }
}

function sceneHeading(toSay) { script.push("<div class = 'sceneHeading'>" + toSay.toUpperCase() + "</div>"); }


function actionLine(toSay) {
	if(typeof toSay == "string") { script.push("<div class = 'actionLine'>" + toSay + "</div>"); }
	else if(typeof toSay == "function") { script.push("<div class = 'actionLine'>" + toSay() + "</div>"); }
}

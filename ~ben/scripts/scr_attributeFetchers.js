/*__________________________________________________________________________________
//
//	FILENAME: scr_attributeFetchers.js
//	CREATED: 12/11/17
//	AUTHOR: Ben Ehrlich
//	PURPOSE: Functions to quickly get character attributes. As of now this isn't
//	(cont.) really used, as these shortcuts are established in the character pages.
//	(cont.) for now included for legacy purposes. DELETEME.
//
//
*/


function gProp(chara,prop) { return play[chara][prop]; } 
function getAt(ob,at){return ob[at]; }

function hat(at) { return play.hero[at]; }
function vat(at) { return play.villain[at]; }
function mat(at) { return play.mentor[at]; }

/*__________________________________________________________________________________
//
//	FILENAME: scene_returnToVillage.js
//	CREATED: 12/8/17
//	AUTHOR: Ben Ehrlich
//	PURPOSE: Function to 'play out' the Return to Village
//
//
//
*/

function scene_returnToVillage() {
	
	sceneHeading("Our hero goes home");
	
	if(play.hero['locale'] != undefined) { currentPlace = play.hero['locale']; }
	
	//Places aren't well implemented at all yet, so this'll make a comeback later
	//actionLine("Lights up on a " + currentPlace['description'] + "."); 

	var hD = play.hero.scenes['returnToVillage'];
	
	actionLine(hD['entrance']);

	dialogue(play.hero['name'],hD['remarks']);
	
	actionLine(hD['final_action']);
	
	actionLine("THE END&mdash;OR IS IT?");
	
}

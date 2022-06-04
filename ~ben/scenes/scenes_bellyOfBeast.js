/*__________________________________________________________________________________
//
//	FILENAME: scenes_bellyOfBeast.js
//	CREATED: 12/4/17
//	AUTHOR: Ben Ehrlich
//	PURPOSE: Function to 'play out' the belly of the beast scene.
//
//
//
*/

function scene_bellyOfBeast() {
	
	//Print out scene heading
	sceneHeading("The hero faces the grand trial.");
	
	currentPlace = play.villain['locale'];

	//Create shorthand to fetch attributes of hero and mentor
	var vD = play.villain.scenes['bellyOfBeast'];
	var hD = play.hero.scenes['bellyOfBeast'];
	//var vD = play.villain.scenes['firstObstacle'];
	
	
	actionLine(play.hero['name'] + " enters the " + currentPlace.name + ", " + currentPlace.description + ".");

	dialogue(play.hero['name'], hD.response_to_setting);
	
	actionLine(vD.appearance);
	
	dialogue(play.villain['name'], vD.entrance_dialogue);
	
	dialogue(play.hero['name'], hD.response_to_villain_appearance);
	
	dialogue(play.villain['name'], vD.threatens_hero);
	
	actionLine(vD.attempt_to_kill);
	
	actionLine(hD.hero_avoids_attack);
	
	actionLine(hD.hero_attacks_back);
	
	dialogue(play.villain['name'], vD.villain_gets_hit);
	
	actionLine(vD.villain_dies);
	
	dialogue(play.hero['name'], hD.response_to_death);
	
	actionLine(hD.gets_item);
	
} 

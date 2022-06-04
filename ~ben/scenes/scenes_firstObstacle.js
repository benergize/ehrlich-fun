/*__________________________________________________________________________________
//
//	FILENAME: friendship.js
//	CREATED: 12/4/17
//	AUTHOR: Ben Ehrlich
//	PURPOSE: Function to 'play out' the first obstacle scene
//
//
//
*/

function scene_firstObstacle() {
	
	//Print out scene heading
	sceneHeading("The hero surmounts their first challenge.");
	
	currentPlace = play.obstacleScene;

	//Create shorthand to fetch attributes of hero and mentor
	var fD = play.friend.scenes['firstObstacle'];
	var hD = play.hero.scenes['firstObstacle'];
	//var vD = play.villain.scenes['firstObstacle'];
	
	
	actionLine(play.hero['name'] + " and " + play.friend['name'] + " come to a" + currentPlace.name + ", " + currentPlace.description + ".");

	dialogue(play.hero['name'], hD.response_to_obstacle);
	
	dialogue(play.friend['name'], fD.response_to_obstacle);
	
	dialogue(play.hero['name'], hD.request_for_advice);

	dialogue(play.friend['name'], fD.given_advice);

	dialogue(play.hero['name'], hD.ignoring_advice);

	actionLine(play.hero['name'] + " attempts to " + hD.futile_attempt + " the obstacle, but nothing happens.");
	
	actionLine(currentPlace.death);
	
	dialogue(play.friend['name'], fD.dying_wish);

	dialogue(play.hero['name'], hD.death_acknowledgement);
	
	actionLine(play.friend['name'] + " dies. The obstacle now cleared, " + play.hero['name'] + " proceeds.");
	
	
} 

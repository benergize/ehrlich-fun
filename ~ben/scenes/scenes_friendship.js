/*__________________________________________________________________________________
//
//	FILENAME: friendship.js
//	CREATED: 12/4/17
//	AUTHOR: Ben Ehrlich
//	PURPOSE: Function to 'play out' the Friendship.
//
//
//
*/

function scene_friendship() {
	
	//Print out scene heading
	sceneHeading("The hero makes a friend.");
	
	currentPlace = play.friend.locale;

	//Create shorthand to fetch attributes of hero and mentor
	var fD = play.friend.scenes['friendship'];
	var hD = play.hero.scenes['friendship'];
	
	//Where the scene is taking place
	//var place = fD.locale;
	
	actionLine(play.hero['name'] + " enters " + currentPlace.name + ", " + currentPlace.description);

	actionLine(fD.description_of_setting);

	dialogue(play.friend['name'], fD.attention_getter);

	dialogue(play.hero['name'], hD.response_to_attention);
	
	dialogue(play.friend['name'], fD.introduction);
	
	dialogue(play.hero['name'], hD.response_to_introduction);

	dialogue(play.friend['name'], fD.goals);

	dialogue(play.hero['name'], hD.goals);

	dialogue(play.friend['name'], fD.lets_work_together);

	dialogue(play.hero['name'], hD.agree_to_join);
	
	actionLine(currentPlace.exit_line);
	
	
} 

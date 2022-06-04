/*__________________________________________________________________________________
//
//	FILENAME: callToAdventure.js
//	CREATED: 12/4/17
//	AUTHOR: Ben Ehrlich
//	PURPOSE: Function to 'play out' the Call to Adventure. Improved version of
//	(cont.): meetingWithMentor.js.
//
//
//
*/

function scene_callToAdventure() {
	
	//Print out scene heading
	sceneHeading("Introductory discussion with the Mentor");
	
	//Bandaid for opening description
	if(play.hero['locale'] != undefined) {
		currentPlace = play.hero.locale;
		actionLine("Lights up on a " + currentPlace['description'] + "."); 
	}

	//Create shorthand to fetch attributes of hero and mentor
	var mD = play.mentor.scenes['callToAdventure'];
	var hD = play.hero.scenes['callToAdventure'];
	
	actionLine(hD['activity_at_start']); //What the hero is doing at the beginning of the scene
	
	actionLine(mD['mentor_entrance']); //so and so appears

	dialogue(play.hero['name'],hD['reaction_to_entrance']); //hero responds to appearance
		
	dialogue(play.mentor['name'],mD['outline_of_call']); //so and so outlines the mission

	dialogue(play.hero['name'],hD['refusal_of_call']); //hero explains why they can't do it
	
	dialogue(play.mentor['name'],mD['further_enticement']); //mission giver proves that hero can do it/up the stakes

	dialogue(play.hero['name'],hD['motivation_and_acceptance']); //hero defines self motivation and accepts

	dialogue(play.mentor['name'],mD['death_or_exit_dialogue']); //so and so says they're leaving or something
	
	actionLine(mD['death_or_exit_action']); //so and so dies or exits
	
	dialogue(play.hero['name'],hD['comment_on_exit']); //hero comments on caller leaving/dying
	
}

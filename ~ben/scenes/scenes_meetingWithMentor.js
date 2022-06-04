/*__________________________________________________________________________________
//
//	FILENAME: meetingWithMentor.js
//	CREATED: 11/30/17
//	AUTHOR: Ben Ehrlich
//	PURPOSE: Function 'play out' the Meeting With the Mentor. Messy as of 12/1
//
//
//
*/


function scr_meetingWithMentor() {

	//Print out scene heading
	sceneHeading("Introductory discussion with the Mentor");

	//Create shorthand to fetch attributes of hero and mentor
	var mD = play.mentor.scenes['mentorMeeting'];
	var hD = play.hero.scenes['mentorMeeting'];

	//Mentor asserts a fact that the hero doesn't know, ie, your father served in the clone wars
	dialogue(play.mentor['name'],mD['factUnknown']);

	//Hero denies fact, ie, my father was a pilot on a spice freighter
	dialogue(play.hero['name'],hD['denialOfFact']);

	//Mentor further asserts fact, ie, that's what your uncle told you
	dialogue(play.mentor['name'],mD['assertionOfFact']);

	//I will get to the rest of this later.
	dialogue(play.hero['name'],hD['furtherQuestioning']);
	
	dialogue(play.mentor['name'],mD['assertionOfFact_2']);
	
	dialogue(play.hero['name'],hD['furtherQuestioning_2']);

	dialogue(play.mentor['name'],mD['furtherExplanation']);

	dialogue(play.hero['name'],hD['acceptanceOfGift']);

	dialogue(play.mentor['name'],mD['furtherExplanationAndGift']);

	dialogue(play.hero['name'],hD['furtherQuestioning_3']);

	dialogue(play.mentor['name'],mD['furtherExplanation_2']);

	dialogue(play.hero['name'],hD['furtherQuestioning_4']);

	dialogue(play.mentor['name'],mD['furtherExplanation_3']);

	dialogue(play.mentor['name'],mD['callToAdventure']);

	dialogue(play.hero['name'],hD['refusalOfCall']);

	dialogue(play.mentor['name'],mD['callToAdventure_2']);

	dialogue(play.hero['name'],hD['refusalOfCall_2']);

	dialogue(play.mentor['name'],mD['callToAdventure_3']);

	dialogue(play.hero['name'],hD['refusalOfCall_3']);

	dialogue(play.mentor['name'],mD['callToAdventure_4']);

	dialogue(play.hero['name'],hD['refusalOfCall_4']);

	dialogue(play.mentor['name'],mD['acceptanceOfRefusal']);
}
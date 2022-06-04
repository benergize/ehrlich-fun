var mentor_susan = {
	name: "Susan",
	excalibur: "stick of gum",
	questItem: "eyeglasses",
	force:"optomatrist",
	call:"find Susan's glasses",
	scenes:["mentorMeeting"]
}

//SCENE 1 - Call to adventure
mentor_susan.scenes['callToAdventure'] = {
	mentor_entrance:"Susan stumbles into the room, hands in front of her trying not to bump into anything.", /*so and so appears */
	outline_of_call:"I lost my glasses. I have no clue where they are. Can you help me find them?", /*so and so outlines the mission*/
	further_enticement:"Can you just? Can you just give me a hand?", /*mission giver proves that hero can do it/up the stakes*/
	death_or_exit_dialogue:"And please make sure I don't stumble off somewhere.", /*so and so dies or exits*/
	death_or_exit_action:"Susan stumbles off through a door." /*Exit or death*/
};


mentors.push(mentor_susan);

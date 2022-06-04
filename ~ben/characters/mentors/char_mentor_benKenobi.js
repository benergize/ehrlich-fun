var mentor_benKenobi = {
	name: "Ben Kenobi",
	excalibur: "lightsaber",
	questItem: "force",
	force:"force",
	call:"learn the ways of the force",
	scenes:["mentorMeeting"]
}

//SCENE 1 - Call to adventure
mentor_benKenobi.scenes['callToAdventure'] = {
	mentor_entrance:"Ben Kenobi enters.", /*so and so appears */
	outline_of_call:"You must come with me to Alderan and learn the ways of the force.", /*so and so outlines the mission*/
	further_enticement:"You can do this! And I have snacks in the speeder!", /*mission giver proves that hero can do it/up the stakes*/
	death_or_exit_dialogue:"I'm going to disappear into a puff of smoke now. Use the force.", /*so and so dies or exits*/
	death_or_exit_action:"Ben Kenobi vanishes in a puff of smoke." /*Exit or death*/
};


mentors.push(mentor_benKenobi);

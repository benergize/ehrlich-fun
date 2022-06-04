var mentor_grandma = {
	name: "GRANNY DELILAH",
	excalibur: "crochet needles and thread",
	questItem: "ex husband's ghost",
	force:"overbearing affection",
	call:"destroy husband’s ghost",
	scenes:["mentorMeeting"]
}

//SCENE 1 - Call to adventure
mentor_grandma.scenes['callToAdventure'] = {
	mentor_entrance:"Grandma shuffles into the room, crocheting furiously without even looking down. She seems distracted.", /*so and so appears */
	outline_of_call:"My ex husband’s ghost has been haunting me…I guess the son of a bitch died. I can’t sleep, I can’t eat. He’s everywhere. You’ve got to help me destroy his ghost.", /*so and so outlines the mission*/
	further_enticement:"It’s not so hard, sonny. I’d do it myself, but my aching back won’t let me. You can do this. Grandma loves you.", /*mission giver proves that hero can do it/up the stakes*/
	death_or_exit_dialogue:"Thanks, sweetie. When it’s done, I’ll bake you a nice cherry pie, how’s that sound?", /*so and so dies or exits*/
	death_or_exit_action:"Grandma sits down in a worn armchair, knitting less furiously now, and begins threatening the ghost with his impending demise. Fade to black." /*Exit or death*/
};


mentors.push(mentor_grandma);
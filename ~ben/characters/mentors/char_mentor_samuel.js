var mentor_samuel = {
	name: "Samuel",
	excalibur: "an apple",
	questItem: "first apple tree in america",
	force:"an obsession with johnny appleseed",
	call:"find the first apple tree in america",
	scenes:["mentorMeeting"]
}

//SCENE 1 - Call to adventure
mentor_samuel.scenes['callToAdventure'] = {
	mentor_entrance:"Samuel slides into the room, entering from stage left, and walks purposefully to center, apple in each hand. He munches on one, then the other. Looks pensive.", /*so and so appears */
	outline_of_call:"Hey there. Listen, I’m getting close. But I can’t do this alone. You have to help me find the first apple tree in america, planted by johny appleseed himself. One of the apples in my hands holds the key…but which one?", /*so and so outlines the mission*/
	further_enticement:"I’ll take one, you take the other. If we complete this mission, there’s nothing we can’t do. We’ll have fame. Glory. Fortune. And apples - so many apples. You’ll never see a doctor again.", /*mission giver proves that hero can do it/up the stakes*/
	death_or_exit_dialogue:"Perfect. I’ll go this way, you go that way.", /*so and so dies or exits*/
	death_or_exit_action:"Samuel gestures towards stage left and begins to walk. Suddenly, an arrow flies through the air and pierces his heart. With his dying breath, he says: \"It’s up to you now. Please…don’t fail me.\" He hands HERO his apple, then dies." /*Exit or death*/
};


mentors.push(mentor_samuel);
var mentor_tara = {
	name: "Tara",
	excalibur: "magic 8 ball",
	questItem: "amulet",
	force:"wisdom + unending knowledge of astrology",
	call:"Find the amulet",
	scenes:["mentorMeeting"]
}

//SCENE 1 - Call to adventure
mentor_tara.scenes['callToAdventure'] = {
	mentor_entrance:"Tara enters from stage left and strolls calmly to stage right. Wears flowing clothing. lots of jewelry, feather earrings, and has very long hair. Smiles serenely, holding up her hand to inspect the rings she wears. Suddenly, her face changes. She realizes something - her neck is bare. The amulet is gone.", /*so and so appears */
	outline_of_call:"Oh my god. Is this what stress feels like? Please, you need to help me. My amulet. It was taken by she who must not be named…[in a whisper]…Karen. She’s evil, and she knows me. She’ll know exactly what I’ve come for and she will be ready for me. If you go, you can catch her off guard. She’ll never know what hit her!", /*so and so outlines the mission*/
	further_enticement:"Look. This amulet is special. It has powers. I can’ explain right now, but I need you to trust me. (shakes magic 8 ball, gasps with joy) Look! You’re going to succeed! The magic 8 has willed it so.", /*mission giver proves that hero can do it/up the stakes*/
	death_or_exit_dialogue:"Thank you, kind one. Someday, I will repay you.", /*so and so dies or exits*/
	death_or_exit_action:"TARA sits down and begins meditating. Fade to black." /*Exit or death*/
};


mentors.push(mentor_tara);
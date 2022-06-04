var villain_dirk = {
	name: "DIRK",
	locale:place_basement,
	wantsToDestroy: "feminism",
	scenes:["bellyOfBeast"],
}

villain_dirk.scenes['bellyOfBeast'] = {
	appearance:"DIRK comes out from the shadows, holding a sign that says: #NOTALLMEN.",
	entrance_dialogue:function(){ return "Hello there, " + play.hero['name'] + ". You're one of those....feminists, aren't you? Coming to " + play.mentor['call'] + "? Well, it's time for you to die. Meninism 4evr."; },
	threatens_hero:"NOT ALL MEN ARE MURDERERS, BUT I AM!!!!!!",
	attempt_to_kill:function(){ return "DIRK throws the phrase 'well actually...' out into the atmosphere fifteen times, followed by long explantations, at " + play.hero['name'] + ". Do you understand now? That's why YOU are going to die. DIRK starts throwing machetes everywhere."; },
	villain_gets_hit:"Oh no...feminism is taking over....I can feel it in my bones...which are becoming jelly....I'M MEEEELLLLLTTTTTTIIIIINNNNGGG!",
	villain_dies:"DIRK melts."
};


villains.push(villain_dirk);
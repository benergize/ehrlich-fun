
var villain_nelson = {
	name: "NELSON",
	locale:place_hallOfMirrors,
	wantsToDestroy: "joy",
	scenes:["bellyOfBeast"],
}

villain_nelson.scenes['bellyOfBeast'] = {
	appearance:"NELSON appears, brandishing a sword.",
	entrance_dialogue:function(){ return "Hello " + play.hero['name'] + "! It is I, Nelson. You can never defeat me - see this sick ass sword? I can use it....to murururururder youuuuuuu. Oh, your little friend, " + play.mentor['call'] + "? That's interesting, since you will die soon."; },
	threatens_hero:"I'll KILL YOU!",
	attempt_to_kill:function(){ return "NELSON tries to kill " + play.hero['name'] + " with the sword, but he has really bad aim and misses, dropping the sword."; },
	villain_gets_hit:"Noooooooooooo! Without my sword....I'll....meeeeeeelllllttt.",
	villain_dies:"NELSON melts into a puddle on the floor."
};


villains.push(villain_nelson);
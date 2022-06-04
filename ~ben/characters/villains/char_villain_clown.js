
var villain_clown = {
	name: "THE EVIL CLOWN",
	locale:place_hallOfMirrors,
	wantsToDestroy: "normal people",
	scenes:["bellyOfBeast"],
}

villain_clown.scenes['bellyOfBeast'] = {
	appearance:"Suddenly ten clowns appear in the mirrors!",
	entrance_dialogue:function(){ return "Hello " + play.hero['name'] + "! I am The Juggalo King! I suppose you've come to " + play.mentor['call'] + "? Well guess what? You won't get out of here alive!"; },
	threatens_hero:"You will die!",
	attempt_to_kill:function(){ return "The clown throws a barrage of juggling balls at " + play.hero['name'] + "!"; },
	villain_gets_hit:"Agh! You've done it now! You've doomed me! I'm melting! I'm melting! What a world, what a world!",
	villain_dies:"The evil clown melts into a puddle on the floor."
};


villains.push(villain_clown);
var villain_nancy = {
	name: "NANCY",
	locale:place_hallOfMirrors,
	wantsToDestroy: "her children and all customer service employees",
	scenes:["bellyOfBeast"],
}

villain_nancy.scenes['bellyOfBeast'] = {
	appearance:"Descends from above, talking on her flip phone.",
	entrance_dialogue:function(){ return "Excuse me, " + play.hero['name'] + "Can you hold on a minute? I'm on the phone. Yes. Yeah. I know. I KNOW! You would not believe what Becky said about her the other day...I'll tell you later. Got to destroy an enemy really quickly. I'll call you later. Okay. Alright. Yep. Uh huh. Mmmmmkay. Yep. Bye now! God, she's annoying. Anyway, I know! You're here to " + play.mentor['call'] + "? Well I was told by AppleCare that it is time for you to DIEEEEEE."; },
	threatens_hero:"I WAS TOLD I COULD WALK IN THE STORE, AND GET THE PART! I WAS LIED TO, AND YOU WILL SUFFER FOR IT!",
	attempt_to_kill:function(){ return "NANCY starts deconstructing a giant macbook and throwing each component at " + play.hero['name'] + "."; },
	villain_gets_hit:"My god. They're melting. Why are they melting? Now I'm melting! NOOOOOOO! I'M MEEEEELLLLLTTTTTIIIIINGNNNGGG! I DON'T DESERVE THIS!",
	villain_dies:"NANCY melts."
};


villains.push(villain_nancy);
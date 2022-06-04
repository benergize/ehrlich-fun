var hero_sandra = {
	name: "SANDRA",
	love: "origami paper",
	excalibur: "craft scissors",
	scenes:["callToAdventure"]
}

//SCENE 1 - Call to adventure
hero_sandra.scenes['callToAdventure'] = {
	activity_at_start:"Sandra sits on the floor in the middle of a room bare of furniture, surrounded by craft supplies. She is scrapbooking.", /*What the hero is doing at the beginning of the scene*/
	reaction_to_entrance:function(){return play.mentor['name'] + "? How dare you interrupt my me-time?"; }, /*hero responds to appearance of caller to action*/
	refusal_of_call:function(){ return "Honestly," +play.mentor['name'] + ", I get one hour to myself for the first time this month, and you barge in with your outlandish requests? I was in the middle of a really good collage. GOD!"}, /*hero explains why they can't go on adventure*/
	motivation_and_acceptance:"FINE. I'll help. My bleeding heart is just too damn full of LOVE.", /*hero defines self motivation and accepts call*/
	comment_on_exit:"Fucking typical." /*hero comments on caller leaving/dying*/
};

hero_sandra.scenes["friendship"] = {
	response_to_attention:"Well, that figures. Another weak link who needs my help, I assume?",
	response_to_introduction:"Thought as much. Well, it's lovely to meet ya, pal. Name's Sandra.",
	goals:function(){ return "I see. I'm on a mission myself, to " + play.mentor['call'] + "."; },
	agree_to_join:"Suppose we keep each other company. What's that lovely saying I always see on facebook? Peas in a po..no...Birds of a...no, not that one....Two heads are better than one. I guess."
};

hero_sandra.scenes["firstObstacle"] = {
	response_to_obstacle:"Absolutely ridiculous. I won't abide this.",
	request_for_advice:function(){ return "What do you think we should do, " + play.friend['name'] + "?"; },
	ignoring_advice:"I have an idea!",
	futile_attempt:"threateningly brandish glue stick",
	death_acknowledgement:function(){ return "Oh my god! " + play.friend['name'] + ", did you seriously just die on me? My first real friend! I'm a failure."; }
};

hero_sandra.scenes["bellyOfBeast"] = {
	response_to_setting:"Huh. Would ya look at that. God, I wish I was couponing right now. Even those horrid papercuts would be better than this.",
	response_to_villain_appearance:"What, are you supposed to be some kind of villain? How ridiculous. If I can handle my mother in law, I can certainly handle this showdown.",
	hero_avoids_attack:"Our hero deftly does a backflip in the air, avoiding the attack.",
	hero_attacks_back:"SANDRA taps her foot, inspecting the room and frequently glancing down at her watch.",
	gets_item:function(){ return "SANDRA looks around and spots " + play.mentor['name'] + "'s " + play.mentor['questItem'] + ". She completes her quest, and exits."; },
	response_to_death:"Huh. Odd. Guess I'm finished now."
};

hero_sandra.scenes["returnToVillage"] = {
	entrance:"SANDRA enters CRAFT ROOM.",
	remarks:function(){ return "Oh, my beautiful scrapbook. I've never been happier to see you. You're not gonna believe my next collage - I just " + play.mentor['call'] + "."; },
	final_action:"SANDRA grabs a magazine and starts furiously cutting out shapes."
};

heroes.push(hero_sandra);


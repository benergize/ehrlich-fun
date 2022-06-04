var hero_lee = {
	name: "Basic Lee",
	scenes:["callToAdventure","friendship"],
	locale:place_livingRoom
}


//SCENE 1 - Call to adventure
hero_lee.scenes['callToAdventure'] = {
	activity_at_start:"Lee sits watching something on TV.", /*What the hero is doing at the beginning of the scene*/
	reaction_to_entrance:"Who are you! How did you get in here?", /*hero responds to appearance of caller to action*/
	refusal_of_call:"You smell and I don't want to do this.", /*hero explains why they can't go on adventure*/
	motivation_and_acceptance:"If I say yes will you leave me alone? Yes, fine I'll do it.", /*hero defines self motivation and accepts call*/
	comment_on_exit:"Was that a fever dream?" /*hero comments on caller leaving/dying*/
};

hero_lee.scenes["friendship"] = {
	response_to_attention:"Oh boy. And what are you supposed to be?",
	response_to_introduction:"Okay... Nice to meet you I guess.",
	goals:function(){ return "Well I'm trying to " + play.mentor['call'] + "."; },
	agree_to_join:"I guess we could work together. It might make this acid trip of an experience go faster."
};

hero_lee.scenes["firstObstacle"] = {
	response_to_obstacle:"Well this is just peachy.",
	request_for_advice:function(){ return "Any bright ideas, " + play.friend['name'] + "?"; },
	ignoring_advice:"Maybe if we...",
	futile_attempt:"stare down",
	death_acknowledgement:function(){ return "Goodbye " + play.friend['name'] + ". I will not miss you."; }
};

hero_lee.scenes["bellyOfBeast"] = {
	response_to_setting:"Well, at least this looks climactic.",
	response_to_villain_appearance:"Look man, I don't want any trouble. I just want to get what I came for and be on my way.",
	hero_avoids_attack:"Our hero deftly dodges the attack!",
	hero_attacks_back:"Basic Lee shrugs his shoulders and waits for something else to happen.",
	gets_item:function(){ return "Lee looks around and spots " + play.mentor['name'] + "'s " + play.mentor['questItem'] + ". He completes his quest, and exits."; },
	response_to_death:"That worked out pretty nicely."
};

hero_lee.scenes["returnToVillage"] = {
	entrance:"Basic Lee enters his living room once again.",
	remarks:function(){ return "Well, that was a huge waste of time, but at the end of the day at least I did " + play.mentor['call'] + "."; },
	final_action:"Basic Lee sits back down on his couch and resumse watching TV."
};

heroes.push(hero_lee);

var hero_billy = {
	name: "Billy",
	scenes:["callToAdventure"]
};


//SCENE 1 - Call to adventure
hero_billy.scenes['callToAdventure'] = {
	activity_at_start:"Billy sits on the floor of his room, playing with toy trucks.", /*What the hero is doing at the beginning of the scene*/
	reaction_to_entrance:"I wish Mom would put a lock on my door.", /*hero responds to appearance of caller to action*/
	refusal_of_call:"I dunno, I really just wanna sit here play with these trucks.", /*hero explains why they can't go on adventure*/
	motivation_and_acceptance:"Well I do kinda wanna run away from home, so I guess I'll do it.", /*hero defines self motivation and accepts call*/
	comment_on_exit:"(vomits, but swallows it)" /*hero comments on caller leaving/dying*/
};
hero_billy.scenes["friendship"] = {
	response_to_attention:"My mom told me not to talk to strangers.",
	response_to_introduction:"Do you have candy?",
	goals:function(){ return "That's great but I've gotta " + play.mentor['call'] + "."; },
	agree_to_join:"Okay! You're my new BFFFFF."
};
hero_billy.scenes["firstObstacle"] = {
	response_to_obstacle:"Fuck! I mean, darn!",
	request_for_advice:function(){ return "What do you think, " + play.friend['name'] + "?"; },
	ignoring_advice:"Yeah that idea's pretty dumb. Let me try something.",
	futile_attempt:"karate chop",
	death_acknowledgement:function(){ return "Oh man. My BFFFFFF. Oh well. I don't need friends, I have a Nintendo Switch."; }
};
hero_billy.scenes["bellyOfBeast"] = {
	response_to_setting:"Oh crud. Looks like a Boss Level.",
	response_to_villain_appearance:"I may be a four-year-old child, but I will beat you inside out!",
	hero_avoids_attack:"Billy ducks, dodging gracefully.",
	hero_attacks_back:function(){return "Billy pulls out a Colt .380 Mustang® and shoots " + play.villain['name'] + " in the face."},
	gets_item:function(){ return "Billy blows the smoke from his Colt and tucks it back into the front of his jean shorts. He looks around and finds " + play.mentor['name'] + "'s " + play.mentor['questItem'] + ". Quest at an end, Billy makes his exit."; },
	response_to_death:"lol u ded"
};
hero_billy.scenes["returnToVillage"] = {
	entrance:"Billy sits in his room, once again playing with trucks.",
	remarks:function(){ return "Well, the journey was tough, but at least I learned a valuable lesson: ...."; },
	final_action:"Billy stares straight ahead for 5 minutes, then coughs up blood."
};
heroes.push(hero_billy);

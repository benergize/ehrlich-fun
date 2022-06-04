var hero_whitney = {
	name: "WHITNEY",
	scenes:["callToAdventure","friendship"],
	locale:place_livingRoom
}


//SCENE 1 - Call to adventure
hero_whitney.scenes['callToAdventure'] = {
	activity_at_start:"WHITNEY is in her bakery, putting the finishing touches on a beautiful cake. Her NASCAR trophies glint in the display case behind her.", /*What the hero is doing at the beginning of the scene*/
	reaction_to_entrance:"Hey, what can I do for you today?", /*hero responds to appearance of caller to action*/
	refusal_of_call:"Woahhhh there, buddy. No can do. I'm just trying to sell some baked goods. I left adventure behind me when I chose to end my NASCAR career and left the CIA, and I'm living a peaceful life now. Why can't y'all just accept that I simply don't need any more drama?", /*hero explains why they can't go on adventure*/
	motivation_and_acceptance:"Sounds like a wild ride...I guess I could have one last adventure. I'm in.", /*hero defines self motivation and accepts call*/
	comment_on_exit:"Never thought I'd be in this position again." /*hero comments on caller leaving/dying*/
};

hero_whitney.scenes["friendship"] = {
	response_to_attention:"Dear God. Who are you?",
	response_to_introduction:"Hmph. Whitney. Pleased to make your acquaintance.",
	goals:function(){ return "I'm living out one last adventure before I return to my peaceful existence over at the bakery: I'm trying to " + play.mentor['call'] + "."; },
	agree_to_join:"What the hell, pal. Let's do this thang."
};

hero_whitney.scenes["firstObstacle"] = {
	response_to_obstacle:"Hm, 'kay. This doesn't look too great.",
	request_for_advice:function(){ return "How should we handle this, " + play.friend['name'] + "?"; },
	ignoring_advice:"Maybe, but I have a better idea..",
	futile_attempt:"gets in a car that has suddenly appeared",
	death_acknowledgement:function(){ return "I am sorry for ya, " + play.friend['name'] + ". I wish we could have done this together."; }
};

hero_whitney.scenes["bellyOfBeast"] = {
	response_to_setting:"Oh my Lanta. I swear on Moses and Mary I have never seen a sight like this. I had a feeling my final adventure would be a good one.",
	response_to_villain_appearance:"Step aside, fucker. I've got a mission to complete.",
	hero_avoids_attack:"Our hero gets back in the car and revs the engine, avoiding the attack.",
	hero_attacks_back:"WHITNEY starts doing figure eights, tires squeaking.",
	gets_item:function(){ return "WHITNEY exits the car and sees " + play.mentor['name'] + "'s " + play.mentor['questItem'] + ". She completes her quest and exits."; },
	response_to_death:"I really did enjoy that. Maybe the CIA will take me back..."
};

hero_whitney.scenes["returnToVillage"] = {
	entrance:"WHITNEY returns to her bakery a changed woman. She removes a painting from the wall and types a code into the number pad that the painting was hiding. A safe pops open, and she pulls out a burner phone from the stack inside. She dials.",
	remarks:function(){ return "Listen, I want back in. I just " + play.mentor['call'] + ", and I've never felt so alive."; },
	final_action:"WHITNEY throws on a black trench coat, grabs cash, some passports, and a few more burner phones, then closes the safe, replaces the painting, and runs out."
};

heroes.push(hero_whitney);

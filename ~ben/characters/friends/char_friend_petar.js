var friend_petar = {
	name:"PETAR",
	locale:place_basement,
	scenes:["friendship"]
}

friend_petar.scenes["friendship"] = {
	description_of_setting:"PETAR marches stiffly across the stage. Looks uncomfortable, and continues marching back and forth, until he runs offstage. Sound of a liquid stream hitting the ground is heard. PETAR re-enters, now looking much more relaxed.",
	attention_getter:function(){ return "Sorry about that," + play.hero['name'] + ". Just wanted to see how long I could hold it while marching. I'm an army man, you see, and we've got to stay alert, know what I mean? Can't always take five for a piss, 'scuse my French. Anyway I marched for eight hours straight just now. Pretty impressive, huh?" },
	introduction:"Petar's the name. I was a corporal once, but those days are long past...",
	goals:"I need to find my medal. Given to me by the minister himself, you know.",
	lets_work_together:"Seems like maybe we should join forces."
};

friend_petar.scenes["firstObstacle"] = {
	response_to_obstacle:function(){ return "I'm not afraid of that " + play.obstacleScene['obstacle'] + ". Let's attack. We've got to stay on the offense."; },
	given_advice:"If only I had my men behind me...ah, well. I'll just construct a quick booby trap.",
	dying_wish:"I'll never find my medal, now. Ah well. At least my bladder's empty. Tell my mother I love her. I thought it might end this way."
};

friends.push(friend_petar);

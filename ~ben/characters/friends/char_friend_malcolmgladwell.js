var friend_malcolmgladwell = {
	name:"MALCOLM GLADWELL",
	locale:place_basement,
	scenes:["friendship"]
}

friend_malcolmgladwell.scenes["friendship"] = {
	description_of_setting:function(){return "MALCOLM strolls thoughtfully towards " + play.hero['name'] + "."; },
	attention_getter:"To be someone's best friend requires a minimum investment of time. More than that, though, it takes emotional energy. Caring about someone deeply is exhausting.",
	introduction:"I am the author of five New York Times bestsellers — The Tipping Point, Blink, Outliers, What the Dog Saw, and David and Goliath: Underdogs, Misfits and the Art of Battling Giants. I've been named one of the 100 most influential people by TIME magazine and one of the Foreign Policy’s Top Global Thinkers. But none of that matters, because now, I'm your friend.",
	goals:"I'm just looking for the next lead on this story. For my podcast.",
	lets_work_together:"Who we are cannot be separated from where we're from. Let's collaborate."
};

friend_malcolmgladwell.scenes["firstObstacle"] = {
	response_to_obstacle:function(){ return "My goodness! Can you believe that " + play.obstacleScene['obstacle'] + " there? Unbelievable."; },
	given_advice:"The key to good decision making is not knowledge. It is understanding. We are swimming in the former. We are desperately lacking in the latter.",
	dying_wish:"Please...take this flash drive. It contains the files I've recorded for the next season of my podcast. It's essential that you release them to the public. Please. Revisionist History must go on, even if I....cannot."
};

friends.push(friend_malcolmgladwell);

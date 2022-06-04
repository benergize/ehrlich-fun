var friend_trivil = {
	name:"Trivil",
	locale:place_basement,
	scenes:["friendship"]
}

friend_trivil.scenes["friendship"] = {
	description_of_setting:"Trivil stands idle, staring into space.",
	attention_getter:"Hello sir. Will you be staying the evening?",
	introduction:"Ah, forgive me sir. I am Trivil, butler to Lady Kenworth.",
	goals:"Alas I seek to return to my lady, but I can't seem to remember how to get there. Old age, don't-you-know?",
	lets_work_together:"Sir, it seems our goals are quite related&mdash;that our destinies are intertwined. Perhaps it would suit us both to join forces?"
};

friend_trivil.scenes["firstObstacle"] = {
	response_to_obstacle:function(){ return "My word. It's " + play.obstacleScene['obstacle'] + ". Goodness me."; },
	given_advice:"Sir, perhaps if we offered it tea, sir?",
	dying_wish:"Sir, tell Lady Kenworth I'm sorry I failed her."
};

friends.push(friend_trivil);
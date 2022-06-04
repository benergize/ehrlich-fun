var friend_cynthia = {
	name:"CYNTHIA",
	locale:place_basement,
	scenes:["friendship"]
}

friend_cynthia.scenes["friendship"] = {
	description_of_setting:function(){ return "CYNTHIA high knees her way to center, arms in the air.";},
	attention_getter:"Come on! Chin up! Get pumped! Have we met! Let's be friends! Come on! Energy!",
	introduction:"I'm Cynthia! I'm not just a personal trainer, I'm THE personal trainer! Let's go! Come on! 10 jumping jacks! 20 pushups! You got it!",
	goals:"I'm scouring the planet for the One And Only Purple Diamond Exercise Strap! Once I have it, I'll reach the ultimate level of fitness!",
	lets_work_together:"Come on! Let's do it together! Teamwork! Let's go!"
};

friend_cynthia.scenes["firstObstacle"] = {
	response_to_obstacle:function(){ return "Is that a " + play.obstacleScene['obstacle'] + "? Come on, this is going to require some crunches!"; },
	given_advice:"I think we should kickbox our way out of this!",
	dying_wish:"I can't believe I devoted my entire life to wellness, health, fitness, clean living...and here I am, dying young, just like my mother before me. Oh, let the Kopecky Curse end with me!"
};

friends.push(friend_cynthia);

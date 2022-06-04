var hero_luke = {
	name: "LUKE",
	love: "family",
	excalibur: "the force",
	scenes:["callToAdventure"]
}

//SCENE 1 - Call to adventure
hero_luke.scenes['callToAdventure'] = {
	activity_at_start:"Luke stands on the dunes near the moisture farm, gazing into the sunset.", /*What the hero is doing at the beginning of the scene*/
	reaction_to_entrance:function(){return play.mentor['name'] + "?... Boy am I glad to see you."; }, /*hero responds to appearance of caller to action*/
	refusal_of_call:"I can't! I have chores to do--my uncle's gonna kill me!", /*hero explains why they can't go on adventure*/
	motivation_and_acceptance:"I guess this place sucks. I'll go.", /*hero defines self motivation and accepts call*/
	comment_on_exit:"I just can't believe he's gone." /*hero comments on caller leaving/dying*/
};

heroes.push(hero_luke);

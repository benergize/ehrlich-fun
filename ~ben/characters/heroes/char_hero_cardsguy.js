var cardsguyLoves = ["Cards", "Spider Solitaire", "Poker"]
var cardsguyLove = cardsguyLoves[Math.floor(Math.random() * cardsguyLoves.length)];

var hero_cardsguy = {
	name: "Cards Guy",
	love: cardsguyLove,
	excalibur: "Go Fish",
	scenes:["callToAdventure"]
}


//SCENE 1 - Call to adventure
hero_cardsguy.scenes['callToAdventure'] = {
	activity_at_start:"Cards Guy sits at his kitchen table, stacking a house of cards.", /*What the hero is doing at the beginning of the scene*/
	reaction_to_entrance:"You just knocked over my cards, you asshole.", /*hero responds to appearance of caller to action*/
	refusal_of_call:"I don't wanna help you. I'm still pretty mad about the cards thing, and it's gonna take me a few hours to set that all back up.", /*hero explains why they can't go on adventure*/
	motivation_and_acceptance:"(draws a card from his deck) Huh. Four of Spades. I guess I'll help you.", /*hero defines self motivation and accepts call*/
	comment_on_exit:"(Draws a Seven of Diamonds) Uh oh." /*hero comments on caller leaving/dying*/
};
heroes.push(hero_cardsguy);

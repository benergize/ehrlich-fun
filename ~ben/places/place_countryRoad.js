var place_countryRoad = {
	name:"quiet country road",
	sceneType:"obstacle",
	description:"a wide dirt path with a giant boulder blocking the way",
	obstacle:"a giant boulder",
	death:function(){ return "Suddenly, the boulder falls squarely on " + play.friend.name + ", opening the path."; }
	
};

places.push(place_countryRoad);
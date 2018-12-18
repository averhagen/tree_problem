'use-strict';

class GrowthSeason {

    constructor(seasonName, growthFunction) {
        this.seasonName = seasonName;
        this.growthFunction = growthFunction;
    }
}

function fallGrowthFunction(currentHeight) {
    return currentHeight + 1;
}

const Fall = new GrowthSeason("Fall", fallGrowthFunction);

function springGrowthFunction(currentHeight) {
    return currentHeight * currentHeight;
}

const Spring = new GrowthSeason("Spring", fallGrowthFunction);

const GROWTH_PATTEN = [Fall, Spring];

function growTreeForSeasons(startingTreeHeight, numberOfSeasons, growthPattern) {

    var treeHeight = startingTreeHeight;

    for(var i = 1; i <= numberOfSeasons; i++) {
        
    }
    
}
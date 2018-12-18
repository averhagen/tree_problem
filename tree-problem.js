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

function springGrowthFunction(currentHeight) {
    return currentHeight * currentHeight;
}

const Fall = new GrowthSeason("Fall", fallGrowthFunction);
const Spring = new GrowthSeason("Spring", springGrowthFunction);
const GROWTH_PATTEN = [Fall, Spring];

function growTreeForSeasons(startingTreeHeight, numberOfSeasons, growthPattern) {

    var treeHeight = startingTreeHeight;

    for (var i = 1; i <= numberOfSeasons; i++) {
        var currentSeason = growthPattern[(i - 1) % growthPattern.length]
        treeHeight = currentSeason.growthFunction(treeHeight);
    }

    return treeHeight;
}

console.log(growTreeForSeasons(0,2,GROWTH_PATTEN));
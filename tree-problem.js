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
    return currentHeight * 2;
}

const Fall = new GrowthSeason("Fall", fallGrowthFunction);
const Spring = new GrowthSeason("Spring", springGrowthFunction);
const GROWTH_PATTEN = [Fall, Spring];

function growTreeForSeasons(startingTreeHeight, numberOfSeasons, growthPattern) {
    var treeHeight = startingTreeHeight;
    var progressChart = [startingTreeHeight];

    for (var i = 1; i <= numberOfSeasons; i++) {
        var currentSeason = growthPattern[(i - 1) % growthPattern.length]
        treeHeight = currentSeason.growthFunction(treeHeight);
        progressChart.push(treeHeight);
    }
    console.log("Growth Results:");
    console.log("\tStarting Height: " + startingTreeHeight);
    console.log("\tNumber of Seasons: " + numberOfSeasons);
    console.log("\tGrowth Progress: " + progressChart)
    console.log("\tFinal Height: " + treeHeight + "\n");
    return treeHeight;
}

growTreeForSeasons(0,2,GROWTH_PATTEN);
growTreeForSeasons(0,5,GROWTH_PATTEN);
growTreeForSeasons(0,7,GROWTH_PATTEN);
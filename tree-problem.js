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
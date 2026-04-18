function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}
//numPointsScored(playerName): takes a player’s name and returns their points scored.
const numPointsScored = (playerName) => {
    const game = gameObject();      
    for (const team in game) {
        const players = game[team].players;
        if (playerName in players) {
            return players[playerName].points;
        }
    }
    return null; // Return null if player not found
};


//shoeSize(playerName): Takes a player’s name as input and returns their shoe size.
const shoeSize = (playerName) => {
    const game = gameObject();
    for (const team in game) {

        const players = game[team].players;
        if (playerName in players) {
            return players[playerName].shoe;
        }

    }
    return null; // Return null if player not found
};

//teamColors(teamName): Takes a team name as input and returns an array of the team’s colors.

const teamColors = (teamName) => {
    const game = gameObject();  
    for (const team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }   
    }
    return null; // Return null if team not found
};  


//teamNames(): Returns an array of both team names.
const teamNames = () => {
    const game = gameObject();
    const names = [];   
    for (const team in game) {
        names.push(game[team].teamName);
    }

    return names;
};
//3.3 Retrieve Player Numbers and Stats
//playerNumbers(teamName): Takes a team name as input and returns an array of all players’ jersey numbers on that team.
const playerNumbers = (teamName) => {
    const game = gameObject();      
    for (const team in game) {
        if (game[team].teamName === teamName) {
            const players = game[team].players;
            const numbers = []; 
            for (const player in players) {
                numbers.push(players[player].number);
            }
            return numbers;
        }   
    }
    return null; // Return null if team not found
};

//playerStats(playerName): Takes a player’s name as input and returns an object with all stats for that player.
const playerStats = (playerName) => {
    const game = gameObject();  
    for (const team in game) {
        const players = game[team].players;
        if (playerName in players) {
            return players[playerName];
        }   
    }
    return null; // Return null if player not found
};
//bigShoeRebounds(): Returns the number of rebounds for the player with the largest shoe size.

//Steps:
//Identify the player with the largest shoe size.
//Return that player’s rebounds.
const bigShoeRebounds = () => {
    const game = gameObject();  
    let largestShoeSize = 0;
    let reboundsForLargestShoe = 0; 
    for (const team in game) {
        const players = game[team].players;
        for (const player in players) {
            const shoeSize = players[player].shoe;
            if (shoeSize > largestShoeSize) {
                largestShoeSize = shoeSize;
                reboundsForLargestShoe = players[player].rebounds;
            }   
        }
    }
    return reboundsForLargestShoe;
};



//Bonus Questions
//mostPointsScored(): Determines which player scored the most points.
const mostPointsScored = () => {
    const game = gameObject();  
    let maxPoints = 0;
    let topScorer = ""; 
    for (const team in game) {
        const players = game[team].players;
        for (const player in players) {
            const points = players[player].points;
            if (points > maxPoints) {
                maxPoints = points;
                topScorer = player;
            }   
        }
    }
    return topScorer;
};

//winningTeam(): Identifies which team has the most total points.
const winningTeam = () => {
    const game = gameObject();  
    let teamPoints = {};    
    for (const team in game) {
        const teamName = game[team].teamName;
        const players = game[team].players;
        let totalPoints = 0;
        for (const player in players) {
            totalPoints += players[player].points;
        }   
        teamPoints[teamName] = totalPoints;
    }
    let winningTeam = "";
    let maxPoints = 0;
    for (const team in teamPoints) {
        if (teamPoints[team] > maxPoints) {
            maxPoints = teamPoints[team];
            winningTeam = team;
        }
    }
    return winningTeam;
};

//playerWithLongestName(): Finds the player with the longest name.
const playerWithLongestName = () => {
    const game = gameObject();  
    let longestName = "";
    for (const team in game) {
        const players = game[team].players;
        for (const player in players) {
            if (player.length > longestName.length) {
                longestName = player;
            }   
        }
    }
    return longestName;
};


//Super Bonus Challenge
//doesLongNameStealATon(): Returns true if the player with the longest name has the most steals
const doesLongNameStealATon = () => {
    const game = gameObject();
    const longestNamePlayer = playerWithLongestName();
    let maxSteals = 0;
    for (const team in game) {
        const players = game[team].players;
        for (const player in players) {
            const steals = players[player].steals;
            if (steals > maxSteals) {
                maxSteals = steals;
            }
        }
    }
    const longestNameSteals = playerStats(longestNamePlayer).steals;
    return longestNameSteals === maxSteals;
};



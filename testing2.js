// Re-useable functions
function displayInnerHTML (eventId, eventInnerHTML) {
  document.getElementById(eventId).innerHTML = eventInnerHTML
}

// DOM Elements
// Elements by Id's
const firstDice = document.getElementById("first_dice")
const secondDice = document.getElementById("second_dice")
const rollDiceBtn = document.getElementById("roll_dice_btn")
// QuerySelectors
// Playings paths
const allPlayingPaths = document.querySelectorAll(".playing_path")
// All Seeds Container
const allGreenHomeSeeds = document.getElementById("green_seed_container").querySelectorAll(".green")
const allYellowHomeSeeds = document.getElementById("yellow_seed_container").querySelectorAll(".yellow")
const allBlueHomeSeeds = document.getElementById("blue_seed_container").querySelectorAll(".blue")
const allRedHomeSeeds = document.getElementById("red_seed_container").querySelectorAll(".red")
// Boolean value to toggle between each players turn
let playerGreen = false
let playerYellow = false
let playerRed = false
let playerBlue = false
// 
let diceBoolean = true 
// let firstDiceBoolean = false
// let secondDiceBoolean = false
// 
let doubleSixBoolean = false
// A special boolean value to check  if a player move is valid
let checkIfPlayerMoveIsValidBoolean = false
// Each players point to keep track of each single point made in a game
let playerGreenPoint = 0
let playerYellowPoint = 0
let playerRedPoint = 0
let playerBluePoint = 0

/* 
  An array of all posible reusable values for each seed colors
*/
const allSeedCombinations = [ 
  { 
    seedName: "green", seedStatus: "active_seed" , activeSeedClass: "active_green", oppositionSeed1Name: "yellow", oppositionSeed1ActiveClass: "active_yellow", oppositionSeed2Name: "blue", oppositionSeed2ActiveClass: "active_blue", oppositionSeed3Name: "red", oppositionSeed3ActiveClass: "active_red",
    doubleSeedStatus: "double_active_seed" , doubleActiveSeedClass: "double_active_green", doubleOppositionSeed1Name: "yellow", doubleOppositionSeed1ActiveClass: "double_active_yellow", doubleOppositionSeed2Name: "blue", doubleOppositionSeed2ActiveClass: "double_active_blue", doubleOppositionSeed3Name: "red", doubleOppositionSeed3ActiveClass: "double_active_red",            
    tripleSeedStatus: "triple_active_seed" , tripleActiveSeedClass: "triple_active_green", tripleOppositionSeed1Name: "yellow", tripleOppositionSeed1ActiveClass: "triple_active_yellow", tripleOppositionSeed2Name: "blue", tripleOppositionSeed2ActiveClass: "triple_active_blue", tripleOppositionSeed3Name: "red", tripleOppositionSeed3ActiveClass: "triple_active_red",            
    quadrupleSeedStatus: "quadruple_active_seed" , quadrupleActiveSeedClass: "quadruple_active_green", quadrupleOppositionSeed1Name: "yellow", quadrupleOppositionSeed1ActiveClass: "quadruple_active_yellow", quadrupleOppositionSeed2Name: "blue", quadrupleOppositionSeed2ActiveClass: "quadruple_active_blue", quadrupleOppositionSeed3Name: "red", quadrupleOppositionSeed3ActiveClass: "quadruple_active_red"            
  },
  { 
    seedName: "yellow", seedStatus: "active_seed" , activeSeedClass: "active_yellow", oppositionSeed1Name: "blue", oppositionSeed1ActiveClass: "active_blue", oppositionSeed2Name: "red", oppositionSeed2ActiveClass: "active_red", oppositionSeed3Name: "green", oppositionSeed3ActiveClass: "active_green",
    doubleSeedStatus: "double_active_seed" , doubleActiveSeedClass: "double_active_yellow", doubleOppositionSeed1Name: "blue", doubleOppositionSeed1ActiveClass: "double_active_blue", doubleOppositionSeed2Name: "red", doubleOppositionSeed2ActiveClass: "double_active_red", doubleOppositionSeed3Name: "green", doubleOppositionSeed3ActiveClass: "double_active_green",            
    tripleSeedStatus: "triple_active_seed" , tripleActiveSeedClass: "triple_active_yellow", tripleOppositionSeed1Name: "blue", tripleOppositionSeed1ActiveClass: "triple_active_blue", tripleOppositionSeed2Name: "red", tripleOppositionSeed2ActiveClass: "triple_active_red", tripleOppositionSeed3Name: "green", tripleOppositionSeed3ActiveClass: "triple_active_green",            
    quadrupleSeedStatus: "quadruple_active_seed" , quadrupleActiveSeedClass: "quadruple_active_yellow", quadrupleOppositionSeed1Name: "blue", quadrupleOppositionSeed1ActiveClass: "quadruple_active_blue", quadrupleOppositionSeed2Name: "red", quadrupleOppositionSeed2ActiveClass: "quadruple_active_red", quadrupleOppositionSeed3Name: "green", quadrupleOppositionSeed3ActiveClass: "quadruple_active_green"            
  },
  { 
    seedName: "blue", seedStatus: "active_seed" , activeSeedClass: "active_blue", oppositionSeed1Name: "red", oppositionSeed1ActiveClass: "active_red", oppositionSeed2Name: "green", oppositionSeed2ActiveClass: "active_green", oppositionSeed3Name: "yellow", oppositionSeed3ActiveClass: "active_yellow",
    doubleSeedStatus: "double_active_seed" , doubleActiveSeedClass: "double_active_blue", doubleOppositionSeed1Name: "red", doubleOppositionSeed1ActiveClass: "double_active_red", doubleOppositionSeed2Name: "green", doubleOppositionSeed2ActiveClass: "double_active_green", doubleOppositionSeed3Name: "yellow", doubleOppositionSeed3ActiveClass: "double_active_yellow",            
    tripleSeedStatus: "triple_active_seed" , tripleActiveSeedClass: "triple_active_blue", tripleOppositionSeed1Name: "red", tripleOppositionSeed1ActiveClass: "triple_active_red", tripleOppositionSeed2Name: "green", tripleOppositionSeed2ActiveClass: "triple_active_green", tripleOppositionSeed3Name: "yellow", tripleOppositionSeed3ActiveClass: "triple_active_yellow",            
    quadrupleSeedStatus: "quadruple_active_seed" , quadrupleActiveSeedClass: "quadruple_active_blue", quadrupleOppositionSeed1Name: "red", quadrupleOppositionSeed1ActiveClass: "quadruple_active_red", quadrupleOppositionSeed2Name: "green", quadrupleOppositionSeed2ActiveClass: "quadruple_active_green", quadrupleOppositionSeed3Name: "yellow", quadrupleOppositionSeed3ActiveClass: "quadruple_active_yellow"            
  },
  { 
    seedName: "red", seedStatus: "active_seed" , activeSeedClass: "active_red", oppositionSeed1Name: "green", oppositionSeed1ActiveClass: "active_green", oppositionSeed2Name: "yellow", oppositionSeed2ActiveClass: "active_yellow", oppositionSeed3Name: "blue", oppositionSeed3ActiveClass: "active_blue",
    doubleSeedStatus: "double_active_seed" , doubleActiveSeedClass: "double_active_red", doubleOppositionSeed1Name: "green", doubleOppositionSeed1ActiveClass: "double_active_green", doubleOppositionSeed2Name: "yellow", doubleOppositionSeed2ActiveClass: "double_active_yellow", doubleOppositionSeed3Name: "blue", doubleOppositionSeed3ActiveClass: "double_active_blue",            
    tripleSeedStatus: "triple_active_seed" , tripleActiveSeedClass: "triple_active_red", tripleOppositionSeed1Name: "green", tripleOppositionSeed1ActiveClass: "triple_active_green", tripleOppositionSeed2Name: "yellow", tripleOppositionSeed2ActiveClass: "triple_active_yellow", tripleOppositionSeed3Name: "blue", tripleOppositionSeed3ActiveClass: "triple_active_blue",            
    quadrupleSeedStatus: "quadruple_active_seed" , quadrupleActiveSeedClass: "quadruple_active_red", quadrupleOppositionSeed1Name: "green", quadrupleOppositionSeed1ActiveClass: "quadruple_active_green", quadrupleOppositionSeed2Name: "yellow", quadrupleOppositionSeed2ActiveClass: "quadruple_active_yellow", quadrupleOppositionSeed3Name: "blue", quadrupleOppositionSeed3ActiveClass: "quadruple_active_blue"            
  }
]

// Call some basic function when the game loads to start game properly
document.querySelector("body").onload = () => {
  // Select the first player's turn which is by default player green's turn
  selectActiveSeedFunction("green")
  // Update all players point usually set to zero(0) since it's most likey a new game
  updatePlayersPointFunction()
  // Displays the first players turn (player green's turn by default)
  displayInnerHTML("players_turn", "Green's turn")
}

/* 
  A function get game environment ready 
  Remove all seed in the playing path, players home path etc
  Reset players turn 

*/
function startNewGameFunction () { 
  /* 
    A function to remove all active seeds in each playing path
    This function takes in a parameter of playerName which is used to loop through 
    various paths and  
    => All playing paths
    => Player home
      ... to perform some task
  */
  function removeAllActiveSeedInPlayingPathFunction(playerName) {
    // Loops through each playing path  and remove ALL active seed
    allPlayingPaths.forEach(eachPlayingPath => {
      let eachPlayingPathClassList = eachPlayingPath.classList
      eachPlayingPathClassList.remove("active_seed", `active_${playerName}`)
      eachPlayingPathClassList.remove("double_active_seed", `double_active_${playerName}`)
      eachPlayingPathClassList.remove("triple_active_seed", `triple_active_${playerName}`)
      eachPlayingPathClassList.remove("quadruple_active_seed", `quadruple_active_${playerName}`)
    })

    // Loops through each player home path and remove ALL active seed
    let playersHomePath = document.querySelectorAll(`.${playerName}_grid_box`) 
    playersHomePath.forEach(eachHomePath => {
      let eachHomePathClassList = eachHomePath.classList
      eachHomePathClassList.remove("active_seed", `active_${playerName}`)
      eachHomePathClassList.remove("double_active_seed", `double_active_${playerName}`)
      eachHomePathClassList.remove("triple_active_seed", `triple_active_${playerName}`)
      eachHomePathClassList.remove("quadruple_active_seed", `quadruple_active_${playerName}`)
    })

    // Returns all seed to their respective seed container
    let allHomeSeedsInContainer = document.getElementById(`${playerName}_seed_container`).querySelectorAll(`.${playerName}`)
    allHomeSeedsInContainer.forEach(eachHomeSeedInContainer => {
      let eachHomeSeedInContainerClassList = eachHomeSeedInContainer.classList
      eachHomeSeedInContainerClassList.add(`${playerName}_seed`)
    })
  }
  
  /* Calls function to and pass in each seed name to perform basic tasks created in the function above */
  removeAllActiveSeedInPlayingPathFunction("green")
  removeAllActiveSeedInPlayingPathFunction("yellow")
  removeAllActiveSeedInPlayingPathFunction("blue")
  removeAllActiveSeedInPlayingPathFunction("red")
  // Resets doubleSixBoolean value to false
    doubleSixBoolean = false
  // Selects a default active seed (player green by default)
  selectActiveSeedFunction("green")
  // Displays the first players turn (player green's turn by default)
  displayInnerHTML("players_turn", "Green's turn")
  // Resets all players point to zero(0) since it's a new game
  resetAllPlayersPointFunction()
  // Update all players point usually set to zero(0) since it's most likey a new game
  updatePlayersPointFunction()
}
// Call this function to get game environment set for play
// startNewGameFunction()  

/* 
  A function to perform some basic task once a die is click on
*/
function countDiceFunction (countingDice) {
  // Loops through all playing paths in the game environment
  allPlayingPaths.forEach(eachPlayingPath => {
    // Performs some task onclick on each playing path
    eachPlayingPath.onclick = () => { 
      /*
        Checks if the diceBoolean variable is false 
        Before "diceBoolean" can be true, then the clicked "die" mustn't be empty
        i.e If the clicked dice is empty (doesn't have number to be counted), the "diceBoolean" remains
        false, hence no action is performed
      */
      // if (!firstDiceBoolean && !secondDiceBoolean) return
      if (!diceBoolean) return
      /* 
        Get clicked playing path classList,
        convert it to string using ".toString()" method {
          => to return all classLists of that clicked path as a String and not an object,
          => to make all available classes easily accessible using ".includes()" method
        } and 
        assign it to "eachPlayingPathClassList" variable for easier access and a cleaner code
      */ 
      let eachPlayingPathClassList = eachPlayingPath.classList.toString()
      /*
        Checks if the clicked playing path has an active seed and return if it doesn't
      */ 
      if (!eachPlayingPathClassList.includes("active_seed")) return
      // 
      
      /* 
        A function to check for player whose turn is next and perform other task
      */
      function checkPlayersTurnFunction() {
        /* 
          Loops through seed combination array and get some relevant (all are relevant BUT some aren't needed now) usable data like
          seedStatus, doubleSeedStatus, doubleActiveSeedClass etc.
        */
        allSeedCombinations.forEach (eachSeedCombination => {
          /* 
            Get all relevant datas (keys and value stored in each seed respective object) from the array of "allSeedCombinations" and 
            Assign each relevant data to a variable for easy readability
          */
          let seedName = eachSeedCombination.seedName
          let seedStatus = eachSeedCombination.seedStatus
          let activeSeedClass = eachSeedCombination.activeSeedClass
          let doubleSeedStatus = eachSeedCombination.doubleSeedStatus 
          let doubleActiveSeedClass = eachSeedCombination.doubleActiveSeedClass
          let tripleSeedStatus = eachSeedCombination.tripleSeedStatus
          let tripleActiveSeedClass = eachSeedCombination.tripleActiveSeedClass
          let quadrupleSeedStatus = eachSeedCombination.quadrupleSeedStatus
          let quadrupleActiveSeedClass = eachSeedCombination.quadrupleActiveSeedClass
          
          /* 
            Checks if the clicked playing path includes {
              ==>> an active seed
              ==>> double seeds
              ==>> tripple seeds
              ==>> quadruple seeds
            }

            Could have been just this 👇👇👇👇 {
              "if (eachPlayingPathClassList.includes(`${seedStatus} ${activeSeedClass}`))"
              BUT only checks if the clicked playing path has an active single seed
            }
          */
          if (eachPlayingPathClassList.includes(`${seedStatus} ${activeSeedClass}`) || eachPlayingPathClassList.includes(`${doubleSeedStatus} ${doubleActiveSeedClass}`) || eachPlayingPathClassList.includes(`${tripleSeedStatus} ${tripleActiveSeedClass}`) || eachPlayingPathClassList.includes(`${quadrupleSeedStatus} ${quadrupleActiveSeedClass}`)) {  
            /* 
              After checking if the clicked path isn't empty (at least an active seed)
              Get the ID of the clicked path since it determines the next move of the clicked seed

              How it works { 
                STEP 1 ==>> Get the "ID of the CLICKED PATH" and "the current value of the CLICKED DIE", then {
                  ==>> pass both as a floating number,
                  ==>> perform basic arithmetics like "adding both numbers together" to 
                  ==>> determine the next position of the clicked seed 
                
                  ==>> Assign the result of their addition to a variable "nextSeedPositionId"
                }

                STEP 2 ==>> Since all playing paths (home paths not inclluded) aren't more than 52 {
                  ==>> Check if the next position ID is "MORE" than 52, perform a "mod" arithmetic i.e {
                    subtract 52 from it (next position ID) and return the remainder so 
                    the player can keep moving (i.e move to the remainder's position)
                  }
                  ==>> Check if the next position ID is lesser than 52 and move the player to that position
                }

                STEP 3 ==>> Get the result of the addition and modulus performed in "step 2" above and assign it to a new variable "nextSeedPositionId"
              } 

            */ 
            // STEP 1
            let nextSeedPositionId = parseFloat(eachPlayingPath.id) + parseFloat(countingDice)
            // STEP 2
            nextSeedPositionId < 52 || nextSeedPositionId > 52 ? nextSeedPositionId %= 52 : nextSeedPositionId = 52 
            // STEP 3
            let nextSeedPositionGridBox = document.getElementById(nextSeedPositionId)
           
            /* 
              ==>> Call this function to branch home if player has successfully completed it's race
              ==>> Pass in neccessary parameters to perform the task assigned to it in the function
            */
            branchHomeFunction(eachPlayingPath, nextSeedPositionGridBox)
            /* 
              ==>> Checks if a point is won and count score 
              ==>> Pass in neccessary parameters to make it function 
            */
            /* 
              ==>> Call this function to check if the current player movement won a point 
              ==>> if point is won, a point is added to the player's point
              ==>> if no point is won, function change players position
            */
            checkIfPointIsWonFunction (eachPlayingPath, nextSeedPositionGridBox)
            console.log("test me 2")
            console.log(checkIfPlayerMoveIsValidBoolean)
            /* 
              ==>> After player's point has been counted (if a point has been won for the previous movement)
              ==>> This function is called to update and display those points to the gamers
            */
            updatePlayersPointFunction() 
            /* 
              ==>> Once Point is won, counted and updated
              ==>> This function checks if there's a winner in the game. How? {
                ==>> Checks if all except one player's point is less than 4
                ==>> Calls a game lost function for the losing player
              }
            */
            checkWinnersAndEndGameFunction()
          }
        }) 
        console.log("test me 32")
        console.log(checkIfPlayerMoveIsValidBoolean)

        // Checks if player mov is a valid before the clicked dice can be counted
        if (!checkIfPlayerMoveIsValidBoolean) return
        /* 
          ==>> Once a seed point has been clicked {
            ==>> toggle the "diceBoolean" value to "false" so as not to count a seed when clicked 
          }
        */
        diceBoolean = false
        // firstDiceBoolean = false
        // secondDiceBoolean = false 
        /* 
          sets the value of this boolean to it's default state to make sure a player move is valid before counting any dice
        */
        checkIfPlayerMoveIsValidBoolean = false
        /* 
          checks for a double six value. How? {
            ==>> First check if both first and second dice value are equal {
              STEP 1 ==>> then, check if the clicked DIE is equal to six(6) meaning {
                if both dice are equal and one of the dice is a six(6), definitely, it is a double six {
                  ==>> set the doubleSixBoolean value to true
                    ...so that the current player can play again after counting both six (rule of the game)
                  ==>> set the first DIE value to empty (even if the countingDice is the second DIE value)
                    ...The dice counted doesn't mean anything again "since both dice values are the same"
                  ==>> return 
                }
              } 

              STEP 2 ==>> else, check if the clicked DIE is "NOT EQUAL" to six(6) meaning {
                since both dice are equal and none of them is a SIX(6), {
                  ==>> set the doubleSixBoolean value to false (OPTIONAL, since it by default has a false value)
                    ...so that the current player CAN'T play again since it is not a double SIX (rule of the game)
                  ==>> set the first DIE value to empty (even if the countingDice is the second DIE value)
                    ...The dice counted doesn't mean anything again "since both dice values are the same"
                  ==>> return 
                }
              } 
            }
          }
        */
        if (countingDice === firstDice.value && countingDice === secondDice.value ) {
          // Shortcut code for the if else statement below
          // return countingDice == 6 ? ( doubleSixBoolean = true, firstDice.value = "" ) : firstDice.value = ""
          // STEP 1
          if (countingDice == 6) {
            doubleSixBoolean = true
            return firstDice.value = ""
          } else { 
            // STEP 2
            doubleSixBoolean = false
            return firstDice.value = ""
          } 
        }
        console.log("never fdjkfkdf")
        /* 
          if the condition above isn't met, then each dice has two different value 
          STEP 1 ==>> Check if the current countingDice value is equal to the firstDice value and set the firstDice value to empty after counting
          STEP 2 ==>> Check if the current countingDice value is equal to the secondDice value and set the secondDice value to empty after counting
          STEP 3 ==>>  After counting a die {
            ==>> if any of both dice has value, return so as to count the other die value
            ==>> if all dice has been counted, move to the next phase of the function
          }
        */
        // STEP 1
        if (countingDice === firstDice.value)  firstDice.value = "" 
        // STEP 2
        if (countingDice === secondDice.value)  secondDice.value = "" 
        // STEP 3
        if (firstDice.value || secondDice.value) return
      
        /* 
          ==>> A function to check if the next player whose turn is next has a seed outside {
            if yes, then player sould be the next to play
            if no, s function to {
              ==>> check if player has a seed in the home path {
                ==>> if yes, then {
                  ==>> check if any of the currentDice value can win a point in the home path
                  ==>> check if the seed in the home remains one then check if any of the dice value can move the seed forward a bit 
                }
              }

              ==>> checks if player has at least a seed in the home container {
                if yes, check for if any of the dice has a six to start a new journey for the home seed
                if no and no seed remains on board (all four points are completed) {
                  skip players turn and move to the next player
                }
              }
            }
          }
        */
        checkIfSeedExist()
        
        /* 
          Call thiis fucntion to check if there is a double six value to detect whose
          player's turn is next and update the players's  turn dashboard
        */
        checkForDoubleSix()
      }
      
      /* 
        Check if a player boolean value is true and a clicked path includes at least one seed of that active 
        player boolean, then return function "checkPlayersTurnFunction" andd perform neccessary actions needed
        to be performed that are defined in the function body
      */
      if (playerGreen && eachPlayingPathClassList.includes("active_seed active_green") || eachPlayingPathClassList.includes("double_active_seed double_active_green") || eachPlayingPathClassList.includes("triple_active_seed triple_active_green") || eachPlayingPathClassList.includes("quadruple_active_seed quadruple_active_green")) return checkPlayersTurnFunction()
      if (playerYellow && eachPlayingPathClassList.includes("active_seed active_yellow") || eachPlayingPathClassList.includes("double_active_seed double_active_yellow") || eachPlayingPathClassList.includes("triple_active_seed triple_active_yellow") || eachPlayingPathClassList.includes("quadruple_active_seed quadruple_active_yellow")) return checkPlayersTurnFunction()
      if (playerBlue && eachPlayingPathClassList.includes("active_seed active_blue") || eachPlayingPathClassList.includes("double_active_seed double_active_blue") || eachPlayingPathClassList.includes("triple_active_seed triple_active_blue") || eachPlayingPathClassList.includes("quadruple_active_seed quadruple_active_blue")) return checkPlayersTurnFunction()
      if (playerRed && eachPlayingPathClassList.includes("active_seed active_red") || eachPlayingPathClassList.includes("double_active_seed double_active_red") || eachPlayingPathClassList.includes("triple_active_seed triple_active_red") || eachPlayingPathClassList.includes("quadruple_active_seed quadruple_active_red")) return checkPlayersTurnFunction()
    } 
  })   
} 

/* 
  A function to start a seeds new journey once a dice is rolled 
*/
function newJourneyFunction (toCountDice) {
  /* 
    Declare this variable to check if a seed is available 
  */
  let checkUnavailableOppositionHomeSeedBoolean = true
  /* 
    Loops through seed combination array and get some relevant (all are relevant BUT some aren't needed now) usable data like
    seedStatus, doubleSeedStatus, doubleActiveSeedClass etc.
  */
  allSeedCombinations.forEach(eachSeedCombination => {
    let seedName = eachSeedCombination.seedName
    let activeSeedClass = eachSeedCombination.activeSeedClass
    let seedStatus = eachSeedCombination.seedStatus
    let oppositionSeed1Name = eachSeedCombination.oppositionSeed1Name
    let oppositionSeed1ActiveClass = eachSeedCombination.oppositionSeed1ActiveClass
    let oppositionSeed2Name = eachSeedCombination.oppositionSeed2Name
    let oppositionSeed2ActiveClass = eachSeedCombination.oppositionSeed2ActiveClass
    let oppositionSeed3Name = eachSeedCombination.oppositionSeed3Name
    let oppositionSeed3ActiveClass = eachSeedCombination.oppositionSeed3ActiveClass 
    let doubleSeedStatus = eachSeedCombination.doubleSeedStatus
    let doubleActiveSeedClass = eachSeedCombination.doubleActiveSeedClass
    let doubleOppositionSeed1Name = eachSeedCombination.doubleOppositionSeed1Name
    let doubleOppositionSeed1ActiveClass = eachSeedCombination.doubleOppositionSeed1ActiveClass
    let doubleOppositionSeed2Name = eachSeedCombination.doubleOppositionSeed2Name
    let doubleOppositionSeed2ActiveClass = eachSeedCombination.doubleOppositionSeed2ActiveClass
    let doubleOppositionSeed3Name = eachSeedCombination.doubleOppositionSeed3Name
    let doubleOppositionSeed3ActiveClass = eachSeedCombination.doubleOppositionSeed3ActiveClass 
    let tripleSeedStatus = eachSeedCombination.tripleSeedStatus
    let tripleActiveSeedClass = eachSeedCombination.tripleActiveSeedClass
    let tripleOppositionSeed1Name = eachSeedCombination.tripleOppositionSeed1Name
    let tripleOppositionSeed1ActiveClass = eachSeedCombination.tripleOppositionSeed1ActiveClass
    let tripleOppositionSeed2Name = eachSeedCombination.tripleOppositionSeed2Name
    let tripleOppositionSeed2ActiveClass = eachSeedCombination.tripleOppositionSeed2ActiveClass
    let tripleOppositionSeed3Name = eachSeedCombination.tripleOppositionSeed3Name
    let tripleOppositionSeed3ActiveClass = eachSeedCombination.tripleOppositionSeed3ActiveClass 
    let quadrupleSeedStatus = eachSeedCombination.quadrupleSeedStatus
    let quadrupleActiveSeedClass = eachSeedCombination.quadrupleActiveSeedClass
    let quadrupleOppositionSeed1Name = eachSeedCombination.quadrupleOppositionSeed1Name
    let quadrupleOppositionSeed1ActiveClass = eachSeedCombination.quadrupleOppositionSeed1ActiveClass
    let quadrupleOppositionSeed2Name = eachSeedCombination.quadrupleOppositionSeed2Name
    let quadrupleOppositionSeed2ActiveClass = eachSeedCombination.quadrupleOppositionSeed2ActiveClass
    let quadrupleOppositionSeed3Name = eachSeedCombination.quadrupleOppositionSeed3Name
    let quadrupleOppositionSeed3ActiveClass = eachSeedCombination.quadrupleOppositionSeed3ActiveClass 
       
    function startMeFunction (playerName, playerNodeId) {
      if (playerName == seedName) {
        let seedContainer = document.getElementById(`${playerName}_seed_container`)
        let allSeedsInContainer = seedContainer.querySelectorAll(`.${playerName}`)
        allSeedsInContainer.forEach(eachSeedInContainer => {
          eachSeedInContainer.onclick = () => {
            let playerNodeClassList = document.getElementById(playerNodeId).classList
            let eachSeedInContainerClassList = eachSeedInContainer.classList
            let eachHomeSeedClass = `${playerName}_seed`
            checkUnavailableOppositionHomeSeedBoolean = true

            // if (!firstDiceBoolean && !secondDiceBoolean) return console.log(899)
            if (!diceBoolean) return console.log(899)
            if (toCountDice != 6) return console.log(6999)

            function checkDoubleSixFunctiion() {
              if (toCountDice === firstDice.value && toCountDice === secondDice.value ) {
                if (toCountDice == 6) {
                  doubleSixBoolean = true
                  return firstDice.value = ""
                } else { 
                  return firstDice.value = ""
                } 
              } else {
                 if (toCountDice === firstDice.value)  firstDice.value = "" 
                 if (toCountDice === secondDice.value)  secondDice.value = "" 
              }
            }
            
            // 
            if (eachSeedInContainerClassList.toString().includes(eachHomeSeedClass)) {
              eachSeedInContainerClassList.remove(eachHomeSeedClass)
              console.log(eachHomeSeedClass)
            if (playerNodeClassList.toString().includes(`${oppositionSeed1ActiveClass}`) || playerNodeClassList.toString().includes(`${oppositionSeed2ActiveClass}`) || playerNodeClassList.toString().includes(`${oppositionSeed3ActiveClass}`)) { 
              if (playerName == "green") playerGreenPoint += 1
              if (playerName == "yellow") playerYellowPoint += 1
              if (playerName == "blue") playerBluePoint += 1
              if (playerName == "red") playerRedPoint += 1
            }
            updatePlayersPointFunction()
            checkWinnersAndEndGameFunction()
            checkDoubleSixFunctiion()
            diceBoolean = false
            // firstDiceBoolean = false
            // secondDiceBoolean = false
            selectActiveSeedFunction (playerName)
              
           if (doubleSixBoolean) checkForDoubleSix()
              
           if (playerNodeClassList.toString().includes(`${oppositionSeed1ActiveClass}`)) { 
         
             if (playerNodeClassList.toString().includes(quadrupleSeedStatus , quadrupleOppositionSeed1ActiveClass)) { 
               playerNodeClassList.remove(quadrupleSeedStatus , quadrupleOppositionSeed1ActiveClass)
               playerNodeClassList.add(tripleSeedStatus , tripleOppositionSeed1ActiveClass)
             } else if (playerNodeClassList.toString().includes(tripleSeedStatus , tripleOppositionSeed1ActiveClass)) { 
               playerNodeClassList.remove(tripleSeedStatus , tripleOppositionSeed1ActiveClass)
               playerNodeClassList.add(doubleSeedStatus , doubleOppositionSeed1ActiveClass)
             } else if (playerNodeClassList.toString().includes(doubleSeedStatus , doubleOppositionSeed1ActiveClass)) { 
               playerNodeClassList.remove(doubleSeedStatus , doubleOppositionSeed1ActiveClass)
               playerNodeClassList.add(seedStatus , oppositionSeed1ActiveClass)
             } else { 
               playerNodeClassList.remove(seedStatus , oppositionSeed1ActiveClass)
             } 

             let homeSeedContainer = `${oppositionSeed1Name}_seed_container`
             let allHomeSeeds = document.getElementById(homeSeedContainer).querySelectorAll(`.${oppositionSeed1Name}`)
             return allHomeSeeds.forEach(eachAvailableSeed => {
               if (!eachAvailableSeed.classList.toString().includes(`${oppositionSeed1Name}_seed`) && checkUnavailableOppositionHomeSeedBoolean) {
                 checkUnavailableOppositionHomeSeedBoolean = false
                 return eachAvailableSeed.classList.add(`${oppositionSeed1Name}_seed`)
               }
             })
           }
           
           if (playerNodeClassList.toString().includes(`${oppositionSeed2ActiveClass}`)) { 
             //  || playerNodeClassList.toString().includes(`${quadrupleOppositionSeed2ActiveClass}`)
             
             if (playerNodeClassList.toString().includes(quadrupleSeedStatus , quadrupleOppositionSeed2ActiveClass)) { 
              playerNodeClassList.remove(quadrupleSeedStatus , quadrupleOppositionSeed2ActiveClass)
               playerNodeClassList.add(tripleSeedStatus , tripleOppositionSeed2ActiveClass)
             } else if (playerNodeClassList.toString().includes(tripleSeedStatus , tripleOppositionSeed2ActiveClass)) { 
               playerNodeClassList.remove(tripleSeedStatus , tripleOppositionSeed2ActiveClass)
               playerNodeClassList.add(doubleSeedStatus , doubleOppositionSeed2ActiveClass)
             } else if (playerNodeClassList.toString().includes(doubleSeedStatus , doubleOppositionSeed2ActiveClass)) { 
               playerNodeClassList.remove(doubleSeedStatus , doubleOppositionSeed2ActiveClass)
               playerNodeClassList.add(seedStatus , oppositionSeed2ActiveClass)
             } else { 
               playerNodeClassList.remove(seedStatus , oppositionSeed2ActiveClass)
             } 

             let homeSeedContainer = `${oppositionSeed2Name}_seed_container`
             let allHomeSeeds = document.getElementById(homeSeedContainer).querySelectorAll(`.${oppositionSeed2Name}`)
             return allHomeSeeds.forEach(eachAvailableSeed => {
               if (!eachAvailableSeed.classList.toString().includes(`${oppositionSeed2Name}_seed`) && checkUnavailableOppositionHomeSeedBoolean) {
                 checkUnavailableOppositionHomeSeedBoolean = false
                 return eachAvailableSeed.classList.add(`${oppositionSeed2Name}_seed`)
               }
             })
           }
        
           if (playerNodeClassList.toString().includes(`${oppositionSeed3ActiveClass}`)) { 
             //  || playerNodeClassList.toString().includes(`${quadrupleOppositionSeed3ActiveClass}`)
             
              if (playerNodeClassList.toString().includes(quadrupleSeedStatus , quadrupleOppositionSeed3ActiveClass)) { 
                playerNodeClassList.remove(quadrupleSeedStatus , quadrupleOppositionSeed3ActiveClass)
                playerNodeClassList.add(tripleSeedStatus , tripleOppositionSeed3ActiveClass)
              } else if (playerNodeClassList.toString().includes(tripleSeedStatus , tripleOppositionSeed3ActiveClass)) { 
                playerNodeClassList.remove(tripleSeedStatus , tripleOppositionSeed3ActiveClass)
                playerNodeClassList.add(doubleSeedStatus , doubleOppositionSeed3ActiveClass)
              } else if (playerNodeClassList.toString().includes(doubleSeedStatus , doubleOppositionSeed3ActiveClass)) { 
                playerNodeClassList.remove(doubleSeedStatus , doubleOppositionSeed3ActiveClass)
                playerNodeClassList.add(seedStatus , oppositionSeed3ActiveClass)
              } else { 
                playerNodeClassList.remove(seedStatus , oppositionSeed3ActiveClass)
              } 

              let homeSeedContainer = `${oppositionSeed3Name}_seed_container`
              let allHomeSeeds = document.getElementById(homeSeedContainer).querySelectorAll(`.${oppositionSeed3Name}`)
              return allHomeSeeds.forEach(eachAvailableSeed => {
                if (!eachAvailableSeed.classList.toString().includes(`${oppositionSeed3Name}_seed`) && checkUnavailableOppositionHomeSeedBoolean) {
                  checkUnavailableOppositionHomeSeedBoolean = false
                  return eachAvailableSeed.classList.add(`${oppositionSeed3Name}_seed`)
                }
              })
            }
        /**/
              if (playerNodeClassList.toString().includes(`${seedStatus} active_${playerName}`)) {
                 playerNodeClassList.remove(seedStatus , `active_${playerName}`)
                 playerNodeClassList.add(doubleSeedStatus , `double_active_${playerName}`)
                return console.log("testing geddhrrm")//firstDice.value = ""
              } else if (playerNodeClassList.toString().includes(`${doubleSeedStatus} double_active_${playerName}`)) {
                 playerNodeClassList.remove(doubleSeedStatus , `double_active_${playerName}`)
                 playerNodeClassList.add(tripleSeedStatus , `triple_active_${playerName}`)
                return console.log("testing rehj;awi")//firstDice.value = ""
              } if (playerNodeClassList.toString().includes(`${tripleSeedStatus} triple_active_${playerName}`)) {
                 playerNodeClassList.remove(tripleSeedStatus , `triple_active_${playerName}`)
                 playerNodeClassList.add(quadrupleSeedStatus , `quadruple_active_${playerName}`)
                return console.log("testing opweyweik")// firstDice.value = ""
              } else {
                 playerNodeClassList.add(seedStatus , `active_${playerName}`)
                return console.log("testing dnepriertoo")// firstDice.value = ""
              }
            /**/
            }
          }
        })
      }
    } 
    // checkForDoubleSix
    // selectActiveSeedFunction (playerName)
            /** /
              if (toCountDice === firstDice.value && toCountDice === secondDice.value ) {
                if (toCountDice == 6) {
                  doubleSixBoolean = true
                  return firstDice.value = ""
                } else { 
                  return firstDice.value = ""
                } 
              } else {
                 if (toCountDice === firstDice.value)  firstDice.value = "" 
                 if (toCountDice === secondDice.value)  secondDice.value = "" 
              }
            /**/
    try {   
      /** /
      console.log(playerGreen)
      console.log(playerYellow)
      // console.log(playerBlue)
      /**/
      if (playerGreen) return startMeFunction("green", 43)
      if (playerYellow) return startMeFunction("yellow", 4)
      if (playerBlue) return startMeFunction("blue", 17)
      if (playerRed) return startMeFunction("red", 30)
    } catch (err) { console.log(err) }
    /**/               
  })
}  
// try { 
  // Function below (might not be useful) is called with the appropiate parameter passed in when any of the dice is clicked on
  // newJourneyFunction(firstDice.value) 
// } catch (e) { console.log(e)    }
/**/
// Roll dice
function rollDiceFunction () {
  /* 
      STEP 1 ==>> Generate two different random numbers for the ludo dice
             ==>> Assign each random numbers to a variable "randomNumberOne" and "randomNumberTwo"
      STEP 2 ==> Before roling dice, check if any of the two dice has a value {
        if yes (any of the any of the dice has a value) {
          return and don't roll new dice
          ... this is to confirm that a player has successfully counted his/her dice before another player rolls a dice
        }
        if no (both dice values are empty) {
          continue to the next phase of the function
        }
      }
      STEP 3 ==>> Display the random number to the dice dashboard {
        ==>> assign the first random number as the firstDice value 
        ==>> assign the second random number as the secondDice value 
      }
  */
  //  STEP 1
  let randomNumberOne = Math.floor((Math.random()  * 6) + 1)
  let randomNumberTwo = Math.floor((Math.random()  * 6) + 1)
  //  STEP 2
  // if (firstDice.value != "" || secondDice.value != "" ) return
  //  STEP 3
  firstDice.value = randomNumberOne
  secondDice.value = randomNumberTwo
}
// Select active seed
function selectActiveSeedFunction (activeSeed) {
  playerGreen = false
  playerYellow = false
  playerRed = false
  playerBlue = false
  
  if(activeSeed === "green") return playerGreen = true
  if(activeSeed === "yellow") return playerYellow = true
  if(activeSeed === "red") return playerRed = true
  if(activeSeed === "blue") return playerBlue = true
}

// Check for a double six dice value
function checkForDoubleSix () {
  /**/
  checkForDoubleSixArray = [
    { playerName: "green", playersTurnInnerHTML: "Green's turn", playerStatus: playerGreen, nextPlayerName: "yellow", nextPlayersTurnInnerHTML: "Yellow's turn"},
    { playerName: "yellow", playersTurnInnerHTML: "Yellow's turn", playerStatus: playerYellow, nextPlayerName: "blue", nextPlayersTurnInnerHTML: "Blue's turn"},
    { playerName: "blue", playersTurnInnerHTML: "Blue's turn", playerStatus: playerBlue, nextPlayerName: "red", nextPlayersTurnInnerHTML: "Red's turn"},
    { playerName: "red", playersTurnInnerHTML: "Red's turn", playerStatus: playerRed, nextPlayerName: "green", nextPlayersTurnInnerHTML: "Green's turn"}
  ]
  checkForDoubleSixArray.forEach (eachChangePlayerTurnObject => {
    let playerName = eachChangePlayerTurnObject.playerName
    let playersTurnInnerHTML = eachChangePlayerTurnObject.playersTurnInnerHTML
    let playerStatus = eachChangePlayerTurnObject.playerStatus
    let nextPlayerName = eachChangePlayerTurnObject.nextPlayerName
    let nextPlayersTurnInnerHTML = eachChangePlayerTurnObject.nextPlayersTurnInnerHTML
  
    if (playerStatus && doubleSixBoolean) {
      selectActiveSeedFunction(playerName)
      doubleSixBoolean = false
      return displayInnerHTML("players_turn", playersTurnInnerHTML)
    } else if (playerStatus && !doubleSixBoolean) {
      selectActiveSeedFunction(nextPlayerName)
      return displayInnerHTML("players_turn", nextPlayersTurnInnerHTML)
    }
  })
}
// 
/**/
function checkWinnersAndEndGameFunction () {
  if (playerGreenPoint === 4 && playerYellowPoint === 4 && playerBluePoint === 4 && playerRedPoint < 4) console.log("Red Lost")
  if (playerGreenPoint === 4 && playerYellowPoint === 4 && playerBluePoint < 4 && playerRedPoint === 4) console.log("Blue Lost")
  if (playerGreenPoint === 4 && playerYellowPoint < 4 && playerBluePoint === 4 && playerRedPoint === 4) console.log("Yellow Lost")
  if (playerGreenPoint < 4 && playerYellowPoint === 4 && playerBluePoint === 4 && playerRedPoint === 4) console.log("Green Lost")

  // This function will perform a simple task for player that lost the game 
  // 
  // checkForPlayerWhoLostTheGame()
  // startNewGameFunction()
}

/**/
function checkForPlayerWhoLostTheGame () {
  // A function to check if a player lost the game if 
  // the players point is less than 4 point and others are more than
}

//  
function checkIfSeedExist () {
  // A function to check if seed exist and skip turn
  console.log("Testing if seed exist")
}
// checkIfSeedExist()

// 
/**/
function countSeedInHomePathFunction (toCountDice) {

  function startCountingFunction (playerName) {
    let eachPlayerHomePath = document.querySelectorAll(`.${playerName}_home_path`)
    eachPlayerHomePath.forEach(eachGridBoxInHomePath => {
      eachGridBoxInHomePath.onclick = () => { 
        let eachGridBoxInHomePathClassList = eachGridBoxInHomePath.classList
        let eachGridBoxInHomePathId = eachGridBoxInHomePath.id
        let eachGridBoxInHomePathIdLastIndex = eachGridBoxInHomePathId.length - 1
        let eachGridBoxInHomePathIdNumber = parseFloat(eachGridBoxInHomePathId[eachGridBoxInHomePathIdLastIndex])
        toCountDice = parseFloat(toCountDice)
        let nextGridBoxInHomePathIdNumber = eachGridBoxInHomePathIdNumber + toCountDice
        
        // 
        function removeClassListFromCurrentHomePathPositionFunction (currentHomePathPositionClassList) {
          if (currentHomePathPositionClassList.toString().includes(`quadruple_active_seed quadruple_active_${playerName}`)) {
            currentHomePathPositionClassList.remove("quadruple_active_seed" , `quadruple_active_${playerName}`)
            return currentHomePathPositionClassList.add("triple_active_seed" , `triple_active_${playerName}`)
          } else if (currentHomePathPositionClassList.toString().includes(`triple_active_seed triple_active_${playerName}`)) {
             currentHomePathPositionClassList.remove("triple_active_seed" , `triple_active_${playerName}`)
             return currentHomePathPositionClassList.add("double_active_seed" , `double_active_${playerName}`)
          } else if (currentHomePathPositionClassList.toString().includes(`double_active_seed double_active_${playerName}`)) {
             currentHomePathPositionClassList.remove("double_active_seed" , `double_active_${playerName}`)
             return currentHomePathPositionClassList.add("active_seed" , `active_${playerName}`)
          } else { 
             return currentHomePathPositionClassList.remove("active_seed" , `active_${playerName}`)
          }
        }
        
        function addNewClassListToNextHomePathPositionFunction (nextHomePathPositionClassList) {
          if (nextHomePathPositionClassList.toString().includes(`active_seed active_${playerName}`)) {
            nextHomePathPositionClassList.remove("active_seed" , `active_${playerName}`)
            return nextHomePathPositionClassList.add("double_active_seed" , `double_active_${playerName}`)
          } else if (nextHomePathPositionClassList.toString().includes(`double_active_seed double_active_${playerName}`)) {
             nextHomePathPositionClassList.remove("double_active_seed" , `double_active_${playerName}`)
             return nextHomePathPositionClassList.add("triple_active_seed" , `triple_active_${playerName}`)
          } else if (nextHomePathPositionClassList.toString().includes(`triple_active_seed triple_active_${playerName}`)) {
             nextHomePathPositionClassList.remove("triple_active_seed" , `triple_active_${playerName}`)
             return nextHomePathPositionClassList.add("quadruple_active_seed" , `quadruple_active_${playerName}`)
          } else { 
             return nextHomePathPositionClassList.add("active_seed" , `active_${playerName}`)
          }
        }
          
        if (eachGridBoxInHomePathClassList.toString().includes(`active_seed active_${playerName}`) || eachGridBoxInHomePathClassList.toString().includes(`double_active_seed double_active_${playerName}`) || eachGridBoxInHomePathClassList.toString().includes(`triple_active_seed triple_active_${playerName}`) || eachGridBoxInHomePathClassList.toString().includes(`quadruple_active_seed quadruple_active_${playerName}`)) {
          
          if (nextGridBoxInHomePathIdNumber > 6) return console.log("Can't make this move")
          
          if (nextGridBoxInHomePathIdNumber === 6) {
            removeClassListFromCurrentHomePathPositionFunction (eachGridBoxInHomePathClassList)
            if (playerName == "green") playerGreenPoint += 1
            if (playerName == "yellow") playerYellowPoint += 1
            if (playerName == "blue") playerBluePoint += 1
            if (playerName == "red") playerRedPoint += 1
            
            updatePlayersPointFunction()
            checkWinnersAndEndGameFunction()
          }
          
          if (nextGridBoxInHomePathIdNumber < 6) {
            let nextGridBoxInHomePathId = document.getElementById(`${playerName}_home_${nextGridBoxInHomePathIdNumber}`)
            let nextGridBoxInHomePathClassList = nextGridBoxInHomePathId.classList
            removeClassListFromCurrentHomePathPositionFunction (eachGridBoxInHomePathClassList)
            return addNewClassListToNextHomePathPositionFunction (nextGridBoxInHomePathClassList)
          }
        }
      } 
    })
  }
    if (playerGreen) return startCountingFunction("green")
    if (playerYellow) return startCountingFunction("yellow")
    if (playerBlue) return startCountingFunction("blue")
    if (playerRed) return startCountingFunction("red")
}
try {
  countSeedInHomePathFunction(firstDice.value)
} catch (err) { console.log(err) }
/**/

// Branch Home
function branchHomeFunction (seedCurrentPosition, seedNextPosition) {
  let seedNextPositionId = seedNextPosition.id 
  let seedCurrentPositionId = seedCurrentPosition.id
  
  // Declare some variables for vital usage
  let checkUnavailableOppositionHomeSeedBoolean = true
  let reduceCurrentPositionSeedBoolean = true
  // let reduceCurrentPositionSeedBoolean = true
  // Get the next position and current position classlist from the parameter passed in when the function is called 
  let seedCurrentPositionClassList = seedCurrentPosition.classList
  let seedNextPositionClassList = seedNextPosition.classList 

  function checkIfMoveIsValidAndReduceTheCountingSeedByOneIfYesFunction () {
    if (playerGreen) {
      console.log("testing phase green")
      if (seedCurrentPositionClassList.toString().includes("quadruple_active_seed quadruple_active_green") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("quadruple_active_seed" , "quadruple_active_green")
        seedCurrentPositionClassList.add("triple_active_seed", "triple_active_green")
      }
      if (seedCurrentPositionClassList.toString().includes("triple_active_seed triple_active_green") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("triple_active_seed" , "triple_active_green")
        seedCurrentPositionClassList.add("double_active_seed", "double_active_green")
      }
      if (seedCurrentPositionClassList.toString().includes("double_active_seed double_active_green") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("double_active_seed" , "double_active_green")
        seedCurrentPositionClassList.add("active_seed" , "active_green")
      }
      if (seedCurrentPositionClassList.toString().includes("active_seed active_green") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("active_seed" , "active_green")
      }
    }
    
    if (playerYellow) {
      console.log("testing phase yellow")
      if (seedCurrentPositionClassList.toString().includes("quadruple_active_seed quadruple_active_yellow") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("quadruple_active_seed" , "quadruple_active_yellow")
        seedCurrentPositionClassList.add("triple_active_seed" , "triple_active_yellow")
      }
      if (seedCurrentPositionClassList.toString().includes("triple_active_seed triple_active_yellow") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("triple_active_seed" , "triple_active_yellow")
        seedCurrentPositionClassList.add("double_active_seed" , "double_active_yellow")
      }
      if (seedCurrentPositionClassList.toString().includes("double_active_seed double_active_yellow") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("double_active_seed" , "double_active_yellow")
        seedCurrentPositionClassList.add("active_seed" , "active_yellow")
      }
      if (seedCurrentPositionClassList.toString().includes("active_seed active_yellow") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("active_seed" , "active_yellow")
      }
    }

    if (playerBlue) {
      console.log("testing phase blue")
      if (seedCurrentPositionClassList.toString().includes("quadruple_active_seed quadruple_active_blue") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("quadruple_active_seed" , "quadruple_active_blue")
        seedCurrentPositionClassList.add("triple_active_seed" , "triple_active_blue")
      }
      if (seedCurrentPositionClassList.toString().includes("triple_active_seed triple_active_blue") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("triple_active_seed" , "triple_active_blue")
        seedCurrentPositionClassList.add("double_active_seed" , "double_active_blue")
      }
      if (seedCurrentPositionClassList.toString().includes("double_active_seed double_active_blue") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("double_active_seed" , "double_active_blue")
        seedCurrentPositionClassList.add("active_seed" , "active_blue")
      }
      if (seedCurrentPositionClassList.toString().includes("active_seed active_blue") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("active_seed" , "active_blue")
      }
    }
    
    if (playerRed) {
      console.log("testing phase red")
      if (seedCurrentPositionClassList.toString().includes("quadruple_active_seed quadruple_active_red") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("quadruple_active_seed" , "quadruple_active_red")
        seedCurrentPositionClassList.add("triple_active_seed" , "triple_active_red")
      }
      if (seedCurrentPositionClassList.toString().includes("triple_active_seed triple_active_red") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("triple_active_seed" , "triple_active_red")
        seedCurrentPositionClassList.add("double_active_seed" , "double_active_red")
      }
      if (seedCurrentPositionClassList.toString().includes("double_active_seed double_active_red") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("double_active_seed" , "double_active_red")
        seedCurrentPositionClassList.add("active_seed" , "active_red")
      }
      if (seedCurrentPositionClassList.toString().includes("active_seed active_red") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("active_seed" , "active_red")
      }
    }
  }
  // checkIfMoveIsValidAndReduceTheCountingSeedByOneIfYesFunction()
   
  const allCompleteRunSeedObjects = [
    { playerName: "green", playerBoolean: playerGreen, minValue: 36, maxValue: 41 },
    { playerName: "yellow", playerBoolean: playerYellow, minValue: 48, maxValue: 52, minValue2: 0, maxValue2: 2 },
    { playerName: "blue", playerBoolean: playerBlue, minValue: 10, maxValue: 15 },
    { playerName: "red", playerBoolean: playerRed, minValue: 23, maxValue: 28 }
  ]
   // Check if run is complete and return
  function completeRunFunction () {
    /* 
      Loops through allCompleteRunSeedObjects array of objects, get all info in the array,
      assign each object value to a variable for easy accessibility
    */ 
    allCompleteRunSeedObjects.forEach(eachCompleteRunSeedObject => { 
      let playerName = eachCompleteRunSeedObject.playerName
      let playerBoolean = eachCompleteRunSeedObject.playerBoolean
      let minValue = eachCompleteRunSeedObject.minValue
      let maxValue = eachCompleteRunSeedObject.maxValue
      let minValue2 = eachCompleteRunSeedObject.minValue2
      let maxValue2 = eachCompleteRunSeedObject.maxValue2
      
      // Create a function for basic home seed path
      function addNewClassListToNextHomePathPositionFunction (nextHomePathPositionClassList) {
        console.log("a function to every seed branching home");
        if (nextHomePathPositionClassList.toString().includes(`active_seed active_${playerName}`)) {
          nextHomePathPositionClassList.remove("active_seed" , `active_${playerName}`)
          return nextHomePathPositionClassList.add("double_active_seed" , `double_active_${playerName}`)
        } else if (nextHomePathPositionClassList.toString().includes(`double_active_seed double_active_${playerName}`)) {
          nextHomePathPositionClassList.remove("double_active_seed" , `double_active_${playerName}`)
          return nextHomePathPositionClassList.add("triple_active_seed" , `triple_active_${playerName}`)
        } else if (nextHomePathPositionClassList.toString().includes(`triple_active_seed triple_active_${playerName}`)) {
          nextHomePathPositionClassList.remove("triple_active_seed" , `triple_active_${playerName}`)
          return nextHomePathPositionClassList.add("quadruple_active_seed" , `quadruple_active_${playerName}`)
        } else { 
          return nextHomePathPositionClassList.add("active_seed" , `active_${playerName}`)
        }
      }

      // console.log(seedCurrentPositionId)
      // console.log(seedNextPositionId)

      /* 
        Check if the clicked seed is in the right position to branch home and if the counting die is enough to make the seed branch home
      */
      if (playerBoolean && seedCurrentPositionId >= minValue && seedCurrentPositionId <= maxValue && seedNextPositionId > maxValue) {
        console.log(seedNextPositionId);
        seedNextPositionId %= maxValue
        console.log(seedNextPositionId);
        if (seedNextPositionId < 6) { 
          let seedHomePathPositionClassList = document.getElementById(`${playerName}_home_${seedNextPositionId}`).classList
          // Call this function for seed to branch home and stay in it's neccessary position in each respective home path
          return addNewClassListToNextHomePathPositionFunction (seedHomePathPositionClassList)
        } 
        // Check for a direct win (home win) from the playing path e.g if the counting dice is 6 and the player is at the entrance of it's "OWN" home path
        if (seedNextPositionId == 6) {
          console.log(seedNextPositionId);
          if (playerName == "green") return playerGreenPoint += 1
          if (playerName == "blue") return playerBluePoint += 1
          if (playerName == "red") return playerRedPoint += 1
        }
      }

      if (playerBoolean && playerBoolean == playerYellow) {
        if (seedCurrentPositionId > minValue && seedCurrentPositionId <= maxValue && seedNextPositionId > maxValue2 && seedNextPositionId < minValue) {
          seedNextPositionId -= maxValue2
          let seedHomePathPositionClassList = document.getElementById(`${playerName}_home_${seedNextPositionId}`).classList
          if (seedNextPositionId < 6) return addNewClassListToNextHomePathPositionFunction (seedHomePathPositionClassList)
        }
        if (seedCurrentPositionId > minValue2 && seedCurrentPositionId <= maxValue2 && seedNextPositionId > maxValue2) {
          seedNextPositionId -= maxValue2
          let seedHomePathPositionClassList = document.getElementById(`${playerName}_home_${seedNextPositionId}`).classList
          if (seedNextPositionId < 6) return addNewClassListToNextHomePathPositionFunction (seedHomePathPositionClassList)
        }
        // Check for a direct win from the playing path (yellow seed alone)
        if (seedNextPositionId == 6) {
          if (playerName == "yellow") return playerYellowPoint += 1
        }
      } 
    })
  }
  // if (checkIfPlayerMoveIsValidBoolean) {
    completeRunFunction()
  // }
}

/* 
  A function to check if the next player move is valid
*/
function checkIfPlayerMoveIsValidFunction (seedCurrentPosition) {
  if (playerGreen) {
    console.log("testing phase green")
    if (seedCurrentPositionClassList.toString().includes("quadruple_active_seed quadruple_active_green") && reduceCurrentPositionSeedBoolean) { 
      reduceCurrentPositionSeedBoolean = false 
      checkIfPlayerMoveIsValidBoolean = true
      seedCurrentPositionClassList.remove("quadruple_active_seed" , "quadruple_active_green")
      seedCurrentPositionClassList.add("triple_active_seed", "triple_active_green")
    }
    if (seedCurrentPositionClassList.toString().includes("triple_active_seed triple_active_green") && reduceCurrentPositionSeedBoolean) { 
      reduceCurrentPositionSeedBoolean = false 
      checkIfPlayerMoveIsValidBoolean = true
      seedCurrentPositionClassList.remove("triple_active_seed" , "triple_active_green")
      seedCurrentPositionClassList.add("double_active_seed", "double_active_green")
    }
    if (seedCurrentPositionClassList.toString().includes("double_active_seed double_active_green") && reduceCurrentPositionSeedBoolean) { 
      reduceCurrentPositionSeedBoolean = false 
      checkIfPlayerMoveIsValidBoolean = true
      seedCurrentPositionClassList.remove("double_active_seed" , "double_active_green")
      seedCurrentPositionClassList.add("active_seed" , "active_green")
    }
    if (seedCurrentPositionClassList.toString().includes("active_seed active_green") && reduceCurrentPositionSeedBoolean) { 
      reduceCurrentPositionSeedBoolean = false 
      checkIfPlayerMoveIsValidBoolean = true
      seedCurrentPositionClassList.remove("active_seed" , "active_green")
    }
  }
  
  if (playerYellow) {
    console.log("testing phase yellow")
    if (seedCurrentPositionClassList.toString().includes("quadruple_active_seed quadruple_active_yellow") && reduceCurrentPositionSeedBoolean) { 
      reduceCurrentPositionSeedBoolean = false 
      checkIfPlayerMoveIsValidBoolean = true
      seedCurrentPositionClassList.remove("quadruple_active_seed" , "quadruple_active_yellow")
      seedCurrentPositionClassList.add("triple_active_seed" , "triple_active_yellow")
    }
    if (seedCurrentPositionClassList.toString().includes("triple_active_seed triple_active_yellow") && reduceCurrentPositionSeedBoolean) { 
      reduceCurrentPositionSeedBoolean = false 
      checkIfPlayerMoveIsValidBoolean = true
      seedCurrentPositionClassList.remove("triple_active_seed" , "triple_active_yellow")
      seedCurrentPositionClassList.add("double_active_seed" , "double_active_yellow")
    }
    if (seedCurrentPositionClassList.toString().includes("double_active_seed double_active_yellow") && reduceCurrentPositionSeedBoolean) { 
      reduceCurrentPositionSeedBoolean = false 
      checkIfPlayerMoveIsValidBoolean = true
      seedCurrentPositionClassList.remove("double_active_seed" , "double_active_yellow")
      seedCurrentPositionClassList.add("active_seed" , "active_yellow")
    }
    if (seedCurrentPositionClassList.toString().includes("active_seed active_yellow") && reduceCurrentPositionSeedBoolean) { 
      reduceCurrentPositionSeedBoolean = false 
      checkIfPlayerMoveIsValidBoolean = true
      seedCurrentPositionClassList.remove("active_seed" , "active_yellow")
    }
  }

  if (playerBlue) {
    console.log("testing phase blue")
    if (seedCurrentPositionClassList.toString().includes("quadruple_active_seed quadruple_active_blue") && reduceCurrentPositionSeedBoolean) { 
      reduceCurrentPositionSeedBoolean = false 
      checkIfPlayerMoveIsValidBoolean = true
      seedCurrentPositionClassList.remove("quadruple_active_seed" , "quadruple_active_blue")
      seedCurrentPositionClassList.add("triple_active_seed" , "triple_active_blue")
    }
    if (seedCurrentPositionClassList.toString().includes("triple_active_seed triple_active_blue") && reduceCurrentPositionSeedBoolean) { 
      reduceCurrentPositionSeedBoolean = false 
      checkIfPlayerMoveIsValidBoolean = true
      seedCurrentPositionClassList.remove("triple_active_seed" , "triple_active_blue")
      seedCurrentPositionClassList.add("double_active_seed" , "double_active_blue")
    }
    if (seedCurrentPositionClassList.toString().includes("double_active_seed double_active_blue") && reduceCurrentPositionSeedBoolean) { 
      reduceCurrentPositionSeedBoolean = false 
      checkIfPlayerMoveIsValidBoolean = true
      seedCurrentPositionClassList.remove("double_active_seed" , "double_active_blue")
      seedCurrentPositionClassList.add("active_seed" , "active_blue")
    }
    if (seedCurrentPositionClassList.toString().includes("active_seed active_blue") && reduceCurrentPositionSeedBoolean) { 
      reduceCurrentPositionSeedBoolean = false 
      checkIfPlayerMoveIsValidBoolean = true
      seedCurrentPositionClassList.remove("active_seed" , "active_blue")
    }
  }
  
  if (playerRed) {
    console.log("testing phase red")
    if (seedCurrentPositionClassList.toString().includes("quadruple_active_seed quadruple_active_red") && reduceCurrentPositionSeedBoolean) { 
      reduceCurrentPositionSeedBoolean = false 
      checkIfPlayerMoveIsValidBoolean = true
      seedCurrentPositionClassList.remove("quadruple_active_seed" , "quadruple_active_red")
      seedCurrentPositionClassList.add("triple_active_seed" , "triple_active_red")
    }
    if (seedCurrentPositionClassList.toString().includes("triple_active_seed triple_active_red") && reduceCurrentPositionSeedBoolean) { 
      reduceCurrentPositionSeedBoolean = false 
      checkIfPlayerMoveIsValidBoolean = true
      seedCurrentPositionClassList.remove("triple_active_seed" , "triple_active_red")
      seedCurrentPositionClassList.add("double_active_seed" , "double_active_red")
    }
    if (seedCurrentPositionClassList.toString().includes("double_active_seed double_active_red") && reduceCurrentPositionSeedBoolean) { 
      reduceCurrentPositionSeedBoolean = false 
      checkIfPlayerMoveIsValidBoolean = true
      seedCurrentPositionClassList.remove("double_active_seed" , "double_active_red")
      seedCurrentPositionClassList.add("active_seed" , "active_red")
    }
    if (seedCurrentPositionClassList.toString().includes("active_seed active_red") && reduceCurrentPositionSeedBoolean) { 
      reduceCurrentPositionSeedBoolean = false 
      checkIfPlayerMoveIsValidBoolean = true
      seedCurrentPositionClassList.remove("active_seed" , "active_red")
    }
  }
}

/* 

  Function checks if  point is won by a player 
  How it works {
    ==>> Functions works as a callback function as the main parameter is passed in inside the "countDiceFunction"
    ==>> Pass in two values as the parameter (the seedCurrentPosition and seedNextPosition)
    ==>> perform some opertions using the two parameter passed in to check if point is won and 
    ==>> Declare somme boolean variables to perform some task {
      ==>> "checkUnavailableOppositionHomeSeedBoolean"  to check the unavailable opposition hime seed 
      ==>> "reduceCurrentPositionSeedBoolean" to reduce the amount of an opposition seed seed if the a point is won by 
        ... the current player through that opposition seed
    }
    ==>> "seedCurrentPositionClassList" A variable to get the classlist of the players current position from the passed in parameter
    ==>> "seedNextPositionClassList" A variable to get the classlist of the players next position from the passed in parameter
  }
*/
function checkIfPointIsWonFunction (seedCurrentPosition, seedNextPosition) { 
  // Declare some variables for vital usage
  let checkUnavailableOppositionHomeSeedBoolean = true
  let reduceCurrentPositionSeedBoolean = true
  // let reduceCurrentPositionSeedBoolean = true
  // Get the next position and current position classlist from the parameter passed in when the function is called 
  let seedCurrentPositionClassList = seedCurrentPosition.classList
  let seedNextPositionClassList = seedNextPosition.classList 
 
  function checkIfMoveIsValidAndReduceTheCountingSeedByOneIfYesFunction () {
    if (playerGreen) {
      console.log("testing phase green")
      if (seedCurrentPositionClassList.toString().includes("quadruple_active_seed quadruple_active_green") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("quadruple_active_seed" , "quadruple_active_green")
        seedCurrentPositionClassList.add("triple_active_seed", "triple_active_green")
      }
      if (seedCurrentPositionClassList.toString().includes("triple_active_seed triple_active_green") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("triple_active_seed" , "triple_active_green")
        seedCurrentPositionClassList.add("double_active_seed", "double_active_green")
      }
      if (seedCurrentPositionClassList.toString().includes("double_active_seed double_active_green") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("double_active_seed" , "double_active_green")
        seedCurrentPositionClassList.add("active_seed" , "active_green")
      }
      if (seedCurrentPositionClassList.toString().includes("active_seed active_green") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("active_seed" , "active_green")
      }
    }
    
    if (playerYellow) {
      console.log("testing phase yellow")
      if (seedCurrentPositionClassList.toString().includes("quadruple_active_seed quadruple_active_yellow") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("quadruple_active_seed" , "quadruple_active_yellow")
        seedCurrentPositionClassList.add("triple_active_seed" , "triple_active_yellow")
      }
      if (seedCurrentPositionClassList.toString().includes("triple_active_seed triple_active_yellow") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("triple_active_seed" , "triple_active_yellow")
        seedCurrentPositionClassList.add("double_active_seed" , "double_active_yellow")
      }
      if (seedCurrentPositionClassList.toString().includes("double_active_seed double_active_yellow") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("double_active_seed" , "double_active_yellow")
        seedCurrentPositionClassList.add("active_seed" , "active_yellow")
      }
      if (seedCurrentPositionClassList.toString().includes("active_seed active_yellow") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("active_seed" , "active_yellow")
      }
    }

    if (playerBlue) {
      console.log("testing phase blue")
      if (seedCurrentPositionClassList.toString().includes("quadruple_active_seed quadruple_active_blue") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("quadruple_active_seed" , "quadruple_active_blue")
        seedCurrentPositionClassList.add("triple_active_seed" , "triple_active_blue")
      }
      if (seedCurrentPositionClassList.toString().includes("triple_active_seed triple_active_blue") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("triple_active_seed" , "triple_active_blue")
        seedCurrentPositionClassList.add("double_active_seed" , "double_active_blue")
      }
      if (seedCurrentPositionClassList.toString().includes("double_active_seed double_active_blue") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("double_active_seed" , "double_active_blue")
        seedCurrentPositionClassList.add("active_seed" , "active_blue")
      }
      if (seedCurrentPositionClassList.toString().includes("active_seed active_blue") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("active_seed" , "active_blue")
      }
    }
    
    if (playerRed) {
      console.log("testing phase red")
      if (seedCurrentPositionClassList.toString().includes("quadruple_active_seed quadruple_active_red") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("quadruple_active_seed" , "quadruple_active_red")
        seedCurrentPositionClassList.add("triple_active_seed" , "triple_active_red")
      }
      if (seedCurrentPositionClassList.toString().includes("triple_active_seed triple_active_red") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("triple_active_seed" , "triple_active_red")
        seedCurrentPositionClassList.add("double_active_seed" , "double_active_red")
      }
      if (seedCurrentPositionClassList.toString().includes("double_active_seed double_active_red") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("double_active_seed" , "double_active_red")
        seedCurrentPositionClassList.add("active_seed" , "active_red")
      }
      if (seedCurrentPositionClassList.toString().includes("active_seed active_red") && reduceCurrentPositionSeedBoolean) { 
        reduceCurrentPositionSeedBoolean = false 
        checkIfPlayerMoveIsValidBoolean = true
        seedCurrentPositionClassList.remove("active_seed" , "active_red")
      }
    }
  }
  // checkIfMoveIsValidAndReduceTheCountingSeedByOneIfYesFunction()
  console.log("test me")
  console.log(checkIfPlayerMoveIsValidBoolean)
  /* 
    Loops through seed combination array and get some relevant (all are relevant BUT some aren't needed now) usable data like
    seedStatus, doubleSeedStatus, doubleActiveSeedClass etc.
  */ 
  allSeedCombinations.forEach(eachSeedCombination => {
    /* 
      Get all relevant datas (keys and value stored in each seed respective object) from the array of "allSeedCombinations" and 
      Assign each relevant data to a variable for easy readability
    */
    let seedName = eachSeedCombination.seedName
    let activeSeedClass = eachSeedCombination.activeSeedClass
    let seedStatus = eachSeedCombination.seedStatus
    let oppositionSeed1Name = eachSeedCombination.oppositionSeed1Name
    let oppositionSeed1ActiveClass = eachSeedCombination.oppositionSeed1ActiveClass
    let oppositionSeed2Name = eachSeedCombination.oppositionSeed2Name
    let oppositionSeed2ActiveClass = eachSeedCombination.oppositionSeed2ActiveClass
    let oppositionSeed3Name = eachSeedCombination.oppositionSeed3Name
    let oppositionSeed3ActiveClass = eachSeedCombination.oppositionSeed3ActiveClass 
    let doubleSeedStatus = eachSeedCombination.doubleSeedStatus
    let doubleActiveSeedClass = eachSeedCombination.doubleActiveSeedClass
    let doubleOppositionSeed1Name = eachSeedCombination.doubleOppositionSeed1Name
    let doubleOppositionSeed1ActiveClass = eachSeedCombination.doubleOppositionSeed1ActiveClass
    let doubleOppositionSeed2Name = eachSeedCombination.doubleOppositionSeed2Name
    let doubleOppositionSeed2ActiveClass = eachSeedCombination.doubleOppositionSeed2ActiveClass
    let doubleOppositionSeed3Name = eachSeedCombination.doubleOppositionSeed3Name
    let doubleOppositionSeed3ActiveClass = eachSeedCombination.doubleOppositionSeed3ActiveClass 
    let tripleSeedStatus = eachSeedCombination.tripleSeedStatus
    let tripleActiveSeedClass = eachSeedCombination.tripleActiveSeedClass
    let tripleOppositionSeed1Name = eachSeedCombination.tripleOppositionSeed1Name
    let tripleOppositionSeed1ActiveClass = eachSeedCombination.tripleOppositionSeed1ActiveClass
    let tripleOppositionSeed2Name = eachSeedCombination.tripleOppositionSeed2Name
    let tripleOppositionSeed2ActiveClass = eachSeedCombination.tripleOppositionSeed2ActiveClass
    let tripleOppositionSeed3Name = eachSeedCombination.tripleOppositionSeed3Name
    let tripleOppositionSeed3ActiveClass = eachSeedCombination.tripleOppositionSeed3ActiveClass 
    let quadrupleSeedStatus = eachSeedCombination.quadrupleSeedStatus
    let quadrupleActiveSeedClass = eachSeedCombination.quadrupleActiveSeedClass
    let quadrupleOppositionSeed1Name = eachSeedCombination.quadrupleOppositionSeed1Name
    let quadrupleOppositionSeed1ActiveClass = eachSeedCombination.quadrupleOppositionSeed1ActiveClass
    let quadrupleOppositionSeed2Name = eachSeedCombination.quadrupleOppositionSeed2Name
    let quadrupleOppositionSeed2ActiveClass = eachSeedCombination.quadrupleOppositionSeed2ActiveClass
    let quadrupleOppositionSeed3Name = eachSeedCombination.quadrupleOppositionSeed3Name
    let quadrupleOppositionSeed3ActiveClass = eachSeedCombination.quadrupleOppositionSeed3ActiveClass 

      // function completeRunFunction() {
      /* 
        A very important condition to check if a particular seed has completed it's run and prevent that exact seed from an overrun,
        Been trying to write it has a fucntion but haven't gotten it yet... let's see how it goes 
      */
      if (playerGreen && seedName == "green" && seedCurrentPosition.id >= 36 && seedCurrentPosition.id <= 41 && seedNextPosition.id > 41) return console.log("green seed branched home")
      if (playerBlue && seedName == "blue" && seedCurrentPosition.id >= 10 && seedCurrentPosition.id <= 15 && seedNextPosition.id > 15) return console.log("blue seed branched home")
      if (playerRed && seedName == "red" && seedCurrentPosition.id >= 23 && seedCurrentPosition.id <= 28 && seedNextPosition.id > 28) return console.log("red seed branched home")
      if (playerYellow && seedName == "yellow") { 
        if (seedCurrentPosition.id > 48 && seedCurrentPosition.id <= 52 && seedNextPosition.id > 2 && seedNextPosition.id < 48) return console.log("yellow seed branched home condition 1")
        if (seedCurrentPosition.id > 0  && seedCurrentPosition.id <= 2 && seedNextPosition.id > 2) return console.log("yellow seed branched home condition 2")
      }
    // }
    // return completeRunFunction()
    

    // Create a function to count all points per seed per play 
    function countPointFunction (playerBoolean, playerName) {
      if (playerBoolean && seedName === playerName) { 
        if (seedNextPositionClassList.toString().includes(`${oppositionSeed1ActiveClass}`) || seedNextPositionClassList.toString().includes(`${oppositionSeed2ActiveClass}`) || seedNextPositionClassList.toString().includes(`${oppositionSeed3ActiveClass}`)) { 
          if (playerName == "green") playerGreenPoint += 1
          if (playerName == "yellow") playerYellowPoint += 1
          if (playerName == "blue") playerBluePoint += 1
          if (playerName == "red") playerRedPoint += 1
        }
        
        if (seedNextPositionClassList.toString().includes(`${oppositionSeed1ActiveClass}`)) { 
          if (seedNextPositionClassList.toString().includes(quadrupleSeedStatus , quadrupleOppositionSeed1ActiveClass)) { 
            seedNextPositionClassList.remove(quadrupleSeedStatus , quadrupleOppositionSeed1ActiveClass)
            seedNextPositionClassList.add(tripleSeedStatus , tripleOppositionSeed1ActiveClass)
          } else if (seedNextPositionClassList.toString().includes(tripleSeedStatus , tripleOppositionSeed1ActiveClass)) { 
            seedNextPositionClassList.remove(tripleSeedStatus , tripleOppositionSeed1ActiveClass)
            seedNextPositionClassList.add(doubleSeedStatus , doubleOppositionSeed1ActiveClass)
          } else if (seedNextPositionClassList.toString().includes(doubleSeedStatus , doubleOppositionSeed1ActiveClass)) { 
            seedNextPositionClassList.remove(doubleSeedStatus , doubleOppositionSeed1ActiveClass)
            seedNextPositionClassList.add(seedStatus , oppositionSeed1ActiveClass)
          } else { 
            seedNextPositionClassList.remove(seedStatus , oppositionSeed1ActiveClass)
          } 
          let homeSeedContainer = `${oppositionSeed1Name}_seed_container`
          let allHomeSeeds = document.getElementById(homeSeedContainer).querySelectorAll(`.${oppositionSeed1Name}`)
          return allHomeSeeds.forEach(eachAvailableSeed => {
            if (!eachAvailableSeed.classList.toString().includes(`${oppositionSeed1Name}_seed`) && checkUnavailableOppositionHomeSeedBoolean) {
              checkUnavailableOppositionHomeSeedBoolean = false
              return eachAvailableSeed.classList.add(`${oppositionSeed1Name}_seed`)
            }
          })
        }
        
        if (seedNextPositionClassList.toString().includes(`${oppositionSeed2ActiveClass}`)) { 
          if (seedNextPositionClassList.toString().includes(quadrupleSeedStatus , quadrupleOppositionSeed2ActiveClass)) { 
            seedNextPositionClassList.remove(quadrupleSeedStatus , quadrupleOppositionSeed2ActiveClass)
            seedNextPositionClassList.add(tripleSeedStatus , tripleOppositionSeed2ActiveClass)
          } else if (seedNextPositionClassList.toString().includes(tripleSeedStatus , tripleOppositionSeed2ActiveClass)) { 
            seedNextPositionClassList.remove(tripleSeedStatus , tripleOppositionSeed2ActiveClass)
            seedNextPositionClassList.add(doubleSeedStatus , doubleOppositionSeed2ActiveClass)
          } else if (seedNextPositionClassList.toString().includes(doubleSeedStatus , doubleOppositionSeed2ActiveClass)) { 
            seedNextPositionClassList.remove(doubleSeedStatus , doubleOppositionSeed2ActiveClass)
            seedNextPositionClassList.add(seedStatus , oppositionSeed2ActiveClass)
          } else { 
            seedNextPositionClassList.remove(seedStatus , oppositionSeed2ActiveClass)
          } 
          let homeSeedContainer = `${oppositionSeed2Name}_seed_container`
          let allHomeSeeds = document.getElementById(homeSeedContainer).querySelectorAll(`.${oppositionSeed2Name}`)
          return allHomeSeeds.forEach(eachAvailableSeed => {
            if (!eachAvailableSeed.classList.toString().includes(`${oppositionSeed2Name}_seed`) && checkUnavailableOppositionHomeSeedBoolean) {
              checkUnavailableOppositionHomeSeedBoolean = false
              return eachAvailableSeed.classList.add(`${oppositionSeed2Name}_seed`)
            }
          })
        }
        
        if (seedNextPositionClassList.toString().includes(`${oppositionSeed3ActiveClass}`)) { 
          if (seedNextPositionClassList.toString().includes(quadrupleSeedStatus , quadrupleOppositionSeed3ActiveClass)) { 
            seedNextPositionClassList.remove(quadrupleSeedStatus , quadrupleOppositionSeed3ActiveClass)
            seedNextPositionClassList.add(tripleSeedStatus , tripleOppositionSeed3ActiveClass)
          } else if (seedNextPositionClassList.toString().includes(tripleSeedStatus , tripleOppositionSeed3ActiveClass)) { 
            seedNextPositionClassList.remove(tripleSeedStatus , tripleOppositionSeed3ActiveClass)
            seedNextPositionClassList.add(doubleSeedStatus , doubleOppositionSeed3ActiveClass)
          } else if (seedNextPositionClassList.toString().includes(doubleSeedStatus , doubleOppositionSeed3ActiveClass)) { 
            seedNextPositionClassList.remove(doubleSeedStatus , doubleOppositionSeed3ActiveClass)
            seedNextPositionClassList.add(seedStatus , oppositionSeed3ActiveClass)
          } else { 
            seedNextPositionClassList.remove(seedStatus , oppositionSeed3ActiveClass)
          } 

          let homeSeedContainer = `${oppositionSeed3Name}_seed_container`
          let allHomeSeeds = document.getElementById(homeSeedContainer).querySelectorAll(`.${oppositionSeed3Name}`)
          return allHomeSeeds.forEach(eachAvailableSeed => {
            if (!eachAvailableSeed.classList.toString().includes(`${oppositionSeed3Name}_seed`) && checkUnavailableOppositionHomeSeedBoolean) {
              checkUnavailableOppositionHomeSeedBoolean = false
              return eachAvailableSeed.classList.add(`${oppositionSeed3Name}_seed`)
            }
          })
        }
        
        if (seedNextPositionClassList.toString().includes(tripleSeedStatus , tripleActiveSeedClass)) { 
          seedNextPositionClassList.remove(tripleSeedStatus , tripleActiveSeedClass)
          return seedNextPositionClassList.add(quadrupleSeedStatus , quadrupleActiveSeedClass)
        } else if (seedNextPositionClassList.toString().includes(doubleSeedStatus , doubleActiveSeedClass)) { 
          seedNextPositionClassList.remove(doubleSeedStatus , doubleActiveSeedClass) 
          return seedNextPositionClassList.add(tripleSeedStatus , tripleActiveSeedClass)
        } else if (seedNextPositionClassList.toString().includes(seedStatus) && seedNextPositionClassList.toString().includes(activeSeedClass) ) { 
          seedNextPositionClassList.remove(seedStatus , activeSeedClass)
          return seedNextPositionClassList.add(doubleSeedStatus , doubleActiveSeedClass)
        } else {
         return seedNextPositionClassList.add(seedStatus , activeSeedClass)
        } 
      }
    }

    // Call and pass all respective parameters to the function
    if (checkIfPlayerMoveIsValidBoolean) {
      countPointFunction(playerGreen, "green")
      countPointFunction(playerYellow, "yellow")
      countPointFunction(playerBlue, "blue")
      countPointFunction(playerRed, "red")
    }
  })
}
/* 
  A function alwys update players point anytime it's called
  It doesn't count score... all it does is to display the lattest point of each players in the player's point dashboard
*/
function updatePlayersPointFunction () {
  displayInnerHTML("player_green_point", `Green's Point: <span class="big_font_1"> ${playerGreenPoint} </span>`)
  displayInnerHTML("player_yellow_point", `Yellow's Point: <span class="big_font_1"> ${playerYellowPoint} </span>`)
  displayInnerHTML("player_blue_point", `Blue's Point: <span class="big_font_1"> ${playerBluePoint} </span>`)
  displayInnerHTML("player_red_point", `Red's Point: <span class="big_font_1"> ${playerRedPoint} </span>`)
}
/* 
  A function to reset all player's point once called most probably when game is over or about to start
  STEP 1 ==>> Reset Player Green point
  STEP 2 ==>> Reset Player Yellow point
  STEP 4 ==>> Reset Player Blue point
  STEP 3 ==>> Reset Player Red point
*/
function resetAllPlayersPointFunction () {
  // STEP 1
  playerGreenPoint = 0
  // STEP 2
  playerYellowPoint = 0
  // STEP 3
  playerBluePoint = 0
  // STEP 4
  playerRedPoint = 0
}



// Onclick events
/*
  Onclick on the roll dice button, call the rollDiceFunction to perform assign task
*/
rollDiceBtn.onclick = () => rollDiceFunction()

/* 
  Onclick on any of the two dice {
    ==>> Check if the clicked DIE is empty and return if it is
    ==>> if the clicked dice have a value, then toggle the diceBoolean value to be true 
          ... so that the "countDiceFunction" function can work as designed since the 
          diceBoolean must be true for it to function (ike determin players movement etc.)
    ==>> call the newJourneyFunction and pass in the clicked die value as the parameter
    ==>> Call the countDiceFunction and pass in the clicked die value as the parameter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  }
*/
// 
firstDice.onclick = () => { 
  if (!firstDice.value) return
  // 
  diceBoolean = true            
  // firstDiceBoolean = true
  // secondDiceBoolean = true
  newJourneyFunction(firstDice.value) 
  countDiceFunction(firstDice.value)
  countSeedInHomePathFunction(firstDice.value)
} 
// 
secondDice.onclick = () => {
  if (!secondDice.value) return
  diceBoolean = true   
  // firstDiceBoolean = true
  // secondDiceBoolean = true
  newJourneyFunction(secondDice.value) 
  countDiceFunction(secondDice.value)
  countSeedInHomePathFunction(secondDice.value)
}






























































































//





function cheatDoubleSixForTesting () {
  firstDice.value = 6
  secondDice.value = 6
}
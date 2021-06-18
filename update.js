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
// Seed Containers
const allGreenHomeSeeds = document.getElementById("green_seed_container").querySelectorAll(".green")
const allYellowHomeSeeds = document.getElementById("yellow_seed_container").querySelectorAll(".yellow")
const allBlueHomeSeeds = document.getElementById("blue_seed_container").querySelectorAll(".blue")
const allRedHomeSeeds = document.getElementById("red_seed_container").querySelectorAll(".red")
// Boolean value
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
//
let playerGreenPoint = 0
let playerYellowPoint = 0
let playerRedPoint = 0
let playerBluePoint = 0
// 
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

// Body onload
document.querySelector("body").onload = () => {
  selectActiveSeedFunction("green")
  updatePlayersPointFunction()
  displayInnerHTML("players_turn", "Green's turn")
}

/**/
function startNewGameFunction () {
  
  function removeAllSeedInPlayingPathFunction(playerName) {
    //  Remove all active seed in each players playing path
    allPlayingPaths.forEach(eachPlayingPath => {
      let eachPlayingPathClassList = eachPlayingPath.classList
      eachPlayingPathClassList.remove("active_seed", `active_${playerName}`)
      eachPlayingPathClassList.remove("double_active_seed", `double_active_${playerName}`)
      eachPlayingPathClassList.remove("triple_active_seed", `triple_active_${playerName}`)
      eachPlayingPathClassList.remove("quadruple_active_seed", `quadruple_active_${playerName}`)
    })
    //  Remove all active seed in each players home path
    let playersHomePath = document.querySelectorAll(`.${playerName}_grid_box`) 
    playersHomePath.forEach(eachHomePath => {
      let eachHomePathClassList = eachHomePath.classList
      eachHomePathClassList.remove("active_seed", `active_${playerName}`)
      eachHomePathClassList.remove("double_active_seed", `double_active_${playerName}`)
      eachHomePathClassList.remove("triple_active_seed", `triple_active_${playerName}`)
      eachHomePathClassList.remove("quadruple_active_seed", `quadruple_active_${playerName}`)
    })
    // Return all seed to their container
    let allHomeSeedsInContainer = document.getElementById(`${playerName}_seed_container`).querySelectorAll(`.${playerName}`)
    allHomeSeedsInContainer.forEach(eachHomeSeedInContainer => {
      let eachHomeSeedInContainerClassList = eachHomeSeedInContainer.classList
      eachHomeSeedInContainerClassList.add(`${playerName}_seed`)
    })
  }
  try {
    removeAllSeedInPlayingPathFunction("green")
    removeAllSeedInPlayingPathFunction("yellow")
    removeAllSeedInPlayingPathFunction("blue")
    removeAllSeedInPlayingPathFunction("red")
  } catch (err) { alert(err) }
  
  doubleSixBoolean = false
  selectActiveSeedFunction("green")
  updatePlayersPointFunction()
  displayInnerHTML("players_turn", "Green's turn")
  resetAllPlayersPointFunction()
}
/**/
try {
  // startNewGameFunction()
} catch (err) { alert(err) }
/**/


function countDiceFunction (countingDice) {
  allPlayingPaths.forEach(eachPlayingPath => {
    eachPlayingPath.onclick = () => {
      // if (!firstDiceBoolean && !secondDiceBoolean) return
      if (!diceBoolean) return
    
      let eachPlayingPathClassList = eachPlayingPath.classList.toString()
    // try {
      function checkPlayersTurnFunction() {
        allSeedCombinations.forEach(eachSeedCombination => {
          let seedName = eachSeedCombination.seedName
          let seedStatus = eachSeedCombination.seedStatus
          let activeSeedClass = eachSeedCombination.activeSeedClass
          let doubleSeedStatus = eachSeedCombination.doubleSeedStatus 
          let doubleActiveSeedClass = eachSeedCombination.doubleActiveSeedClass
          let tripleSeedStatus = eachSeedCombination.tripleSeedStatus
          let tripleActiveSeedClass = eachSeedCombination.tripleActiveSeedClass
          let quadrupleSeedStatus = eachSeedCombination.quadrupleSeedStatus
          let quadrupleActiveSeedClass = eachSeedCombination.quadrupleActiveSeedClass
    
          if (eachPlayingPathClassList.includes(`${seedStatus} ${activeSeedClass}`) || eachPlayingPathClassList.includes(`${doubleSeedStatus} ${doubleActiveSeedClass}`) || eachPlayingPathClassList.includes(`${tripleSeedStatus} ${tripleActiveSeedClass}`) || eachPlayingPathClassList.includes(`${quadrupleSeedStatus} ${quadrupleActiveSeedClass}`)) {
          // if (eachPlayingPathClassList.includes(`${seedStatus} ${activeSeedClass}`)) {
          
            let nextSeedPositionId = parseFloat(eachPlayingPath.id) + parseFloat(countingDice)
            nextSeedPositionId < 52 || nextSeedPositionId > 52 ? nextSeedPositionId %= 52 : nextSeedPositionId = 52 
            let nextSeedPositionGridBox = document.getElementById(nextSeedPositionId)
           
            // Branch home after a complete run
            // branchHomeFunction(eachPlayingPath, nextSeedPositionGridBox)
            // Check if a point is won on 
            try {
            checkIfPointIsWonFunction (eachPlayingPath, nextSeedPositionGridBox)
            } catch (err) { alert (err) }
            // update players point
            updatePlayersPointFunction() 
            // Check for winner
            checkWinnersAndEndGameFunction()
          }
        }) 
        
        diceBoolean = false
        // firstDiceBoolean = false
        // secondDiceBoolean = false

        if (countingDice === firstDice.value && countingDice === secondDice.value ) {
          // return countingDice == 6 ? ( doubleSixBoolean = true, firstDice.value = "" ) : firstDice.value = ""
          /**/
          if (countingDice == 6) {
            doubleSixBoolean = true
            return firstDice.value = ""
          } else { 
            return firstDice.value = ""
          } 
          /**/
        }
        
        if (countingDice === firstDice.value)  firstDice.value = "" 
        if (countingDice === secondDice.value)  secondDice.value = "" 
         
        if (firstDice.value || secondDice.value) return
      
        // This is the function I'm working on, the function is below
        // checkIfSeedExist()
        
        // Check the counted dice is a double six
        checkForDoubleSix()
      }
      
      //  } catch (err) { alert(err) }
      // alert(playerGreen)
      /**/
      if (playerGreen && eachPlayingPathClassList.includes("active_seed active_green") || eachPlayingPathClassList.includes("double_active_seed double_active_green") || eachPlayingPathClassList.includes("triple_active_seed triple_active_green") || eachPlayingPathClassList.includes("quadruple_active_seed quadruple_active_green")) return checkPlayersTurnFunction()
      if (playerYellow && eachPlayingPathClassList.includes("active_seed active_yellow") || eachPlayingPathClassList.includes("double_active_seed double_active_yellow") || eachPlayingPathClassList.includes("triple_active_seed triple_active_yellow") || eachPlayingPathClassList.includes("quadruple_active_seed quadruple_active_yellow")) return checkPlayersTurnFunction()
      if (playerBlue && eachPlayingPathClassList.includes("active_seed active_blue") || eachPlayingPathClassList.includes("double_active_seed double_active_blue") || eachPlayingPathClassList.includes("triple_active_seed triple_active_blue") || eachPlayingPathClassList.includes("quadruple_active_seed quadruple_active_blue")) return checkPlayersTurnFunction()
      if (playerRed && eachPlayingPathClassList.includes("active_seed active_red") || eachPlayingPathClassList.includes("double_active_seed double_active_red") || eachPlayingPathClassList.includes("triple_active_seed triple_active_red") || eachPlayingPathClassList.includes("quadruple_active_seed quadruple_active_red")) return checkPlayersTurnFunction()
    
    } 
  })
} 

/**/
function newJourneyFunction (toCountDice) {
  let checkUnavailableOppositionHomeSeedBoolean = true
    /**/
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

            // if (!firstDiceBoolean && !secondDiceBoolean) return alert(899)
            if (!diceBoolean) return alert(899)
            if (toCountDice != 6) return alert(6999)

            /**/
            function checkDoubleSix() {
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
            /** /
            diceBoolean = false
            // firstDiceBoolean = false
            // secondDiceBoolean = false
            // checkForDoubleSix()
            // alert(playerName)
            selectActiveSeedFunction (playerName)
          /**/
            
            if (eachSeedInContainerClassList.toString().includes(eachHomeSeedClass)) {
              eachSeedInContainerClassList.remove(eachHomeSeedClass)
              alert(eachHomeSeedClass)
            if (playerNodeClassList.toString().includes(`${oppositionSeed1ActiveClass}`) || playerNodeClassList.toString().includes(`${oppositionSeed2ActiveClass}`) || playerNodeClassList.toString().includes(`${oppositionSeed3ActiveClass}`)) { 
              if (playerName == "green") playerGreenPoint += 1
              if (playerName == "yellow") playerYellowPoint += 1
              if (playerName == "blue") playerBluePoint += 1
              if (playerName == "red") playerRedPoint += 1
            }
            updatePlayersPointFunction()
            checkWinnersAndEndGameFunction()
            checkDoubleSix()
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
                return //firstDice.value = ""
              } else if (playerNodeClassList.toString().includes(`${doubleSeedStatus} double_active_${playerName}`)) {
                 playerNodeClassList.remove(doubleSeedStatus , `double_active_${playerName}`)
                 playerNodeClassList.add(tripleSeedStatus , `triple_active_${playerName}`)
                return //firstDice.value = ""
              } if (playerNodeClassList.toString().includes(`${tripleSeedStatus} triple_active_${playerName}`)) {
                 playerNodeClassList.remove(tripleSeedStatus , `triple_active_${playerName}`)
                 playerNodeClassList.add(quadrupleSeedStatus , `quadruple_active_${playerName}`)
                return // firstDice.value = ""
              } else {
                 playerNodeClassList.add(seedStatus , `active_${playerName}`)
                return // firstDice.value = ""
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
      alert(playerGreen)
      alert(playerYellow)
      // alert(playerBlue)
      /**/
      if (playerGreen) return startMeFunction("green", 43)
      if (playerYellow) return startMeFunction("yellow", 4)
      if (playerBlue) return startMeFunction("blue", 17)
      if (playerRed) return startMeFunction("red", 30)
    } catch (err) { alert(err) }
    /**/               
  })
      /** /
      alert(playerGreen)
      alert(playerYellow)
      alert(playerBlue)
      alert(playerRed)
      /**/
}  
try { 
  // newJourneyFunction(firstDice.value) 
} catch (e) { alert(e)    }
/**/
// Roll dice
function rollDiceFunction () {
  let randomNumberOne = Math.floor((Math.random()  * 6) + 1)
  let randomNumberTwo = Math.floor((Math.random()  * 6) + 1)
  
  // if (firstDice.value != "" || secondDice.value != "" ) return
  
  // if (randomNumberOne === randomNumberTwo && randomNumberOne === 6) alert("Double Six")
  
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
    {playerName: "green", playersTurnInnerHTML: "Green's turn", playerStatus: playerGreen, nextPlayerName: "yellow", nextPlayersTurnInnerHTML: "Yellow's turn"},
    {playerName: "yellow", playersTurnInnerHTML: "Yellow's turn", playerStatus: playerYellow, nextPlayerName: "blue", nextPlayersTurnInnerHTML: "Blue's turn"},
    {playerName: "blue", playersTurnInnerHTML: "Blue's turn", playerStatus: playerBlue, nextPlayerName: "red", nextPlayersTurnInnerHTML: "Red's turn"},
    {playerName: "red", playersTurnInnerHTML: "Red's turn", playerStatus: playerRed, nextPlayerName: "green", nextPlayersTurnInnerHTML: "Green's turn"}
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
  if (playerGreenPoint === 4 && playerYellowPoint === 4 && playerBluePoint === 4 && playerRedPoint < 4) alert("Red Lost")
  if (playerGreenPoint === 4 && playerYellowPoint === 4 && playerBluePoint < 4 && playerRedPoint === 4) alert("Blue Lost")
  if (playerGreenPoint === 4 && playerYellowPoint < 4 && playerBluePoint === 4 && playerRedPoint === 4) alert("Yellow Lost")
  if (playerGreenPoint < 4 && playerYellowPoint === 4 && playerBluePoint === 4 && playerRedPoint === 4) alert("Green Lost")
  // startNewGameFunction()
}
/**/
//  
function checkIfSeedExist () {
  // A function to check if seed exist and skip turn
}
checkIfSeedExist()
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
          
          if (nextGridBoxInHomePathIdNumber > 6) return alert("Can't make this move")
          
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
            let  nextGridBoxInHomePathId = document.getElementById(`${playerName}_home_${nextGridBoxInHomePathIdNumber}`)
            let nextGridBoxInHomePathClassList = nextGridBoxInHomePathId.classList
            removeClassListFromCurrentHomePathPositionFunction (eachGridBoxInHomePathClassList)
            addNewClassListToNextHomePathPositionFunction (nextGridBoxInHomePathClassList)
          }
        }
      } 
    })
  }
  try { 
    if (playerGreen) return startCountingFunction("green")
    if (playerYellow) return startCountingFunction("yellow")
    if (playerBlue) return startCountingFunction("blue")
    if (playerRed) return startCountingFunction("red")
    /**/
  } catch (err) { alert(err) }
}
try {
  // countSeedInHomePathFunction(firstDice.value)
} catch (err) { alert(err) }
/**/
// Branch Home
function branchHomeFunction (seedCurrentPosition, seedNextPosition) {
  let seedNextPositionId = seedNextPosition.id 
  let seedCurrentPositionId = seedCurrentPosition.id
   
  const allCompleteRunSeedObjects = [
    { playerName: "green", playerBoolean: playerGreen, minValue: 36, maxValue: 41 },
    { playerName: "yellow", playerBoolean: playerYellow, minValue: 48, maxValue: 52, minValue2: 0, maxValue2: 2 },
    { playerName: "blue", playerBoolean: playerBlue, minValue: 10, maxValue: 15 },
    { playerName: "red", playerBoolean: playerRed, minValue: 23, maxValue: 28 }
  ]
   // Check if run is complete and return
  function completeRunFunction () {
    allCompleteRunSeedObjects.forEach(eachCompleteRunSeedObject => {
      let playerName = eachCompleteRunSeedObject.playerName
      let playerBoolean = eachCompleteRunSeedObject.playerBoolean
      let minValue = eachCompleteRunSeedObject.minValue
      let maxValue = eachCompleteRunSeedObject.maxValue
      let minValue2 = eachCompleteRunSeedObject.minValue2
      let maxValue2 = eachCompleteRunSeedObject.maxValue2
      
      // Create a function for basic home seed path
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
      
      if (playerBoolean && seedCurrentPositionId >= minValue && seedCurrentPositionId <= maxValue && seedNextPositionId > maxValue) {
        seedNextPositionId %= maxValue
        if (seedNextPositionId < 6) {
          let seedHomePathPositionClassList = document.getElementById(`${playerName}_home_${seedNextPositionId}`).classList
          addNewClassListToNextHomePathPositionFunction (seedHomePathPositionClassList)
        } 
        // Check for a direct win from the playing path
        if (seedNextPositionId == 6) {
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
        // Check for a direct win from the playing path
        if (seedNextPositionId == 6) {
          if (playerName == "yellow") return playerYellowPoint += 1
        }
      }
    })
  }
  try {
  completeRunFunction()
  } catch (err) { alert (err) }
}
// Win Points function
function checkIfPointIsWonFunction (seedCurrentPosition, seedNextPosition) { 
  let checkUnavailableOppositionHomeSeedBoolean = true
  let reduceCurrentPositionSeedBoolean = true
  let seedNextPositionClassList = seedNextPosition.classList
  let seedCurrentPositionClassList = seedCurrentPosition.classList

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

    // alert(reduceCurrentPositionSeedBoolean)
    // if (playerGreen && seedName == "green") alert(9876638)
    // if (playerGreen && seedName == "green") reduceCurrentPositionSeedBoolean = true
    // if (playerGreen && seedName == "green") alert(9876638)
    // if (playerYellow && seedName == "yellow") reduceCurrentPositionSeedBoolean = true
    // if (playerGreen) alert(seedCurrentPositionClassList)
    //alert(reduceCurrentPositionSeedBoolean)
    // if (playerGreen) alert(seedName)
    // if (playerGreen &&  !seedCurrentPositionClassList.toString().includes(`active_seed active_green`) || !seedCurrentPositionClassList.toString().includes(`double_active_seed double_active_green`) || !seedCurrentPositionClassList.toString().includes(`triple_active_seed triple_active_green`) || !seedCurrentPositionClassList.toString().includes(`quadruple_active_seed quadruple_active_green`)) return alert(1)                 //  

    // function changeAmountOfSeedPerClickFunction (playerBoolean, playerName) { 
       function changeAmountOfSeedPerClickFunction (playerName) { 
          /** / 
         if (playerGreen && seedName == "green") reduceCurrentPositionSeedBoolean = true
         alert(reduceCurrentPositionSeedBoolean)
         if (playerGreen) playerName = "green"
         if (playerYellow) playerName = "yellow"
         if (playerBlue) playerName = "blue"
         if (playerRee) playerName = "red"
          /**/ 

         // alert(quadrupleActiveSeedClass)
         let quadrupleActiveSeedClass = `quadruple_active_${playerName}`
         let tripleActiveSeedClass = `triple_active_${playerName}`
         let doubleActiveSeedClass = `double_active_${playerName}`
         let activeSeedClass = `active_${playerName}`
          /** / 
         alert(quadrupleActiveSeedClass)
         alert(tripleActiveSeedClass)
         alert(doubleActiveSeedClass)
         alert(activeSeedClass)
         alert(playerName)  
          /**/ 
         
        if (quadrupleActiveSeedClass == `quadruple_active_${playerName}` && seedCurrentPositionClassList.toString().includes(quadrupleSeedStatus , quadrupleActiveSeedClass) && reduceCurrentPositionSeedBoolean) { 
            reduceCurrentPositionSeedBoolean = false
            seedCurrentPositionClassList.remove(quadrupleSeedStatus , quadrupleActiveSeedClass)
            return seedCurrentPositionClassList.add(tripleSeedStatus , tripleActiveSeedClass)
         } else if (tripleActiveSeedClass == `triple_active_${playerName}` && seedCurrentPositionClassList.toString().includes(tripleSeedStatus , tripleActiveSeedClass) && reduceCurrentPositionSeedBoolean) { 
            reduceCurrentPositionSeedBoolean = false
            seedCurrentPositionClassList.remove(tripleSeedStatus , tripleActiveSeedClass)
            return seedCurrentPositionClassList.add(doubleSeedStatus , doubleActiveSeedClass)
         } else if (doubleActiveSeedClass == `double_active_${playerName}` && seedCurrentPositionClassList.toString().includes(doubleSeedStatus , doubleActiveSeedClass) && reduceCurrentPositionSeedBoolean) { 
            reduceCurrentPositionSeedBoolean = false
            seedCurrentPositionClassList.remove(doubleSeedStatus , doubleActiveSeedClass)
            return seedCurrentPositionClassList.add(seedStatus , activeSeedClass)
         } else if (activeSeedClass == `active_${playerName}` && seedCurrentPositionClassList.toString().includes(seedStatus , activeSeedClass) && reduceCurrentPositionSeedBoolean) { 
            reduceCurrentPositionSeedBoolean = false
            return seedCurrentPositionClassList.remove(seedStatus , activeSeedClass)
         }
         /**/ 
       }
      // changeAmountOfSeedPerClickFunction()
    // alert(playerGreen)
    // alert(playerYellow)
         /** /
         if (playerBoolean && playerName == seedName) {
         if (playerBoolean && quadrupleActiveSeedClass == `quadruple_active_${playerName}` && seedCurrentPositionClassList.toString().includes(quadrupleSeedStatus , quadrupleActiveSeedClass) && reduceCurrentPositionSeedBoolean) { 
           alert()
            reduceCurrentPositionSeedBoolean = false
            seedCurrentPositionClassList.remove(quadrupleSeedStatus , quadrupleActiveSeedClass)
            return seedCurrentPositionClassList.add(tripleSeedStatus , tripleActiveSeedClass)
         } else if (playerBoolean && tripleActiveSeedClass == `triple_active_${playerName}` && seedCurrentPositionClassList.toString().includes(tripleSeedStatus , tripleActiveSeedClass) && reduceCurrentPositionSeedBoolean) { 
            reduceCurrentPositionSeedBoolean = false
            seedCurrentPositionClassList.remove(tripleSeedStatus , tripleActiveSeedClass)
            return seedCurrentPositionClassList.add(doubleSeedStatus , doubleActiveSeedClass)
         } else if (playerBoolean && doubleActiveSeedClass == `double_active_${playerName}` && seedCurrentPositionClassList.toString().includes(doubleSeedStatus , doubleActiveSeedClass) && reduceCurrentPositionSeedBoolean) { 
            reduceCurrentPositionSeedBoolean = false
            seedCurrentPositionClassList.remove(doubleSeedStatus , doubleActiveSeedClass)
            return seedCurrentPositionClassList.add(seedStatus , activeSeedClass)
         } else if (playerBoolean && activeSeedClass == `active_${playerName}` && seedCurrentPositionClassList.toString().includes(seedStatus , activeSeedClass) && reduceCurrentPositionSeedBoolean) { 
            reduceCurrentPositionSeedBoolean = false
            return seedCurrentPositionClassList.remove(seedStatus , activeSeedClass)
         } 
       }
       }
         /** /
    // alert(playerGreen)
    // alert(playerYellow) 
      // if (playerGreen && seedCurrentPositionClassList.toString().includes("active_seed active_green") || seedCurrentPositionClassList.toString().includes("double_active_seed double_active_green") || seedCurrentPositionClassList.toString().includes("triple_active_seed triple_active_green") || seedCurrentPositionClassList.toString().includes("quadruple_active_seed quadruple_active_green")) alert("green")
      if (playerGreen && seedCurrentPositionClassList.toString().includes("active_seed active_green") || seedCurrentPositionClassList.toString().includes("double_active_seed double_active_green") || seedCurrentPositionClassList.toString().includes("triple_active_seed triple_active_green") || seedCurrentPositionClassList.toString().includes("quadruple_active_seed quadruple_active_green")) changeAmountOfSeedPerClickFunction("green")
      if (playerYellow && seedCurrentPositionClassList.toString().includes("active_seed active_yellow") || seedCurrentPositionClassList.toString().includes("double_active_seed double_active_yellow") || seedCurrentPositionClassList.toString().includes("triple_active_seed triple_active_yellow") || seedCurrentPositionClassList.toString().includes("quadruple_active_seed quadruple_active_yellow")) changeAmountOfSeedPerClickFunction("yellow")
      if (playerBlue && seedCurrentPositionClassList.toString().includes("active_seed active_blue") || seedCurrentPositionClassList.toString().includes("double_active_seed double_active_blue") || seedCurrentPositionClassList.toString().includes("triple_active_seed triple_active_blue") || seedCurrentPositionClassList.toString().includes("quadruple_active_seed quadruple_active_blue")) changeAmountOfSeedPerClickFunction("blue")
      if (playerRed && seedCurrentPositionClassList.toString().includes("active_seed active_red") || seedCurrentPositionClassList.toString().includes("double_active_seed double_active_red") || seedCurrentPositionClassList.toString().includes("triple_active_seed triple_active_red") || seedCurrentPositionClassList.toString().includes("quadruple_active_seed quadruple_active_red")) changeAmountOfSeedPerClickFunction("red")
    /**/ 
        if (playerGreen) changeAmountOfSeedPerClickFunction("green")
        if (playerYellow) changeAmountOfSeedPerClickFunction("yellow")
        if (playerBlue) changeAmountOfSeedPerClickFunction("blue")
        if (playerRed) changeAmountOfSeedPerClickFunction("red")
          /** /
        if (playerGreen) return changeAmountOfSeedPerClickFunction(playerGreen, "green")
        if (playerGreen) return changeAmountOfSeedPerClickFunction(playerYellow, "yellow")
        if (playerGreen) return changeAmountOfSeedPerClickFunction(playerBlue, "blue")
        if (playerGreen) return changeAmountOfSeedPerClickFunction(playerRed, "red")
          /**/
    // function completeRunFunction () {
      if (playerGreen && seedName == "green" && seedCurrentPosition.id >= 36 && seedCurrentPosition.id <= 41 && seedNextPosition.id > 41) return // alert(7)
      if (playerBlue && seedName == "blue" && seedCurrentPosition.id >= 10 && seedCurrentPosition.id <= 15 && seedNextPosition.id > 15) return // alert(8)
      if (playerRed && seedName == "red" && seedCurrentPosition.id >= 23 && seedCurrentPosition.id <= 28 && seedNextPosition.id > 28) return // alert(9)
      if (playerYellow && seedName == "yellow") { 
        if (seedCurrentPosition.id > 48 && seedCurrentPosition.id <= 52 && seedNextPosition.id > 2 && seedNextPosition.id < 48) return // alert(1)
        if (seedCurrentPosition.id > 0  && seedCurrentPosition.id <= 2 && seedNextPosition.id > 2) return // alert(0)
      }
    // }
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
          /**/
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
          /**/
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
          /**/ 
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
          /**/
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
          /**/ 
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
          /**/
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
          /**/
        
      }
    }
    // Call and pass all respective parameters to the function
    countPointFunction(playerGreen, "green")
    countPointFunction(playerYellow, "yellow")
    countPointFunction(playerBlue, "blue")
    countPointFunction(playerRed, "red")
  })
}
// 
function updatePlayersPointFunction () {
  displayInnerHTML("player_green_point", `Green's Point: <span class="big_font_1"> ${playerGreenPoint} </span>`)
  displayInnerHTML("player_yellow_point", `Yellow's Point: <span class="big_font_1"> ${playerYellowPoint} </span>`)
  displayInnerHTML("player_blue_point", `Blue's Point: <span class="big_font_1"> ${playerBluePoint} </span>`)
  displayInnerHTML("player_red_point", `Red's Point: <span class="big_font_1"> ${playerRedPoint} </span>`)
}
// 
function resetAllPlayersPointFunction () {
  playerGreenPoint = 0
  playerYellowPoint = 0
  playerRedPoint = 0
  playerBluePoint = 0
}



// Onclick events
// 
rollDiceBtn.onclick = () => rollDiceFunction()
// 
firstDice.onclick = () => {
  if (!firstDice.value) return
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




/*
function countDiceFunction (countingDice) {
for (let i = 0; i < allPlayingPaths.length; i++) {
  let eachPlayingPath = allPlayingPaths[i]
  
  eachPlayingPath.onclick = () => {
    // if (countingDice && !firstDiceBoolean && !firstDice.value) return
    // if (!firstDiceBoolean && !secondDiceBoolean) return
    if (!diceBoolean) return
    alert(countingDice)
    alert(firstDice.value)
    
    let eachPlayingPathClassList = eachPlayingPath.classList.toString()
     try {
    allSeedCombinations.forEach(eachSeedCombination => {
      let seedName = eachSeedCombination.seedName
      let seedStatus = eachSeedCombination.seedStatus
      let activeSeedClass = eachSeedCombination.activeSeedClass
      let oppositionSeed1 = eachSeedCombination.oppositionSeed1
      let oppositionSeed2 = eachSeedCombination.oppositionSeed2
      let oppositionSeed3 = eachSeedCombination.oppositionSeed3
      if (playerBlue && eachPlayingPathClassList.includes(`${seedStatus} ${activeSeedClass}`)) {
        let nextSeedPositionId = parseFloat(eachPlayingPath.id) + parseFloat(countingDice)
        // let nextSeedPositionId = parseFloat(eachPlayingPath.id) + 6
        // 
        // nextSeedPositionId < 52 || nextSeedPositionId > 52 ? nextSeedPositionId %= 52 : nextSeedPositionId = 52 
        if (nextSeedPositionId < 52 || nextSeedPositionId > 52) {
          nextSeedPositionId %= 52
        } else {
          nextSeedPositionId = 52
        } 
        // 
        let nextSeedPositionGridBox = document.getElementById(nextSeedPositionId).classList
        //
        eachPlayingPath.classList.remove(`${seedStatus}` , `${activeSeedClass}`)
        // 
        nextSeedPositionGridBox.add(`${seedStatus}` , `${activeSeedClass}`)      
        //
        if (nextSeedPositionGridBox.toString().includes(`${oppositionSeed1}`)) return nextSeedPositionGridBox.remove(`${oppositionSeed1}`)
        if (nextSeedPositionGridBox.toString().includes(`${oppositionSeed2}`)) return nextSeedPositionGridBox.remove(`${oppositionSeed2}`) 
        if (nextSeedPositionGridBox.toString().includes(`${oppositionSeed3}`)) return nextSeedPositionGridBox.remove(`${oppositionSeed3}`)
      }
    })
       
       // countingDice === firstDice.value ? firstDice.value = "" : secondDice.value = ""
       if (countingDice === firstDice.value) firstDice.value = "" 
       if (countingDice === secondDice.value) secondDice.value = "" 
       
       // firstDiceBoolean = false
       // secondDiceBoolean = false
       diceBoolean = false   
      } catch (err) { alert(err) }
  } 
}
}

*/

  
  // The code below does the same thing as above
  /** /
  if (playerGreen && doubleSixBoolean) { 
    selectActiveSeedFunction("green")
    doubleSixBoolean = false
    return displayInnerHTML("players_turn", "Green's turn")
  } else if (playerGreen && !doubleSixBoolean) {
    selectActiveSeedFunction("yellow")
    return displayInnerHTML("players_turn", "Yellow's turn")
  }
     
  if (playerYellow && doubleSixBoolean) {
    selectActiveSeedFunction("yellow")
    doubleSixBoolean = false
    return displayInnerHTML("players_turn", "Yellow's turn")
  } else if (playerYellow && !doubleSixBoolean) {
    selectActiveSeedFunction("blue")
    return displayInnerHTML("players_turn", "Blue's turn")
  }
     
  if (playerBlue && doubleSixBoolean) {
    selectActiveSeedFunction("blue")
    doubleSixBoolean = false
    return displayInnerHTML("players_turn", "Blue's turn")
  } else if (playerBlue && !doubleSixBoolean) {
    selectActiveSeedFunction("red")
    return displayInnerHTML("players_turn", "Red's turn")
  }
     
  if (playerRed && doubleSixBoolean) {
    selectActiveSeedFunction("red") 
    doubleSixBoolean = false
    return displayInnerHTML("players_turn", "Red's turn")
  } else if (playerRed && !doubleSixBoolean) {
    selectActiveSeedFunction("green")
    return displayInnerHTML("players_turn", "Green's turn")
  }
/**/ 


 /** /
    // Green's turn
    if (playerGreen && seedName === "green" ) { 
      if (seedNextPositionClassList.toString().includes(`${oppositionSeed1ActiveClass}`)) { 
        seedNextPositionClassList.remove(seedStatus, activeSeedClass)
        seedNextPositionClassList.remove(oppositionSeed1ActiveClass)
        playerGreenPoint += 1
      
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
        seedNextPositionClassList.remove(seedStatus, activeSeedClass)
        seedNextPositionClassList.remove(oppositionSeed2ActiveClass)
        playerGreenPoint += 1
      
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
        seedNextPositionClassList.remove(seedStatus, activeSeedClass)
        seedNextPositionClassList.remove(oppositionSeed3ActiveClass)
        playerGreenPoint += 1
      
        let homeSeedContainer = `${oppositionSeed3Name}_seed_container`
        let allHomeSeeds = document.getElementById(homeSeedContainer).querySelectorAll(`.${oppositionSeed3Name}`)
        return allHomeSeeds.forEach(eachAvailableSeed => {
          if (!eachAvailableSeed.classList.toString().includes(`${oppositionSeed3Name}_seed`) && checkUnavailableOppositionHomeSeedBoolean) {
            checkUnavailableOppositionHomeSeedBoolean = false
            return eachAvailableSeed.classList.add(`${oppositionSeed3Name}_seed`)
          }
        })
      }
      seedNextPositionClassList.add(seedStatus, activeSeedClass)
    }
    // Yellow's turn
    if (playerYellow && seedName === "yellow") { 
      if (seedNextPositionClassList.toString().includes(`${oppositionSeed1ActiveClass}`)) { 
        seedNextPositionClassList.remove(seedStatus, activeSeedClass)
        seedNextPositionClassList.remove(oppositionSeed1ActiveClass)
        playerYellowPoint += 1
      
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
        seedNextPositionClassList.remove(seedStatus, activeSeedClass)
        seedNextPositionClassList.remove(oppositionSeed2ActiveClass)
        playerYellowPoint += 1
      
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
        seedNextPositionClassList.remove(seedStatus, activeSeedClass)
        seedNextPositionClassList.remove(oppositionSeed3ActiveClass)
        playerYellowPoint += 1
      
        let homeSeedContainer = `${oppositionSeed3Name}_seed_container`
        let allHomeSeeds = document.getElementById(homeSeedContainer).querySelectorAll(`.${oppositionSeed3Name}`)
        return allHomeSeeds.forEach(eachAvailableSeed => {
          if (!eachAvailableSeed.classList.toString().includes(`${oppositionSeed3Name}_seed`) && checkUnavailableOppositionHomeSeedBoolean) {
            checkUnavailableOppositionHomeSeedBoolean = false
            return eachAvailableSeed.classList.add(`${oppositionSeed3Name}_seed`)
          }
        })
      }
      seedNextPositionClassList.add(seedStatus, activeSeedClass)
    }
    // Blue's turn 
    if (playerBlue && seedName === "blue") { 
      if (seedNextPositionClassList.toString().includes(`${oppositionSeed1ActiveClass}`)) { 
        seedNextPositionClassList.remove(seedStatus, activeSeedClass)
        seedNextPositionClassList.remove(oppositionSeed1ActiveClass)
        playerBluePoint += 1
      
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
        seedNextPositionClassList.remove(seedStatus, activeSeedClass)
        seedNextPositionClassList.remove(oppositionSeed2ActiveClass)
        playerBluePoint += 1
      
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
        seedNextPositionClassList.remove(seedStatus, activeSeedClass)
        seedNextPositionClassList.remove(oppositionSeed3ActiveClass)
        playerBluePoint += 1
      
        let homeSeedContainer = `${oppositionSeed3Name}_seed_container`
        let allHomeSeeds = document.getElementById(homeSeedContainer).querySelectorAll(`.${oppositionSeed3Name}`)
        return allHomeSeeds.forEach(eachAvailableSeed => {
          if (!eachAvailableSeed.classList.toString().includes(`${oppositionSeed3Name}_seed`) && checkUnavailableOppositionHomeSeedBoolean) {
            checkUnavailableOppositionHomeSeedBoolean = false
            return eachAvailableSeed.classList.add(`${oppositionSeed3Name}_seed`)
          }
        })
      }
      seedNextPositionClassList.add(seedStatus, activeSeedClass)
    }
    // Red's turn
    if (playerRed && seedName === "red") { 
      if (seedNextPositionClassList.toString().includes(`${oppositionSeed1ActiveClass}`)) { 
        seedNextPositionClassList.remove(seedStatus, activeSeedClass)
        seedNextPositionClassList.remove(oppositionSeed1ActiveClass)
        playerRedPoint += 1
      
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
        seedNextPositionClassList.remove(seedStatus, activeSeedClass)
        seedNextPositionClassList.remove(oppositionSeed2ActiveClass)
        playerRedPoint += 1
      
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
        seedNextPositionClassList.remove(seedStatus, activeSeedClass)
        seedNextPositionClassList.remove(oppositionSeed3ActiveClass)
        playerRedPoint += 1
      
        let homeSeedContainer = `${oppositionSeed3Name}_seed_container`
        let allHomeSeeds = document.getElementById(homeSeedContainer).querySelectorAll(`.${oppositionSeed3Name}`)
        return allHomeSeeds.forEach(eachAvailableSeed => {
          if (!eachAvailableSeed.classList.toString().includes(`${oppositionSeed3Name}_seed`) && checkUnavailableOppositionHomeSeedBoolean) {
            checkUnavailableOppositionHomeSeedBoolean = false
            return eachAvailableSeed.classList.add(`${oppositionSeed3Name}_seed`)
          }
        })
      }
      seedNextPositionClassList.add(seedStatus, activeSeedClass)
    }
    /**/
   































//
function think(myHands, history, oldGames) {
  const gameNum = oldGames.length;
  let predictedEnemyCardPrefers = [];

  if (gameNum === 0) {
    predictedEnemyCardPrefers = ['2', '1', '5', '4', '3', '!'];
  } else if (gameNum !== 0) {
    if (gameNum > 1) {
      const lastEnemyHistory = getPreviousHistory(oldGames[oldGames.length - 1], 'enemy');
      const lastMyHistory = getPreviousHistory(oldGames[oldGames.length - 1], 'me');

      const previousEnemyHistory = getPreviousHistory(oldGames[oldGames.length - 2], 'enemy');
      const previousMyHistory = getPreviousHistory(oldGames[oldGames.length - 2], 'me');

      if (isEnemyStaticPattern(previousEnemyHistory, lastEnemyHistory)) {
        if (lastEnemyHistory.length > history.length) {
          let myCard = mirrorCard(lastEnemyHistory[history.length]);

          return myCard;
        }
      }

      if (isEnemyMirrorPattern(previousMyHistory, lastEnemyHistory)) {
        if (lastMyHistory.length > history.length) {
          let myCard = mirrorCard(mirrorCard(lastMyHistory[history.length]));
  
          return myCard;
        }
      }
    }
    predictedEnemyCardPrefers = predictEnemyCardPriority(oldGames);
    
  }
  let enemyHands = getEnemyHands(history);
  let enemyPrefers = chooseCard(enemyHands, predictedEnemyCardPrefers);

  let myPrefers = cardPriority(enemyPrefers);
  let myCard = chooseCard(myHands, myPrefers);

  return myCard;
}

function getPreviousHistory(previousGame, who) {
  let i;
  let previousHistory = [];
  if (who === 'me') {
    i = 0;
  } else if(who === 'enemy') {
    i = 1;
  }
  
  for (let round of previousGame) {
    previousHistory.push(round[i]);
  }

  return previousHistory;
}

function chooseCard(hands, prefers) {
  let sortedCards = prefers;
  if (hands.length !== prefers.length) {
    let cards = ['1', '2', '3', '4', '5', '!'];
    for (let card of hands) {
      remove(cards, card);
    }

    for (let card of cards) {
      remove(sortedCards, card);
    }
  }
  return sortedCards[0];
}

function getEnemyHands(history) {
  let enemyHands = ['1', '2', '3', '4', '5', '!'];

  for (let round of history) {
    enemyHands.splice(enemyHands.indexOf(round[1]), 1);
  }

  return enemyHands;
}

function isEnemyMirrorPattern(previousMyPattern, lastEnemyPattern) {
  let count = 0;
  let cmpNum = previousMyPattern.length > lastEnemyPattern.length ? lastEnemyPattern.length : previousMyPattern.length;

  for (let i = 0; i < cmpNum; i++) {
    let myPriority = cardPriority(previousMyPattern[i]);

    if(lastEnemyPattern[i] === myPriority[0] || lastEnemyPattern[i] === myPriority[1]) {
      count++;
    }
  }

  if (count > cmpNum - 1) {
    return true;
  }
  return false;
}

function isEnemyStaticPattern(previousEnemyPattern, lastEnemyPattern) {
  let count = 0;
  let cmpNum = previousEnemyPattern.length > lastEnemyPattern.length ? lastEnemyPattern.length : previousEnemyPattern.length;

  for (let i = 0; i < cmpNum; i++) {
    if (previousEnemyPattern[i] === lastEnemyPattern[i]) {
      count++;
    }
  }

  if (count === cmpNum) {
    return true;
  }
  return false;
}

function predictEnemyCardPriority(oldGames) {
  let cardsCount = { '5': 0, '1': 0, '4': 0, '!': 0, '3': 0, '2': 0 };
  let enemyCardPriority = [];
  
  if (oldGames.length % 3 === 0) {
    oldGames.splice(0, parseInt(oldGames.length / 3));
  }

  for (let oldGame of oldGames) {
    let count = 0;
    for (let round of oldGame) {
      cardsCount[round[1]] += count;
      count++;
    }
  }

  enemyCardPriority = Object.keys(cardsCount).sort(function(a, b) { return cardsCount[a] - cardsCount[b] });

  return enemyCardPriority;
}

function mirrorCard(lastMyCardPattern) {
  switch(lastMyCardPattern) {
    case '1':
      return '2';
    case '2':
      return '!';
    case '3':
      return '4';
    case '4':
      return '5';
    case '5':
      return '3';
    case '!':
      return '1';
  }
}

function cardPriority(predictedEnemyCard) {
  switch(predictedEnemyCard) {
    case '1':
      return ['2', '3', '4', '1', '!', '5'];
    case '2':
      return ['3', '!', '4', '2', '5', '1'];
    case '3':
      return ['4', '5', '3', '1', '2', '!'];
    case '4':
      return ['!', '5', '4', '2', '3', '1'];
    case '5':
      return ['1', '5', '2', '3', '4', '!'];
    case '!':
      return ['3', '1', '!', '5', '2', '4'];
  }
}

function remove(array, element) {
  const index = array.indexOf(element);
  
  if (index !== -1) {
    array.splice(index, 1);
  }
}
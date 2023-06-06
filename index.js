// 1) Define the saturdayFun function declaration as specified
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // 2) Test: Check if the function exists
  console.log(typeof saturdayFun === 'function'); // Output: true
  
  // 3) Test: Check if the default activity is 'roller-skate' and can be overridden
  console.log(saturdayFun()); // Output: This Saturday, I want to roller-skate!
  console.log(saturdayFun('bathe my dog')); // Output: This Saturday, I want to bathe my dog!
  
  
  // 4) Define the mondayWork function expression as specified
  const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  
  // 5) Test: Check if the function exists
  console.log(typeof mondayWork === 'function'); // Output: true
  
  // 6) Test: Check if the default activity is 'go to the office' and can be overridden
  console.log(mondayWork()); // Output: This Monday, I will go to the office.
  console.log(mondayWork('work from home')); // Output: This Monday, I will work from home.
  
  
  // 7) Define the wrapAdjective function according to the specification
  function wrapAdjective(flair = '*') {
    return function(adjective = 'special') {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  
  // 8) Test: Check if the function exists
  console.log(typeof wrapAdjective === 'function'); // Output: true
  
  // 9) Test: Check if wrapAdjective creates a function that wraps the adjective in a highlight
  const highlightFunction1 = wrapAdjective('*');
  console.log(highlightFunction1('amazing')); // Output: You are *amazing*!
  
  const highlightFunction2 = wrapAdjective('||');
  console.log(highlightFunction2('incredible')); // Output: You are ||incredible||!
  
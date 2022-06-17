function isPalindrome(word) {
  // Write your algorithm here
  const wordSplit = word.split('');
  const wordPalindrome = wordSplit.reverse().join('');
  const checkPalindrome = (wordPalindrome === word)? true : false;
  return checkPalindrome;
}
console.log(isPalindrome('robot'))
console.log(isPalindrome('racecar'))
/* 
  Add your pseudocode here
*/
//is palindrome(word)
//word = "mama"
// if reversestring === word
// pass
// iff reverstring != word 
//fail

//declare
/*
  Add written explanation of your solution here
*/
//declare function
// set methods that will reverse word string
// check whether criteria are met for palindrome

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

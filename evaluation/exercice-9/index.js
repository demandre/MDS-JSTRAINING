'use strict';

/*
  Checks if string given is a palindrome
  @return Boolean
*/
function checkPalindrome(word) {
  var left = 0;
  var right = word.length - 1;
  if (right < 0) {
    return false;
  }
  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}


function testResult() {
  document.querySelector('#palindrome-validation').textContent = 'Pas un palindrome ...';
  if(checkPalindrome(document.querySelector('#palindrome').value)) {
    document.querySelector('#palindrome-validation').textContent = 'Un vrai palindrome!';
  }
}

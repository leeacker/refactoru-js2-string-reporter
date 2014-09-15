var word = prompt('What is your favorite animal?');

alert('You entered '+word+'.\nThere are '+word.length+' characters in the word.\nThe third character is '+word.charAt(2)+'.\nLowercase: '+word.toLowerCase()+'\nUppercase: '+word.toUpperCase()+'\nExample: If I could have a pet, it would be a '+word+'.\nSubword: '+word.charAt(1)+word.charAt(2)+word.charAt(3));
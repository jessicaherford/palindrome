function isPalindrome(string){
    string2 = string.tolowercase().split('').reverse().join('');
    console.log(string2);
    if(string === string2){
        return true;
    }

    else{
        return false;
    }

}

isPalindrome('what');
isPalindrome('racecar');
isPalindrome('not');
isPalindrome("Step on no pets");
isPalindrome("Top spot");
isPalindrome("Kayak");
isPalindrome("Mikel hates Star Wars");

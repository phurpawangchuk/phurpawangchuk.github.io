function pow(x,n){
    return Math.pow(x,n);
}

function earliestSpace(s1, s2, s3){
    s1Len = s1.indexOf(" ");
    s2Len = s2.indexOf(" ");
    s3Len = s3.indexOf(" ");
    if(s1Len < s2Len && s1Len <  s3Len)
        return s1;
    else if(s2Len < s3Len && s2Len < s1Len)
        return s2;
    else
        return s3;
}

function sum(arr){
    let sum = 0;
    return arr.reduce((x,y) => x+y);
    // for(let i=0; i< arr.length; i++){
    //     sum += arr[i];
    // }
    // return sum;
}

function multiply(arr){
    let product = 1;
    for(let i=0; i<arr.length; i++){
        product *= arr[i];
    }

    return product;
}

function isVowel(ch){
    const c = ch.toLowerCase();
    if(c == 'a' || c == 'e' || c == 'i' || c =='o' || c == 'u'){
        return true;
    }else{
        return false;
    }
}

function max(x, y){
    if(x > y)
        return x;
    else
        return y;
}

function maxOfThree(x,y,z){
    return max(max(x,y),z);
}

function reverse(str){
    let newString = "";
    for(let i=str.length; i>=0; i--){
        newString += str.charAt(i);
    }
    return newString;
}

function findLongestWord(words) {
    let wordlength = words[0].length;
    for(let i=0; i<words.length; i++){
        if(wordlength < words[i].length){
            wordlength = words[i].length;
        }
    }
    return wordlength;
}

function filterLongWords(words, wordlength){
    let arr = [];
    for(let i=0; i<words.length; i++){
        let length = words[i].length;
        if(length > wordlength){
            arr.push(words[i]);
        }
    }
    return arr;
}

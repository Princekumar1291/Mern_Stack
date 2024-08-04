function vowelCount(str){
    str=str.toUpperCase();
    count=0;
    for(item of str){
        if(item=='A'||item=='E'||item=='I'||item=='O'||item=='U'){
            count++;
        }
    }
    return count;
}
let ans=vowelCount("Prince");
console.log(ans);



const countVowel=(str)=>{
    str=str.toUpperCase();
    count=0;
    for(item of str){
        if(item=='A'||item=='E'||item=='I'||item=='O'||item=='U'){
            count++;
        }
    }
    return count;
}
ans2=countVowel("Prince");
console.log(ans2);
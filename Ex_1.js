function sortByStrings(s,t){

let output=[];

  for(let i=0; i<t.length; i++){
      for(let j=0; j<s.length; j++){
        if(s[j]==t[i]){
          output.push(s[j]);
        }

      } 
    
  }


return output;
}

sortByStrings("weather","therapyw");
sortByStrings("good","odg");

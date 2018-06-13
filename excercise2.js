function decodeString(s){

        let val=[];
        let new_arr=[];
        for(let j=0;j<s.indexOf("["); j++)
        {  
          val.push(s[j]);

        }
        var newTxt = s.split('[');
        for (var i = 1; i < newTxt.length; i++) {
            new_arr.push(newTxt[i].split(']')[0]);
          
        }
     let sum='';

    for(let k=new_arr.length-1; k>=0 ; k--){
   
       let number= new_arr[k].match(/\d+/g);
       let digit_1= new_arr[k].indexOf(new_arr[k].match(/\d+/g), 0);
     

       let letr=  new_arr[k].match(/[a-zA-Z]+/g);
      let alphabet_1 = new_arr[k].indexOf(new_arr[k].match(/[a-zA-Z]+/g), 0);
  

      if(digit_1>alphabet_1)
      {
            if(number>0){
                  let temp= sum;
                  for(let l=0; l<parseInt(number)-1; l++)
                  {   
                          sum= sum + temp;
                  }  

              }  
              if(letr!=null)
              {   
                  sum=  letr + sum;
              }
      }  
      else{
              if(letr!=null)
              {   
                  sum=  letr + sum;
              }
              if(number>0){
                  let temp= sum;
                  for(let l=0; l<parseInt(number)-1; l++)
                  {   
                          sum= sum + temp;
                  }  

              }  

      }

    }
    let temp_string= '';

       for(let m=val.length-1; m>= 0; m--){

          temp_string= val[m] + temp_string;
     }
  

       let temp= sum;
        let number= temp_string.match(/\d+/g);
  
       let digit= temp_string.indexOf(temp_string.match(/\d+/g), 0);
        
       let alphabet = temp_string.indexOf(temp_string.match(/[a-zA-Z]+/g), 0);
        
        
       let letr=  temp_string.match(/[a-zA-Z]+/g);
      if(digit> alphabet)
      {   

       if(number>0){
            for(let l=0; l<parseInt(number)-1; l++)
            {   
               sum= sum + temp;
                
            } 


     
         }
         if(letr!=null)
            {   
                        sum=  letr + sum;
          
            }
        }

       

       else{
         console.log(' else block ' + sum);
         console.log(letr);
         if(letr!=null)
            {   
                        sum=  letr + sum;
                      console.log(' sum value is ' + sum );
                      temp= sum;
            }
             if(number>0){
            for(let l=0; l<parseInt(number)-1; l++)
            {   
               sum= sum + temp;
                
            } 

           }   
         } 
       console.log('sum');
       console.log(sum);
 return sum;
}

decodeString("2[3b[a]]");
// decodeString("4[a]");
//decodeString("4a[ab]");
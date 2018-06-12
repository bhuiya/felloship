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
       let letr=  new_arr[k].match(/[a-zA-Z]+/g);

       if(number>0){
         let temp= sum;
            for(let l=0; l<parseInt(number)-1; l++)
            {   
                     sum= sum + temp;
            
            }  
            if(letr!=null)
            {   
                
                        sum=  letr + sum;
          
            }
         
        }
        else{
                 sum = new_arr[k]; 
             
        }
       


     
    }
    let temp_string= '';

     for(let m=0; m< val.length; m++){
          temp_string= val[m] + temp_string;
     }
  

       let temp= sum;
        let number= temp_string.match(/\d+/g);
       let letr=  temp_string.match(/[a-zA-Z]+/g);
      
       if(number>0){
            for(let l=0; l<parseInt(number)-1; l++)
            {   
               sum= sum + temp;
                
            } 

             if(letr!=null)
            {   
                        sum=  letr + sum;
          
            }  
     }

       console.log('sum');
       console.log(sum);
 return sum;
}

//decodeString("2[b3[a]]");
decodeString("4[ab]");
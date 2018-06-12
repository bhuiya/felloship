let amount=4;
let left =0;
let temp=0;
let denominations=[1,2,3];
for(let i=0; i<amount; i++){
  
  if(i==0)
  {
   let temp= denominations[i];
   console.log(temp);
   if(amount%temp==0)
   {
     console.log(amount +' times 1 cent');
   }

  }
  if(i==1)
  {
    left = (amount - denominations[i]);
     temp= left/denominations[i-1]
     console.log(temp +' times '+denominations[i-1]+ 'c  ' + '1 times '+denominations[i]+ 'c');
     //  console.log(left);
    
  }
  
  if(i==2)
  {
    left = (amount - denominations[i]);
     temp= left/denominations[i-2]
     console.log(temp +' times '+denominations[i-2]+ 'c  ' + '1 times '+denominations[i]+ 'c');
     //  console.log(left);
    
  }

  if(i==3)
  {
    left = (amount - denominations[i-2]);
     temp= left/denominations[i-2]
     console.log('2 times '+denominations[i-2]+ 'c  ' );
    
    
  }
}
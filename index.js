/*
let x, y, i;
x = 150;
y = 61;
do {
   i = x**y;
   console.log(i); 
} while (y=0);
*/

/*
function numPowerProgress() {
   let number = 15, power = 5, result = 1, progress = 0;

   for (progress=0; progress < power; progress++) {
   result = result*number;
   return(result);
   }
} 
*/
/*
function FidingModulNumber() {
   let modNum =-44;
   for (;modNum <= 0;){
      modNum= modNum/-2*2
      console.log(modNum);
   };  
   if (let = modNum >= 0) {
      console.log(modNum);
      };
}
*/
 /*
function middle(str) {
   let position, length;
   if ((str.length % 2) == 0) {
     position = str.length / 2 - 1;
     length = 2;
   } else {
     position = (str.length - 1) / 2;
     length = 1;
   }
   
   return str.substring(position, position + length);
 }
 console.log(middle("mynameis")); 
 console.log(middle("abc")); 
 console.log(middle("abcd")); 

 */

/*
 let arr  = [1, 2, 3, 4, 1, 2, -3, 4];

 let max = Math.max.apply(null, arr);
 let min = Math.min.apply(null, arr);

 console.log(max);
 console.log(min);

 */
  
let example = 'helo';
let charRepeats = function(str) {
    for (let i=0; i<str.length; i++) {
      if ( str.indexOf(str[i]) !== str.lastIndexOf(str[i]) ) {
        return false; 
      }
    }
  return true;
}
console.log( charRepeats(example) );
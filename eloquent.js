<script>

// this code prints the result in an array and the length of the array to the console.

let hold = [];
for (let num = 1; num <= 100; num++) {
	if (num % 3 === 0 && num % 5 === 0) {
  	//console.log("FizzBuzz");
    hold.push("FizzBuzz");
 	  continue;
  } else if (num % 3 == 0) {
    //console.log("Fizz");
    hold.push("Fizz");
      continue;
  } else if (num % 5 == 0) {
    //console.log("Buzz");
    hold.push("Buzz");
      continue;
  } else {
    //console.log(num);
   }
   hold.push(num);
}
   console.log(hold);
   console.log(hold.length);



/*  This code prints solves the question and print the result to the console.  */

for (let num = 1; num <= 100; num++) {
  let hold = "";
    if (num % 3 == 0 && num % 5 == 0) {
   hold += "FizzBuzz";
   console.log(hold); 
    } else if (num % 3 == 0) {
   hold += "Fizz";
   console.log(hold); 
    } else if (num % 5 == 0) {
      hold += "Buzz";
      console.log(hold); 
    } else {
  console.log(num);  
}
}


/*   Initial code from Eloquent SandBox   */

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}


</script>
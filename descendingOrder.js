function descendingOrder(n) {
  // create empty array
  let arr = [];

  // convert parameter to a string
  let num = n.toString();

  // loop through each index and push to array
  for (var i = 0; i < num.length; i += 1) {
    arr.push(+num.charAt(i));
  }

  // sort in ascending order
  arr.sort();

  // sort in descending order
  arr.reverse();

  // make the array into a string. 
  let descendingString = arr.join("");

  // make string into an integer
  let finalNumber = parseInt(descendingString);

  if (isNaN(finalNumber)) {
    console.log('not a number');
  } else {
    console.log(finalNumber);
  }
  
}

descendingOrder(234);
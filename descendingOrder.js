function descendingOrder(n) {
  let arr = [];
  let num = n.toString();

  for (var i = 0; i < num.length; i += 1) {
    arr.push(+num.charAt(i));
  }

  arr.sort();
  arr.reverse();
  let descendingString = arr.join("");
  let finalNumber = parseInt(descendingString);


  console.log(finalNumber);
}

descendingOrder(43234);
function descendingOrder(n) {
  let arr = [];
  let num = n.toString();

  for (var i = 0; i < num.length; i += 1) {
    arr.push(+num.charAt(i));
  }

  console.log(arr);
}

descendingOrder(43234);
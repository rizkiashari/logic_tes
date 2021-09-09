const N = 65;

let result = "";

let i = 1;
while (i <= N) {
  if (i === N) {
    result += "Backend";
  } else if (i % 15 === 0) {
    result += "Frontend Backend,";
  } else if (i % 3 === 0) {
    result += "Frontend,";
  } else if (i % 5 === 0) {
    result += "Backend,";
  } else {
    result += i + ",";
  }

  i++;
}
console.log("Result:\n", result);

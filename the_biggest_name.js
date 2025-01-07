var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

var longestName = ""; 

for (let name of friends) {
  if (name.length > longestName.length) {
    longestName = name; 
  }
}

console.log("The longest name is:", longestName);

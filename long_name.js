var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

var x = friends[0].length
for (let i = 0; i < friends.length; i++) {
    const element = friends[i];

    if (element.length > x) {
        x = element.length
    }
    
}
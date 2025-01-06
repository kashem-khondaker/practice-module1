var result = 80;

if (result < 0) {
    console.log("failed");
} else if (result >= 0 && result < 40) {
    console.log("tumi C grade paico");
} else if (result >= 40 && result < 60) {
    console.log("tumi B grade paiso");
} else if (result >= 60 && result < 70) {
    console.log("tomi A- grade paiso");
} else if (result >= 70 && result < 80) {
    console.log("tomi A grade paiso");
} else if (result >= 80 && result < 90) {
    console.log("tomi A+ grade paiso");
} else if (result >= 90 && result <= 100) {
    console.log("tomi golden A+ paiso");
} else {
    console.log("invalid");
}
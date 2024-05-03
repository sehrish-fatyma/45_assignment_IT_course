//Create a variable called alien_color
let alien_color: string = "green";
//write an if stayement to test whether the alien's color is green.
//if it is, print a massage that the player just earned 5 points.
if (alien_color === "green") {
  console.log("player just earned 5 point !");
}
//wrie one version of this program that passes the if test and another that fails.
alien_color = "yellow";

//the versiont hat fail will have no output.
if (alien_color === "green") {
  console.log("player just earned 5 point !");
}

"use strict";
//excercise:14
let Guest_List = ["Saba", "Sana", "Suman"];
// for (let i = 0; i < Guest_List.length; i++) {
//   console.log(
//     "Dear Mam. " +
//       Guest_List[i] +
//       ",\n\nIT is our pleasure to invite you.\n\nThank You!\n\n"
//   );
// }
//excercise:15
let absent_Guest = "Saba";
let new_Guest = "Zara";
Guest_List[0] = new_Guest;
// for (let i = 0; i < Guest_List.length; i++) {
//   console.log(
//     "Dear Mam. " +
//       Guest_List[i] +
//       ",\n\nIT is our pleasure to invite you.\n\nThank You!\n\n"
//   );
// }
// console.log(`Miss. ${absent_Guest} is not coming to the party.`);
// //excercise:16
// console.log("Good News! We find big table so we are inviting 3 more guest.");
//add 3 guest in array
Guest_List.unshift("Miss Rehana");
Guest_List.splice(2, 0, "Farzana");
Guest_List.push("Hina");
// i printed 6 guest by array
// for (let i = 0; i < Guest_List.length; i++) {
//   console.log(
//     "Dear Mam. " +
//       Guest_List[i] +
//       ",\n\nIT is our pleasure to invite you.\n\nThank You!\n\n"
//   );
// }
//excercise:17
//sorry massage to guest for not invited.
// console.log("\nSorry we can not arrange big table");
//I removed guest here!
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    // console.log(`Sorry Mam. ${remove_Guest}, You are not invitedfor dinner.`);
}
// rest of 2 guest
// for (let i = 0; i < Guest_List.length; i++) {
//   console.log(
//     "Dear Mam. " +
//       Guest_List[i] +
//       ",\n\nYou are still invited.\n\nThank You!\n\n"
//   );
// }
// I removed all guest by using array
Guest_List.splice(0, 2);
console.log(Guest_List);
//Excercise 19
// print a message indicate the number of people you are inviting to dinner.
console.log(`Total number of guest are: ${Guest_List.length}`);

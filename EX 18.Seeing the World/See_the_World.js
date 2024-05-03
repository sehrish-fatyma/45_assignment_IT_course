"use strict";
// store the location in a array. make sure the array is not in alphabetical order.
let places = [
    "Itlay",
    "Germany",
    "Taj Mahal",
    "Eifel Tower",
    "Times Square",
];
// print your array in in its orginal order.
console.log("Orignal " + places);
//print your array in alphabatical order without modifying the actual list.
console.log("Copy " + [...places].sort());
//show that your array is still in its original order by printing it.
console.log("Orignal " + places);
//print your array in reverse alphabetical order without changing the order of the orginal list.
console.log("Copy " + [...places].sort().reverse());
//show that your array is still in its orginal order by printing it again.
console.log("Orignal " + places);
//reverse the order of your list. print the array to that its order has changed.
console.log("Orignal " + places.reverse());
//Reverse the order of your list again. Print the list to show it's back to its orginal order.
console.log("Orignal " + places.reverse());
//sort your array so it's stored in alphabetical order. print the array to show that its order has been changed.
console.log("Orignal " + places.sort());
//sort to change your array so it's stored in reverse alphabetical order.print the list to show that its order has changed.
console.log("Orignal " + places.sort().reverse());

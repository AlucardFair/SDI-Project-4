/* 
Zachery Hernandez
February 27, 2012
Deliverable 1
BlackBerry, Themes, SVG
*/
// String Manipulation //
var fsoLibrary = function (name) {
	// Private //
	var name;
	
	var getName = function () {
		return name
	};
	
	return {
	// Public //
	"name": getName,
	};
};
var instructor = fsoLibrary("lyndon modomo");
console.log("My Instructor is " + instructor.name() + ".");

String.prototype.toTitleCase = function () {
	var txt = "";
	var wrds = this.split(" ");
	for(key in wrds)
	{
	txt += " " + wrds[key].substr(0,1).toUpperCase()
	 + wrds[key].substr(1,wrds[key].length);
	}
   return txt;
}
var string = instructor.name();
string = string.toTitleCase();
console.log("My Instructor is" + string.toTitleCase() + ".");
alert("JavaScript works!");
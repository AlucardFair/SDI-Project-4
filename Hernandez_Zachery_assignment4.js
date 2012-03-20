/* 
Zachery Hernandez
February 27, 2012
Deliverable 1
BlackBerry, Themes, SVG
*/
// String Manipulation //
var fsoLibrary = function (name) {
	// Private //
	var name,
		course;
	
	var getName = function () {
		return name
	};
	var getCourse = function () {
		return course
	};
	
	return {
	// Public //
	"name": getName,
	"course": getCourse,
	};
};
var instructor = fsoLibrary("lyndon modomo");
console.log("My Instructor is " + instructor.name() + ".");
var teach = fsoLibrary("JavaScript, JSON");
console.log(instructor.name() + " teaches " + teach.name() + ".");

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
// Title Case Manipulation //
var string = instructor.name();
string = string.toTitleCase();
console.log("My Instructor is" + string.toTitleCase() + ".");

// Replace Manipulation //
var str = teach.name();
var newstr = str.replace(/,/i, " &");
console.log(string.toTitleCase() + " teaches " + newstr + ".");

alert("JavaScript works!");
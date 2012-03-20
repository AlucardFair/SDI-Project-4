/* 
Zachery Hernandez
February 27, 2012
Deliverable 1
BlackBerry, Themes, SVG
*/
// String Manipulation //
	// MAKEUP: Functions (Nested), deliverable 2 //
var fsoLibrary = function (name) {
	// Private //
	var name,
		course,
		phone,
		email;
	
	var getName = function () {
		return name
	};
	var getCourse = function () {
		return course
	};
	var getPhone = function () {
		if (phone === "407-679-0100") {
		return phone
	} else {
		console.log("This is not a good phone number.");
	}
	};
	var getEmail = function () {
		if (email === "lmodomo@fullsail.com") {
	} else {
		console.log("This is not a good email.");
	}
	};
	
	return {
	// Public //
	"name": getName,
	"course": getCourse,
	"phone": getPhone,
	"email": getEmail,
	};
};
var instructor = fsoLibrary("lyndon modomo");
console.log("My Instructor is " + instructor.name() + ".");
var teach = fsoLibrary("JavaScript , JSON");
console.log(instructor.name() + " teaches " + teach.name() + ".");
var contactPhone = fsoLibrary("407-679-0100");
console.log("You can reach " + instructor.name() + " at " + contactPhone.name() + ".");
var contactEmail = fsoLibrary("lmodomo@fullsail.com");
console.log("You can also reach " + instructor.name() + " at " + contactEmail.name() + ".");

// Title Case Manipulation //
String.prototype.toTitleCase = function () {
	var txt = "";
	var wrds = this.split(" ");
	for(key in wrds)
	{
	txt += " " + wrds[key].substr(0,1).toUpperCase()
	 + wrds[key].substr(1,wrds[key].length);
	}
   return txt;
} // This allows the full string to be split into separate words, then capitalizes the first letter in each word. //
var string = instructor.name(); // Calls original //
string = string.toTitleCase(); // Capitalizes original //
console.log("My Instructor is" + string.toTitleCase() + ".");


// Replace Manipulation //
var str = teach.name(); // Calls original //
var newstr = str.replace(/,/i, " &"); // Replaces declared with new declaration //
console.log(string.toTitleCase() + " teaches" + newstr + ".");
var num = contactPhone.name(); // Calls Original //
var newnum = num.replace(/407-679-0100/i, contactEmail.name()); // Replaces declared with new declaration //
console.log("You can reach " + string.toTitleCase() + " at " + contactPhone.name() + ", but sending an email to " + newnum + " is better.");

alert("JavaScript works!");
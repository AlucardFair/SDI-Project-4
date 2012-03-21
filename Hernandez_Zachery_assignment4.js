/*
Zachery Hernandez
March 22, 2012
Deliverable 4
Strings, Numbers, Arrays
Public Git Repository at: https://github.com/AlucardFair/SDI-Project-4
*/

var validationLibrary = (function(){
	
    //Does the argument follow the 111-222-3333 pattern
    var validatePhoneNumber = function (phoneNum) {
    var i = 12;
        if (i === phoneNum.length) {
            return true
        } else {
            console.log("This is not a valid phone number.");
        };
    }; //end validatePhoneNumber function
	// Replace symbols in string
    var change = function (replace) {
    	var string = "";
		var newString = string.replace(/,/i, " &"); // Replaces declared with new declaration //
	}; // end replace function
	// Title Case and split a string
	var capitalizeName = function () {
	String.prototype.toTitleCase = function (name) {
		var name = "";
		var wrds = this.split(" ");
		for(key in wrds) {
		name += " " + wrds[key].substr(0,1).toUpperCase() + wrds[key].substr(1,wrds[key].length);
		}
	}
	}; // end title case and split function
    return {
        "checkPhoneNumber": function(phoneNum) {
        	console.log("Phone Number: " + phoneNum);
            console.log("Is the phone number valid? " + validatePhoneNumber (phoneNum));
        },
        "swapSymbol": function(replace) {
			console.log(replace);
		},
		"name": function(name) {
   			console.log(name);
   		}
    };
})(); 
 
// MAIN BODY
validationLibrary.checkPhoneNumber("123-456-7890");
validationLibrary.swapSymbol("JavaScript, JSON");
validationLibrary.name("zachery hernandez");
/*
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
string = string.toTitleCase(); // Splits words in string and capitalizes original //
// Replace Manipulation //
var str = teach.name(); // Calls original //
var newstr = str.replace(/,/i, " &"); // Replaces declared with new declaration //
var num = contactPhone.name(); // Calls Original //
var newnum = num.replace(/407-679-0100/i, contactEmail.name()); // Replaces declared with new declaration //
console.log("My Instructor is" + string.toTitleCase() + ".");
console.log(string.toTitleCase() + " teaches " + newstr + ".");
console.log("You can reach" + string.toTitleCase() + " at " + contactPhone.name() + ", but sending an email to " + newnum + " is better.");
	var capitalizeName = function () {
	String.prototype.toTitleCase = function (name) {
		var txt = "";
		var wrds = this.split(" ");
		for(key in wrds) {
		txt += " " + wrds[key].substr(0,1).toUpperCase() + wrds[key].substr(1,wrds[key].length);
		}
	}
	};
   	return {
   		txt: function(name) {
   			console.log(name);
   		}
	}; // This allows the full string to be split into separate words, then capitalizes the first letter in each word. //	
*/
alert("JavaScript works!");
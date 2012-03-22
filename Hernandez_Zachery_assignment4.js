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
            return false
        };
    }; //end validatePhoneNumber function
	// Replace symbols in string
    var change = function (replace) {
    	var string = replace;
		var newString = string.replace("and", "&"); // Replaces declared with new declaration //
		return newString;
	}; // end replace function
	// Title Case and split a string
	var capitalizeName = function (name_in) {
		var name = "";
		var wrds = name_in.split(" ");
		for (key in wrds) {
			name += " " + wrds[key].substr(0,1).toUpperCase() + wrds[key].substr(1, wrds[key].length);
		}
		return name;
	}; // end title case and split function
	// Return a number from a string
	var extractNum = function (extract) {
		var numString = extract;
		var extractNum = parseInt(extract);
		return extractNum;
	};
	// Does the argument follow the http or https pattern
	var validateURL = function (urlName) {
        if (urlName.indexOf == "http:" || "https:") {
            return true
        } else {
            return false
        };
    };
    // Formatting a number to a certain amount of decimal points
    var validateCurrency = function (value) {
    	var num = value;
    	var newNum = num.toFixed(2)
    	return newNum;
    };
	
    return {
        "checkPhoneNumber": function(phoneNum) {
        	console.log("Phone Number: " + phoneNum);
            console.log("Is the phone number valid? " + validatePhoneNumber (phoneNum));
        },
        "swapSymbol": function (replace) {
        	console.log("This is fine: " + replace);
        	console.log("But, please use the ampersand when possible: " + change (replace));
        },
		"properName": function(name_in) {
			console.log("This is my name: " + name_in);
   			console.log("This is my name entered correctly:" + capitalizeName (name_in));
   		},
   		"removeNum": function(extract) {
   			console.log("This is a string: " + extract);
   			console.log("This is the number removed from the string:", extractNum (extract));
   		},
   		"checkURL": function(urlName) {
   			console.log("URL: " + urlName);
   			console.log("Is this URL valid? " + validateURL (urlName));
   		},
   		"checkMoney": function (value) {
   			console.log("This is not acceptable entry for currency:", value);
   			console.log("Please, use full decimal points when entering currency:", validateCurrency (value));
   		}
    };
})(); 
 
// MAIN BODY
validationLibrary.checkPhoneNumber("123-456-7890");
validationLibrary.swapSymbol("JavaScript and JSON");
validationLibrary.properName("zachery hernandez");
validationLibrary.removeNum("123456789");
validationLibrary.checkURL("http://www.builtbyrequest.weebly.com");
validationLibrary.checkMoney(135.5);

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
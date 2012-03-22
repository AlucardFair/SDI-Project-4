/*
Zachery Hernandez
March 22, 2012
Deliverable 4
Strings, Numbers, Manipulations
Public Git Repository at: https://github.com/AlucardFair/SDI-Project-4
*/
// REVEALING MODULE PATTERN //
var validationLibrary = (function(){
	
    //Does the argument follow the 111-222-3333 pattern //
    var validatePhoneNumber = function (phoneNum) {
    var i = 12;
        if (i === phoneNum.length) {
            return true
        } else {
            return false
        };
    }; //end validatePhoneNumber function //
	// Replace symbols in string //
    var change = function (replace) {
    	var string = replace; // calls argument as a variable
		var newString = string.replace("and", "&"); // Replaces declared with new declaration //
		return newString;
	}; // end replace function //
	// Title Case and split a string //
	var capitalizeName = function (name_in) { // calls argument, splits original string into words, capitalizes all first letters of the words, puts it all back into one string //
		var name = "";
		var wrds = name_in.split(" ");
		for (key in wrds) { 
			name += " " + wrds[key].substr(0,1).toUpperCase() + wrds[key].substr(1, wrds[key].length);
		}
		return name;
	}; // end title case and split function //
	// Return a number from a string //
	var extractNum = function (extract) {
		var numString = extract;
		var extractNum = parseInt(extract);
		return extractNum;
	}; // end return a number from a string function //
	// Does the argument follow the http or https pattern //
	var validateURL = function (urlName) {
        if (urlName.indexOf == "http:" || "https:") {
            return true
        } else {
            return false
        };
    }; // end of validateURL function //
    // Formatting a number to a certain amount of decimal points //
    var validateCurrency = function (value) {
    	var num = value;
    	var newNum = num.toFixed(2)
    	return newNum;
    }; // end of formatting number to decimal point function //
	
	// start public information //
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
    }; // end public information //
})(); // end of Revealing Module Pattern //
 
// MAIN BODY //
// All called will pass in as an argument to the public information which is then passed into the private function //
validationLibrary.checkPhoneNumber("123-456-7890");
validationLibrary.swapSymbol("JavaScript and JSON");
validationLibrary.properName("zachery hernandez");
validationLibrary.removeNum("123456789");
validationLibrary.checkURL("http://www.builtbyrequest.weebly.com");
validationLibrary.checkMoney(135.5);

alert("JavaScript works!" + '\n' + "This has been a tough month..." + '\n' + "BUT! It has been fun!");
'use strict'

// The first value is the URL to the repository, where the app can find the filed issues. 
// If you don't have a repo by yourself or are not sure what this means, just hit enter and use the default.

// The second and third values are your application tokens. How to get them? 
// Open the link below in the browser of your choice and fill out the form.
// 👉  https://github.com/settings/applications/new 👈. 


// Not sure, if there is a way to generate this in an automated way
module.exports.generateAppOAuth = function(localURL, callbackURL, oauthtoken){

	var clientID = localURL + callbackURL; // just to keep the linter happy
	var clientSecret  = oauthtoken; // just to keep the linter happy
	
	return clientID, clientSecret;
}
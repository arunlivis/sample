var Data = require('../EHR_Json/clinicadmin.json')
module.exports = {

	'Login' : function (client) {
		client
			.loginpage('browser')
		for(var i=0; i<Data.user1.length; i++){
	client
			.login(Data.user1[i].username, Data.user1[i].password)
			//.login(Data.user1[0].username, Data.user1[0].password)
			 .waitForElementPresent('.page-header', 5000)
			 .assert.containsText('h1', 'APPOINTMENTS')
			.clinicadmin_logout('browser')
		}
	}

	/*'Clinic Profile' : function (client){
		client
			.useXpath()
		var xoffset="//*[@id='mainMenu']/ul/li[1]/a".offsetLeft
		var yoffset="//*[@id='mainMenu']/ul/li[1]/a".offsetTop
		client
			.moveToElement("//*[@id='mainMenu']/ul/li[1]/a", xoffset, yoffset)
			.pause(2000)
			.click("//*[@id='mainMenu']/ul/li[1]/ul/li[1]/a")
			.waitForElementPresent("//*[@id='clinic_logo']/center[2]/a/button", 5000)
			.click("//*[@id='clinic_logo']/center[2]/a/button")
			.pause(2000)
			.useCss()
			.setValue('#file', 'C\:\\Users\\Public\\Pictures\\Sample Pictures\\Penguins.jpg')
			.pause(2000)
			 .useXpath()
			 .click("//*[@id='Logoupload']/div/div/div[3]/button[1]")
	},
	*/
	/*'To CPI' : function(client){
		client
		.useXpath()
	var xoffset="//*[@id='mainMenu']/ul/li[2]/a".offsetLeft
	var yoffset="//*[@id='mainMenu']/ul/li[2]/a".offsetTop
		client
		.moveToElement("//*[@id='mainMenu']/ul/li[2]/a", xoffset, yoffset)
		.pause(2000)
		.click("//*[@id='mainMenu']/ul/li[2]/ul/li[1]/a")
		.useCss()
		.waitForElementPresent('#patient', 7000)
		.useXpath()
		.click("//*[@id='patient']/tbody/tr[1]/td[2]/a")
		.waitForElementPresent("//*[@id='patientprofileformid']/div/div[1]", 5000)
		.click("//*[@id='formtab']/a")
		.waitForElementPresent("//*[@id='formsContent']/div[3]/div[3]/span/button", 5000)
		.click("//*[@id='formsContent']/div[3]/div[1]/a") 								//CPI form
		.pause(1000)
	},*/

	/*'Fill CPI' : function(client){
		client.fillcpi('browser')
	},*/

	/*'Logout' : function(client){
		client.clinicadmin_logout('browser')
	}*/
};
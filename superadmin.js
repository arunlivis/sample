module.exports = {
	'Super Admin' : function (client) {
		client
			.loginpage('browser')
			.login('superadmin', 'superadmin')

			.waitForElementPresent('.header-button', 5000)

			.assert.containsText('h1', 'HOME PAGE')
	},

	// 'Dashboard' : function (client) {
	// 	client
	// 		.click('a[class=small-box-footer]')
	// 		.waitForElementVisible('a[class=firstLevel]', 3000)
	// 		.click('a[class=firstLevel]')
	// 		.waitForElementPresent('.header-button', 5000)
	// 		.click('xpath', 'html/body/div[1]/section/section/div/div/div/form/div/div[2]/div/a')
	// 		.waitForElementVisible('a[class=firstLevel]', 3000)
	// 		.click('a[class=firstLevel]')
	// 		.waitForElementPresent('.header-button', 5000)
	// 		.click('xpath', 'html/body/div[1]/section/section/div/div/div/form/div/div[3]/div/a')
	// 		.waitForElementVisible('a[class=firstLevel]', 3000)
	// 		.click('a[class=firstLevel]')
	// 		.waitForElementPresent('.header-button', 5000)
	// },
	'Clinic' : function(client){
		client.useXpath()
		var xoffset="//*[@id='mainMenu']/ul/li[2]/a".offsetLeft
		var yoffset="//*[@id='mainMenu']/ul/li[2]/a".offsetTop
		client
		
			.moveToElement("//*[@id='mainMenu']/ul/li[2]/a", xoffset, yoffset)
			
			.click('xpath', "//*[@id='mainMenu']/ul/li[2]/ul/li[1]/a")
			.pause(5000)
			.useCss()
			.waitForElementPresent('h1', 5000)

			.useXpath()
			.moveToElement("//*[@id='mainMenu']/ul/li[2]/a", xoffset, yoffset)
			.click('xpath', "//*[@id='mainMenu']/ul/li[2]/ul/li[2]/a")
			

	}/*,

	'Add Clinic' : function(client){
		client			.click('xpath', 'html/body/div[1]/section/section/div/div/div/form/div/div[1]/div/a')
			.waitForElementPresent('.header-button', 5000)
			.click('#addnew')
			.waitForElementPresent('.header-button', 5000)
			.setValue('#clinicname', 'Test Clinic')
			.click('#startedyear')
			.click('xpath', 'html/body/div[3]/div/div[1]/table/thead/tr[1]/th[2]')
			.click('xpath', 'html/body/div[3]/div/div[2]/table/thead/tr/th[2]')
			.click('xpath', 'html/body/div[3]/div/div[3]/table/thead/tr/th[1]')
			.click('xpath', 'html/body/div[3]/div/div[3]/table/tbody/tr/td/span[2]')
			.click('xpath', 'html/body/div[3]/div/div[2]/table/tbody/tr/td/span[2]')
			.click('xpath', 'html/body/div[3]/div/div[1]/table/tbody/tr[2]/td[3]')
			.setValue('#physicianname', 'Dr. Mark, MDO.,')
			.setValue('#emailId', 'mark@gmail.com')
			.setValue('#clinicphone', '12345')
			.setValue('#doctorphone', '0987')//EIN
			.setValue('#address', '104, Blk Blvd, ')
			.setValue('#city', 'Columbus')
			.setValue('#zipcode', '123456')
			.click('#country option[value=Uruguay]')
			.click('#state option[value=Florida]')
			.click('button[type=reset]')
			.click('button[type=button]')
			//.click('#clinic_submit_button')
	},*/
/*
	'Logout' : function(client){
		client
			.waitForElementVisible('a[class=firstLevel]', 3000)
			.click('a[class=firstLevel]')
			.waitForElementPresent('.header-button', 5000)
			.click('xpath', 'html/body/div[1]/header/div[2]/div/div/nav/ul/li[3]/a')
	}*/
};
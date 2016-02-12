var Data = require('../EHR_Json/clinicadmin.json')
module.exports = {

	'Clinic Admin' : function (client) {
		
		client
			.loginpage('browser')
			.login(Data.user1[0].username, Data.user1[0].password)

			.waitForElementPresent('.page-header', 5000)

			.assert.containsText('h1', 'APPOINTMENTS')
			.useXpath()
		var xoffset="//*[@id='mainMenu']/ul/li[2]/a".offsetLeft
		var yoffset="//*[@id='mainMenu']/ul/li[2]/a".offsetTop
		client
			.moveToElement("//*[@id='mainMenu']/ul/li[2]/a", xoffset, yoffset)
			.pause(2000)
			.click("//*[@id='mainMenu']/ul/li[2]/ul/li[1]/a")
			.useCss()
			.waitForElementPresent('#patient', 5000)
			.useXpath()
			.click("//*[@id='33']/a[3]/i")
			.pause(2000)
			.windowHandles(function(result) {
    			var newWindow;
    			this.verify.equal(result.value.length, 2, 'There should be 2 windows   open');
    			newWindow = result.value[1];
    			this.switchWindow(newWindow);
    			//this.verify.urlContains('http://192.168.1.236:8083/EHR/Clinicadmin/schedulePatientAppointmentWindow');
			})
			.waitForElementPresent("html/body/header/div/div/div/h1", 5000)
			.click("//*[@id='calendar']/div[2]/div/table/tbody/tr/td/div/div/div[2]/div[1]/table/tbody/tr/td[5]")
			
	}
}
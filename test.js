var Data = require('../EHR_Json/clinicadmin.json')
module.exports = {

	'Clinic Admin' : function (client) {
		
	client
		.url('http://192.168.1.236:8083/EHR/index')
		.useXpath()
		.waitForElementPresent("//*[@id='globalWrapper']/section[2]/div/div/div[1]/button", 4000)
		.click("//*[@id='globalWrapper']/section[2]/div/div/div[1]/button")
		.waitForElementPresent("//*[@id='loginFormId']/div/button", 5000)
		.useCss()
		.setValue('#username_id', 'PERCan8923')
		.setValue('#password_id', 'PERCan8923')
		.useXpath()
		.click("//*[@id='loginFormId']/div/button")
		.waitForElementPresent("//*[@id='page']/header/div/div/div/h1", 5000)
		
		.click("//*[@id='mainMenu']/ul/li[2]/a")
		.pause(500)
		.click("//*[@id='mainMenu']/ul/li[2]/ul/li[1]/a")
		.waitForElementPresent("//*[@id='patient']/tbody/tr[1]/td[2]/a", 5000)
		.click("//*[@id='patient']/tbody/tr[1]/td[2]/a")
		.waitForElementPresent("//*[@id='formtab']/a", 3000)
		.click("//*[@id='mainContent']/div[8]/ul/li[5]/a")
		.waitForElementPresent("//*[@id='adminDefaultFormsContent']/div[3]/div[1]/a", 5000)
		.click("//*[@id='adminDefaultFormsContent']/div[3]/div[1]/a")
		.waitForElementPresent("//*[@id='adminDefaultFormsContent']/h3/b", 5000)

		.click("//*[@id='healthinsuranceverificationdate']/span/span")
		
		.click("html/body/div[*]/div/div[1]/table/tbody/tr[4]/td[4]")
		
	}
};

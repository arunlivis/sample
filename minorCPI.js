
var Data = require('../EHR_Json/clinicadmin.json');
$.getScript("cpi.js", function(){

   alert("Script loaded but not necessarily executed.");

});

module.exports = {

	'Clinic Admin' : function (client) {
		
	client
		.loginpage('browser')
		.login(Data.user1[0].username, Data.user1[0].password)
		.waitForElementPresent('.page-header', 5000)
		.assert.containsText('h1', 'APPOINTMENTS')
		.toPatientForms('browser')
		.useXpath()
		.click("//*[@id='formsContent']/div[7]/div[1]/a")
		.waitForElementPresent("//*[@id='consent-minor-form']/div[1]/div[1]/h3/b", 3000)
		.click("//*[@id='consenttominor_date']/span/span")


		//.waitForElementNotPresent("html/body/div[11]/div/div[1]/table/tbody/tr[3]/td[6]", 3000)
		.click("html/body/div[7]/div/div[1]/table/tbody/tr[3]/td[4]")
		.pause(10000)
		/*
		var date = "html/body/div[10]/div/div[1]/table/tbody/tr[2]/td[4]"
		client
		.useXpath()
		.getText(date, function(result){

			//client.click(result.value)
			console.log((result.value).toString()+" for date")
		})
			*/		
		
	}
}
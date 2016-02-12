var Data = require('../EHR_Json/clinicadmin.json')
var randAccident = Math.floor((Math.random()*2)+1)
module.exports = {

	'Clinic Admin' : function (client) {
		
	client
		.loginpage('browser')
		.login(Data.user1[0].username, Data.user1[0].password)
		.waitForElementPresent('.page-header', 5000)
		.assert.containsText('h1', 'APPOINTMENTS')
		.toPatientForms('browser')
		.toCPI('browser')
		
		//Fill CPI form
		.studentCPI('browser')
			
		//Are You Pregnant
		.pregnantCPI('browser')
		
		//Have you ever had chiropractic care?
		.chiropracticCPI('browser')

		//Symptoms
		.symptomCPI('browser')
				//Are These Symptoms Due to an Accident?
		console.log(randAccident+"    jfdfs")
		var accident = "//*[@id='symptomsDueToAccidentDivId']/label["+randAccident+"]"
		
	client
		.useXpath()
		.click(accident)
		.getText(accident, function(result){
		if(result.value=="Yes"){
		var randAccidentType = Math.floor((Math.random()*3)+1)
		var accidentType = "//*[@id='accident']/div[1]/div[1]/div[2]/label["+randAccidentType+"]"
		
		client
			.useXpath()
			.click(accidentType)
			.getText(accidentType, function(result){
			if(result.value=="Other"){
			client
				.useCss()
				.clearValue('#otherTypeOfAccident_id')
				.setValue('#otherTypeOfAccident_id', 'slip')
			}
			if(result.value=="Auto"){
					client
						.useCss()
						.clearValue('#autoInsuranceName_id')
						.setValue('#autoInsuranceName_id', 'Auto Insurance')
						.clearValue('#autoInsurancePhone_id')
						.setValue('#autoInsurancePhone_id', '11111111111')
						.clearValue('#autoInsurancePolicy_id')
						.setValue('#autoInsurancePolicy_id', 'PIA123')
					}
					if(result.value=="Work"){
					client
						.useCss()
						.clearValue('#autoInsuranceName_id')
						.setValue('#autoInsuranceName_id', 'Work Insurance')
						.clearValue('#autoInsurancePhone_id')
						.setValue('#autoInsurancePhone_id', '22222222222')
						.clearValue('#autoInsurancePolicy_id')
						.setValue('#autoInsurancePolicy_id', 'PIW123')
					}
			})

			
					
			client
				.useXpath()
				.click("//*[@id='dateOfAccident_date']/span/span")
				.click("html/body/div[1]/div/div[1]/table/tbody/tr[1]/td[5]")
				.pause(500)
			var randaccidentReported = Math.floor((Math.random()*2)+1)
			var accidentReported = "//*[@id='accidentReportedDivId']/label["+randaccidentReported+"]"
			client
				.click(accidentReported)
				.getText(accidentReported, function(result){
					if(result.value=="Yes"){
					var randWhom = Math.floor((Math.random()*3)+1)
					client
						.click('xpath', "//*[@id='accidentReportedWhomDivId']/label["+randWhom+"]")
					}
				})
				client
					.useCss()
					.clearValue('#medicalTreatmentWhere_id')
					.setValue('#medicalTreatmentWhere_id', 'Global Hospital #12')
					.useXpath()
					.click("//*[@id='medicalTreatmentWhen_date']/span/span")
					.click("html/body/div[8]/div/div[1]/table/tbody/tr[3]/td[5]")
					.pause(500)
					.attorneyCPI('browser')
					.faultCPI('browser')
					
				}

			})
			var randPrevAccident = Math.floor((Math.random()*2)+1)
			var prevAccident = "//*[@id='involvedBeforeInAutoWorkAccidentDivId']/label["+randPrevAccident+"]"
			client
			
				.useXpath()
				.click(prevAccident)
				.getText(prevAccident, function(result){
					
				if(result.value=="Yes"){
					client
					.useXpath()
					.click("//*[@id='previousaccident_date']/span/span")
					.click("html/body/div[9]/div/div[1]/table/tbody/tr[3]/td[5]")
					.pause(500)
					
				}
		})
			
			client
			//Insurane
				.insuranceCPI('browser')
			


			//Medical History
				for(var i=0; i<25; i++){
					var randMedHistory = Math.floor((Math.random()*35)+1)
					var medHistory = '#medicalHistory'+randMedHistory
			
					client
					
						.click(medHistory)
					}

			//Current Medicine Details
			 client
				 .medicineCPI('browser')

			//Do You
				.doYouCPI('browser')

			//Do You Work Around Hazardous Substances?
				var randHazardous = Math.floor((Math.random()*2)+1)
				var hazardous = "//*[@id='workAroundHazardousSubstancesDivId']/label["+randHazardous+"]"
				client
					.useXpath()
					.click(hazardous)
					if(randHazardous==1){
						client
							.useCss()
							.clearValue('#hazardousSubstancesList_id')
							.setValue('#hazardousSubstancesList_id', 'Test')
					}

			client
					.useCss()
					.click('#acceptstatement_id')

			//Save Screenshot
				/*	.useCss()
		
					.getText('#usernameId', function(result){
						var res=result.value
						var name=res.toString().substring(11)
						var save_directory = 'EHR_screenshot/'+name
						var date =new Date();
						var print=date.getDate()+""+(date.getMonth()+1)+""+date.getFullYear()+""+date.getHours()+""+date.getMinutes()+""+date.getSeconds();
						client
							.saveScreenshot(save_directory+'/'+""+'CPI_'+print+'.jpg')
					})*/

			
					//.click('xpath', "//*[@id='cpiformid']/div[14]/button")		//Cancel
					//.click('xpath', "//*[@id='cpiformid']/div[14]/input")		//Save

			
	}
}
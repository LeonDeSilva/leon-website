function sendRequest() {
	const Http = new XMLHttpRequest();
  	const url='https://hpb.health.gov.lk/api/get-current-statistical';
	Http.open("GET", url);
	Http.send();

	Http.onreadystatechange = (e) => {
		var response = Http.responseText;
  		var obj = JSON.parse(response);
  		var data = obj["data"];
  	

	    var dateTime = data["update_date_time"];
	    var localNewCount = data["local_new_cases"];
	    var localTotalCount = data["local_total_cases"];
	    var localCountInHospitals = data["local_total_number_of_individuals_in_hospitals"];
	    var localDeathCount = data["local_deaths"];
	    var localNewDeathCount = data["local_new_deaths"];
	    var localRecoveredCount = data["local_recovered"];
	    var localActiveCases = data["local_active_cases"];
	    
	    var globalNewCount = data["global_new_cases"];
	    var globalTotalCount = data["global_total_cases"];
	    var globalDeathCount = data["global_deaths"];
	    var globalNewDeathCount = data["global_new_deaths"];
	    var globalRecoveredCount = data["global_recovered"];

		document.getElementById("head11").innerHTML = "Total"
	    document.getElementById("head12").innerHTML = "New"
	    document.getElementById("head13").innerHTML = "Active"

	    document.getElementById("head21").innerHTML = "Recovered"
	    document.getElementById("head22").innerHTML = "Deaths"
	    document.getElementById("head23").innerHTML = "Hospitalized"

	    document.getElementById("data11").innerHTML = localTotalCount;
	    document.getElementById("data12").innerHTML = localNewCount;
	    document.getElementById("data13").innerHTML = localActiveCases;

		document.getElementById("data21").innerHTML = localRecoveredCount;

		
		if (localNewDeathCount > 0) {
	    	document.getElementById("data22").innerHTML = localDeathCount + " (+" + localNewDeathCount + ")";
	    } else {
	    	document.getElementById("data22").innerHTML = localDeathCount;
	    }
	    
	    document.getElementById("data23").innerHTML = localCountInHospitals;

	    // Global

	    document.getElementById("head11_2").innerHTML = "Total"
	    document.getElementById("head12_2").innerHTML = "New"
	    document.getElementById("head13_2").innerHTML = "Recovered"

	    document.getElementById("head21_2").innerHTML = "Recover Rate"
	    document.getElementById("head22_2").innerHTML = "Deaths"
	    document.getElementById("head23_2").innerHTML = "New Deaths"

	    document.getElementById("data11_2").innerHTML = globalTotalCount;
	    document.getElementById("data12_2").innerHTML = globalNewCount;
	    document.getElementById("data13_2").innerHTML = globalRecoveredCount;

		document.getElementById("data21_2").innerHTML = ((globalRecoveredCount / globalTotalCount) * 100).toFixed(2) + "%";
    	document.getElementById("data22_2").innerHTML = globalDeathCount;
	    document.getElementById("data23_2").innerHTML = globalNewDeathCount;
  	
	}
}
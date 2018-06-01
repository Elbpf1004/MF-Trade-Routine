

// Know the Account section to Green Background
function makeTableBGGreen() {
	var knowAccountTable = document.getElementById("knowAccountTable");
	
	var acctNumber = document.getElementById("acctNumber");
	var stateReg = document.getElementById("stateReg");
	var phoneNumber = document.getElementById("phoneNumber");
	var stateCalling = document.getElementById("stateCalling");
	var alertsPanel = document.getElementById("alertsPanel");
	var ordersTab = document.getElementById("ordersTab");
	var detailsTab = document.getElementById("detailsTab");
	
	var knowSecurityTable = document.getElementById("knowSecurityTable");
	
	if(acctNumber.checked && stateReg.checked && phoneNumber.checked && stateCalling.checked && alertsPanel.checked && ordersTab.checked && detailsTab.checked) {
		knowAccountTable.style.backgroundColor = "#aafc9c";
	}
	else {
		knowAccountTable.style.backgroundColor = "beige";
	}
}

// Form Elements to Green when checked
function makeElementGreen(green, greenText, greenImage, greenTableName) {
	
	var acctNumber = document.getElementById("acctNumber");
	var stateReg = document.getElementById("stateReg");
	var phoneNumber = document.getElementById("phoneNumber");
	var stateCalling = document.getElementById("stateCalling");
	var alertsPanel = document.getElementById("alertsPanel");
	var ordersTab = document.getElementById("ordersTab");
	var detailsTab = document.getElementById("detailsTab");
	
	var color = document.getElementById(green);
	var colorText = document.getElementById(greenText);
	var colorImage = document.getElementById(greenImage);
	var tableName = document.getElementById(greenTableName);
	
	if(color.checked) {
		colorText.style.color = "green";
		colorText.style.fontWeight = 900;
		colorImage.style.visibility = "initial";
		if(tableName == "knowAccountTable") {
			if(acctNumber.checked && stateReg.checked && phoneNumber.checked && stateCalling.checked && alertsPanel.checked && ordersTab.checked && detailsTab.checked) {
				tableName.style.backgroundColor = "#aafc9c";
			}
			else {
				tableName.style.backgroundColor = "beige";
			}
		}
		else if(tableName === "knowTradeTable") {
			tableName.style.backgroundColor = "#aafc9c";
		}
		else {
			tableName.style.backgroundColor = "beige";
		}
	}
	else {
		colorText.style.color = "black";
		colorText.style.fontWeight = 400;
		colorImage.style.visibility = "hidden";
	}
	
}

// Phone Number Text Field auto checks the Checkbox
function phoneNumberChecker() {
	var phoneNumberTxt = document.getElementById("phoneNumberTxt").value;
	var phoneNumber = document.getElementById("phoneNumber");
	var phoneNumberText = document.getElementById("phoneNumberText");
	var phoneNumberImage = document.getElementById("phoneNumberImage");
	
	if(phoneNumberTxt.length >= 12) {
		phoneNumber.checked = true;
		phoneNumberText.style.color = "green";
		phoneNumberText.style.fontWeight = 900;
		phoneNumberImage.style.visibility = "initial"
		makeTableBGGreen();
	}
	else {
		phoneNumber.checked = false;
		phoneNumberText.style.color = "black";
		phoneNumberText.style.fontWeight = 400;
		phoneNumberImage.style.visibility = "hidden"
		makeTableBGGreen();
	}
}

// State Calling Text Field auto checks the checkbox
function stateCallingChecker() {
	var stateCalling = document.getElementById("stateCalling");
	var stateCallingTxt = document.getElementById("stateCallingTxt").value;
	var stateCallingText = document.getElementById("stateCallingText");
	var stateCallingImage = document.getElementById("stateCallingImage");
	
	if(stateCallingTxt.length >= 2) {
		stateCalling.checked = true;
		stateCallingText.style.color = "green";
		stateCallingText.style.fontWeight = 900;
		stateCallingImage.style.visibility = "initial";
		makeTableBGGreen();
	}
	else {
		stateCalling.checked = false;
		stateCallingText.style.color = "black";
		stateCallingText.style.fontWeight = 400;
		stateCallingImage.style.visibility = "hidden";
		makeTableBGGreen();
	}
}

// Know the Trade section to Green Background
function makeKnowTradeBGGreen() {
	var knowTradeTable = document.getElementById("knowTradeTable");
	
	var buy = document.getElementById("buy");
	var sell = document.getElementById("sell");
	var exchange = document.getElementById("exchange");
	var sellToBuy = document.getElementById("sellToBuy");
}

// Dollars or Shares indicated next to text field depending on what's clicked
function showDollarShares() {
	var dollars = document.getElementById("dollars");
	var shares = document.getElementById("shares");
	var dollarAmt = document.getElementById("dollarAmt");
	var shareQty = document.getElementById("shareQty");
	
	if(dollars.checked){
		dollarAmt.innerHTML = "$ ";
		shareQty.innerHTML = "";
	}
	else if(shares.checked) {
		shareQty.innerHTML = "Shares";
		dollarAmt.innerHTML = "";
	}
	else {
		dollarAmt.innerHTML = "";
		shareQty.innerHTML = "";
	}
}



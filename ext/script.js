document.getElementById("auto-fill").addEventListener("click", () => {
	/* Auto fill form */
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			name: document.getElementById('name1').value,
			age: document.getElementById('age1').value,
			gender: document.getElementById('genderDropdown1').value,
			proof: document.getElementById('ProofDropdown1').value,
			proofNum: document.getElementById('aadhar1').value,
			name2: document.getElementById('name2').value,
			age2: document.getElementById('age2').value,
			gender2: document.getElementById('genderDropdown2').value,
			proof2: document.getElementById('ProofDropdown2').value,
			proofNum2: document.getElementById('aadhar2').value,
			name3: document.getElementById('name3').value,
			age3: document.getElementById('age3').value,
			gender3: document.getElementById('genderDropdown3').value,
			proof3: document.getElementById('ProofDropdown3').value,
			proofNum3: document.getElementById('aadhar3').value,
			name4: document.getElementById('name4').value,
			age4: document.getElementById('age4').value,
			gender4: document.getElementById('genderDropdown4').value,
			proof4: document.getElementById('ProofDropdown4').value,
			proofNum4: document.getElementById('aadhar4').value,
			mobilenumber: document.getElementById('mobilenumber').value,
			emailid: document.getElementById('emailid').value,
			country: document.getElementById('country').value,
			state: document.getElementById('state').value,
			district: document.getElementById('district').value,
			address1: document.getElementById('add1').value,
			address2: document.getElementById('add2').value,
			city: document.getElementById('city').value,
			pincode: document.getElementById('pincode').value
		}, function(response) {
			//console.log(response.status);
		});
	});
});


document.getElementById("reset-fields").addEventListener("click", () => {
	/* Reset extension form values */
	document.getElementById('name1').value = '';
	document.getElementById('age1').value = '';
	document.getElementById('genderDropdown1').value = 'Select';
	document.getElementById('ProofDropdown1').value = 'Select';
	document.getElementById('aadhar1').value = '';
	document.getElementById('name2').value = '';
	document.getElementById('age2').value = '';
	document.getElementById('genderDropdown2').value = 'Select';
	document.getElementById('ProofDropdown2').value = 'Select';
	document.getElementById('aadhar2').value = '';
	document.getElementById('name3').value = '';
	document.getElementById('age3').value = '';
	document.getElementById('genderDropdown3').value = 'Select';
	document.getElementById('ProofDropdown3').value = 'Select';
	document.getElementById('aadhar3').value = '';
	document.getElementById('name4').value = '';
	document.getElementById('age4').value = '';
	document.getElementById('genderDropdown4').value = 'Select';
	document.getElementById('ProofDropdown4').value = 'Select';
	document.getElementById('aadhar4').value = '';
	document.getElementById('mobilenumber').value = '';
	document.getElementById('emailid').value = '';
	document.getElementById('country').value = '';
	document.getElementById('state').value = '';
	document.getElementById('district').value = '';
	document.getElementById('address1').value = '';
	document.getElementById('address2').value = '';
	document.getElementById('city').value = '';
	document.getElementById('pincode').value = '';
});


document.getElementById("save").addEventListener("click", () => {
	chrome.storage.sync.set({
		name: document.getElementById('name1').value,
		age: document.getElementById('age1').value,
		gender: document.getElementById('genderDropdown1').value,
		proof: document.getElementById('ProofDropdown1').value,
		proofNum: document.getElementById('aadhar1').value,
		name2: document.getElementById('name2').value,
		age2: document.getElementById('age2').value,
		gender2: document.getElementById('genderDropdown2').value,
		proof2: document.getElementById('ProofDropdown2').value,
		proofNum2: document.getElementById('aadhar2').value,
		name3: document.getElementById('name3').value,
		age3: document.getElementById('age3').value,
		gender3: document.getElementById('genderDropdown3').value,
		proof3: document.getElementById('ProofDropdown3').value,
		proofNum3: document.getElementById('aadhar3').value,
		name4: document.getElementById('name4').value,
		age4: document.getElementById('age4').value,
		gender4: document.getElementById('genderDropdown4').value,
		proof4: document.getElementById('ProofDropdown4').value,
		proofNum4: document.getElementById('aadhar4').value,
		mobilenumber: document.getElementById('mobilenumber').value,
		emailid: document.getElementById('emailid').value,
		country: document.getElementById('country').value,
		state: document.getElementById('state').value,
		district: document.getElementById('district').value,
		address1: document.getElementById('add1').value,
		address2: document.getElementById('add2').value,
		city: document.getElementById('city').value,
		pincode: document.getElementById('pincode').value
	}, function() {
		console.log("Saved!");
	});
});

document.getElementById("load").addEventListener("click", () => {
	chrome.storage.sync.get([
		'name',
		'age',
		'gender',
		'proof',
		'proofNum',
		'name2',
		'age2',
		'gender2',
		'proof2',
		'proofNum2',
		'name3',
		'age3',
		'gender3',
		'proof3',
		'proofNum3',
		'name4',
		'age4',
		'proof4',
		'proofNum4',
		'gender4',
		'mobilenumber',
		'emailid',
		'country',
		'state',
		'district',
		'address1',
		'address2',
		'city',
		'pincode'
	], function(result) {
		document.getElementById('name1').value = result.name;
		document.getElementById('age1').value = result.age;
		document.getElementById('genderDropdown1').value = result.gender;
		document.getElementById('ProofDropdown1').value = result.proof;
		document.getElementById('aadhar1').value = result.proofNum;
		document.getElementById('name2').value = result.name2;
		document.getElementById('age2').value = result.age2;
		document.getElementById('genderDropdown2').value = result.gender2;
		document.getElementById('ProofDropdown2').value = result.proof2;
		document.getElementById('aadhar2').value = result.proofNum2;
		document.getElementById('name3').value = result.name3;
		document.getElementById('age3').value = result.age3;
		document.getElementById('genderDropdown3').value = result.gender3;
		document.getElementById('ProofDropdown3').value = result.proof3;
		document.getElementById('aadhar3').value = result.proofNum3;
		document.getElementById('name4').value = result.name4;
		document.getElementById('age4').value = result.age4;
		document.getElementById('genderDropdown4').value = result.gender4;
		document.getElementById('ProofDropdown4').value = result.proof4;
		document.getElementById('aadhar4').value = result.proofNum4;
		document.getElementById('mobilenumber').value = result.mobilenumber;
		document.getElementById('emailid').value = result.emailid;
		document.getElementById('country').value = result.country;
		document.getElementById('state').value = result.state;
		document.getElementById('district').value = result.district;
		document.getElementById('add1').value = result.address1;
		document.getElementById('add2').value = result.address2;
		document.getElementById('city').value = result.city;
		document.getElementById('pincode').value = result.pincode;
		// console.log(`--$$------------------Name:  ${result.name}`);
        // console.log(`--$$-----------------age:  ${result.age}`);
	});
});

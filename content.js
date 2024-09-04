chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        try {
            // console.log(`--------------------Name:  ${request.name}`);
            // console.log(`--------------------age:  ${request.age}`);
            setTimeout(() => {
                const nameType1 = document.getElementById('fName_0');
                document.getElementById("fName_0").value = request.name;
                nameType1.classList.remove('ng-pristine', 'ng-invalid', 'ng-untouched');
                nameType1.classList.add('ng-dirty', 'ng-valid', 'ng-touched');
                nameType1.dispatchEvent(new Event('input', { bubbles: true }));
                nameType1.dispatchEvent(new Event('change', { bubbles: true }));
                nameType1.dispatchEvent(new Event('blur', { bubbles: true }));
            }, 500);

            setTimeout(() => {
                const  ageType1 = document.getElementById('age_0');
                document.getElementById("age_0").value = request.age;
                ageType1.classList.remove('ng-pristine', 'ng-invalid', 'ng-untouched');
                ageType1.classList.add('ng-dirty', 'ng-valid', 'ng-touched');
                ageType1.dispatchEvent(new Event('input', { bubbles: true }));
                ageType1.dispatchEvent(new Event('change', { bubbles: true }));
                ageType1.dispatchEvent(new Event('blur', { bubbles: true }));
            }, 500);

            setTimeout(() => {
                const typeSelect1 = document.querySelector('select[name="TypeS"]');
                typeSelect1.value = request.gender;
                typeSelect1.classList.remove('ng-untouched');
                typeSelect1.classList.add('ng-touched', 'ng-dirty');
                typeSelect1.dispatchEvent(new Event('input', { bubbles: true }));
                typeSelect1.dispatchEvent(new Event('change', { bubbles: true }));
                typeSelect1.dispatchEvent(new Event('blur', { bubbles: true }));
            }, 500);

            setTimeout(() => {
                proofElement = document.getElementById('photoId_0');
                if (proofElement) {
                proofElement.value = 10003;
                proofElement.classList.remove('ng-untouched');
                proofElement.classList.add('ng-touched', 'ng-dirty');
                proofElement.dispatchEvent(new Event('input', { bubbles: true }));
                proofElement.dispatchEvent(new Event('change', { bubbles: true }));
                proofElement.dispatchEvent(new Event('blur', { bubbles: true }));
                }
            }, 500);

            setTimeout(() => {
                const proofNuminput1 = document.getElementById('photoIdNum_0');
                if(proofNuminput1){
                document.getElementById("photoIdNum_0").value = request.proofNum;
                proofNuminput1.classList.remove('ng-pristine', 'ng-invalid', 'ng-untouched');
                proofNuminput1.classList.add('ng-dirty', 'ng-valid', 'ng-touched');
                proofNuminput1.dispatchEvent(new Event('input', { bubbles: true }));
                proofNuminput1.dispatchEvent(new Event('change', { bubbles: true }));
                proofNuminput1.dispatchEvent(new Event('blur', { bubbles: true }));
                }
            }, 500);
///////////////
            setTimeout(() => {
                const nameType2 = document.getElementById('fName_1');
                document.getElementById("fName_1").value = request.name2;
                nameType2.classList.remove('ng-pristine', 'ng-invalid', 'ng-untouched');
                nameType2.classList.add('ng-dirty', 'ng-valid', 'ng-touched');
                nameType2.dispatchEvent(new Event('input', { bubbles: true }));
                nameType2.dispatchEvent(new Event('change', { bubbles: true }));
                nameType2.dispatchEvent(new Event('blur', { bubbles: true }));
            }, 500);

            setTimeout(() => {
                const  ageType2 = document.getElementById('age_1');
                document.getElementById("age_1").value = request.age2;
                ageType2.classList.remove('ng-pristine', 'ng-invalid', 'ng-untouched');
                ageType2.classList.add('ng-dirty', 'ng-valid', 'ng-touched');
                ageType2.dispatchEvent(new Event('input', { bubbles: true }));
                ageType2.dispatchEvent(new Event('change', { bubbles: true }));
                ageType2.dispatchEvent(new Event('blur', { bubbles: true }));
            }, 500);

            setTimeout(() => {
                const targetTd2 = document.querySelectorAll('td.gender-cell-data')[1];
                const typeSelect2 = targetTd2.querySelector('select[name="TypeS"]');
                typeSelect2.value =  request.gender2;
                typeSelect2.classList.remove('ng-untouched');
                typeSelect2.classList.add('ng-touched', 'ng-dirty');
                typeSelect2.dispatchEvent(new Event('input', { bubbles: true }));
                typeSelect2.dispatchEvent(new Event('change', { bubbles: true }));
                typeSelect2.dispatchEvent(new Event('blur', { bubbles: true }));
            }, 500);

            setTimeout(() => {
                proofElement2 = document.getElementById('photoId_1');
                if (proofElement2) {
                proofElement2.value = 10003;
                proofElement2.classList.remove('ng-untouched');
                proofElement2.classList.add('ng-touched', 'ng-dirty');
                proofElement2.dispatchEvent(new Event('input', { bubbles: true }));
                proofElement2.dispatchEvent(new Event('change', { bubbles: true }));
                proofElement2.dispatchEvent(new Event('blur', { bubbles: true }));
                }
            }, 500);

            setTimeout(() => {
                const proofNuminput2 = document.getElementById('photoIdNum_1');
                if(proofNuminput2){
                document.getElementById("photoIdNum_1").value = request.proofNum2;
                proofNuminput2.classList.remove('ng-pristine', 'ng-invalid', 'ng-untouched');
                proofNuminput2.classList.add('ng-dirty', 'ng-valid', 'ng-touched');
                proofNuminput2.dispatchEvent(new Event('input', { bubbles: true }));
                proofNuminput2.dispatchEvent(new Event('change', { bubbles: true }));
                proofNuminput2.dispatchEvent(new Event('blur', { bubbles: true }));
                }
            }, 500);

//////////////
            setTimeout(() => {
                const nameType3 = document.getElementById('fName_2');
                document.getElementById("fName_2").value = request.name3;
                nameType3.classList.remove('ng-pristine', 'ng-invalid', 'ng-untouched');
                nameType3.classList.add('ng-dirty', 'ng-valid', 'ng-touched');
                nameType3.dispatchEvent(new Event('input', { bubbles: true }));
                nameType3.dispatchEvent(new Event('change', { bubbles: true }));
                nameType3.dispatchEvent(new Event('blur', { bubbles: true }));
            }, 500);

            setTimeout(() => {
                const  ageType3 = document.getElementById('age_2');
                document.getElementById("age_2").value = request.age3;
                ageType3.classList.remove('ng-pristine', 'ng-invalid', 'ng-untouched');
                ageType3.classList.add('ng-dirty', 'ng-valid', 'ng-touched');
                ageType3.dispatchEvent(new Event('input', { bubbles: true }));
                ageType3.dispatchEvent(new Event('change', { bubbles: true }));
                ageType3.dispatchEvent(new Event('blur', { bubbles: true }));
            }, 500);

            setTimeout(() => {
                const targetTd3 = document.querySelectorAll('td.gender-cell-data')[2];
                const typeSelect3 = targetTd3.querySelector('select[name="TypeS"]');
                typeSelect3.value =  request.gender3;
                typeSelect3.classList.remove('ng-untouched');
                typeSelect3.classList.add('ng-touched', 'ng-dirty');
                typeSelect3.dispatchEvent(new Event('input', { bubbles: true }));
                typeSelect3.dispatchEvent(new Event('change', { bubbles: true }));
                typeSelect3.dispatchEvent(new Event('blur', { bubbles: true }));
            }, 500);

            setTimeout(() => {
                proofElement3 = document.getElementById('photoId_2');
                if (proofElement3) {
                proofElement3.value = 10003;
                proofElement3.classList.remove('ng-untouched');
                proofElement3.classList.add('ng-touched', 'ng-dirty');
                proofElement3.dispatchEvent(new Event('input', { bubbles: true }));
                proofElement3.dispatchEvent(new Event('change', { bubbles: true }));
                proofElement3.dispatchEvent(new Event('blur', { bubbles: true }));
                }
            }, 500);

            setTimeout(() => {
                const proofNuminput3 = document.getElementById('photoIdNum_2');
                if(proofNuminput3){
                document.getElementById("photoIdNum_2").value = request.proofNum3;
                proofNuminput3.classList.remove('ng-pristine', 'ng-invalid', 'ng-untouched');
                proofNuminput3.classList.add('ng-dirty', 'ng-valid', 'ng-touched');
                proofNuminput3.dispatchEvent(new Event('input', { bubbles: true }));
                proofNuminput3.dispatchEvent(new Event('change', { bubbles: true }));
                proofNuminput3.dispatchEvent(new Event('blur', { bubbles: true }));
                }
            }, 500);
/////////////////

            setTimeout(() => {
                const nameType4 = document.getElementById('fName_3');
                document.getElementById("fName_3").value = request.name4;
                nameType4.classList.remove('ng-pristine', 'ng-invalid', 'ng-untouched');
                nameType4.classList.add('ng-dirty', 'ng-valid', 'ng-touched');
                nameType4.dispatchEvent(new Event('input', { bubbles: true }));
                nameType4.dispatchEvent(new Event('change', { bubbles: true }));
                nameType4.dispatchEvent(new Event('blur', { bubbles: true }));
            }, 500);

            setTimeout(() => {
                const  ageType4 = document.getElementById('age_3');
                document.getElementById("age_3").value = request.age4;
                ageType4.classList.remove('ng-pristine', 'ng-invalid', 'ng-untouched');
                ageType4.classList.add('ng-dirty', 'ng-valid', 'ng-touched');
                ageType4.dispatchEvent(new Event('input', { bubbles: true }));
                ageType4.dispatchEvent(new Event('change', { bubbles: true }));
                ageType4.dispatchEvent(new Event('blur', { bubbles: true }));
            }, 500);

            setTimeout(() => {
                const targetTd4 = document.querySelectorAll('td.gender-cell-data')[3];
                const typeSelect4 = targetTd4.querySelector('select[name="TypeS"]');
                typeSelect4.value =  request.gender4;
                typeSelect4.classList.remove('ng-untouched');
                typeSelect4.classList.add('ng-touched', 'ng-dirty');
                typeSelect4.dispatchEvent(new Event('input', { bubbles: true }));
                typeSelect4.dispatchEvent(new Event('change', { bubbles: true }));
                typeSelect4.dispatchEvent(new Event('blur', { bubbles: true }));
            }, 500);

            setTimeout(() => {
                proofElement4 = document.getElementById('photoId_3');
                if (proofElement4) {
                proofElement4.value = 10003;
                proofElement4.classList.remove('ng-untouched');
                proofElement4.classList.add('ng-touched', 'ng-dirty');
                proofElement4.dispatchEvent(new Event('input', { bubbles: true }));
                proofElement4.dispatchEvent(new Event('change', { bubbles: true }));
                proofElement4.dispatchEvent(new Event('blur', { bubbles: true }));
                }
            }, 500);

            setTimeout(() => {
                const proofNuminput3 = document.getElementById('photoIdNum_3');
                if(proofNuminput3){
                document.getElementById("photoIdNum_3").value = request.proofNum4;
                proofNuminput3.classList.remove('ng-pristine', 'ng-invalid', 'ng-untouched');
                proofNuminput3.classList.add('ng-dirty', 'ng-valid', 'ng-touched');
                proofNuminput3.dispatchEvent(new Event('input', { bubbles: true }));
                proofNuminput3.dispatchEvent(new Event('change', { bubbles: true }));
                proofNuminput3.dispatchEvent(new Event('blur', { bubbles: true }));
                }
            }, 500);
////////////////

            setTimeout(() => {
                const addressinput1 = document.querySelector('input[name="address1"]');
                if(addressinput1){
                    addressinput1.value = request.address1;
                    addressinput1.classList.remove('ng-pristine', 'ng-invalid', 'ng-untouched');
                    addressinput1.classList.add('ng-dirty', 'ng-valid', 'ng-touched');
                    addressinput1.dispatchEvent(new Event('input', { bubbles: true }));
                    addressinput1.dispatchEvent(new Event('change', { bubbles: true }));
                    addressinput1.dispatchEvent(new Event('blur', { bubbles: true }));
                }
            }, 500);

            setTimeout(() => {
                const addressinput2 = document.querySelector('input[name="address2"]');
                if(addressinput2){
                    addressinput2.value = request.address2;
                    addressinput2.classList.remove('ng-pristine', 'ng-invalid', 'ng-untouched');
                    addressinput2.classList.add('ng-dirty', 'ng-valid', 'ng-touched');
                    addressinput2.dispatchEvent(new Event('input', { bubbles: true }));
                    addressinput2.dispatchEvent(new Event('change', { bubbles: true }));
                    addressinput2.dispatchEvent(new Event('blur', { bubbles: true }));
                }
            }, 500);

//================            

            setTimeout(() => {
                const countryInput = document.querySelector('select[name="country"]');
                if(countryInput){
                    countryInput.value = 1001;
                    countryInput.classList.remove('ng-pristine', 'ng-invalid', 'ng-untouched');
                    countryInput.classList.add('ng-dirty', 'ng-valid', 'ng-touched');
                    countryInput.dispatchEvent(new Event('input', { bubbles: true }));
                    countryInput.dispatchEvent(new Event('change', { bubbles: true }));
                    countryInput.dispatchEvent(new Event('blur', { bubbles: true }));
                }
            }, 500);

            setTimeout(() => {
                const stateInput = document.querySelector('select[name="state"]');
                if(stateInput){
                    stateInput.value = 115;
                    stateInput.classList.remove('ng-pristine', 'ng-invalid', 'ng-untouched');
                    stateInput.classList.add('ng-dirty', 'ng-valid', 'ng-touched');
                    stateInput.dispatchEvent(new Event('input', { bubbles: true }));
                    stateInput.dispatchEvent(new Event('change'));
                    stateInput.dispatchEvent(new Event('blur', { bubbles: true }));
                }
            }, 500);

            const districtInput = document.querySelector('select[name="district"]');
            if (districtInput) {
                const observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                        if (mutation.type === 'childList' && districtInput.options.length > 1) {
                            selectDistrictOption(districtInput); // Call the function to select the option
                            observer.disconnect(); // Stop observing once options are loaded
                        }
                    });
                });

            observer.observe(districtInput, { childList: true, subtree: true });
            }

            function selectDistrictOption(selectElement) {
                selectElement.value = '100373'; 
                    const optionsArray = Array.from(selectElement.options);
                const optionToSelect = optionsArray.find(option => option.value === '100373');
                if (optionToSelect) {
                    selectElement.selectedIndex = optionToSelect.index;
                    selectElement.classList.remove('ng-untouched', 'ng-invalid', 'ng-dirty');
                    selectElement.classList.add('ng-dirty', 'ng-valid', 'ng-touched');
                    selectElement.dispatchEvent(new Event('input', { bubbles: true }));
                    selectElement.dispatchEvent(new Event('change', { bubbles: true }));
                    selectElement.dispatchEvent(new Event('blur', { bubbles: true }));
                } else {
                    console.error('Option with value "100373" not found.');
                }
            }

            setTimeout(() => {
                const cityinput = document.querySelector('input[name="city"]');
                if(cityinput){
                    cityinput.value = request.city;
                    cityinput.classList.remove('ng-invalid', 'ng-untouched');
                    cityinput.classList.add('ng-valid', 'ng-touched'); 
                    cityinput.dispatchEvent(new Event('input', { bubbles: true }));
                    cityinput.dispatchEvent(new Event('change', { bubbles: true }));
                    cityinput.dispatchEvent(new Event('blur', { bubbles: true }));
                }
            }, 500);

            setTimeout(() => {
                const pincodeinput = document.querySelector('input[name="pincode"]');
                if(pincodeinput){
                    pincodeinput.value = request.pincode;
                    pincodeinput.classList.remove('ng-invalid', 'ng-untouched');
                    pincodeinput.classList.add('ng-valid', 'ng-touched');
                    pincodeinput.dispatchEvent(new Event('input', { bubbles: true }));
                    pincodeinput.dispatchEvent(new Event('change', { bubbles: true }));
                    pincodeinput.dispatchEvent(new Event('blur', { bubbles: true }));
                }
            }, 500);
            
            setTimeout(() => {
                const emailInput = document.querySelector('input[name="email"]');
                emailInput.value = request.emailid;
                emailInput.classList.remove('ng-pristine', 'ng-invalid', 'ng-untouched');
                emailInput.classList.add('ng-dirty', 'ng-valid', 'ng-touched');
                emailInput.dispatchEvent(new Event('input', { bubbles: true }));
                emailInput.dispatchEvent(new Event('change', { bubbles: true }));
                emailInput.dispatchEvent(new Event('blur', { bubbles: true }));
            }, 500);

            setTimeout(() => {
                const mobileInput = document.querySelector('input[name="mobile"]');
                mobileInput.value = request.mobilenumber;
                mobileInput.classList.remove('ng-pristine', 'ng-invalid', 'ng-untouched');
                mobileInput.classList.add('ng-dirty', 'ng-valid', 'ng-touched');
                mobileInput.dispatchEvent(new Event('input', { bubbles: true }));
                mobileInput.dispatchEvent(new Event('change', { bubbles: true }));
                mobileInput.dispatchEvent(new Event('blur', { bubbles: true }));
            }, 500);
        
            var radioButton = document.querySelector('input[name="photoOption"][value="2"]');
            if (radioButton) {
                radioButton.checked = true;
                var event = new Event('change', { bubbles: true });
                radioButton.dispatchEvent(event);
            }
            document.getElementById('files').click();

            sendResponse({status: "Success!"});
        } catch (error) {
            console.log(error)
            sendResponse({status: "Exception occurred!"});
        }
    }   
);


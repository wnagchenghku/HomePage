// Load the form into the main frame, used by load.asp

// Converting the value of text box to number, and zero if content is not a number
function con_num(textbox) {
	if (isNaN(parseInt(textbox.value,10))) {
		textbox.value = '' }
	else {
		textbox.value = parseInt(textbox.value,10)
	}
}

// Converting the value of text box to number, and zero if content is not a number
function con_num_4(textbox) {
	if (isNaN(parseInt(textbox.value,10))) {
		textbox.value = '' }
	else {
		textbox.value = String(10000+parseInt(textbox.value,10)).substr(1,4)
	}
}

function checkform (destination) {
	err = false;
	var idTypeMsg = '';
	document.getElementById('Current_New__').style.color = '#333333';
	var notchecked = true;
	var controlset = document.getElementsByName('Current_New')
	for (var i = 0; i < controlset.length; i++) {
		if (controlset[i].checked) {
			notchecked = false;
		};
	};
	if (notchecked) {
		err = true;
		document.getElementById('Current_New__').style.color = '#ff0000';
	};
	
	
	document.getElementById('Financial_support__').style.color = '#333333';
	var notchecked = true;
	var controlset = document.getElementsByName('Financial_support')
	for (var i = 0; i < controlset.length; i++) {
		if (controlset[i].checked) {
			notchecked = false;
		};
	};
	if (notchecked) {
		err = true;
		document.getElementById('Financial_support__').style.color = '#ff0000';
	};

	
	document.getElementById('Local_Non-local__').style.color = '#333333';
	var notchecked = true;
	var controlset = document.getElementsByName('Local_Non-local')
	for (var i = 0; i < controlset.length; i++) {
		if (controlset[i].checked) {
			notchecked = false;
		};
	};
	if (notchecked) {
		err = true;
		document.getElementById('Local_Non-local__').style.color = '#ff0000';
	};
	document.getElementById('PG__').style.color = '#333333';
	var notchecked = true;
	var controlset = document.getElementsByName('PG')
	for (var i = 0; i < controlset.length; i++) {
		if (controlset[i].checked) {
			notchecked = false;
		};
	};

	

	
	if (notchecked) {
		err = true;
		document.getElementById('PG__').style.color = '#ff0000';
	};
	document.getElementById('Sex__').style.color = '#333333';
	var notchecked = true;
	var controlset = document.getElementsByName('Sex')
	for (var i = 0; i < controlset.length; i++) {
		if (controlset[i].checked) {
			notchecked = false;
		};
	};
	if (notchecked) {
		err = true;
		document.getElementById('Sex__').style.color = '#ff0000';
	};
	document.getElementById('Title__').style.color = '#333333';
	var notchecked = true;
	var controlset = document.getElementsByName('Title')
	for (var i = 0; i < controlset.length; i++) {
		if (controlset[i].checked) {
			notchecked = false;
		};
	};

	

	
	if (notchecked) {
		err = true;
		document.getElementById('Title__').style.color = '#ff0000';
	};


	
	
	document.getElementById('Degree_TPG__').style.color = '#333333';
	if (!document.getElementById('Degree_TPG').disabled && document.getElementById('Degree_TPG').value.length == 0 ) {
		err = true;
		
		document.getElementById('Degree_TPG__').style.color = '#ff0000';
	};


	


	
	document.getElementById('Degree_RPG__').style.color = '#333333';
	if (!document.getElementById("Degree_RPG__MPhil").disabled && document.getElementById("Degree_RPG__PhD").disabled && !document.getElementById("Degree_RPG__MPhil").checked && !document.getElementById("Degree_RPG__PhD").checked) {
		err = true;
		document.getElementById('Degree_RPG__').style.color = '#ff0000';
	};

	



	
	
	if (!document.getElementById("Dept").disabled && (document.getElementById("Dept").value.length ==0)) {
		err = true;
		document.getElementById('Degree_RPG__').style.color = '#ff0000';
	};

	
	document.getElementById('roomType__').style.color = '#333333';
	notchecked = true;
	var controlset = document.getElementsByClassName("roomPref");
	for (var i = 0; i < controlset.length; i++) {
		if (controlset[i].value.length > 0) {
			notchecked = false;
		}
	}

	
	if (notchecked) {
		err = true;
		document.getElementById('roomType__').style.color = '#ff0000';
	};




	
	document.getElementById('email1__').style.color = '#333333';
	if ((document.getElementById('email11').value.length == 0) ) {
		err = true;
		document.getElementById('email1__').style.color = '#ff0000';
	};



	
	document.getElementById('Declaration__').style.color = '#333333';
	if (!document.getElementById('Declaration__Y').checked) {
		err = true;
		document.getElementById('Declaration__').style.color = '#ff0000';
	};
	document.getElementById('Reg_date__').style.color = '#333333';
	if (document.getElementById('Reg_date').value.length == 0) {
		err = true;
		document.getElementById('Reg_date__').style.color = '#ff0000';
	};	
	document.getElementById('Exp_Completion_Date__').style.color = '#333333';
	if (document.getElementById('Exp_Completion_Date').value.length == 0) {
		err = true;
		document.getElementById('Exp_Completion_Date__').style.color = '#ff0000';
	};
	document.getElementById('FName__').style.color = '#333333';
	if (document.getElementById('FName').value.length == 0) {
		err = true;
		document.getElementById('FName__').style.color = '#ff0000';
	};
	document.getElementById('LName__').style.color = '#333333';
	if (document.getElementById('LName').value.length == 0) {
		err = true;
		document.getElementById('LName__').style.color = '#ff0000';
	};
	
	var checkedValue = '';
		var controlset = document.getElementsByName('PG')
		for (var i = 0; i < controlset.length; i++) {
			if (controlset[i].checked) {
				checkedValue = controlset[i].value;
			};
		};

	document.getElementById('Prog_start_date__').style.color = '#333333';
	if (document.getElementById('Prog_start_date').value.length == 0 && checkedValue == 'RPG') {
		err = true;
		document.getElementById('Prog_start_date__').style.color = '#ff0000';
	};


	document.getElementById('idType__').style.color = '#333333';
	var notchecked = true;
	var controlset = document.getElementsByName('idType')
	for (var i = 0; i < controlset.length; i++) {
		if (controlset[i].checked) {
			notchecked = false;
		};
	};
	if (notchecked) {
		err = true;
		document.getElementById('idType__').style.color = '#ff0000';
	} else {


	document.getElementById('idType__').style.color = '#333333';

	var idTypeVal = '';
	var UnoVal = document.getElementById('UNo').value;
	var controlset = document.getElementsByName('idType')
	for (var i = 0; i < controlset.length; i++) {
		if (controlset[i].checked) {
			idTypeVal = controlset[i].value;
		};
	};

	if ( idTypeVal == 'Uno') {
		if ( UnoVal.trim().length < 10 || isNaN(UnoVal) == true ) {
			err = true;
			idTypeMsg = 'Invalid University Number';
			document.getElementById('idType__').style.color = '#ff0000';
		}
	}

	if ( idTypeVal == 'AppNo') {
		if ( UnoVal.trim().length < 7 || isNaN(UnoVal) == true ) {
			err = true;
			idTypeMsg = 'Invalid Application Number';
			document.getElementById('idType__').style.color = '#ff0000';
		}
	}	

}
	

/*	


// Must select the hall 
	
		document.getElementById('Grad_House_pref__').style.color = '#333333';
	if ((document.getElementById('Grad_House_Single').value.length > 0 || document.getElementById('Grad_House_for_Married').value.length > 0) && document.getElementById('Grad_House_pref').value.length == 0) {
		err = true;
		document.getElementById('Grad_House_pref__').style.color = '#ff0000';
	};
	
			document.getElementById('St_John_pref__').style.color = '#333333';
	if ((document.getElementById('St_John_Small').value.length > 0 || document.getElementById('St_John_Large').value.length > 0) &&  document.getElementById('St_John_pref').value.length == 0) {
		err = true;
		document.getElementById('St_John_pref__').style.color = '#ff0000';
	};
	
			document.getElementById('Pokfield_pref__').style.color = '#333333';
	if ((document.getElementById('Pokfield_Double_Triple').value.length > 0 || document.getElementById('Pokfield_Two-bedroom').value.length > 0 || document.getElementById('Pokfield_Single').value.length > 0 || document.getElementById('Pokfield_Family').value.length > 0) &&  document.getElementById('Pokfield_pref').value.length == 0) {
		err = true;
		document.getElementById('Pokfield_pref__').style.color = '#ff0000';
	};

				document.getElementById('Ching_Lin_Terrace_pref__').style.color = '#333333';
	if ((document.getElementById('Ching_Lin_Terrace_twin').value.length > 0 || document.getElementById('Ching_Lin_Terrace_single_loft').value.length > 0 || document.getElementById('Ching_Lin_Terrace_single').value.length > 0 || document.getElementById('Ching_Lin_Terrace_double').value.length > 0 || document.getElementById('Ching_Lin_Terrace_double_suites').value.length > 0) &&  document.getElementById('Ching_Lin_Terrace_pref').value.length == 0) {
		err = true;
		document.getElementById('Ching_Lin_Terrace_pref__').style.color = '#ff0000';
	};
	
			document.getElementById('Residential_Colleges_A_pref__').style.color = '#333333';
	if ((document.getElementById('Residential_Colleges_A_Single').value.length > 0 || document.getElementById('Residential_Colleges_A_Double').value.length > 0 ) &&  document.getElementById('Residential_Colleges_A_pref').value.length == 0) {
		err = true;
		document.getElementById('Residential_Colleges_A_pref__').style.color = '#ff0000';
	};
	
			document.getElementById('Residential_Colleges_B_pref__').style.color = '#333333';
	if ((document.getElementById('Residential_Colleges_B_Single').value.length > 0 || document.getElementById('Residential_Colleges_B_Double').value.length > 0 ) && document.getElementById('Residential_Colleges_B_pref').value.length == 0) {
		err = true;
		document.getElementById('Residential_Colleges_B_pref__').style.color = '#ff0000';
	};	
	
			document.getElementById('Residential_Colleges_C_pref__').style.color = '#333333';
	if ((document.getElementById('Residential_Colleges_C_Single').value.length > 0 || document.getElementById('Residential_Colleges_C_Double').value.length > 0 ) &&  document.getElementById('Residential_Colleges_C_pref').value.length == 0) {
		err = true;
		document.getElementById('Residential_Colleges_C_pref__').style.color = '#ff0000';
	};	

			document.getElementById('Residential_Colleges_D_pref__').style.color = '#333333';
	if ((document.getElementById('Residential_Colleges_D_Single').value.length > 0 || document.getElementById('Residential_Colleges_D_Double').value.length > 0 ) &&  document.getElementById('Residential_Colleges_D_pref').value.length == 0) {
		err = true;
		document.getElementById('Residential_Colleges_D_pref__').style.color = '#ff0000';
	};			


*/
	
	if (err == true) {
		alert(idTypeMsg+'\n\nPlease fill in all questions, thank you!');
		return false;
	}
	document.getElementById('FORM').action = destination;
}
function Curr_New(c_n) {
	current = (c_n == 'New');
	document.getElementById('Curr_Hall').disabled = current;
	document.getElementById('Curr_Hall__').style.display = (current?"none":"");
	document.getElementById('Resi_year').disabled = current;
	document.getElementById('Resi_year__').style.display = (current?"none":"");
}

function app_UNo(c_n) {
	idType = (c_n == 'Uno');
	document.getElementById('UNo').disabled = false;
	
}





function check_hall_pref(pref) {
	
	if (pref.selectedIndex == 0) {
		return;
	}
	
	count = 0;
	if (document.getElementById("Grad_House_pref").selectedIndex == pref.selectedIndex) {
		count++;
	}
	if (document.getElementById("St_John_pref").selectedIndex == pref.selectedIndex) {
		count++;
	}
	if (document.getElementById("Morrison_Hall_pref").selectedIndex == pref.selectedIndex) {
		count++;
	}
	if (document.getElementById("Pokfield_pref").selectedIndex == pref.selectedIndex) {
		count++;
	}
	if (document.getElementById("Ching_Lin_Terrace_pref").selectedIndex == pref.selectedIndex) {
		count++;
	}
	if (document.getElementById("Residential_Colleges_A_pref").selectedIndex == pref.selectedIndex) {
		count++;
	}	
	if (document.getElementById("Residential_Colleges_B_pref").selectedIndex == pref.selectedIndex) {
		count++;
	}		
	if (document.getElementById("Residential_Colleges_C_pref").selectedIndex == pref.selectedIndex) {
		count++;
	}	
	if (document.getElementById("Residential_Colleges_D_pref").selectedIndex == pref.selectedIndex) {
		count++;
	}			
	if (count > 1) {
		alert("Please do not select two halls with same priority!");
		pref.selectedIndex = 0;
	}	
}


function check_PG(pg) {

	$(".hallPref").prop('disabled', false);
	$(".roomPref").prop('disabled', false);

	document.getElementById("Degree_TPG__").style.display = ((pg=="TPG")?"":"none");
	document.getElementById("Degree_TPG").disabled = !(pg=="TPG");
	document.getElementById("Degree_RPG__").style.display = ((pg=="RPG")?"":"none");
	document.getElementById("Dept").disabled = !(pg=="RPG");
	document.getElementById("Degree_RPG__MPhil").disabled = !(pg=="RPG");
	document.getElementById("Degree_RPG__PhD").disabled = !(pg=="RPG");
	document.getElementById("extraInfo_Acad").style.display = "";
	
	$("#Morrison_Hall_pref").prop('disabled', (pg=="TPG" && $('input[name=Financial_support]:checked').val() == 'Self-funded'));
	$("[id^='Residential_Colleges_']").prop('disabled', (pg=="TPG" && $('input[name=Financial_support]:checked').val() == 'Self-funded'));

	if ( $("#gradFull").val() == 'Y' ) {$('[id^="Grad_House"]').attr('disabled', 'disabled');}		


}

function check_Finance(fund) {

	$("#Morrison_Hall_pref").prop('disabled', (fund=='Self-funded' && $('input[name=PG]:checked').val() == 'TPG'));
	$("[id^='Residential_Colleges_']").prop('disabled', (fund=='Self-funded' && $('input[name=PG]:checked').val() == 'TPG'));

	if ( $("#gradFull").val() == 'Y' ) {$('[id^="Grad_House"]').attr('disabled', 'disabled');}		
}




function optionToggling(source, target, option) {
	
	$(source).change(function(){
	
		if ($(source).val() == option) {
			$(target).show();
		}
		else {
			$(target).hide();
		
		}		
	});	
}


$(document).ready(function() {	


	optionToggling('#Degree_TPG', '#Degree_oth', 'Others');
	optionToggling('#Dept', '#Dept_oth', 'Others');

	setformfieldsize($('textarea, input[type=text]'), 2500);	




	$("input:radio[name='Financial_support']").click(function(){
		
		pgVal = $("input:radio[name='PG']:checked").val();
		
		if ($(this).val() == "Self-funded" && pgVal == "TPG") {				
			alert('Not eligible for Morrison Hall and Residential Colleges');
		};

		if ($(this).val() == "UGC-funded" && pgVal == "RPG") {
			$("#UGCfundType").show();
		} else {
			$("#UGCfundType").hide();

		}

	})	

	$("input:radio[name='PG']").click(function(){
		
		fundVal = $("input:radio[name='Financial_support']:checked").val();
	
		
		if ($(this).val() == "TPG" && fundVal == "Self-funded") {				
			alert('Not eligible for Morrison Hall and Residential College');
		};

		if ($(this).val() == "RPG" && fundVal == "UGC-funded") {
			$("#UGCfundType").show();
		} else {
			$("#UGCfundType").hide();
			
		}		
	})		

	
	$( ".datePicker" ).datepicker({
			dateFormat: "yy-mm-dd",
			changeMonth: true,
            changeYear: true,
			yearRange: "-80:+10"
			});	

	$( ".dateTimePicker" ).appendDtpicker();

	if ( $('input[name=PG]:checked').val() != null) {
		
		check_PG($('input[name=PG]:checked').val());
	}
	
	
	
	$('#UNo').blur(function() {
		
		if ($('#UNo').val().length == 10) {
			$('#studentCardPanel').show();
		}
		else {
			$('#studentCardPanel').hide();
		}
		
		
	})
	

	

////// Hall Preference
	$('.hallPref').change(function() {
		
		var sum = 0;
		var sectionC = ['Grad_Hou','Morrison_Ha','Residential_Colleges'];
		var openSectionC = 0;
		
		$('.hallPref').each(function() {
			sum += Number($(this).val());
			if (sum >= 10) {
				$('.roomPref').attr('disabled','disabled');
				$('.hallPref').attr('disabled','disabled');
			}
			else {
				$('.hallPref').removeAttr('disabled');
				$('.roomPref').removeAttr('disabled');

				if ( $('input[name=PG]:checked').val() == 'TPG' && $('input[name=Financial_support]:checked').val() == 'Self-funded') {
					$("[id^='Residential_Colleges_']").prop('disabled', true);
					$("[id^='Morrison']").prop('disabled', true);
				}
			}
		});
		
		$('.hallPref').each(function() {
			if (Number($(this).val()) >= 1 ){
				if ( $.inArray($(this).attr('id').substring(0, $(this).attr('id').length-7), sectionC) > -1) {
					openSectionC ++;
				}
			$("select[id^=" + $(this).attr('id').substring(0, $(this).attr('id').length-5) + "]").removeAttr('disabled');
				if ( $("#gradFull").val() == 'Y' ) {$('[id^="Grad_House"]').attr('disabled', 'disabled');}

			}		
		});
		
		if (openSectionC > 0) {
			$('#SectionC').show();
		}
		else {
			$('#SectionC').hide();
		}

	if ( $("#gradFull").val() == 'Y' ) {$('[id^="Grad_House"]').attr('disabled', 'disabled');}		
		
	});
////////////// End Hall Pref


	
	if ( $("#gradFull").val() == 'Y' ) {
			$('[id^="Grad_House"]').attr('disabled', 'disabled');
	}


});



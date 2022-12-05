function register(){
	var school = document.getElementById('school').value;
	var f_name = document.getElementById('f_name').value;
	var l_name = document.getElementById('l_name').value;
	var email = document.getElementById('email').value;
	var assigned_id = document.getElementById('assigned_id').value;
	var major = document.getElementById('major').value;
	var country = document.getElementById('country').value;

	if (school != "") {
		if (f_name != "") {
			if (l_name != "") {
				if (email != "") {
					if (assigned_id != "") {
						if (major != "") {
							if (country != "") {
								$.ajax({
									url: "action.php",
									type: "post",
									data : {action:'register', school: school, f_name: f_name, l_name: l_name, email: email, assigned_id: assigned_id, major: major, country: country},
									success: function(data){
										var data_array = $.parseJSON(data);
										alert(data_array["status"]);
										
										
										
									}, error: function(xhr, status, error){
										console.error(xhr);
									}
								});

							}else{
								alert("Country is required.");
							}

						}else{
							alert("Major is required.");
						}

					}else{
						alert("Assigned ID is required.");
					}

				}else{
					alert("Email is required.");
				}

			}else{
				alert("Last Name is required.");
			}

		}else{
			alert("First Name is required.");
		}

	}else{
		alert("School is required.");
	}
	
}
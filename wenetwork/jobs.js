function postJob(){
	var title = document.getElementById('title').value;
	var description = document.getElementById('description').value;
	var deadline = document.getElementById('deadline').value;;

	if (title != "") {
		if (description != "") {
			if (deadline != "") {
				$.ajax({
					url: "action.php",
					type: "post",
					data : {action:'post_job', title: title, description: description, deadline: deadline},
					success: function(data){
						var data_array = $.parseJSON(data);
						alert(data_array["status"]);
						
						
						
					}, error: function(xhr, status, error){
						console.error(xhr);
					}
				});

			}else{
				alert("Deadline is required.");
			}

		}else{
			alert("Job Description is required.");
		}

	}else{
		alert("Job Title is required.");
	}
	
}
var div_members = document.getElementById('div_members');
var output = '<div class="table-responsive"><table class="table table-bordered table-striped" id="table_members"><tr id="tr_title"><th width="15%">School</th><th width="15%">First Name</th><th width="15%">Last Name</th><th width="15%">Email</th><th width="15%">Assigned ID</th><th width="15%">Major</th><th width="15%">Country</th></tr>';

$.ajax({
	url: "action.php",
	type: "post",
	data : {action:'get_members'},
	success: function(data){
		var data_array = $.parseJSON(data);
		if(data_array["status"] == "Success"){
			var members_array = data_array["data"];
			var count = 0;
			members_array.forEach(function(record) {
			    var school = record["school"];
			    var f_name = record["f_name"];
			    var l_name = record["l_name"];
			    var email = record["email"];
			    var assigned_id = record["assigned_id"];
			    var major = record["major"];
			    var country = record["country"];

			    var record = '<tr class="tr_body"><td>'+school+'</td><td>'+f_name+'</td><td>'+l_name+'</td><td>'+email+'</td><td>'+assigned_id+'</td><td>'+major+'</td><td>'+country+'</td></tr>';
			    output = output + record;
			    count = count + 1;
			});
			output = output + '</table></div>';
			div_members.innerHTML = output;

			if (count == 0) {
				var record = '<tr><td colspan="2" align="center">No Member Found.</td></tr>';
				output = output + record;
				output = output + '</table></div>';
				div_members.innerHTML = output;
			}
			
		}else{
			var record = '<tr><td colspan="2" align="center">Error while retrieving members.</td></tr>';
			output = output + record;
			output = output + '</table></div>';
			div_members.innerHTML = output;
		}
		
		
		
		
	}, error: function(xhr, status, error){
		console.error(xhr);
	}
});
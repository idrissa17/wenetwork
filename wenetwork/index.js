var div_jobs = document.getElementById('div_jobs');
// </table></div>
var output = '<div class="table-responsive"><table class="table table-bordered table-striped" id="table_jobs"><tr id="tr_title"><th width="10%">Title</th><th width="15%">Description</th><th width="10%">Deadline</th></tr>';

$.ajax({
	url: "action.php",
	type: "post",
	data : {action:'get_jobs'},
	success: function(data){
		var data_array = $.parseJSON(data);
		if(data_array["status"] == "Success"){
			var jobs_array = data_array["data"];
			var count = 0;
			jobs_array.forEach(function(record) {
			    var title = record["title"];
			    var description = record["description"];
			    var deadline = record["deadline"];

			    var record = '<tr class="tr_body"><td>'+title+'</td><td>'+description+'</td><td>'+deadline+'</td></tr>';
			    output = output + record;
			    count = count + 1;
			});
			output = output + '</table></div>';
			div_jobs.innerHTML = output;

			if (count == 0) {
				var record = '<tr><td colspan="5" align="center">No Job Posted.</td></tr>';
				output = output + record;
				output = output + '</table></div>';
				div_jobs.innerHTML = output;
			}
			
		}else{
			var record = '<tr><td colspan="5" align="center">Error while retrieving jobs posted</td></tr>';
			output = output + record;
			output = output + '</table></div>';
			div_jobs.innerHTML = output;
		}
		
		
		
		
	}, error: function(xhr, status, error){
		console.error(xhr);
	}
});
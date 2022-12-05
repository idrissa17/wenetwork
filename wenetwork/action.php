<?php 
	include 'config.php';
	$response = array();
	if (isset($_POST['action']) && $_POST['action'] == "get_jobs") {
		$query  = "SELECT * FROM jobs";
		$statement = $db->prepare($query);
		if ($statement->execute()) {
			$result = $statement->fetchAll();
			$response['status'] = "Success";
			$response['data'] = $result;

		}
		else{
			$response['status'] = "Failed";
		}

	}
	if (isset($_POST['action']) && $_POST['action'] == "get_members") {
		$query  = "SELECT * FROM members";
		$statement = $db->prepare($query);
		if ($statement->execute()) {
			$result = $statement->fetchAll();
			$response['status'] = "Success";
			$response['data'] = $result;

		}
		else{
			$response['status'] = "Failed";
		}

	}

	if (isset($_POST['action']) && $_POST['action'] == "post_job") {
		$title = $_POST['title'];
		$description = $_POST['description'];
		$deadline = $_POST['deadline'];

		$stmt = $con->prepare("INSERT INTO jobs(`title`, `description`, `deadline`) VALUES (?, ?, ?)");
		$stmt->bind_param("sss", $title, $description, $deadline);
		if ($stmt->execute()) {
			$response['status'] = "Job posted successfully!!";
		}else{
			$response['status'] = "Error occurred. Try again later.!!";

		}
	}
	if (isset($_POST['action']) && $_POST['action'] == "donate") {
		$card_name = $_POST['card_name'];
		$card_number = $_POST['card_number'];
		$exp_date = $_POST['exp_date'];
		$cvv = $_POST['cvv'];
		$country = $_POST['country'];
		$amount = $_POST['amount'];

		$stmt = $con->prepare("INSERT INTO donations(`card_name`, `card_number`, `exp_date`, `cvv`, `country`, `amount`) VALUES (?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("ssssss", $card_name, $card_number, $exp_date, $cvv, $country, $amount);
		if ($stmt->execute()) {
			$response['status'] = "Donation received successfully!!";
		}else{
			$response['status'] = "Error occurred. Try again later.!!";

		}
	}
	if (isset($_POST['action']) && $_POST['action'] == "register") {
		$school = $_POST['school'];
		$f_name = $_POST['f_name'];
		$l_name = $_POST['l_name'];
		$email = $_POST['email'];
		$assigned_id = $_POST['assigned_id'];
		$major = $_POST['major'];
		$country = $_POST['country'];

		$stmt = $con->prepare("INSERT INTO members(`school`, `f_name`, `l_name`, `email`, `assigned_id`, `major`, `country`) VALUES (?, ?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("sssssss", $school, $f_name, $l_name, $email, $assigned_id, $major, $country);
		if ($stmt->execute()) {
			$response['status'] = "Member registered successfully!!";
		}else{
			$response['status'] = "Error occurred. Try again later.!!";

		}
	}

	echo json_encode($response);


?>
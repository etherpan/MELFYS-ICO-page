<?php
/**
 * EDIT THE VALUES BELOW THIS LINE TO ADJUST THE CONFIGURATION
 * EACH OPTION HAS A COMMENT ABOVE IT WITH A DESCRIPTION
 */
/**
 * Specify the email address to which all mail messages are sent.
 * The script will try to use PHP's mail() function,
 * so if it is not properly configured it will fail silently (no error).
 */
$mailTo     = 'email@example.com';

/**
 * Set the message that will be shown on success
 */
$successMsg = 'Thank you, mail sent successfully!';

/**
 * Set the message that will be shown if not all fields are filled
 */
$fillMsg    = 'Please fill all fields!';

/**
 * Set the message that will be shown on error
 */
$errorMsg   = 'Hm.. seems there is a problem, sorry!';

/**
 * DO NOT EDIT ANYTHING BELOW THIS LINE, UNLESS YOU'RE SURE WHAT YOU'RE DOING
 */

?>
<?php
if(
    !isset($_POST['name']) ||
    !isset($_POST['email']) ||  
	!isset($_POST['subject']) ||
    empty($_POST['name']) ||
    empty($_POST['email']) ||
    empty($_POST['subject']) 
   
) {
	
	if( empty($_POST['name']) && empty($_POST['email']) ) {
		$json_arr = array( "type" => "error", "msg" => $fillMsg );
		echo json_encode( $json_arr );		
	} else {

		$fields = "";
		if( !isset( $_POST['name'] ) || empty( $_POST['name'] ) ) {
			$fields .= "Name";
		}
		
		if( !isset( $_POST['email'] ) || empty( $_POST['email'] ) ) {
			if( $fields == "" ) {
				$fields .= "Email";
			} else {
				$fields .= ", Email";
			}
		}
		
		if( !isset( $_POST['subject'] ) || empty( $_POST['subject'] ) ) {
			if( $fields == "" ) {
				$fields .= "Subject";
			} else {
				$fields .= ", Subject";
			}
		}
		
		$json_arr = array( "type" => "error", "msg" => "Please fill ".$fields." fields!" );
		echo json_encode( $json_arr );		
	
	}

} else {

	// Validate e-mail
	if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) === false) {
		
		$msg = "Name: ".$_POST['name']."\r\n";
		$msg .= "Email: ".$_POST['email']."\r\n";
		$msg .= "Subject: ".$_POST['subject']."\r\n";		
		if( isset( $_POST['message'] ) && $_POST['message'] != '' ) { $msg .= "Message: ".$_POST['message']."\r\n"; }
		
		$success = @mail($mailTo, $_POST['email'], $msg, 'From: ' . $_POST['name'] . '<' . $_POST['email'] . '>');
		
		if ($success) {
			$json_arr = array( "type" => "success", "msg" => $successMsg );
			echo json_encode( $json_arr );
		} else {
			$json_arr = array( "type" => "error", "msg" => $errorMsg );
			echo json_encode( $json_arr );
		}
		
	} else {
 		$json_arr = array( "type" => "error", "msg" => "Please enter valid email address!" );
		echo json_encode( $json_arr );	
	}

}
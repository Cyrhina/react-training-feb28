<?php
    try {
        include_once("../common/package.php");
        include_once("Account.php");
        include_once("functions-account.php"); 
        include_once("../notification/new-account.php");        
        
        $body = file_get_contents("php://input");       
        $data = json_decode($body, true);               
        $connection = checkConnection();
        checkInputData($data);  
        $account = new Account($connection);
        $encrypt = new Encryption();
        
        $account->dunkin_fullname  = filter_var($data["dunkin_fullname"], FILTER_SANITIZE_STRING);
        $account->dunkin_email  = filter_var($data["dunkin_email"], FILTER_SANITIZE_STRING);
        
        $account->dunkin_key =  $encrypt->doHash(rand());

        $account->dunkin_active  = 1;
        $account->dunkin_datetime = date("Y-m-d H:i:s");  

        $email = checkReadEmail($account);
        
        $result = checkCreate($account);

        $mail = sendEmail($account->dunkin_email, $account->dunkin_key, $account->dunkin_fullname);
        Response::sendResponse(true, "Create account succesful email sent",  $data, $email);
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");

    }

  
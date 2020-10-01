<?php

// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
  // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
  // you want to allow, and if so:
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
    header('Access-Control-Allow-Headers: content-type');    // cache for 1 day
  }
  
  // Access-Control headers are received during OPTIONS requests
  // if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    
  //   if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
  //   // may also be using PUT, PATCH, HEAD etc
  //   header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
    
  //   if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
  //   header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    
  //   exit(0);
  // }

  if($_SERVER['REQUEST_METHOD'] == 'POST') {
    // $data = $_POST['payload'];
    $data = json_decode(file_get_contents("php://input"), true);
    // $data=json_decode(file_get_contents('php://input'),1);
    // echo json_encode($data);
    $wordArr = str_split($data['payload']);
    $letterCount = Array();
    foreach($wordArr as $key => $val){
      if (array_key_exists($val, $letterCount)){
        $letterCount[$val]++;
      } else {
        $letterCount = array_merge($letterCount, array($val => 1));
      };
    };
    echo json_encode($letterCount);
  };
  
  // echo json_encode($_SERVER);

?>
<?php

session_start();

$db = new PDO('mysql:host=localhost;dbname=your_database_name;charset=utf8', 'your_username', 'your_password');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if (isset($_POST['username'], $_POST['password'])) {
    $stmt = $db->prepare('SELECT * FROM users WHERE username = :username');
    $stmt->execute(['username' => $_POST['username']]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($_POST['password'], $user['password'])) {
      $_SESSION['user_id'] = $user['id'];
      echo json_encode(['success' => true]);
    } else {
      echo json_encode(['success' => false, 'message' => 'Invalid username or password']);
    }
  } else {
    echo json_encode(['success' => false, 'message' => 'Missing username or password']);
  }
} else {
  echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}

?>

<?php
include_once dirname(__DIR__) . '/model/CustomerStorage.php';

$params = $_POST;
if (!isset($params['firstname'])
    || !isset($params['lastname'])
    || !isset($params['password'])
    || !isset($params['email'])
) {
    echo json_encode(
        [
            'status' => 'error',
            'message' => 'Request contains wrong parameters'
        ]
    );
    exit;
}

$firstName = $params['firstname'];
$lastName = $params['lastname'];
$password = $params['password'];
$email = $params['email'];

$customerStorage = new CustomerStorage();
if ($customerStorage->isEmailTaken($email)) {
    echo getEmailTakenResponse();
    exit;
}
session_start();
$customerStorage->addCustomer(
    [
        'firstname' => $params['firstname'],
        'lastname' => $params['lastname'],
        'password' => $params['password'],
        'email' => $params['email']
    ]
);
$_SESSION['email'] = $params['email'];
$_SESSION['firstname'] = $params['firstname'];
$_SESSION['lastname'] = $params['lastname'];

echo getCustomerCreatedResponse();
exit;

function getEmailTakenResponse()
{
    return json_encode(
        [
            'status' => 'error',
            'message' => 'This email is already taken'
        ]
    );
}

function getCustomerCreatedResponse()
{
    return json_encode(
        [
            'status' => 'success',
            'message' => 'Customer has been created'
        ]
    );
}
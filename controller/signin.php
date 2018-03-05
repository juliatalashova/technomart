<?php

include_once dirname(__DIR__) . '/model/CustomerStorage.php';

$params = $_POST;
if (!isset($params['password'])
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

$customerStorage = new CustomerStorage();
$customer = $customerStorage->getCustomer($params['email']);
if (!$customer || $customer['password'] !== $params['password']) {
    echo json_encode(
        [
            'status' => 'error',
            'message' => 'Such user doesn\'t exist'
        ]
    );
    exit;
}

session_start();

echo json_encode(
    [
        'status' => 'success',
        'customer' => [
            'firstname' => $customer['firstname'],
            'lastname' => $customer['lastname']
        ]
    ]
);
exit;
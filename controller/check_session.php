<?php
session_start();
if ($_SESSION['email']) {
    echo getSignedInResponse();
    exit;
}

echo getGuestResponse();
exit;

function getGuestResponse()
{
    return json_encode([]);
}

function getSignedInResponse()
{
    return json_encode([
        'firstname' => $_SESSION['firstname'],
        'lastname' => $_SESSION['lastname']
    ]);
}
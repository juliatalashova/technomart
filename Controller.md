# Ajax Request example:
```
var formData = new FormData();
formData.append('firstname', 'John');
formData.append('lastname', 'Doe');
formData.append('password',  '123123q');
formData.append('email', 'john.doe@test.com');
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
};
xhttp.open('POST', 'controller/register.php', true);
xhttp.send(formData);
```

# Register customer
Request.
    Path: controller/register.php
    Type: POST
    Parameters:
        'firstname' - user's first name
        'lastname' - user's last name
        'password' - user's password
        'email' - user's email

Responses.
    Success:
    {"status":"success","message":"Customer has been created"}

    Error:
    {"status":"error","message": "any error message"}

# Sign out
Request.
    Path: controller/signout.php

# Sign in
Request.
    Path: controller/signin.php
    Type: POST
    Parameters:
        'email' - user's email
        'password' - user's password

Response.
    Success:
    {"status":"success","customer":{"firstname":"Michael","lastname":"Michael"}}

    Error
    {"status":"error","message": "any error message"}

# Check if customer is logged in
Request.
    Path: controller/check_session.php
    
Response.
    {"firstname":"Customer's firstname","lastname":"Customer's lastname"}

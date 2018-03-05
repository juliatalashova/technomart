# Ajax Request example
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
**Request.**<br />
Path: controller/register.php<br />
Type: POST<br />
Parameters:<br />
        &nbsp;'firstname' - user's first name<br />
        &nbsp;'lastname' - user's last name<br />
        &nbsp;'password' - user's password<br />
        &nbsp;'email' - user's email<br />

**Responses.**<br />
Success:<br />
    ```
    {"status":"success","message":"Customer has been created"}
    ```
    <br />
Error:<br />
    ```
    {"status":"error","message": "any error message"}
    ```
<br />
# Sign out
**Request.**<br />
Path: controller/signout.php
<br />
# Sign in
**Request.**<br />
Path: controller/signin.php<br />
Type: POST<br />
Parameters:<br />
        'email' - user's email<br />
        'password' - user's password<br />
<br />
**Response.**<br />
    Success:<br />
    ```
    {"status":"success","customer":{"firstname":"Michael","lastname":"Michael"}}
    ```
    Error<br />
    ```
    {"status":"error","message": "any error message"}
    ```
<br />
# Check if customer is logged in
**Request.**<br />
Path: controller/check_session.php<br />
    <br />
**Response.**<br />
    ```
    {"firstname":"Customer's firstname","lastname":"Customer's lastname"}
    ```

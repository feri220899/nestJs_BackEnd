# User API Spec
## - Register User <!-- =============================================================== -->
Endpoin : POST /api/users

Request Body :
```json
{
    "username" : "Feri@user",
    "password" : "Feri123",
    "name" : "Feri Jumaidi",
}
```
Response Body (Success) :
```json
{
    "code" : "201",
    "status": "success",
    "data": {
        "username": "Feri@user",
        "name": "Feri Jumaidi",
        "message": "User successfully created."
    }
}
```
Response Body (Failed) :
```json
{
    "code": "400",
    "status": "Bad Request",
    "errors": {
        "message": "Invalid input data. Username must not contain special characters."
    }
}
```

## - Login User <!-- =============================================================== -->
Endpoin : POST /api/login

Request Body :
```json
{
    "username" : "Feri@user",
    "password" : "Feri123",
}
```
Response Body (Success) :
```json
{
    "code": "200",
    "status": "success",
    "data": {
        "username": "Feri@user",
        "name": "Feri Jumaidi",
        "token": "session_id_generated"
    }
}
```
Response Body (Failed) :
```json
{
    "code": "401",
    "status": "Unauthorized",
    "errors": {
        "message": "Invalid username or password."
    }
}
```
## - Get User <!-- =============================================================== -->
Endpoin : GET /api/users/current

Headers : 

- Authorization : token

Response Body (Success) :
```json
{
    "code": "200",
    "status": "success",
    "data": {
        "username": "Feri@user",
        "name": "Feri Jumaidi"
    }
}
```
Response Body (Failed) :
```json
{
    "code": "403",
    "status": "Unauthorized",
    "errors": {       
        "message": "request token"
    }
}
```
## - Update User <!-- =============================================================== -->
Endpoin : PATCH /api/users/current

Headers : 

- Authorization : token

Request Body :
```json
{
    "password" : "Feri123",
    "name" : "Feri Jumaidi",
}
```
Response Body (Success) :
```json
{
    "code" : "201",
    "status": "success",
    "data": {
        "username": "Feri@user",
        "name": "Feri Jumaidi",
        "message": "User successfully update."
    }
}
```
Response Body (Failed) :
```json
{
    "code": "400",
    "status": "Bad Request",
    "errors": {        
        "message": "Invalid input data. Username must not contain special characters."
    }
}
```
## - Logout User <!-- =============================================================== -->
Endpoin : DELETE /api/users/current

Headers : 

- Authorization : token

Response Body (Success) :
```json
{
    "code" : "201",
    "status": "success",
    "data": true
}
```
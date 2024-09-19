# Contact API Spec

## Create Contact <!-- =============================================================== -->
Endpoin : POST /api/contacts

Headers : 

- Authorization : token

Request Body :
```json
{
    "first_name" : "Feri",
    "last_name" : "Jumaidi",
    "email" : "feri.jumaidi404@gmail.com",
    "phone" : "08978654"
}
```

Response Body (Success) :
```json
{
    "code": "200",
    "status": "success",
    "data": {
        "contact_id" : 1,
        "first_name" : "Feri",
        "last_name" : "Jumaidi",
        "email" : "feri.jumaidi404@gmail.com",
        "phone" : "08978654"
    }
}
```
Response Body (Failed) :
```json
{
    "code": "400",
    "status": "errors",
    "errors": {
        "message": "Invalid input data. Username must not contain special characters."
    }
}
```

## Get Contact <!-- =============================================================== -->
Endpoin : POST /api/contacts/{contactId}

Headers : 

- Authorization : token

Response Body (Success) :
```json
{
    "code": "201",
    "status": "success",
    "data": {
        "contact_id" : 1,
        "first_name" : "Feri",
        "last_name" : "Jumaidi",
        "email" : "feri.jumaidi404@gmail.com",
        "phone" : "08978654"
    }
}
```
Response Body (Failed) :
```json
{
    "code": "404",
    "status": "errors",
    "errors": {
        "message": "contact id not found."
    }
}
```

## Update Contact <!-- =============================================================== -->
Endpoin : PUT /api/contacts/{contactId}

Headers : 

- Authorization : token

Request Body :
```json
{
    "first_name" : "Feri",
    "last_name" : "Jumaidi",
    "email" : "feri.jumaidi404@gmail.com",
    "phone" : "08978654"
}
```

Response Body (Success) :
```json
{
    "code": "201",
    "status": "success",
    "data": {
        "contact_id" : 1,
        "first_name" : "Feri",
        "last_name" : "Jumaidi",
        "email" : "feri.jumaidi404@gmail.com",
        "phone" : "08978654"
    }
}
```
Response Body (Failed) :
```json
{
    "code": "400",
    "status": "errors",
    "errors": {
        "message": "Invalid update data. Username must not contain special characters."
    }
}
```

## Remove Contact <!-- =============================================================== -->

Endpoin : DELTE /api/contacts/{contactId}

Headers : 

- Authorization : token

Response Body (Success) :
```json
{
    "code": "201",
    "status": "success",
    "data": {
        "message" : true
    }
}
```
Response Body (Failed) :
```json
{
    "code": "400",
    "status": "errors",
    "errors": {
        "message": "Invalid delete data"
    }
}
```
## Search Contact <!-- =============================================================== -->
Endpoin : GET /api/contacts

Headers : 

- Authorization : token

Query Params : 

- name : string, contact first_name or last_name, optional
- phone : string, contact phone, optional
- email : string, contact email, optional
- page : number, default 1
- size : number, default 10

Response Body (Success) :
```json
{
    "code": "200",
    "status": "success",
    "data": [
        {
        "contact_id" : 1,
        "first_name" : "Feri",
        "last_name" : "Jumaidi",
        "email" : "feri.jumaidi404@gmail.com",
        "phone" : "081"
        },
        {
        "contact_id" : 2,
        "first_name" : "Feri2",
        "last_name" : "Jumaidi2",
        "email" : "feri.jumaidi2404@gmail.com",
        "phone" : "082"
        },
        {
        "contact_id" : 3,
        "first_name" : "Feri3",
        "last_name" : "Jumaidi3",
        "email" : "feri.jumaidi3404@gmail.com",
        "phone" : "083"
        },
    ],
    "paging" : {
        "current_page" : 1,
        "total_page" : 10,
        "size" : 10
    }
}
```
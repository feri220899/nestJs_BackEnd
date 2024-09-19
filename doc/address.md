# Address API Spec

## Create Address <!-- =============================================================== -->
Endpoin : POST /api/contacts/{contactId}/address

Headers : 

- Authorization : token

Request Body :
```json
{
    "street" : "Jalan Contoh, optional",
    "city" : "Kota",
    "province" : "Provinsi, optional",
    "country" : "Negara",
    "postal_code" : "Kode Pos"
}
```

Response Body (Success) :
```json
{
    "code": "201",
    "status": "success",
    "data": {
        "address_id" : 1,
        "street" : "Jalan Contoh, optional",
        "city" : "Kota",
        "province" : "Provinsi, optional",
        "country" : "Negara",
        "postal_code" : "Kode Pos"
    }
}
```
Response Body (Failed) :
```json
{
    "code": "400",
    "status": "errors",
    "errors": {
        "message": "error input"
    }
}
```
## Get Address <!-- =============================================================== -->
Endpoin : GET /api/contacts/{contactId}/address/{addressId}

Headers : 

- Authorization : token

Response Body (Success) :
```json
{
    "code": "200",
    "status": "success",
    "data": {
        "address_id" : 1,
        "street" : "Jalan Contoh, optional",
        "city" : "Kota",
        "province" : "Provinsi, optional",
        "country" : "Negara",
        "postal_code" : "Kode Pos"
    }
}
```
Response Body (Failed) :
```json
{
    "code": "400",
    "status": "errors",
    "errors": {
        "message": "data not found."
    }
}
```
## Upadte Address <!-- =============================================================== -->
Endpoin : PUT /api/contacts/{contactId}/address/{addressId}

Headers : 

- Authorization : token

Request Body :
```json
{
    "street" : "Jalan Contoh, optional",
    "city" : "Kota",
    "province" : "Provinsi, optional",
    "country" : "Negara",
    "postal_code" : "Kode Pos"
}
```

Response Body (Success) :
```json
{
    "code": "200",
    "status": "success",
    "data": {
        "address_id" : 1,
        "street" : "Jalan Contoh, optional",
        "city" : "Kota",
        "province" : "Provinsi, optional",
        "country" : "Negara",
        "postal_code" : "Kode Pos"
    }
}
```
Response Body (Failed) :
```json
{
    "code": "400",
    "status": "errors",
    "errors": {
        "message": "update error"
    }
}
```
## Delete Address <!-- =============================================================== -->
Endpoin : Delte /api/contacts/{contactId}/address/{addressId}

Headers : 

- Authorization : token

Response Body (Success) :
```json
{
    "code": "200",
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
        "message": "Delete error"
    }
}
```
## List Address <!-- =============================================================== -->
Endpoin : GET /api/contacts/{contactId}/address/

Headers : 

- Authorization : token

Response Body (Success) :
```json
{
    "code": "200",
    "status": "success",
    "data": [
        {
            "address_id" : 1,
            "street" : "Jalan Contoh, optional",
            "city" : "Kota",
            "province" : "Provinsi, optional",
            "country" : "Negara",
            "postal_code" : "Kode Pos"
        },
        {
            "address_id" : 2,
            "street" : "Jalan Contoh, optional",
            "city" : "Kota",
            "province" : "Provinsi, optional",
            "country" : "Negara",
            "postal_code" : "Kode Pos"
        },
    ]
}
```
Response Body (Failed) :
```json
{
    "code": "400",
    "status": "errors",
    "errors": {
        "message": "data not found."
    }
}
```
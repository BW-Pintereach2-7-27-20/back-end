# Pintereach 2 Build Week Back-End

## Users

### Register POST  /register

```js
- Client will send in body==>

	{
	"username": "MyUsername",
	"password": "MyPassword"
	}

- Client will receive  in body ==>
 
 {
	"message": "User created!",
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
 }
```

### Login POST /login

```js

- Client will send  ==>

	{
	"username": "MyUsername",
	"password": "MyPassword"
	}

- Client will receive ==>
 
 {
	"message": "Welcome !",
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
 }
```

### Delete account DEL /user/delete/:id

```js
- Client will send in headers ==> 
	{
		"Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  	}
- Client will send in body ==>

	{
	"username": "MyUsername",
	"password": "MyPassword"
	}

- Client will receive in body ==>
 
 {
 	"message" : "Account has been deleted!"
 }
```
### Update PATCH /user/update/:id

```js
- Client will send in headers ==> 
	{
		"Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  	}
- Client will send in params ==> 
	{
		"id": "1"
  	}
- Client will send in body ==>

	{
	"username": "MyUsername", //if need to change
	"password": "MyPassword" //if need to change
	}

- Client will receive in body ==>
 
 {
 	"message" : "Account updated!",
    "username" : "new Username",
    "password" : "new password"
 }
```


## Articles

### Save
### Delete
### User Articles
### Update

## Boards

### Get All
### Delete
### Update
### Save

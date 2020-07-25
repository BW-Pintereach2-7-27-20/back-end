# Pintereach API Version 0.0.1 - Link - ``` http://example.com ```
#### Pintereach is an app that aims to be the 'Pintrest of research' current features include:
* ##### User accounts
* ##### Saving articles
* ##### Creating Boards

##### To interact with the API use the provided link plus your desired end point in your request. `Example --> | http://example.com/particularEndPoint/` you can learn more about each individual Endpoint on its own section.
## Users
``` Users require a username and password to be created.
You can use this username and password later to log in.
Username MUST BE unique.
Password CAN NOT bet same as User.
```
###### The User Object
|Name         |Type         |Description            |Conditions                           | 
|:-----------:|:-----------:| :--------------------:|:------------------------------------|
|**username** |*string*     |`Choosen username`     |`Required | Uninque`                 |
|**password** |*string*     |`Choosen password`     |`Required | NOT same as user`        |
|**id**       |*integer*    |`Id in params`         |`Required | Unique`                  |
___



### Create a user 
#### POST |*`  /register  `*
###### Parameters
|Name         |Type         |Description            |Conditions                           | 
|:-----------:|:-----------:| :--------------------:|:------------------------------------|
|**username** |*string*     |`Choosen username`     |`Required | Uninque`                 |
|**password** |*string*     |`Choosen password`     |`Required | NOT same as user`        |
##### In `BODY` send as *JSON* :
```js
	{
    	"username": "myUsername",
        "password": "MyPassword"
    }
```
#### *SUCCESS*
#### *FAILURE*
___



### Login as User 
#### POST |*`  /login  `*
###### Parameters
|Name         |Type         |Description            |Conditions                           | 
|:-----------:|:-----------:| :--------------------:|:------------------------------------|
|**username** |*string*     |`Choosen username`     |`Required | Uninque`                 |
|**password** |*string*     |`Choosen password`     |`Required | NOT same as user`        |
##### In `BODY` send as *JSON* :
```js
	{
    	"username": "myUsername",
        "password": "MyPassword"
    }
```
#### *SUCCESS*
#### *FAILURE*
___



### Delete user account *`PROTECTED`*
#### DELETE |*`  /user/:id  `*
###### Parameters
|Name         |Type         |Description            |Conditions                           | 
|:-----------:|:-----------:| :--------------------:|:------------------------------------|
|**username** |*string*     |`Choosen username`     |`Required | Uninque`                 |
|**password** |*string*     |`Choosen password`     |`Required | NOT same as user`        |
|**id**       |*integer*    |`Id in params`         |`Required`                           |
##### In `HEADERS` send as *JSON* :
```js
	{
    	"id": "1",
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
```
##### In `BODY` send as *JSON* :
```js
	{
    	"username": "myUsername",
        "password": "MyPassword"
    }
```
#### *SUCCESS*
#### *FAILURE*
___



### Update account *`PROTECTED`*
#### PATCH |*`  /user/:id  `*
###### Parameters
|Name         |Type         |Description            |Conditions                           | 
|:-----------:|:-----------:| :--------------------:|:------------------------------------|
|**username** |*string*     |`Choosen username`     |`Only if Updated`                    |
|**password** |*string*     |`Choosen password`     |`Only if Updated`                    |
|**id**       |*integer*    |`Id in params`         |`Required`                           |
##### In `HEADERS` send as *JSON* :
```js
	{
    	"id": "1",
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
```
##### In `BODY` send as *JSON* :
```js
	{
    	"username": "myUsername", //Only if Updated
        "password": "MyPassword"  //Only if Updated
    }
```
#### *SUCCESS*
#### *FAILURE*
___




## Articles
``` Articles are created by users using a URL.
	All articles saved MUST be be part of at least one board
	The API will auto populate thumbnail, title, host, and auhtor. User can update at a later time.
    Articles can be shared.
    If an article is removed from all boards it will be deleted permanently.
```

###### The Article Object
|Name             |Type         |Description            |Conditions                           |
|:----------------|:-----------:| :--------------------:|:------------------------------------|
|**id**           |*integer*    |`Article id`           |`Required | Unique`                  |
|**url**          |*string*     |`link to article`      |`Required`                           |
|**thumbnail**    |*integer*    |`Id in params`         |`Required`                           |
|**title**        |*string*     |`title of the article` |`Required`                           |
|**author**       |*string*     |`author of the article`|`Required`                           |
|**host**         |*string*     |`where is it hosted`   |`Required`                           |
|**published_on** |*string*     |`Date of publication`  |`Required`                           |
|**saved_on**     |*string*     |`Date saved`           |`Required`                           |
|**updated_on**   |*string*     |`Last update`          |`Required`                           |


___



### Save an Article
### Delete
### User Articles
### Update

## Boards

### Get All
### Delete
### Update
### Save

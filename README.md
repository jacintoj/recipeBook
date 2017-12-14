# RecipeBook

## Heroku url: 
https://bookofrecipes.herokuapp.com

*To start* go to the project directory and type:
```
node server
```


The mongo connection is in the cloud with mlab service

To change credentials just go to config.json on the root project and change user, pass or uris.

Some endpoints have been changed from the tests asked:

- Eliminated word /api/ at the beginning of every endpoint.
- All the operations asked are for the same model so the endpoints have been changed trying to follow the REST philosophy.

Api endpoints:

#### GET -> '/recipes':

Give you all the recipes.


#### GET -> '/recipe/{id}'

Give you only the recipe with that id.

If don't found just an empty object

I usually put a 404 on that case, but didnt know if the requirements of security wants to inform the user with a 404 or with what..


#### POST -> '/recipe'

Create a Recipe with the data sent in Json


#### PUT -> '/recipe/{id}'

Modify a Recipe with the data sent in Json


#### DELETE -> '/recipe/{id}'

Delete only the recipe with that id.


Json to send:

```json
{
	"name":"String, name of the recipe (required)",
	"origin" : "String, origin of the recipe (required)",
	"timePreparation": "Integer Number (required)",
	"numberOfDiners": "Integer Number",
	"steps" : "String, preparation steps (required)",
	"ingredients" : "ingredients array like this ->["rice","beans","salt"] (required)"
}
```

CAUTION: Since this is an exercise I haven't curated the strings so it is vulnerable to DDOS attacks
but i have to finish the second part and can do it right now.


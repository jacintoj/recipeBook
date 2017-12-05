# ReceiptBook

*To start* go to the project directory and type:
```
node server
```

*To run test* , with the server running in a console, in the project directory in other console type:

```
npm run test
```

The mongo connection is in the cloud with mlab service

To change credentials just go to config.json on the root project and change user, pass or uris.

Some endpoints have been changed from the tests asked:

- Eliminated word /api/ at the beginning of every endpoint.
- All the operations asked are for the same model so the endpoints have been changed trying to follow the REST philosophy.

Api endpoints:

#### POST -> '/receipt'

Create a Receipt with the data sent in Json:

Json to send:

```json
{
	"name":"String, name of the receipt",
	"origin" : "String, origin of the recepit",
	"ingredients" : "email of arrays like this ->["rice","","lastexample@jejeje.com"]",
	"schedule" : "Number like this->1504526760031",
	"html" : "<html><head></head><body><p>Email Content</p></body></html>"
}
```

CAUTION: Sinsce this is a test I haven't curated the strings so it is vulnerable to DDOS attacks
but i have to finish the second part and can do it right now.

#### GET -> '/campaign':

Give you all the campaigns.

#### GET -> '/campaign/mostactive'

Give you all the campaigns ordered for number of email adresess they have

#### GET -> '/campaign/{id}'

Give you only the campaing with that id.

If don't found just an empty object

I usually put a 404 on that case, but didnt know if the requirements of security wants to inform the user with a 404 or with what..




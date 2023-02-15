The microservice1, microservice2, and microservice3 are wroten on Express.js. The web-socket-server wroten on Nest.js.
I wanted just use both frameworks.

At first, you need to run the docker file with the command

```
docker compose up
```

or

````
docker compose up -d
````


After running docker run this command in web-socket-server service.

````
yarn
````
The first need to run web-socket-server

````
yarn start:dev
````

For microservice1, microservice2, microservice3 use npm.

````
 npm i
````

For starting them use.

````
npm start
````


And finally, you can see all the results with the socket in UI. Run the html files and in the console, you will see results.

Ex. 
````
Microservice1 started work!.
Microservice2 started work!
Microservice3 started work!
````

I just added the `Ping` button in UI, you can use it for pinging microservices and get answers from those.

There is a UI for Kafka too. You can open it on `localhost:9000` in the browser.
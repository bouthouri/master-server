# Gettinng started

## Requirement

To run this server you need to install docker-compose
This is a [link](https://docs.docker.com/compose/install/) that should help you

## Installation

inside the directory.

```
docker build .
```

## Start

To start the server use this command

```
docker-compose up
```

if you see this message then it's all good and you can enjoy your server.

```
Web server listening at: http://localhost:3000
Browse your REST API at http://localhost:3000/explorer
```

## End

To end the server just click on `ctrl+c` two time and the server will shutdown
`cmd+c` for mac users

# Usage

## Explorer

To help you work easily this server come with a web client that will document the models and methodes.
The explorer will also help you visualise the models and there methodes.
You can test your work directly from the client.

open your navigator at http://localhost:3000/explorer and test it.

## API consumption

The API consumption will be on http://localhost:3000/api

Use the explorer for easier integration.

For example if you need the **GET** methode of the **Scores** model click on the **try it out!** button and you will have the complete link on the **Request URL section**.

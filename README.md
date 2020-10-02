# Hooker

Hooker is a backend server for apps that needs gamification easily implemented.
This project begins with the conviction That user is more important than features.
Every application needs to have a minimum of user engagement and retention to succeed. 
This can be easier with a little bit of gamification.

This project helps little startups with a good starting point.
It is certainly not a complete server/backed but it contains a good amount of functionalities that can help you in your gamification strategy.
It is developed with Loopback so it is highly flexible and you can add your app logic easily.
It can be used with both game saver and applications, as I stated previously the logic is up to you.
It's efficient for both small project and large scale applications.

I will try my best to maintain it with high performance and portability in mind.
Enjoy using it and consider contributing with your ideas, code or report a problem in an issue ticket.

# Getting started

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
Web server listening at http://localhost:3000
Browse your REST API at http://localhost:3000/explorer
```

## End

To end the server just click on `ctrl+c` two times and the server will shutdown
`cmd+c` for mac users

# Usage

## Explorer

To help you work easily this server comes with a web client that will document the models and methods.
The explorer will also help you visualise the models and their methods.
You can test your work directly from the client.

open your navigator at http://localhost:3000/explorer and test it.

## API consumption

The API consumption will be on http://localhost:3000/api

Use the explorer for easier integration.

For example, if you need the **GET** method of the **Scores** model click on the **try it out!** button and you will have the complete link on the **Request URL section**.

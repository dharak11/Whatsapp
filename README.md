# Angular2-Meteor-Base ChatApplication

## Usage

User can Sign up and Login for Chat App,Users Can Chat.

## Boilerplate Contents

This boilerplate contains the basics that requires to quick start with Angular2-Meteor application.

This package contains:

- TypeScript support and Angular 2 compilers for Meteor
- Angular2-Meteor
- Angular2 (core, common, compiler, platform)
- SASS support
- Testing framework with Mocha and Chai

This application also contains demo code:

- Main Component (`/client/app.component`)
- Demo Child Component (`/client/imports/demo/demo.component`)
- Demo Service (`/client/imports/demo/demo-data.service`)
- Demo Mongo Collection (`/both/demo-collection.ts`)

The Main component loads the child component, which uses the demo service that gets it's data from the demo collection.

## Folder Structure

The folder structure is a mix between [Angular 2 recommendation](https://johnpapa.net/angular-2-styles/) and [Meteor 1.3 recommendation](https://guide.meteor.com/structure.html).

#### Client

The `client` folder contains single TypeScript (`.ts`) file which is the main file (`/client/app.component.ts`), and bootstrap's the Angular 2 application.

The main component uses HTML template and SASS file.

The `index.html` file is the main HTML which loads the application by using the main component selector (`<app>`).

All the other client files are under `client/imports` and organized by the context of the components (in our example, the context is `demo`).


#### Server

The `server` folder contain single TypeScript (`.ts`) file which is the main file (`/server/main.ts`), and creates the main server instance, and the starts it.

All other server files should be located under `/server/imports`.

#### Common

Example for common files in our app, is the MongoDB collection we create - it located under `/both/demo-collection.ts` and it can be imported from both client and server code.

## Run

- Clone Repo
- git clone https://github.com/dharak11/Whatsapp.git
- cd ChatApplication
- meteior npm install
- meteor
- http://localhost:3000

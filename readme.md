# Pokedex App

### If you are a fan of Pokémon you need this app with you! You can use it to get a full information for every Pokémon in the Pokémon World

## How to Start

> First off all, you need to get it touch with me, to get the .env with the **credentials** to use my firebase store, or you can use **one of your own**, taking in count the ".env-example" file.

Pokedex App needs from [Node.js](https://nodejs.org/), because it was created with [Expo CLI](https://docs.expo.dev/get-started/installation/)

If you have any doubts, check out the docs that i mention earlier.

In order to use this app locally, run the following commands

```
$ npm install
```

if everythings goes well, then

```
$ npm run android
```

To get the list of Pokémons for the HomeScreen, i used a recursive fetching that have a max fetch of **90**, if you want to get more Pokémons for the list, you need to go to this file:

[usePokeSetUp](https://github.com/abonvicini/pokedex-app/blob/main/hooks/usePokeSetUp.jsx)

and change the parameter **maxCalls** in the line **12**

> Try not to use a number bigger than 906, becouse the is no Pokémon ID existent for that number and therefore the app will crash, at least for now.

## Disclaimer

The design system that i used, its from a figma community repository. I will put a link to the design and try to find who is the owner, to give the corresponde credits.

In whereever be the case, this app was only created for study propuse.

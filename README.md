# UCI Module 7 Self Assessment - Bot Battlr

Welcome to __Bot Battlr__, the one and only spot in the known universe where you
can custom build your own Bot Army!

Here's the scenario: a galactic ruler has hired you, a galactic web developer,
to develop a galactic React app in that will allow them to browse through a
list of robots, view a robot's details, and if the bot is to their liking,
enlist that bot into their army.

![alt text][full_demo]

[full_demo]: ./public/full_demo.gif "Full demo"

All of the code to style the page has been written for you, meaning that you
should be adding to the code rather than editing it; your main responsibility
will be to get information, render it into the right containers, and build out
the page's functionality. Try your best to find the right places to insert code
into the established code base, but if your finished product has some styling
issues, don't worry too much about it.

## What You Already Have

`BotCard` and `BotSpecs` are presentational components that have been provided
for you that will render out information about an individual bot formatted for a
list view and for a full view, respectively. They are pre-styled, and it is your
responsibility to get the data into them.

`BotCollection` and `YourBotArmy` are container components. `BotCollection` is
where all the bots will be displayed, while `YourBotArmy` (the green portion on
the top of the screen) will only display the bots that have been selected by the
user.

`BotPage` is the highest component below App, and serves as the main container
for all of the pieces of the page.

## Instructions

### Setting up the JSON Server

This assessment is focused on React, but we still need some data to work with.
Specifically, we need _bots_. To get this data, we will use a [JSON Server][]
to mock an API. The server data is already populated in `db.json`. Run
`npm install`, then run `json-server --watch db.json` to start the server.

[JSON Server]: https://github.com/typicode/json-server

To confirm the server is running, you can visit http://localhost:3000/bots to
see the JSON of all bots.

### Starting up React

Leave the JSON server running, open a _second_ terminal window and navigate to
this assessment. To start the React frontend, run `npm start`. As both React
and JSON Server both run on port 3000 by default, you will be prompted to start
React on port 3001, and your frontend will be available at http://localhost:3001.

Follow along with these steps below, making sure to read all of the instructions
before beginning to code.

### 1.  Fetching Bots

Work on fetching data from this API: http://localhost:3000/bots. The response
should contain an array of bot objects that are structured as follows:

  ```json
    {
      "id": 301,
      "name": "gs-98",
      "health": 71,
      "damage": 85,
      "armor": 34,
      "bot_class": "Assault",
      "catchphrase": "111111111111110011001111100101110010010110001100",
      "avatar_url": "https://robohash.org/voluptasetab.png?size=300x300&set=set1",
      "created_at": "2017-12-08T14:13:45.272Z",
      "updated_at": "2017-12-08T14:13:45.272Z"
    }
  ```

Based on the current structure of the app, think about where this array of bots
needs to be stored.

### 2.  Indexing Bots

After you have fetched the bots, work on rendering them into `BotCollection`,
which should be a child of `BotsPage`. A component called `BotCard` has been
provided to you to display the information about an individual bot in a list
format.

### 3.  Enlisting and Removing Bots From Your Army

Once the list is complete, work on the functionality of enlisting bots into your
army. Clicking a card should add a bot to the user's list of bots. Bots that
have been chosen should be displayed within `YourBotArmy`, which should also be
a child of `BotsPage`  (feel free to reuse `BotCard`). A bot should be enlisted
only once. If you click on a bot in your army, that bot should be removed from
your army.

_Note that nothing needs to be persisted. Refreshing the page should clear out
the current army._

## Checkpoint!

If you have gotten this far, you have hit the checkpoint. Your app should look
like the following:

![alt text][checkpoint]

[checkpoint]: ./public/checkpoint_demo.gif "Checkpoint demo"

Before proceeding to the next part of the challenge, __be sure to stage a commit
at this point__. That way if your code breaks or you do not get to finish the
next feature, you will still have a partially working application to get back
to.

### 4. Refactor

Now that you have some of the functionality of your app, it's time to refactor
the code. Rather than enlisting the bot into the army, clicking on the card
should instead display a show view (`BotSpecs`) for that bot, which should
replace `BotsCollection`. BotSpecs should have two buttons: one to go back to
the list view and another to enlist that bot.

This refactored version should look like the following:

![alt text][full_demo]

[full_demo]: ./public/full_demo.gif "Full demo"

### BONUS

If you have finished all of the above features, consider building out an extra
feature. This could be a sort, a filter, or a search. This deliverable is entirely
optional, so do not feel pressure to meet this goal.

## Things to Keep in Mind

1. Props and state - Is state maintained in the right components? Are the
   functions to change state defined and executed in the appropriate places? Are
   the appropriate props passed from component to component?

2. Code structure and efficiency - Is the code clean and easy to read? Are large
   chunks of code separated into reusable functions? Is functionality
   appropriately delegated between class and functional components?

3. Component lifecycle - Are the right component lifecycle methods used? Are
   they used for the correct purposes?

4. Rendering - Is information rendered in the correct locations? Were you able
   to conditionally render different components (i.e. `BotSpecs` and
   `BotCollection`)?

__Good Luck!__

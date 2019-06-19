import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  state = {
    botCollection: [],
    yourBots: [],
    currentViewedBot: null,
  };

  componentDidMount() {
    fetch("http://localhost:3000/bots")
      .then(res => res.json())
      .then(botCollection => this.setState({ botCollection }));
  }

  seeDetails = botId => {
    this.setState({
      currentViewedBot: botId,
    });
  };

  removeBot = removeBotId => {

    const newList = this.state.yourBots.filter((botId)=>{
      return botId !== removeBotId
    })
    this.setState({
      yourBots: newList,
      currentViewedBot: null,
    });
  }

  seeAll = () => {
    this.setState({
      currentViewedBot: null,
    });
  };

  enlist = botId => {
    let newList = this.state.yourBots.slice();
    newList.push(botId);

    this.setState({
      yourBots: newList,
      currentViewedBot: null,
    });
  };
  
  render() {
    let displayedView;
    const displayedBot = this.state.botCollection.find(bot => bot.id === this.state.currentViewedBot)
    if (!displayedBot) {
      displayedView = (
        <BotCollection
          botCollection={this.state.botCollection}
          view={this.seeDetails}
        />
      );
    } else {
      displayedView = (
        <BotSpecs
          bot={displayedBot}
          seeAll={this.seeAll}
          enlist={this.enlist}
        />
      );
    }
    console.log(this.state)
    return (
      <div>
        <YourBotArmy {...this.state} remove={this.removeBot} />
        {displayedView}
      </div>
    );
  }
}

export default BotsPage;
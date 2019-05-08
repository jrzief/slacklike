import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import "./App.css";
import { connect } from "react-redux";

/* class App extends Component {
  render() {
    return <div>App</div>;
  }
} */

import ColorPanel from "./colorpanel/ColorPanel";
import SidePanel from "./sidepanel/SidePanel";
import MetaPanel from "./metapanel/MetaPanel";
import Messages from "./messages/Messages";

const App = ({ currentUser, currentChannel, isPrivateChannel }) => (
  <Grid columns="equal" className="app" style={{ background: "#eee" }}>
    <ColorPanel />
    <SidePanel key={currentUser && currentUser.uid} currentUser={currentUser} />

    <Grid.Column style={{ marginLeft: 320 }}>
      <Messages
        key={currentChannel && currentChannel.id}
        currentChannel={currentChannel}
        currentUser={currentUser}
        isPrivateChannel={isPrivateChannel}
      />
    </Grid.Column>
    <Grid.Column width={4}>
      <MetaPanel />
    </Grid.Column>
  </Grid>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
  isPrivateChannel: state.channel.isPrivateChannel
});

export default connect(mapStateToProps)(App);

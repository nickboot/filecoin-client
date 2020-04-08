import * as React from "react";
import * as Strings from "~/common/strings";
import * as Constants from "~/common/constants";
import * as Fixtures from "~/common/fixtures";
import * as System from "~/components/system";

import { css } from "react-emotion";

import GLRenderer from "~/components/three/GLRenderer";
import Section from "~/components/core/Section";
import ScenePage from "~/components/core/ScenePage";

export default class ScenePeers extends React.Component {
  state = {};

  _handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <ScenePage>
        <System.H1>Peers</System.H1>
        <GLRenderer width={1200} height={480} />
        <Section
          onAction={this.props.onAction}
          onNavigateTo={this.props.onNavigateTo}
          title="Peers"
          buttons={[
            {
              name: "Add peer",
              type: "SIDEBAR",
              value: "SIDEBAR_ADD_PEER",
            },
          ]}
        >
          <System.Table
            onAction={this.props.onAction}
            onNavigateTo={this.props.onNavigateTo}
            data={Fixtures.PEERS_TABLE}
            selectedRowId={this.state.table_peers}
            onChange={this._handleChange}
            name="table_peers"
          />
        </Section>
      </ScenePage>
    );
  }
}

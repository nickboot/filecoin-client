import * as React from "react";
import * as Strings from "~/common/strings";
import * as Constants from "~/common/constants";
import * as Fixtures from "~/common/fixtures";
import * as System from "~/components/system";

import { css } from "react-emotion";

import Section from "~/components/core/Section";
import ScenePage from "~/components/core/ScenePage";

export default class SceneMiners extends React.Component {
  state = {};

  _handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <ScenePage>
        <System.H1>Miners</System.H1>
        <Section
          onAction={this.props.onAction}
          onNavigateTo={this.props.onNavigateTo}
          title="Recent"
          buttons={[
            {
              name: "Add miner",
              type: "ACTION",
              value: "ACTION_ADD_MINERS",
            },
            {
              name: "Export",
              type: "DOWNLOAD",
              value: "CSV_ALL_MINERS",
            },
          ]}
        >
          <System.Table
            data={Fixtures.MINERS_TABLE}
            selectedRowId={this.state.table_miners}
            onNavigateTo={this.props.onNavigateTo}
            onAction={this.props.onAction}
            onChange={this._handleChange}
            name="table_miners"
          />
        </Section>
      </ScenePage>
    );
  }
}

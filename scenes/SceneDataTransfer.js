import * as React from "react";
import * as Strings from "~/common/strings";
import * as Constants from "~/common/constants";
import * as Fixtures from "~/common/fixtures";
import * as System from "~/components/system";

import { css } from "react-emotion";

import ScenePage from "~/components/core/ScenePage";
import Section from "~/components/core/Section";

const TAB_GROUP = [
  { value: "1", label: "Current transfers" },
  { value: "2", label: "Past transfers" },
];

export default class SceneDataTransfer extends React.Component {
  state = { sub_navigation: "1" };

  _handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <ScenePage>
        <System.H1>Data transfers</System.H1>

        <System.CardTabGroup
          style={{ marginTop: 24 }}
          name="sub_navigation"
          options={TAB_GROUP}
          value={this.state.sub_navigation}
          onChange={this._handleChange}
        />

        {this.state.sub_navigation === "2" ? (
          <Section
            title="Past transfers"
            onAction={this.props.onAction}
            onNavigateTo={this.props.onNavigateTo}
          >
            <System.Table
              data={Fixtures.DATA_TRANSFER_TABLE_PAST}
              selectedRowId={this.state.table_past_transfer}
              onChange={this._handleChange}
              onNavigateTo={this.props.onNavigateTo}
              onAction={this.props.onAction}
              name="table_past_transfer"
            />
          </Section>
        ) : null}

        {this.state.sub_navigation === "1" ? (
          <Section
            onAction={this.props.onAction}
            onNavigateTo={this.props.onNavigateTo}
            title="Current transfers"
            buttons={[
              {
                name: "Cancel all",
                type: "ACTION",
                value: "ACTION_CANCEL_DATA_TRANSFERS",
              },
            ]}
          >
            <System.P style={{ padding: 24 }}>There are no transfers</System.P>
          </Section>
        ) : null}
      </ScenePage>
    );
  }
}

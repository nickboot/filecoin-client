import * as React from "react";
import * as Strings from "~/common/strings";
import * as Constants from "~/common/constants";
import * as Fixtures from "~/common/fixtures";
import * as System from "~/components/system";

import { css } from "react-emotion";

import Section from "~/components/core/Section";
import ScenePage from "~/components/core/ScenePage";

const TAB_GROUP = [
  { value: "1", label: "Active channels" },
  { value: "2", label: "Redeemed channels" },
];

export default class ScenePaymentChannels extends React.Component {
  state = { sub_navigation: "1" };

  _handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <ScenePage>
        <System.H1>Payment channels</System.H1>

        <System.CardTabGroup
          style={{ marginTop: 24 }}
          name="sub_navigation"
          options={TAB_GROUP}
          value={this.state.sub_navigation}
          onChange={this._handleChange}
        />

        {this.state.sub_navigation === "1" ? (
          <Section
            onAction={this.props.onAction}
            onNavigateTo={this.props.onNavigateTo}
            title="Active payment channels"
            buttons={[
              {
                name: "Create new",
                type: "SIDEBAR",
                value: "SIDEBAR_CREATE_PAYMENT_CHANNEL",
              },
              {
                name: "Export",
                type: "DOWNLOAD",
                value: "CSV_ACTIVE_PAYMENT_CHANNELS",
              },
            ]}
          >
            <System.Table
              onAction={this.props.onAction}
              onNavigateTo={this.props.onNavigateTo}
              data={Fixtures.PAYMENT_CHANNELS_TABLE_ACTIVE}
              selectedRowId={this.state.table_payment_channels_active}
              onChange={this._handleChange}
              name="table_payment_channels_active"
            />
          </Section>
        ) : null}

        {this.state.sub_navigation === "2" ? (
          <Section
            onAction={this.props.onAction}
            onNavigateTo={this.props.onNavigateTo}
            title="Redeemed payment channels"
            buttons={[
              {
                name: "Export",
                type: "DOWNLOAD",
                value: "CSV_REDEEMED_PAYMENT_CHANNELS",
              },
            ]}
          >
            <System.Table
              onAction={this.props.onAction}
              onNavigateTo={this.props.onNavigateTo}
              data={Fixtures.PAYMENT_CHANNELS_TABLE_REDEEMED}
              selectedRowId={this.state.table_payment_channels_redeemed}
              onChange={this._handleChange}
              name="table_payment_channels_redeemed"
            />
          </Section>
        ) : null}
      </ScenePage>
    );
  }
}

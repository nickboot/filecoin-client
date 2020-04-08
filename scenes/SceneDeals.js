import * as React from "react";
import * as Strings from "~/common/strings";
import * as Constants from "~/common/constants";
import * as Fixtures from "~/common/fixtures";
import * as System from "~/components/system";

import { css } from "react-emotion";

import Section from "~/components/core/Section";
import ScenePage from "~/components/core/ScenePage";

export default class SceneDeals extends React.Component {
  state = {};

  _handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <ScenePage>
        <Section
          onAction={this.props.onAction}
          onNavigateTo={this.props.onNavigateTo}
          title="All deals"
          buttons={[
            {
              name: "Export",
              type: "DOWNLOAD",
              value: "CSV_ALL_DEALS",
            },
          ]}
        >
          <System.Table
            onAction={this.props.onAction}
            onNavigateTo={this.props.onNavigateTo}
            data={Fixtures.DEALS_TABLE}
            selectedRowId={this.state.table_deals}
            onChange={this._handleChange}
            name="table_deals"
          />
        </Section>
      </ScenePage>
    );
  }
}

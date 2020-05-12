import * as React from "react";
import * as Strings from "~/common/strings";
import * as Constants from "~/common/constants";
import * as Fixtures from "~/common/fixtures";
import * as System from "~/components/system";

import { css } from "react-emotion";

import Section from "~/components/core/Section";
import ScenePage from "~/components/core/ScenePage";

export default class SceneFilesFolder extends React.Component {
  state = {};

  _handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const data = {
      columns: [
        { key: "icon", hideLabel: true, width: "32px", type: "ICON" },
        { key: "file", name: "File", width: "100%", type: "FILE_LINK" },
        { key: "size", name: "Size", width: "140px" },
        {
          key: "date",
          name: "Date uploaded",
          width: "160px",
          tooltip:
            "This date represents when the file was first uploaded to the network.",
        },
        {
          key: "remaining",
          name: "Remaining time",
          tooltip:
            "This file will remain available to you on the network for a limited time. Once time elapses you will have to create a new storage deal.",
          width: "180px",
        },
        {
          key: "retrieval-status",
          name: "Status",
          type: "DEAL_STATUS_RETRIEVAL",
        },
        { key: "errors", hideLabel: true, type: "NOTIFICATION_ERROR" },
      ],
      rows: this.props.data.children,
    };

    return (
      <ScenePage>
        <Section
          onAction={this.props.onAction}
          onNavigateTo={this.props.onNavigateTo}
          title={this.props.data.name}
          buttons={[
            {
              name: "Retrieve",
              type: "SIDEBAR",
              value: "SIDEBAR_FILE_RETRIEVAL_DEAL",
            },
            {
              name: "Store file on network",
              type: "SIDEBAR",
              value: "SIDEBAR_FILE_STORAGE_DEAL",
            },
          ]}
        >
          <System.Table
            data={data}
            onAction={this.props.onAction}
            onNavigateTo={this.props.onNavigateTo}
            selectedRowId={this.state.table_local_file}
            onChange={this._handleChange}
            name="table_local_file"
          />
        </Section>
      </ScenePage>
    );
  }
}

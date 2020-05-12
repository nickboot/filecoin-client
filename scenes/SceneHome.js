import * as React from "react";
import * as Strings from "~/common/strings";
import * as Constants from "~/common/constants";
import * as Fixtures from "~/common/fixtures";
import * as System from "~/components/system";

import { css } from "react-emotion";

import GLRenderer from "~/components/three/GLRenderer";
import Section from "~/components/core/Section";
import ScenePage from "~/components/core/ScenePage";

const STYLES_ROW = css`
  display: flex;
  margin-top: 24px;
  width: 100%;

  :first-child {
    margin-top: 0px;
  }
`;

const STYLES_COLUMN = css`
  display: inline-flex;
  padding: 0 12px 0 12px;
  max-width: 25%;
  width: 100%;

  :first-child {
    padding: 0 12px 0 0;
  }

  :last-child {
    padding: 0 0 0 12px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export default class SceneHome extends React.Component {
  state = {
    data: null,
    transaction: null,
  };

  _handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <ScenePage>
        <GLRenderer width={1200} height={480} />

        <div className={STYLES_ROW}>
          <span className={STYLES_COLUMN}>
            <System.StatCard
              data={[
                ["2017-01-01 00:00:00 UTC", 7],
                ["2017-05-01 00:00:00 UTC", 14],
                ["2017-20-01 00:00:00 UTC", 16],
                ["2017-24-01 00:00:00 UTC", 2],
                [new Date(), 24],
              ]}
              value={1000}
              denomination="GB"
            >
              Total data stored
            </System.StatCard>
          </span>

          <span className={STYLES_COLUMN}>
            <System.StatCard
              data={[
                ["2017-01-01 00:00:00 UTC", 65],
                ["2017-05-01 00:00:00 UTC", 12],
                ["2017-20-01 00:00:00 UTC", 2],
                ["2017-24-01 00:00:00 UTC", 20],
                [new Date(), 24],
              ]}
              value={1000}
              denomination="GB"
            >
              Total data retrieved
            </System.StatCard>
          </span>

          <span className={STYLES_COLUMN}>
            <System.StatCard
              data={[
                ["2017-01-01 00:00:00 UTC", 7],
                ["2017-05-01 00:00:00 UTC", 12],
                ["2017-20-01 00:00:00 UTC", 16],
                ["2017-24-01 00:00:00 UTC", 33],
                [new Date(), 24],
              ]}
              value={1000}
              denomination="Deals"
            >
              Total deals
            </System.StatCard>
          </span>

          <span className={STYLES_COLUMN}>
            <System.StatCard
              data={[
                ["2017-01-01 00:00:00 UTC", 7],
                ["2017-05-01 00:00:00 UTC", 22],
                ["2017-20-01 00:00:00 UTC", 44],
                ["2017-24-01 00:00:00 UTC", 20],
                [new Date(), 24],
              ]}
              value={1000}
              denomination="FIL"
            >
              Wallet Balance
            </System.StatCard>
          </span>
        </div>

        <div className={STYLES_ROW}>
          <span className={STYLES_COLUMN}>
            <System.StatCard
              data={[
                ["2017-01-01 00:00:00 UTC", 7],
                ["2017-05-01 00:00:00 UTC", 12],
                ["2017-20-01 00:00:00 UTC", 12],
                ["2017-24-01 00:00:00 UTC", 20],
                [new Date(), 24],
              ]}
              value={1000}
              denomination="FIL/GB/Month"
            >
              Your average storage price
            </System.StatCard>
          </span>

          <span className={STYLES_COLUMN}>
            <System.StatCard
              data={[
                ["2017-01-01 00:00:00 UTC", 7],
                ["2017-05-01 00:00:00 UTC", 23],
                ["2017-20-01 00:00:00 UTC", 16],
                ["2017-24-01 00:00:00 UTC", 20],
                [new Date(), 24],
              ]}
              value={1000}
              denomination="FIL/GB"
            >
              Your average retrieval price
            </System.StatCard>
          </span>

          <span className={STYLES_COLUMN}>
            <System.StatCard
              data={[
                ["2017-01-01 00:00:00 UTC", 7],
                ["2017-05-01 00:00:00 UTC", 12],
                ["2017-20-01 00:00:00 UTC", 16],
                ["2017-24-01 00:00:00 UTC", 23],
                [new Date(), 24],
              ]}
              value={1000}
              denomination="FIL/GB/Month"
            >
              Average storage market price
            </System.StatCard>
          </span>

          <span className={STYLES_COLUMN}>
            <System.StatCard
              data={[
                ["2017-01-01 00:00:00 UTC", 47],
                ["2017-05-01 00:00:00 UTC", 42],
                ["2017-20-01 00:00:00 UTC", 46],
                ["2017-24-01 00:00:00 UTC", 40],
                [new Date(), 24],
              ]}
              value={1000}
              denomination="FIL/GB"
            >
              Average market retrieval price
            </System.StatCard>
          </span>
        </div>

        <Section
          onAction={this.props.onAction}
          onNavigateTo={this.props.onNavigateTo}
          title="Recent data"
          buttons={[
            {
              name: "View files",
              type: "NAVIGATE",
              value: 4,
            },
          ]}
        >
          <System.Table
            data={Fixtures.HOME_TABLE_RECENT_DATA}
            selectedRowId={this.state.data}
            onChange={this._handleChange}
            onAction={this.props.onAction}
            onNavigateTo={this.props.onNavigateTo}
            name="data"
          />
        </Section>

        <Section
          onAction={this.props.onAction}
          onNavigateTo={this.props.onNavigateTo}
          title="Recent transactions"
          buttons={[
            {
              name: "View wallet",
              type: "NAVIGATE",
              value: 2,
            },
          ]}
        >
          <System.Table
            data={Fixtures.HOME_TABLE_RECENT_TRANSACTIONS}
            selectedRowId={this.state.transaction}
            onChange={this._handleChange}
            onAction={this.props.onAction}
            onNavigateTo={this.props.onNavigateTo}
            name="transaction"
          />
        </Section>
      </ScenePage>
    );
  }
}

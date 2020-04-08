import * as React from "react";
import * as Strings from "~/common/strings";
import * as Constants from "~/common/constants";
import * as Fixtures from "~/common/fixtures";
import * as System from "~/components/system";

import { css } from "react-emotion";
import { LineChart } from "~/vendor/react-chartkick";

import Section from "~/components/core/Section";
import ScenePage from "~/components/core/ScenePage";

const STYLES_CHART_SECTION = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 48px;
`;

const STYLES_LEFT = css`
  min-width: 10%;
  width: 100%;
`;

const STYLES_RIGHT = css`
  width: 288px;
  flex-shrink: 0;
  padding-left: 24px;
`;

const STYLES_FOCUS = css`
  font-size: ${Constants.typescale.lvl1};
  font-family: "inter-medium";
  overflow-wrap: break-word;
  width: 100%;

  strong {
    font-family: "inter-semi-bold";
    font-weight: 400;
  }
`;

const STYLES_SUBTEXT = css`
  margin-top: 8px;
  font-size: 12px;
`;

const STYLES_ITEM = css`
  padding: 16px 24px 16px 24px;
`;

const STYLES_OPTION = css`
  margin-left: 24px;
  font-family: "inter-semi-bold";
  font-size: 12px;
  line-height: 0.2px;
  text-transform: uppercase;
  border-radius: 4px;
  transition: 200ms ease all;

  :hover {
    cursor: pointer;
    color: ${Constants.system.brand};
  }
`;

const STYLES_OPTIONS = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 24px;
`;

export default class SceneStorageMarket extends React.Component {
  state = {};

  _handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <ScenePage>
        <System.H1>2,534 FIL</System.H1>
        <System.P>
          Last Storage Order / GB / Month{" "}
          <strong style={{ color: Constants.system.green, fontWeight: 400 }}>
            +143.24 (6.08)%
          </strong>
        </System.P>

        <div className={STYLES_CHART_SECTION}>
          <div className={STYLES_LEFT}>
            <Section
              onAction={this.props.onAction}
              onNavigateTo={this.props.onNavigateTo}
              title="Storage market"
            >
              <div className={STYLES_OPTIONS}>
                <span className={STYLES_OPTION}>1 Day</span>
                <span className={STYLES_OPTION}>1 Week</span>
                <span className={STYLES_OPTION}>1 Month</span>
                <span className={STYLES_OPTION}>6 Month</span>
                <span className={STYLES_OPTION}>1 Year</span>
              </div>
              <LineChart
                data={[
                  ["2017-01-01 00:00:00 UTC", 1],
                  ["2018-01-01 00:00:00 UTC", 5],
                  ["2019-01-01 00:00:00 UTC", 25],
                  ["2020-01-01 00:00:00 UTC", 200],
                  [new Date(), 400],
                ]}
                library={{
                  backgroundColor: "transparent",
                  scales: {
                    yAxes: [
                      {
                        display: false,
                      },
                    ],
                  },
                }}
                dataset={{ lineTension: 0, pointRadius: 0, borderWidth: 1 }}
                width="100%"
                height="640px"
                colors={[Constants.system.brand]}
              />
            </Section>
          </div>
          <div className={STYLES_RIGHT}>
            <Section
              onAction={this.props.onAction}
              onNavigateTo={this.props.onNavigateTo}
              title="Statistics"
            >
              <div className={STYLES_ITEM}>
                <div className={STYLES_FOCUS}>8,422 FIL/GB/Month</div>
                <div className={STYLES_SUBTEXT}>Market Storage Price</div>
              </div>

              <div className={STYLES_ITEM}>
                <div className={STYLES_FOCUS}>4 FIL/GB/Month</div>
                <div className={STYLES_SUBTEXT}>Average Storage Price</div>
              </div>

              <div className={STYLES_ITEM}>
                <div className={STYLES_FOCUS}>4.001 FIL/GB/Month</div>
                <div className={STYLES_SUBTEXT}>Storage High Today</div>
              </div>

              <div className={STYLES_ITEM}>
                <div className={STYLES_FOCUS}>44 Files</div>
                <div className={STYLES_SUBTEXT}>Daily File Volume</div>
              </div>

              <div className={STYLES_ITEM}>
                <div className={STYLES_FOCUS}>24 Files</div>
                <div className={STYLES_SUBTEXT}>Average Daily File Volume</div>
              </div>

              <div className={STYLES_ITEM}>
                <div className={STYLES_FOCUS}>444,444 GB</div>
                <div className={STYLES_SUBTEXT}>Monthly GB Volume</div>
              </div>

              <div className={STYLES_ITEM}>
                <div className={STYLES_FOCUS}>24,000 GB</div>
                <div className={STYLES_SUBTEXT}>Average GB Volume</div>
              </div>
            </Section>
          </div>
        </div>

        <Section
          onAction={this.props.onAction}
          onNavigateTo={this.props.onNavigateTo}
          title="Transactions"
          buttons={[
            {
              name: "Make storage deal",
              type: "SIDEBAR",
              value: "SIDEBAR_FILE_STORAGE_DEAL",
            },
            {
              name: "Export",
              type: "DOWNLOAD",
              value: "CSV_STORAGE_DEALS",
            },
          ]}
        >
          <System.Table
            data={Fixtures.STORAGE_MARKET_TABLE}
            selectedRowId={this.state.table_storage_market}
            onAction={this.props.onAction}
            onNavigateTo={this.props.onNavigateTo}
            onChange={this._handleChange}
            name="table_storage_market"
          />
        </Section>
      </ScenePage>
    );
  }
}

import * as React from "react";
import * as Strings from "~/common/strings";
import * as Constants from "~/common/constants";
import * as Fixtures from "~/common/fixtures";
import * as System from "~/components/system";

import { css } from "react-emotion";

import { LineChart } from "~/vendor/react-chartkick";
import Section from "~/components/core/Section";
import ScenePage from "~/components/core/ScenePage";

const STYLES_ROW = css`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const STYLES_LEFT = css`
  font-size: ${Constants.typescale.lvl2};
  padding-right: 24px;
  flex-shrink: 0;
`;

const STYLES_RIGHT = css`
  font-family: "inter-semi-bold";
  font-size: ${Constants.typescale.lvl2};
  color: ${Constants.system.brand};
  min-width: 10%;
  width: 100%;
  padding-left: 24px;
`;

const STYLES_TEXT_CTA = css`
  text-decoration: underline;
  color: ${Constants.system.brand};
  font-weight: 400;
  cursor: pointer;
  transition: 200ms ease all;

  :hover {
    color: ${Constants.system.green};
  }
`;

const STYLES_GRAPH_OBJECT = css`
  border-radius: 4px;
  background: ${Constants.system.brand};
  padding: 8px;
`;

const STYLES_GRAPH_ROW = css`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 48px;
`;

const STYLES_GRAPH_ROW_LEFT = css`
  width: 50%;
  padding: 16px 8px 16px 24px;
`;

const STYLES_GRAPH_ROW_RIGHT = css`
  width: 50%;
  padding: 16px 24px 16px 8px;
`;

const STYLES_OPTION = css`
  color: ${Constants.system.white};
  margin-left: 24px;
  font-family: "inter-semi-bold";
  font-size: 12px;
  line-height: 0.2px;
  text-transform: uppercase;
  border-radius: 4px;
  transition: 200ms ease all;

  :hover {
    cursor: pointer;
    color: ${Constants.system.green};
  }
`;

const STYLES_OPTIONS = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 24px 12px 24px 12px;
`;

const STYLES_ITEM_GROUP = css`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 8px 0 8px;
`;

const STYLES_ITEM = css`
  margin-top: 24px;
  display: inline-flex;
  flex-direction: column;
  min-width: 144px;
  margin-right: 24px;
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

export default class SceneStats extends React.Component {
  state = {};

  _handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <ScenePage>
        <System.H1>Stats</System.H1>

        <Section
          onAction={this.props.onAction}
          onNavigateTo={this.props.onNavigateTo}
          title="Wallet"
          buttons={[
            {
              name: "Reset",
              type: "ACTION",
              value: "ACTION_RESET_STATS_WALLET",
            },
            {
              name: "Export",
              type: "DOWNLOAD",
              value: "CSV_STATS_WALLET",
            },
          ]}
        >
          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>Total FIL Balance</div>
            <div className={STYLES_RIGHT}>Value (FIL/ATTOLFIL)</div>
          </div>
          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>Lifetime FIL Balance</div>
            <div className={STYLES_RIGHT}>Value (FIL/ATTOLFIL)</div>
          </div>
          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>FIL spent today</div>
            <div className={STYLES_RIGHT}>Value (FIL/ATTOLFIL)</div>
          </div>
          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>Total FIL spent</div>
            <div className={STYLES_RIGHT}>Value (FIL/ATTOLFIL)</div>
          </div>
          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>Total FIL received</div>
            <div className={STYLES_RIGHT}>Value (FIL/ATTOLFIL)</div>
          </div>
          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>
              Total wallet addresses{" "}
              <strong
                className={STYLES_TEXT_CTA}
                onClick={() => this.props.onNavigateTo({ id: 2 })}
              >
                (view)
              </strong>
            </div>
            <div className={STYLES_RIGHT}>Value (Number)</div>
          </div>
          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>
              Total payment channels{" "}
              <strong
                className={STYLES_TEXT_CTA}
                onClick={() => this.props.onNavigateTo({ id: 3 })}
              >
                (view)
              </strong>
            </div>
            <div className={STYLES_RIGHT}>Value (Number)</div>
          </div>
          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>
              Total FIL in payment channels{" "}
              <strong
                className={STYLES_TEXT_CTA}
                onClick={() => this.props.onNavigateTo({ id: 3 })}
              >
                (view)
              </strong>
            </div>
            <div className={STYLES_RIGHT}>Value (FIL/ATTOLFIL)</div>
          </div>
        </Section>

        <Section
          onAction={this.props.onAction}
          onNavigateTo={this.props.onNavigateTo}
          title="Node"
          buttons={[
            {
              name: "Reset",
              type: "ACTION",
              value: "ACTION_RESET_STATS_NODE",
            },
            {
              name: "Export",
              type: "DOWNLOAD",
              value: "CSV_STATS_NODE",
            },
          ]}
        >
          <div className={STYLES_GRAPH_ROW}>
            <div className={STYLES_GRAPH_ROW_LEFT}>
              <div className={STYLES_GRAPH_OBJECT}>
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
                    backgroundColor: Constants.system.brand,
                    scales: {
                      xAxes: [
                        {
                          gridLines: { color: Constants.system.white },
                          ticks: {
                            fontColor: Constants.system.white,
                          },
                        },
                      ],
                      yAxes: [
                        {
                          gridLines: { color: Constants.system.white },
                          display: false,
                        },
                      ],
                    },
                  }}
                  dataset={{ lineTension: 0, pointRadius: 0, borderWidth: 1 }}
                  width="100%"
                  height="640px"
                  colors={[Constants.system.white]}
                />
              </div>

              <div className={STYLES_ITEM_GROUP}>
                <div className={STYLES_ITEM}>
                  <div className={STYLES_FOCUS}>12 kb/s</div>
                  <div className={STYLES_SUBTEXT}>Current incoming</div>
                </div>
                <div className={STYLES_ITEM}>
                  <div className={STYLES_FOCUS}>14 kb/s</div>
                  <div className={STYLES_SUBTEXT}>Average incoming</div>
                </div>
              </div>
            </div>
            <div className={STYLES_GRAPH_ROW_RIGHT}>
              <div className={STYLES_GRAPH_OBJECT}>
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
                    ["2018-01-01 00:00:00 UTC", 2],
                    ["2019-01-01 00:00:00 UTC", 4],
                    ["2020-01-01 00:00:00 UTC", 5],
                    [new Date(), 4],
                  ]}
                  library={{
                    backgroundColor: Constants.system.brand,
                    scales: {
                      xAxes: [
                        {
                          gridLines: { color: Constants.system.white },
                          ticks: {
                            fontColor: Constants.system.white,
                          },
                        },
                      ],
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
                  colors={[Constants.system.white]}
                />
              </div>

              <div className={STYLES_ITEM_GROUP}>
                <div className={STYLES_ITEM}>
                  <div className={STYLES_FOCUS}>11 kb/s</div>
                  <div className={STYLES_SUBTEXT}>Current outgoing</div>
                </div>
                <div className={STYLES_ITEM}>
                  <div className={STYLES_FOCUS}>23 kb/s</div>
                  <div className={STYLES_SUBTEXT}>Average outgoing</div>
                </div>
              </div>
            </div>
          </div>

          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>Node start date</div>
            <div className={STYLES_RIGHT}>March, 20th, 2020</div>
          </div>
          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>
              Favorite peers{" "}
              <strong
                className={STYLES_TEXT_CTA}
                onClick={() => this.props.onNavigateTo({ id: 8 })}
              >
                (view)
              </strong>
            </div>
            <div className={STYLES_RIGHT}>42 peers</div>
          </div>
          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>Your location</div>
            <div className={STYLES_RIGHT}>Norway</div>
          </div>
        </Section>

        <Section
          onAction={this.props.onAction}
          onNavigateTo={this.props.onNavigateTo}
          title="Data"
          buttons={[
            {
              name: "Reset",
              type: "ACTION",
              value: "ACTION_RESET_STATS_DATA",
            },
            {
              name: "Export",
              type: "DOWNLOAD",
              value: "CSV_STATS_DATA",
            },
          ]}
        >
          <div className={STYLES_GRAPH_ROW}>
            <div className={STYLES_GRAPH_ROW_LEFT}>
              <div className={STYLES_GRAPH_OBJECT}>
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
                    backgroundColor: Constants.system.brand,
                    scales: {
                      xAxes: [
                        {
                          gridLines: { color: Constants.system.white },
                          ticks: {
                            fontColor: Constants.system.white,
                          },
                        },
                      ],
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
                  colors={[Constants.system.white]}
                />
              </div>

              <div className={STYLES_ITEM_GROUP}>
                <div className={STYLES_ITEM}>
                  <div className={STYLES_FOCUS}>55 items</div>
                  <div className={STYLES_SUBTEXT}>Currently stored</div>
                </div>
                <div className={STYLES_ITEM}>
                  <div className={STYLES_FOCUS}>5 items</div>
                  <div className={STYLES_SUBTEXT}>Stored per day</div>
                </div>
                <div className={STYLES_ITEM}>
                  <div className={STYLES_FOCUS}>200 items</div>
                  <div className={STYLES_SUBTEXT}>Total</div>
                </div>
              </div>
            </div>
            <div className={STYLES_GRAPH_ROW_RIGHT}>
              <div className={STYLES_GRAPH_OBJECT}>
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
                    backgroundColor: Constants.system.brand,
                    scales: {
                      xAxes: [
                        {
                          gridLines: { color: Constants.system.white },
                          ticks: {
                            fontColor: Constants.system.white,
                          },
                        },
                      ],
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
                  colors={[Constants.system.white]}
                />
              </div>
              <div className={STYLES_ITEM_GROUP}>
                <div className={STYLES_ITEM}>
                  <div className={STYLES_FOCUS}>7 items</div>
                  <div className={STYLES_SUBTEXT}>Currently retrieved</div>
                </div>
                <div className={STYLES_ITEM}>
                  <div className={STYLES_FOCUS}>20 items</div>
                  <div className={STYLES_SUBTEXT}>Retrieved per day</div>
                </div>
                <div className={STYLES_ITEM}>
                  <div className={STYLES_FOCUS}>300 items</div>
                  <div className={STYLES_SUBTEXT}>Total</div>
                </div>
              </div>
            </div>
          </div>

          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>Data shared today</div>
            <div className={STYLES_RIGHT}>Value (GB)</div>
          </div>
          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>Total amount of data stored</div>
            <div className={STYLES_RIGHT}>Value (GB)</div>
          </div>
          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>Data retrieved today</div>
            <div className={STYLES_RIGHT}>Value (GB)</div>
          </div>
          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>Total amount of data retrieved</div>
            <div className={STYLES_RIGHT}>Value (GB)</div>
          </div>
        </Section>

        <Section
          onAction={this.props.onAction}
          onNavigateTo={this.props.onNavigateTo}
          title="Most commonly retrieved CIDs"
          buttons={[
            {
              name: "Export",
              type: "DOWNLOAD",
              value: "CSV_MOST_COMMON_CIDS",
            },
          ]}
        >
          <System.Table
            data={Fixtures.STATS_COMMON_RETRIEVAL_CID}
            selectedRowId={this.state.table_stats_common}
            onAction={this.props.onAction}
            onNavigateTo={this.props.onNavigateTo}
            onChange={this._handleChange}
            name="table_stats_common"
          />
        </Section>
        <Section
          onAction={this.props.onAction}
          onNavigateTo={this.props.onNavigateTo}
          title="Top storage deals by GB"
          buttons={[
            {
              name: "Export",
              type: "DOWNLOAD",
              value: "CSV_TOP_STORAGE_DEALS_GB",
            },
          ]}
        >
          <System.Table
            data={Fixtures.STATS_STORAGE_DEALS_GB}
            selectedRowId={this.state.table_storage_deals_gb}
            onChange={this._handleChange}
            onAction={this.props.onAction}
            onNavigateTo={this.props.onNavigateTo}
            name="table_storage_deals_db"
          />
        </Section>
        <Section
          onAction={this.props.onAction}
          onNavigateTo={this.props.onNavigateTo}
          title="Top storage deals by FIL"
          buttons={[
            {
              name: "Export",
              type: "DOWNLOAD",
              value: "CSV_TOP_STORAGE_DEALS_FIL",
            },
          ]}
        >
          <System.Table
            data={Fixtures.STATS_STORAGE_DEALS_FIL}
            selectedRowId={this.state.table_storage_deals_fil}
            onChange={this._handleChange}
            onAction={this.props.onAction}
            onNavigateTo={this.props.onNavigateTo}
            name="table_storage_deals_fil"
          />
        </Section>
      </ScenePage>
    );
  }
}

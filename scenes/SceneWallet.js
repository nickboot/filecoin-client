import * as React from "react";
import * as Strings from "~/common/strings";
import * as Constants from "~/common/constants";
import * as SVG from "~/components/system/svg";
import * as Fixtures from "~/common/fixtures";
import * as System from "~/components/system";

import { css } from "react-emotion";

import Section from "~/components/core/Section";
import ScenePage from "~/components/core/ScenePage";

const STYLES_GROUP = css`
  padding: 24px;
`;

const STYLES_QR_CODE = css`
  background: ${Constants.system.white};
  border-radius: 4px;
  max-width: 188px;
  width: 100%;
  padding: 4px;
  border: 1px solid ${Constants.system.border};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);
`;

const STYLES_QR_CODE_IMAGE = css`
  display: block;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const STYLES_CIRCLE_BUTTON = css`
  height: 48px;
  width: 48px;
  border-radius: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${Constants.system.black};
  color: ${Constants.system.white};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);
  cursor: pointer;
`;

const STYLES_ROW = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 24px;
`;

const STYLES_TEXT = css`
  min-width: 5%;
  padding-top: 6px;
  width: 100%;
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

const STYLES_FOCUS_EMPAHSIS = css`
  color: ${Constants.system.brand};
`;

const STYLES_SUBTEXT = css`
  margin-top: 8px;
  font-size: 12px;
`;

const STYLES_ACTIONS = css`
  flex-shrink: 0;
  padding-left: 24px;
`;

const STYLES_ITEM = css`
  margin-top: 24px;
  display: inline-flex;
  flex-direction: column;
  max-width: 180px;
  margin-right: 32px;
`;

const STYLES_ITEM_CLICKABLE = css`
  margin-top: 24px;
  display: inline-flex;
  flex-direction: column;
  max-width: 180px;
  margin-right: 32px;
  transition: 200ms ease color;

  :hover {
    cursor: pointer;
    color: ${Constants.system.brand};
  }
`;

const STYLES_ITEM_GROUP = css`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export default class SceneWallet extends React.Component {
  state = { table_transaction: null, visible: false };

  _handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  _handleWalletChange = (e) => {
    this.setState({ visible: false });
    this.props.onSelectedChange(e);
  };

  _handleMakeAddressVisible = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    let addresses = {};

    this.props.viewer.addresses.forEach((a) => {
      addresses[a.value] = a;
    });

    const currentAddress = addresses[this.props.selected.address];

    return (
      <ScenePage>
        <System.H1>Your wallet</System.H1>

        <Section
          onAction={this.props.onAction}
          onNavigateTo={this.props.onNavigateTo}
          title="Addresses"
          buttons={[
            {
              name: "Create new",
              type: "SIDEBAR",
              value: "SIDEBAR_CREATE_WALLET_ADDRESS",
            },
            {
              name: "Delete",
              type: "SIDEBAR",
              value: "SIDEBAR_DELETE_WALLET_ADDRESS",
            },
          ]}
        >
          <div className={STYLES_GROUP}>
            <System.SelectMenu
              label="Select your address"
              name="address"
              value={this.props.selected.address}
              category="address"
              onChange={this._handleWalletChange}
              options={this.props.viewer.addresses}
            >
              {currentAddress.name}
            </System.SelectMenu>
          </div>

          <div className={STYLES_ROW} style={{ marginTop: 24 }}>
            <div className={STYLES_TEXT}>
              <div>
                <div className={STYLES_FOCUS}>
                  {this.state.visible ? (
                    currentAddress.address
                  ) : (
                    <span className={STYLES_FOCUS_EMPAHSIS}>Hidden</span>
                  )}
                </div>
                <div className={STYLES_SUBTEXT}>Filecoin address</div>
              </div>

              <div style={{ marginTop: 24 }}>
                <div className={STYLES_FOCUS}>
                  {currentAddress.name}{" "}
                  <strong className={STYLES_FOCUS_EMPAHSIS}>(Primary)</strong>
                </div>
                <div className={STYLES_SUBTEXT}>Filecoin address alias</div>
              </div>

              <div className={STYLES_ITEM_GROUP}>
                <div className={STYLES_ITEM}>
                  <div className={STYLES_FOCUS}>
                    {Strings.formatNumber(currentAddress.balance)}
                  </div>
                  <div className={STYLES_SUBTEXT}>Filecoin</div>
                </div>

                <div className={STYLES_ITEM}>
                  <div className={STYLES_FOCUS}>{currentAddress.type}</div>
                  <div className={STYLES_SUBTEXT}>Address type</div>
                </div>

                <div
                  className={STYLES_ITEM_CLICKABLE}
                  onClick={() => this.props.onNavigateTo({ id: 5 })}
                >
                  <div className={STYLES_FOCUS}>{currentAddress.deals}</div>
                  <div className={STYLES_SUBTEXT}>Active deals</div>
                </div>
              </div>

              <div style={{ marginTop: 24 }}>
                <System.ButtonPrimary
                  onClick={() =>
                    this.props.onAction({
                      name: "Send Filecoin",
                      type: "SIDEBAR",
                      value: "SIDEBAR_WALLET_SEND_FUNDS",
                    })
                  }
                >
                  Send Filecoin
                </System.ButtonPrimary>
              </div>
            </div>
            <div className={STYLES_ACTIONS}>
              <span
                className={STYLES_CIRCLE_BUTTON}
                onClick={this._handleMakeAddressVisible}
                style={{
                  marginRight: 16,
                  backgroundColor: this.state.visible
                    ? null
                    : Constants.system.brand,
                }}
              >
                <SVG.Privacy height="16px" />
              </span>
              <span className={STYLES_CIRCLE_BUTTON}>
                <SVG.CopyAndPaste height="16px" />
              </span>
            </div>
            <div className={STYLES_ACTIONS}>
              <div className={STYLES_QR_CODE}>
                <img
                  src="/static/qr-code-example.jpg"
                  className={STYLES_QR_CODE_IMAGE}
                />
              </div>
            </div>
          </div>
        </Section>

        <Section
          onAction={this.props.onAction}
          onNavigateTo={this.props.onNavigateTo}
          title={`Transactions for ${currentAddress.name}`}
          buttons={[
            {
              name: "Export",
              type: "DOWNLOAD",
              value: "CSV_WALLET_TRANSACTIONS",
            },
          ]}
        >
          <System.Table
            data={currentAddress.transactions}
            selectedRowId={this.state.table_transaction}
            onChange={this._handleChange}
            onAction={this.props.onAction}
            onNavigateTo={this.props.onNavigateTo}
            name="table_transaction"
          />
        </Section>
      </ScenePage>
    );
  }
}

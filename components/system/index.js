import * as React from "react";
import * as Constants from "~/common/constants";
import * as SVG from "~/components/system/svg";
import * as OldSVG from "~/common/svg";
import * as Strings from "~/common/strings";

import { css } from "react-emotion";

//
//
//
//
//
// UTILITY COMPONENTS
// ----------------------------------------------------------------------------
//
//
//
import Dismissible from "~/components/core/Dismissible";
import TextareaAutoSize from "~/vendor/react-textarea-autosize";

//
//
//
//
//
// VENDOR
// ----------------------------------------------------------------------------
//
//
//
import { Tooltip } from "react-tippy";
import { LineChart } from "~/vendor/react-chartkick";
import "chart.js";

//
//
//
//
//
// CODE_TEXTAREA
// ----------------------------------------------------------------------------
//
//
//
const STYLES_CODE_TEXTAREA = css`
  font-family: "mono";
  display: block;
  max-width: 480px;
  border-radius: 4px;
  width: 100%;
  background: ${Constants.system.pitchBlack};
  min-height: 288px;
  padding: 24px;
  color: ${Constants.system.white};
  resize: none;
  font-size: 14px;
  box-sizing: border-box;
  outline: 0;
  border: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  scrollbar-width: none;
  white-space: pre-wrap;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export class CodeTextarea extends React.Component {
  render() {
    return (
      <TextareaAutoSize
        value={this.props.value}
        name={this.props.name}
        onChange={this.props.onChange}
        className={STYLES_CODE_TEXTAREA}
      />
    );
  }
}

//
//
//
//
//
// TOOLTIP
// ----------------------------------------------------------------------------
//
//
//
const STYLES_TOOLTIP_ANCHOR = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  cursor: pointer;
`;

export class TooltipAnchor extends React.Component {
  render() {
    return (
      <Tooltip animation="fade" animateFill={false} title={this.props.tooltip}>
        <span className={STYLES_TOOLTIP_ANCHOR} style={this.props.style}>
          {this.props.children ? (
            this.props.children
          ) : (
            <SVG.Information
              height={this.props.height ? this.props.height : "24px"}
            />
          )}
        </span>
      </Tooltip>
    );
  }
}

//
//
//
//
//
// POPOVER NAVIGATION
// ----------------------------------------------------------------------------
//
//
//
const STYLES_POPOVER = css`
  position: absolute;
  width: 288px;
  border-radius: 4px;
  background-color: ${Constants.system.white};
  box-shadow: inset 0 0 0 1px ${Constants.system.border},
    0 1px 4px rgba(0, 0, 0, 0.07);
`;

const STYLES_POPOVER_ITEM = css`
  top: 0;
  left: 0;
  padding: 8px 24px 8px 24px;
  margin: 8px 0 8px 0;
  display: flex;
  align-items: center;
  height: 40px;
  font-size: ${Constants.typescale.lvl1};
  transition: 200ms ease all;
  cursor: pointer;

  :hover {
    background-color: ${Constants.system.brand};
    color: ${Constants.system.white};
  }
`;

export class PopoverNavigation extends React.Component {
  static defaultProps = {
    onNavigateTo: () => {
      console.error("requires onNavigateTo");
    },
  };

  render() {
    return (
      <div className={STYLES_POPOVER} style={this.props.style}>
        {this.props.navigation.map((each) => {
          return (
            <div
              key={each.value}
              className={STYLES_POPOVER_ITEM}
              onClick={() => this.props.onNavigateTo({ id: each.value })}
            >
              {each.text}
            </div>
          );
        })}
      </div>
    );
  }
}

//
//
//
//
//
// AVATAR
// ----------------------------------------------------------------------------
//
//
//
const STYLES_AVATAR = css`
  display: inline-flex;
  background-size: cover;
  background-position: 50% 50%;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const STYLES_AVATAR_ONLINE = css`
  height: 16px;
  width: 16px;
  background-color: ${Constants.system.green};
  border: 2px solid ${Constants.system.white};
  position: absolute;
  bottom: -4px;
  right: -4px;
  border-radius: 16px;
`;

export class Avatar extends React.Component {
  state = {};

  _handleClick = (e) => {
    if (this.props.popover) {
      this.setState({ visible: !this.state.visible });
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  _handleHide = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <Dismissible
        className={STYLES_AVATAR}
        captureResize={false}
        captureScroll={true}
        enabled={this.state.visible}
        onOutsideRectEvent={this._handleHide}
        onClick={this._handleClick}
        style={{
          ...this.props.style,
          width: `${this.props.size}px`,
          height: `${this.props.size}px`,
          borderRadius: `${this.props.size}px`,
          backgroundImage: `url('${this.props.url}')`,
          cursor: this.props.onClick ? "pointer" : null,
        }}
      >
        {this.state.visible ? this.props.popover : null}
        {this.props.online ? <span className={STYLES_AVATAR_ONLINE} /> : null}
      </Dismissible>
    );
  }
}

//
//
//
//
//
// STAT CARD
// ----------------------------------------------------------------------------
//
//
//
const STYLES_STAT_CARD = css`
  width: 100%;
  box-shadow: 0 0 0 1px ${Constants.system.gray}, 0 1px 4px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  flex-shrink: 0;
`;

const STYLES_STAT_CARD_TOP = css`
  background-color: ${Constants.system.foreground};
  color: ${Constants.system.black};
  padding: 16px 16px 16px 16px;
  border-radius: 4px 4px 0 0;
`;

const STYLES_STAT_CARD_BOTTOM = css`
  border-top: 1px solid ${Constants.system.gray};
  padding: 12px 16px 12px 16px;
  border-radius: 0 0 4px 4px;
  font-size: 14px;
`;

const STYLES_STAT_CARD_NAME = css``;

const STYLES_STAT_CARD_VALUE_GROUP = css`
  color: ${Constants.system.black};
  border-radius: 4px 4px 0 0;
`;

const STYLES_STAT_CARD_VALUE = css`
  font-family: "inter-medium";
  font-size: ${Constants.typescale.lvl3};
  color: ${Constants.system.brand};
  display: block;
`;

const STYLES_STAT_CARD_DENOMINATION = css`
  display: block;
  font-family: "inter-semi-bold";
  font-size: 10px;
  letter-spacing: 0.1px;
  margin: 4px 0 16px 0;
  padding-left: 2px;
  text-transform: uppercase;
`;

export const StatCard = (props) => {
  return (
    <div className={STYLES_STAT_CARD}>
      <div className={STYLES_STAT_CARD_TOP}>
        <div className={STYLES_STAT_CARD_VALUE_GROUP}>
          <span className={STYLES_STAT_CARD_VALUE}>
            {Strings.formatNumber(props.value)}
          </span>{" "}
          <span className={STYLES_STAT_CARD_DENOMINATION}>
            {props.denomination}
          </span>
          <LineChart
            data={props.data}
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
            colors={[Constants.system.brand]}
          />
        </div>
      </div>
      <div className={STYLES_STAT_CARD_BOTTOM}>
        <div className={STYLES_STAT_CARD_NAME}>{props.children}</div>
      </div>
    </div>
  );
};

//
//
//
//
//
// TABLES
// ----------------------------------------------------------------------------
//
//
//
const STYLES_TABLE = css``;

const STYLES_COLUMN = css`
  display: inline-flex;
  align-items: flex-start;
  justify-content: space-between;
  align-self: stretch;
  min-width: 10%;
`;

const STYLES_CONTENT = css`
  padding: 12px 12px 16px 12px;
  min-width: 10%;
  width: 100%;
  align-self: stretch;
  flex-direction: column;
  word-break: break-word;
  overflow-wrap: anywhere;
  font-size: 12px;
`;

const STYLES_CONTENT_BUTTON = css`
  flex-shrink: 0;
  height: 40px;
  width: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 200ms ease all;

  :hover {
    color: ${Constants.system.green};
  }
`;

const STYLES_TOP_COLUMN = css`
  cursor: pointer;
  transition: 200ms ease all;

  :hover {
    color: ${Constants.system.brand};
  }
`;

const STYLES_ROW = css`
  padding: 0 8px 0 8px;
  border-bottom: 1px solid ${Constants.system.gray};
  display: flex;
  align-items: flex-start;
  transition: 200ms ease all;

  :last-child {
    border: 0;
  }
`;

const STYLES_EXPAND = css`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 200ms ease all;

  svg {
    transition: 200ms ease all;
  }

  :hover {
    color: ${Constants.system.brand};
  }
`;

const STYLES_SELECTED_ROW = css`
  display: block;
  border-bottom: 1px solid ${Constants.system.gray};
`;

const STYLES_TOP_ROW = css`
  font-family: "inter-semi-bold";
  width: 100%;
  padding: 0 8px 0 8px;
  border-bottom: 1px solid ${Constants.system.gray};
  display: flex;
  align-items: flex-start;
`;

const TABLE_COLUMN_WIDTH_DEFAULTS = {
  1: "100%",
  2: "50%",
  3: "33.333%",
  4: "25%",
  5: "20%",
  6: "16.666%",
  7: "14.28%",
  8: "12.5%",
};

const TableColumn = (props) => {
  return (
    <span className={STYLES_COLUMN} style={props.style}>
      <span
        className={`${STYLES_CONTENT} ${props.top ? STYLES_TOP_COLUMN : null}`}
      >
        {props.children}
      </span>
      {props.tooltip ? (
        <Tooltip animation="fade" animateFill={false} title={props.tooltip}>
          <span className={STYLES_CONTENT_BUTTON}>
            <SVG.Information height="14px" />
          </span>
        </Tooltip>
      ) : null}
      {props.copyable ? (
        <span className={STYLES_CONTENT_BUTTON}>
          <SVG.CopyAndPaste height="16px" />
        </span>
      ) : null}
    </span>
  );
};

const STYLES_TABLE_CONTENT_LINK = css`
  font-family: "inter-medium";
  text-decoration: underline;
  cursor: pointer;

  :hover {
    color: ${Constants.system.green};
  }
`;

const STYLES_TABLE_TAG = css`
  font-weight: 400;
  font-family: "inter-semi-bold";
  letter-spacing: 0.2px;
  padding: 4px 6px 4px 6px;
  font-size: 10px;
  text-transform: uppercase;
  background: ${Constants.system.black};
  color: ${Constants.system.white};
  border-radius: 4px;
  white-space: nowrap;
`;

const STYLES_TABLE_PLACEHOLDER = css`
  display: block;
  width: 100%;
  padding: 20px;
  font-size: 12px;
  color: ${Constants.system.black};
`;

const STORAGE_DEAL_STATES = {
  "1": "Searching for miners.",
  "2": "Proposing storage deal.",
  "3": "Accepted by miners.",
  "4": "Data transfer in progress.",
  "5": "Data transfer complete.",
  "6": "Stored",
};

const RETRIEVAL_DEAL_STATES = {
  "1": "Available on network",
  "2": "Retrieval deal proposed.",
  "3": "Retrieval deal accepted.",
  "4": "Data transfer in progress.",
  "5": "Data transfer completed.",
  "6": "Retrieved",
};

const COMPONENTS_TRANSACTION_DIRECTION = {
  "1": (
    <span
      className={STYLES_TABLE_TAG}
      style={{ background: Constants.system.green }}
    >
      + incoming
    </span>
  ),
  "2": <span className={STYLES_TABLE_TAG}>- outgoing</span>,
};

const COMPONENTS_TRANSACTION_STATUS = {
  "1": <span className={STYLES_TABLE_TAG}>complete</span>,
  "2": (
    <span
      className={STYLES_TABLE_TAG}
      style={{ background: Constants.system.yellow }}
    >
      pending
    </span>
  ),
};

const COMPONENTS_ICON = {
  PNG: <SVG.FileImage height="24px" />,
  FOLDER: <OldSVG.Folder height="24px" />,
};

const TableContent = ({ type, text, data = {}, onNavigateTo, onAction }) => {
  const { status, online } = data;

  if (Strings.isEmpty(text)) {
    return null;
  }

  if (type === "FILE_LINK" && data) {
    if (data.folderId) {
      return (
        <span
          className={STYLES_TABLE_CONTENT_LINK}
          onClick={() => onNavigateTo({ id: data.folderId })}
        >
          {text}
        </span>
      );
    }

    if (data["retrieval-status"] === 1) {
      return (
        <span
          className={STYLES_TABLE_CONTENT_LINK}
          onClick={() =>
            onAction({
              type: "SIDEBAR",
              value: "SIDEBAR_FILE_STORAGE_DEAL",
            })
          }
        >
          {text}
        </span>
      );
    }

    if (data["retrieval-status"] !== 6) {
      return (
        <span
          onClick={() =>
            onAction({
              name: "File does not exist",
              type: "ACTION",
              value: "ACTION_FILE_MISSING",
            })
          }
        >
          {text}
        </span>
      );
    }

    return (
      <span
        className={STYLES_TABLE_CONTENT_LINK}
        onClick={() => onNavigateTo({ id: 15 }, data)}
      >
        {text}
      </span>
    );
  }

  if (type === "TRANSACTION_DIRECTION") {
    return COMPONENTS_TRANSACTION_DIRECTION[text];
  }

  if (type === "TRANSACTION_STATUS") {
    return COMPONENTS_TRANSACTION_STATUS[text];
  }

  if (type === "NOTIFICATION_ERROR") {
    return (
      <span
        className={STYLES_TABLE_TAG}
        style={{ background: Constants.system.red }}
      >
        {text} {Strings.pluralize("error", text)}
      </span>
    );
  }

  if (type === "AVATAR") {
    return <Avatar url={text} size={40} online={online} />;
  }

  if (type === "ICON") {
    return COMPONENTS_ICON[text];
  }

  if (type === "MINER_AVAILABILITY") {
    return text == 1 ? (
      <span
        className={STYLES_TABLE_TAG}
        style={{ background: Constants.system.green }}
      >
        Online
      </span>
    ) : null;
  }

  if (type === "BANDWIDTH_UPLOAD") {
    return (
      <React.Fragment>
        <SVG.BandwidthUp height="16px" style={{ marginRight: 8 }} />
        {Strings.bytesToSize(text)}
      </React.Fragment>
    );
  }

  if (type === "BANDWIDTH_DOWNLOAD") {
    return (
      <React.Fragment>
        <SVG.BandwidthDown height="16px" style={{ marginRight: 8 }} />
        {Strings.bytesToSize(text)}
      </React.Fragment>
    );
  }

  if (type === "DEAL_AUTO_RENEW") {
    return text == 1 ? (
      <span
        className={STYLES_TABLE_TAG}
        style={{ background: Constants.system.brand }}
      >
        true
      </span>
    ) : (
      <span className={STYLES_TABLE_TAG}>false</span>
    );
  }

  if (type === "DEAL_STATUS_RETRIEVAL") {
    return RETRIEVAL_DEAL_STATES[`${text}`];
  }

  if (type === "DEAL_STATUS") {
    return data["deal-category"] === 1
      ? STORAGE_DEAL_STATES[`${text}`]
      : RETRIEVAL_DEAL_STATES[`${text}`];
  }

  if (type === "DEAL_CATEGORY") {
    return (
      <React.Fragment>{text == 1 ? "Storage" : "Retrieval"}</React.Fragment>
    );
  }

  if (type === "BUTTON") {
    return (
      <ButtonSecondary style={{ fontSize: 12, padding: "4px 16px 4px 16px" }}>
        {text}
      </ButtonSecondary>
    );
  }

  if (type === "LOCATION") {
    return "United States";
  }

  return <React.Fragment>{text}</React.Fragment>;
};

export class Table extends React.Component {
  static defaultProps = {
    onNavigateTo: () => {
      console.log("No navigation function set");
    },
    onAction: () => {
      console.log("No action function set");
    },
  };

  _handleChange = (value) => {
    this.props.onChange({
      target: {
        name: this.props.name,
        value: value !== this.props.selectedRowId ? value : null,
      },
    });
  };

  render() {
    const { data } = this.props;

    const ac = {};

    if (!data || !data.rows || data.rows.length === 0) {
      return <P style={{ padding: 24 }}>No data.</P>;
    }

    for (let x = 0; x < data.columns.length; x++) {
      ac[data.columns[x].key] = {
        index: x,
        color: x % 2 !== 0 ? "rgba(0, 0, 0, 0.01)" : null,
        width: data.columns[x].width,
        copyable: data.columns[x].copyable,
        type: data.columns[x].type,
      };
    }

    const width = TABLE_COLUMN_WIDTH_DEFAULTS[data.columns.length];

    return (
      <React.Fragment>
        <div className={STYLES_TOP_ROW}>
          {data.columns.map((c, cIndex) => {
            const text = c.hideLabel
              ? ""
              : Strings.isEmpty(c.name)
              ? c.key
              : c.name;
            let localWidth = c.width ? c.width : width;
            let flexShrink = c.width && c.width !== "100%" ? "0" : null;
            if (cIndex === 0 && !c.width) {
              localWidth = "100%";
            }

            return (
              <TableColumn
                key={`table-top-${c.key}-${cIndex}`}
                style={{
                  width: localWidth,
                  backgroundColor: ac[c.key].color,
                  flexShrink,
                }}
                top
                tooltip={c.tooltip}
              >
                {text}
              </TableColumn>
            );
          })}
          <div className={STYLES_EXPAND} />
        </div>

        {data.rows.map((r, i) => {
          const selected = r.id === this.props.selectedRowId;

          return (
            <React.Fragment key={r.id}>
              <div className={STYLES_ROW}>
                {Object.keys(ac).map((each, cIndex) => {
                  const field = ac[each];
                  const text = r[each];

                  let localWidth = field.width ? field.width : width;
                  let flexShrink =
                    field.width && field.width !== "100%" ? "0" : null;
                  if (cIndex === 0 && !field.width) {
                    localWidth = "100%";
                  }

                  return (
                    <TableColumn
                      top
                      key={`${each}-${i}`}
                      style={{
                        width: localWidth,
                        backgroundColor: field.color,
                        flexShrink,
                      }}
                      copyable={field.copyable}
                    >
                      <TableContent
                        data={r}
                        text={text}
                        type={field.type}
                        onNavigateTo={this.props.onNavigateTo}
                        onAction={this.props.onAction}
                      />
                    </TableColumn>
                  );
                })}
                <div
                  className={STYLES_EXPAND}
                  onClick={() => this._handleChange(r.id)}
                  style={{ cursor: "pointer" }}
                >
                  <SVG.Plus
                    height="16px"
                    style={{
                      transform: selected ? `rotate(45deg)` : null,
                    }}
                  />
                </div>
              </div>
              {selected ? (
                <div className={STYLES_SELECTED_ROW}>
                  {r.children ? (
                    r.children
                  ) : (
                    <span className={STYLES_TABLE_PLACEHOLDER}>
                      Placeholder
                    </span>
                  )}
                </div>
              ) : null}
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

//
//
//
//
//
// BUTTONS
// ----------------------------------------------------------------------------
//
//
//
const STYLES_BUTTON = `
  border-radius: 4px;
  outline: 0;
  border: 0;
  min-height: 40px;
  padding: 6px 24px 6px 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  letter-spacing: 0.2px;
  font-family: "inter-semi-bold";
  transition: 200ms ease all;
`;

const STYLES_BUTTON_FULL = `
  border-radius: 4px;
  outline: 0;
  border: 0;
  min-height: 40px;
  padding: 6px 24px 6px 24px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  letter-spacing: 0.2px;
  font-family: "inter-semi-bold";
  transition: 200ms ease all;
`;

const STYLES_BUTTON_PRIMARY = css`
  ${STYLES_BUTTON}
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  background-color: ${Constants.system.brand};
  color: ${Constants.system.white};

  :hover {
    background-color: #003fe3;
  }

  :focus {
    box-shadow: inset 0 0 5px 2px rgba(0, 0, 0, 0.3);
    background-color: ${Constants.system.brand};
    outline: 0;
    border: 0;
  }
`;

export const ButtonPrimary = (props) => {
  return <button className={STYLES_BUTTON_PRIMARY} {...props} />;
};

const STYLES_BUTTON_PRIMARY_FULL = css`
  ${STYLES_BUTTON_FULL}
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  background-color: ${Constants.system.brand};
  color: ${Constants.system.white};

  :hover {
    background-color: #003fe3;
  }

  :focus {
    box-shadow: inset 0 0 5px 2px rgba(0, 0, 0, 0.3);
    background-color: ${Constants.system.brand};
    outline: 0;
    border: 0;
  }
`;

export const ButtonPrimaryFull = (props) => {
  return <button className={STYLES_BUTTON_PRIMARY_FULL} {...props} />;
};

const STYLES_BUTTON_SECONDARY = css`
  ${STYLES_BUTTON}
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  background-color: ${Constants.system.black};
  color: ${Constants.system.white};

  :hover {
    background-color: ${Constants.system.pitchBlack};
  }

  :focus {
    box-shadow: inset 0 0 5px 2px rgba(0, 0, 0, 0.3);
    background-color: ${Constants.system.black};
    outline: 0;
    border: 0;
  }
`;

export const ButtonSecondary = (props) => {
  return <button className={STYLES_BUTTON_SECONDARY} {...props} />;
};

const STYLES_BUTTON_SECONDARY_FULL = css`
  ${STYLES_BUTTON_FULL}
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  background-color: ${Constants.system.black};
  color: ${Constants.system.white};

  :hover {
    background-color: ${Constants.system.pitchBlack};
  }

  :focus {
    box-shadow: inset 0 0 5px 2px rgba(0, 0, 0, 0.3);
    background-color: ${Constants.system.black};
    outline: 0;
    border: 0;
  }
`;

export const ButtonSecondaryFull = (props) => {
  return <button className={STYLES_BUTTON_SECONDARY_FULL} {...props} />;
};

const STYLES_BUTTON_DISABLED = css`
  ${STYLES_BUTTON}
  cursor: not-allowed;
  background-color: ${Constants.system.gray};
  color: ${Constants.system.darkGray};

  :focus {
    outline: 0;
    border: 0;
  }
`;

export const ButtonDisabled = (props) => {
  return <button className={STYLES_BUTTON_DISABLED} {...props} />;
};

const STYLES_BUTTON_DISABLED_FULL = css`
  ${STYLES_BUTTON_FULL}
  cursor: not-allowed;
  background-color: ${Constants.system.gray};
  color: ${Constants.system.darkGray};

  :focus {
    outline: 0;
    border: 0;
  }
`;

export const ButtonDisabledFull = (props) => {
  return <button className={STYLES_BUTTON_DISABLED_FULL} {...props} />;
};

//
//
//
//
//
// TOGGLE
// ----------------------------------------------------------------------------
//
//
//
const STYLES_TOGGLE = css`
  display: inline-flex;
  height: 40px;
  border-radius: 40px;
  width: 80px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  background: ${Constants.system.black};
  transition: background 200ms ease;
  cursor: pointer;
  user-select: none;
`;

const STYLES_DIAL = css`
  height: 32px;
  width: 32px;
  border-radius: 32px;
  margin-top: 4px;
  margin-left: 4px;
  background: ${Constants.system.white};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);
  transition: transform 200ms ease;
`;

export class Toggle extends React.Component {
  _handleChange = () => {
    this.props.onChange({
      target: { name: this.props.name, value: !this.props.active },
    });
  };

  render() {
    return (
      <div
        className={STYLES_TOGGLE}
        onClick={this._handleChange}
        style={{
          backgroundColor: this.props.active ? Constants.system.brand : null,
        }}
      >
        <figure
          className={STYLES_DIAL}
          style={{ transform: this.props.active ? `translateX(40px)` : null }}
        />
      </div>
    );
  }
}

//
//
//
//
//
// RADIO
// ----------------------------------------------------------------------------
//
//
//
const STYLES_RADIO = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  position: relative;
  margin-bottom: 16px;
`;

const STYLES_RADIO_INPUT = css`
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  height: 1px;
  width: 1px;
  position: absolute;
  top: 0;
  left: 0;
`;

const STYLES_RADIO_GROUP = css`
  display: block;
  width: 100%;
`;

const STYLES_RADIO_CUSTOM = css`
  box-shadow: 0 0 0 1px ${Constants.system.darkGray};
  background-color: ${Constants.system.white};
  cursor: pointer;
  height: 32px;
  width: 32px;
  border-radius: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  margin-right: 16px;
  flex-shrink: 0;
`;

const STYLES_RADIO_CUSTOM_SELECTED = css`
  background-color: ${Constants.system.brand};
  height: 24px;
  width: 24px;
  border-radius: 24px;
  pointer-events: none;
  opacity: 0;
  transition: 200ms ease opacity;
  z-index: 1;
`;

const STYLES_RADIO_LABEL = css`
  font-size: 14px;
  cursor: pointer;
  min-width: 10%;
  width: 100%;
  line-height: 1.5;
  padding-top: 4px;
  overflow-wrap: break-word;

  strong {
    font-family: "inter-semi-bold";
    font-weight: 400;
  }
`;

export class RadioGroup extends React.Component {
  _handleChange = (value) => {
    this.props.onChange({
      target: { name: this.props.name, value },
    });
  };

  render() {
    return (
      <form className={STYLES_RADIO_GROUP}>
        {this.props.options.map((radio) => {
          const checked = this.props.selected === radio.value;

          return (
            <label className={STYLES_RADIO} key={`radio-${radio.value}`}>
              <span className={STYLES_RADIO_CUSTOM}>
                <span
                  className={STYLES_RADIO_CUSTOM_SELECTED}
                  style={{ opacity: checked ? 1 : 0 }}
                />
              </span>
              <input
                className={STYLES_RADIO_INPUT}
                type="radio"
                value={radio.value}
                checked={checked}
                onChange={() => this._handleChange(radio.value)}
              />{" "}
              <span className={STYLES_RADIO_LABEL}>{radio.label}</span>
            </label>
          );
        })}
      </form>
    );
  }
}

//
//
//
//
//
// CHECKBOX
// ----------------------------------------------------------------------------
//
//
//
const STYLES_CHECKBOX = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const STYLES_CHECKBOX_FIGURE = css`
  box-shadow: 0 0 0 1px ${Constants.system.darkGray};
  background-color: ${Constants.system.white};
  height: 32px;
  width: 32px;
  border-radius: 3px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  margin-right: 16px;
  flex-shrink: 0;
`;

const STYLES_CHECKBOX_INPUT = css`
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  height: 1px;
  width: 1px;
  position: absolute;
  top: 0;
  left: 0;
`;

const STYLES_CHECKBOX_LABEL = css`
  font-size: 14px;
  min-width: 10%;
  width: 100%;
  line-height: 1.5;
  padding-top: 2px;
  overflow-wrap: break-word;

  strong {
    font-family: "inter-semi-bold";
    font-weight: 400;
  }
`;

export class CheckBox extends React.Component {
  _handleChange = (value) => {
    this.props.onChange({
      target: { name: this.props.name, value: !this.props.value },
    });
  };

  render() {
    return (
      <label className={STYLES_CHECKBOX} style={this.props.style}>
        <figure className={STYLES_CHECKBOX_FIGURE}>
          {this.props.value ? <SVG.CheckBox height="20px" /> : null}
        </figure>
        <input
          className={STYLES_CHECKBOX_INPUT}
          name={this.props.name}
          type="checkbox"
          checked={this.props.value}
          onChange={() => this._handleChange(this.props.value)}
        />
        <span className={STYLES_CHECKBOX_LABEL}>{this.props.children}</span>
      </label>
    );
  }
}

//
//
//
//
//
// CARD TAB GROUP
// ----------------------------------------------------------------------------
//
//
//
const STYLES_CARD_TAB_GROUP = css`
  width: 100%;
  display: flex;
  align-items: flex-start;
  box-shadow: 0 -1px 0 0 ${Constants.system.border},
    0 1px 0 0 ${Constants.system.border};
`;

const STYLES_CARD_TAB_GROUP_TAB = css`
  background: #fdfdfd;
  color: rgba(0, 0, 0, 0.4);
  font-size: 14px;
  font-family: "inter-semi-bold";
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 200ms ease all;
  user-select: none;
  border-bottom: 2px solid transparent;

  :first-child {
  }

  :last-child {
    box-shadow: none;
  }

  :hover {
    color: ${Constants.system.brand};
  }
`;

export class CardTabGroup extends React.Component {
  _handleChange = (value) => {
    this.props.onChange({
      target: { name: this.props.name, value },
    });
  };

  render() {
    return (
      <div className={STYLES_CARD_TAB_GROUP} style={this.props.style}>
        {this.props.options.map((tab) => {
          const selected = tab.value === this.props.value;

          return (
            <div
              className={STYLES_CARD_TAB_GROUP_TAB}
              key={tab.value}
              style={{
                color: selected ? Constants.system.brand : null,
                backgroundColor: selected ? Constants.system.white : null,
                borderBottom: selected
                  ? `2px solid ${Constants.system.brand}`
                  : null,
                width: TAB_GROUP_SIZE_MAP[this.props.options.length],
                cursor: !selected ? "pointer" : null,
              }}
              onClick={() => this._handleChange(tab.value)}
            >
              {tab.label}
            </div>
          );
        })}
      </div>
    );
  }
}

//
//
//
//
//
// TAB GROUP
// ----------------------------------------------------------------------------
//
//
//
const STYLES_TAB_GROUP = css`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

const STYLES_TAB_GROUP_TAB = css`
  background: ${Constants.system.gray};
  color: ${Constants.system.black};
  border-bottom: 1px solid ${Constants.system.white};
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-family: "inter-semi-bold";
  transition: 200ms ease all;
  user-select: none;

  :hover {
    color: ${Constants.system.brand};
  }
`;

const TAB_GROUP_SIZE_MAP = {
  1: "100%",
  2: "50%",
  3: "33.33%",
  4: "25%",
};

export class TabGroup extends React.Component {
  _handleChange = (value) => {
    this.props.onChange({
      target: { name: this.props.name, value },
    });
  };

  render() {
    return (
      <div className={STYLES_TAB_GROUP}>
        {this.props.options.map((tab) => {
          const selected = tab.value === this.props.value;

          return (
            <div
              className={STYLES_TAB_GROUP_TAB}
              key={tab.value}
              style={{
                backgroundColor: selected ? Constants.system.white : null,
                width: TAB_GROUP_SIZE_MAP[this.props.options.length],
                cursor: !selected ? "pointer" : null,
                borderBottom: !selected ? `1px solid #D7D7D7` : null,
              }}
              onClick={() => this._handleChange(tab.value)}
            >
              {tab.label}
            </div>
          );
        })}
      </div>
    );
  }
}

//
//
//
//
//
// DESCRIPTION GROUP
// ----------------------------------------------------------------------------
//
//
//
const STYLES_DESCRIPTION_GROUP_LABEL = css`
  font-family: "inter-semi-bold";
  font-size: 14px;
  padding: 0 0 0 0;
  margin-bottom: 8px;
`;

const STYLES_DESCRIPTION_GROUP_DESCRIPTION = css`
  font-size: 14px;
  margin-bottom: 12px;
  line-height: 1.3;
`;

export const DescriptionGroup = (props) => {
  return (
    <div style={props.style}>
      {!Strings.isEmpty(props.label) ? (
        <div className={STYLES_DESCRIPTION_GROUP_LABEL}>
          {props.label}{" "}
          {props.tooltip ? (
            <TooltipAnchor
              tooltip={props.tooltip}
              height="14px"
              style={{ paddingTop: 16 }}
            />
          ) : null}
        </div>
      ) : null}
      {!Strings.isEmpty(props.description) ? (
        <div className={STYLES_DESCRIPTION_GROUP_DESCRIPTION}>
          {props.description}
        </div>
      ) : null}
    </div>
  );
};

//
//
//
//
//
// INPUT
// ----------------------------------------------------------------------------
//
//
//
const STYLES_INPUT_CONTAINER = css`
  position: relative;
  max-width: 480px;
  min-width: 188px;
`;

const INPUT_STYLES = css`
  -webkit-appearance: none;
  width: 100%;
  height: 40px;
  background: ${Constants.system.white};
  color: ${Constants.system.black};
  border-radius: 4px;
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: flex-start;
  outline: 0;
  border: 0;
  box-sizing: border-box;
  transition: 200ms ease all;
`;

const STYLES_INPUT = css`
  ${INPUT_STYLES}
  padding: 0 24px 0 24px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15),
    inset 0 0 0 1px ${Constants.system.darkGray};

  :focus {
    outline: 0;
    border: 0;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07),
      inset 0 0 0 2px ${Constants.system.brand};
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${Constants.system.darkGray};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${Constants.system.darkGray};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${Constants.system.darkGray};
  }
`;

const STYLES_COPY_AND_PASTE = css`
  position: absolute;
  right: 12px;
  margin-top: 1px;
  bottom: 12px;
  transition: 200ms ease all;
  cursor: pointer;

  :hover {
    color: ${Constants.system.brand};
  }
`;

const INPUT_COLOR_MAP = {
  SUCCESS: Constants.system.green,
  ERROR: Constants.system.red,
  WARNING: Constants.system.yellow,
};

export class Input extends React.Component {
  _input;

  _handleCopy = (e) => {
    this._input.select();
    document.execCommand("copy");
  };

  _handleKeyUp = (e) => {
    if (e.which === 13 && this.props.onSubmit) {
      this.props.onSubmit(e);
      return;
    }

    this.props.onKeyUp(e);
  };

  _handleChange = (e) => {
    if (
      !Strings.isEmpty(this.props.pattern) &&
      !Strings.isEmpty(e.target.value)
    ) {
      const TestRegex = new RegExp(this.props.pattern);
      if (!TestRegex.test(e.target.value)) {
        e.preventDefault();
        return;
      }
    }

    if (e.target.value && e.target.value.length > this.props.max) {
      e.preventDefault();
      return;
    }

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  render() {
    return (
      <div className={STYLES_INPUT_CONTAINER} style={this.props.containerStyle}>
        <DescriptionGroup
          tooltip={this.props.tooltip}
          label={this.props.label}
          description={this.props.description}
        />
        <input
          ref={(c) => {
            this._input = c;
          }}
          className={STYLES_INPUT}
          value={this.props.value}
          name={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this._handleChange}
          autoComplete="off"
          readOnly={this.props.readOnly}
          type={this.props.type}
          style={{
            ...this.props.style,
            boxShadow: this.props.validation
              ? `0 1px 4px rgba(0, 0, 0, 0.07), inset 0 0 0 2px ${
                  INPUT_COLOR_MAP[this.props.validation]
                }`
              : null,
          }}
        />
        {this.props.copyable ? (
          <SVG.CopyAndPaste
            height="16px"
            className={STYLES_COPY_AND_PASTE}
            onClick={this._handleCopy}
          />
        ) : null}
      </div>
    );
  }
}

//
//
//
//
//
// TEXTAREA
// ----------------------------------------------------------------------------
//
//
//
const STYLES_TEXTAREA = css`
  -webkit-appearance: none;
  width: 100%;
  min-height: 160px;
  max-width: 480px;
  resize: none;
  background: ${Constants.system.white};
  color: ${Constants.system.black};
  border-radius: 4px;
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: flex-start;
  outline: 0;
  border: 0;
  box-sizing: border-box;
  transition: 200ms ease all;
  padding: 16px 24px 16px 24px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15),
    inset 0 0 0 1px ${Constants.system.darkGray};
`;

export class Textarea extends React.Component {
  render() {
    return (
      <TextareaAutoSize
        className={STYLES_TEXTAREA}
        onChange={this.props.onChange}
        name={this.props.name}
        value={this.props.value}
      />
    );
  }
}

//
//
//
//
//
// SELECT MENU
// ----------------------------------------------------------------------------
//
//
//
const STYLES_SELECT_MENU = css`
  display: inline-flex;
  position: relative;
  height: 40px;
  max-width: 320px;
  width: 100%;
`;

const STYLES_SELECT_MENU_FULL = css`
  display: inline-flex;
  position: relative;
  height: 40px;
  width: 100%;
`;

const STYLES_SELECT_MENU_ANCHOR = css`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  width: 100%;
  height: 40px;
`;

const STYLES_SELECT_MENU_LABEL = css`
  ${INPUT_STYLES}
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15),
    inset 0 0 0 1px ${Constants.system.darkGray};
  padding: 0 48px 0 24px;
`;

const STYLES_SELECT_MENU_CATEGORY = css`
  color: ${Constants.system.darkGray};
  margin-left: 4px;
`;

const STYLES_SELECT_MENU_CHEVRON = css`
  position: absolute;
  right: 12px;
  margin-top: 1px;
`;

export const SelectMenu = (props) => {
  return (
    <React.Fragment>
      <DescriptionGroup
        label={props.label}
        description={props.description}
        tooltip={props.tooltip}
        style={props.containerStyle}
      />

      <div className={props.className ? props.className : STYLES_SELECT_MENU}>
        <label
          className={STYLES_SELECT_MENU_LABEL}
          htmlFor={`id-${props.name}`}
        >
          {props.children}{" "}
          {props.category ? (
            <span className={STYLES_SELECT_MENU_CATEGORY}>
              {props.category}
            </span>
          ) : null}
          <SVG.ChevronDown
            height="16px"
            className={STYLES_SELECT_MENU_CHEVRON}
          />
        </label>
        <select
          className={STYLES_SELECT_MENU_ANCHOR}
          value={props.value}
          onChange={props.onChange}
          name={props.name}
          id={`id-${props.name}`}
        >
          {props.options.map((each) => {
            return (
              <option value={each.value} key={each.value}>
                {each.name}
              </option>
            );
          })}
        </select>
      </div>
    </React.Fragment>
  );
};

export const SelectMenuFull = (props) => (
  <SelectMenu {...props} className={STYLES_SELECT_MENU_FULL} />
);

//
//
//
//
//
// TYPOGRAPHY
// ----------------------------------------------------------------------------
//
//
//
const STYLES_H1 = css`
  font-size: ${Constants.typescale.lvl4};
  line-height: 1.1;
  font-family: "inter-semi-bold";
  font-weight: 400;

  strong {
    font-family: "inter-semi-bold";
    font-weight: 400;
  }
`;

export const H1 = (props) => {
  return <h1 className={STYLES_H1} {...props} />;
};

const STYLES_H2 = css`
  font-size: ${Constants.typescale.lvl3};
  line-height: 1.1;
  font-family: "inter-medium";
  font-weight: 400;

  strong {
    font-family: "inter-semi-bold";
    font-weight: 400;
  }
`;

export const H2 = (props) => {
  return <h2 className={STYLES_H2} {...props} />;
};

const STYLES_P = css`
  font-size: ${Constants.typescale.lvl1};
  line-height: 1.5;

  strong {
    font-family: "inter-semi-bold";
    font-weight: 400;
  }
`;

export const P = (props) => {
  return <p className={STYLES_P} {...props} />;
};

//
//
//
//
//
// BANDWIDTH
// ----------------------------------------------------------------------------
//
//
//
const STYLES_BANDWIDTH = css`
  padding: 8px 8px 8px 8px;
  display: inline-flex;
  font-family: "mono";
  font-size: 12px;
  letter-spacing: 0.2px;
  align-items: center;
  text-transform: uppercase;
`;

export const StatUpload = (props) => {
  return (
    <div className={STYLES_BANDWIDTH} style={props.style}>
      <SVG.BandwidthUp height="16px" style={{ marginRight: 8 }} />{" "}
      {props.children}
    </div>
  );
};

export const StatDownload = (props) => {
  return (
    <div className={STYLES_BANDWIDTH} style={props.style}>
      <SVG.BandwidthDown height="16px" style={{ marginRight: 8 }} />{" "}
      {props.children}
    </div>
  );
};

import * as React from "react";
import * as Strings from "~/common/strings";
import * as System from "~/components/system";
import * as Fixtures from "~/common/fixtures";
import * as SVG from "~/components/system/svg";
import * as OldSVG from "~/common/svg";
import * as Constants from "~/common/constants";

import { css } from "react-emotion";

import GLRenderer from "~/components/three/GLRenderer";
import Group from "~/components/system/Group";
import SystemPage from "~/components/system/SystemPage";

const DEFAULT_SYSTEM_ICON_SIZE = "88px";

const ICONS = [
  <OldSVG.Home height={DEFAULT_SYSTEM_ICON_SIZE} />,
  <OldSVG.Folder height={DEFAULT_SYSTEM_ICON_SIZE} />,
  <OldSVG.Wallet height={DEFAULT_SYSTEM_ICON_SIZE} />,
  <OldSVG.Channels height={DEFAULT_SYSTEM_ICON_SIZE} />,
  <OldSVG.Deals height={DEFAULT_SYSTEM_ICON_SIZE} />,
  <OldSVG.Peers height={DEFAULT_SYSTEM_ICON_SIZE} />,
  <OldSVG.Deals height={DEFAULT_SYSTEM_ICON_SIZE} />,
  <OldSVG.Status height={DEFAULT_SYSTEM_ICON_SIZE} />,
  <OldSVG.Stats height={DEFAULT_SYSTEM_ICON_SIZE} />,
  <OldSVG.DataTransfer height={DEFAULT_SYSTEM_ICON_SIZE} />,
  <OldSVG.Logs height={DEFAULT_SYSTEM_ICON_SIZE} />,
  <OldSVG.Miners height={DEFAULT_SYSTEM_ICON_SIZE} />,
  <OldSVG.StorageMarket height={DEFAULT_SYSTEM_ICON_SIZE} />,
  <SVG.BandwidthUp height={DEFAULT_SYSTEM_ICON_SIZE} />,
  <SVG.BandwidthDown height={DEFAULT_SYSTEM_ICON_SIZE} />,
  <SVG.Information height={DEFAULT_SYSTEM_ICON_SIZE} />,
  <SVG.CopyAndPaste height={DEFAULT_SYSTEM_ICON_SIZE} />,
  <SVG.FileImage height={DEFAULT_SYSTEM_ICON_SIZE} />,
  <SVG.Plus height={DEFAULT_SYSTEM_ICON_SIZE} />,
  <SVG.CheckBox height={DEFAULT_SYSTEM_ICON_SIZE} />,
];

const SELECT_MENU_OPTIONS = [
  { value: "1", name: "Capricorn" },
  { value: "2", name: "Aquarius" },
  { value: "3", name: "Pisces" },
  { value: "4", name: "Aries" },
  { value: "5", name: "Taurus" },
  { value: "6", name: "Gemini" },
  { value: "7", name: "Cancer" },
  { value: "8", name: "Leo" },
  { value: "9", name: "Virgo" },
  { value: "10", name: "Libra" },
  { value: "11", name: "Scorpio" },
  { value: "12", name: "Sagittarus" },
];

const SELECT_MENU_MAP = {
  "1": "Capricorn",
  "2": "Aquarius",
  "3": "Pisces",
  "4": "Aries",
  "5": "Taurus",
  "6": "Gemini",
  "7": "Cancer",
  "8": "Leo",
  "9": "Virgo",
  "10": "Libra",
  "11": "Scorpio",
  "12": "Sagittarus",
};

const RADIO_GROUP_OPTIONS = [
  {
    value: "1",
    label: (
      <React.Fragment>
        <strong>Breakfast Option</strong>
        <br />I want to have cake and soda for breakfast.
      </React.Fragment>
    ),
  },
  {
    value: "2",
    label: (
      <React.Fragment>
        <strong>Lunch Option</strong>
        <br />I want to have cake and soda for lunch.
      </React.Fragment>
    ),
  },
  {
    value: "3",
    label: (
      <React.Fragment>
        <strong>Dinner Option</strong>
        <br />I want to have cake and soda for dinner.
      </React.Fragment>
    ),
  },
  {
    value: "4",
    label:
      "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  },
];

const TAB_GROUP_TWO = [
  { value: "1", label: "Capricorn" },
  { value: "2", label: "Aquarius" },
];

const TAB_GROUP_THREE = [
  { value: "1", label: "Capricorn" },
  { value: "2", label: "Aquarius" },
  { value: "3", label: "Pisces" },
];

const TAB_GROUP_FOUR = [
  { value: "1", label: "Capricorn" },
  { value: "2", label: "Aquarius" },
  { value: "3", label: "Pisces" },
  { value: "4", label: "Aries" },
];

const STYLES_ICON = css`
  padding: 24px;
  color: ${Constants.system.white};
  display: inline-flex;
  transition: 200ms ease color;

  :hover {
    color: ${Constants.system.brand};
  }
`;

const STYLES_ICON_ELEMENT = css`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${Constants.system.brand};
  color: ${Constants.system.white};
  user-select: none;
`;

const STYLES_PAGE = css`
  background: #fcfcfc;
`;

const STYLES_BODY = css`
  max-width: 960px;
  width: 100%;
  margin: 0 auto 0 auto;
  padding: 88px 24px 128px 24px;
`;

const STYLES_COLOR_BAR = css`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 72px 24px 0 0px;
`;

const STYLES_COLOR_TEXT = css`
  display: block;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  font-size: 12px;
  padding: 8px;
  color: ${Constants.system.white};
  background-color: rgba(0, 0, 0, 0.4);
  margin-top: 8px;
`;

export default class SystemPageRoot extends React.Component {
  state = {
    one: "1",
    two: "3",
    three: true,
    four: false,
    five: "1",
    six: false,
    seven: true,
    eight: "1",
    nine: "1",
    ten: "1",
    eleven: "1",
    twelve: "Replace me Cake",
    thirteen: "",
    fourteen: "",
    fifteen: "aaaaa-bbbbb-ccccc-ddddd-eeee",
    sixteen: "",
    seventeen: `example
example
example
example`,
    eighteen: "2",
    nineteen: null,
  };

  _handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <SystemPage
        title="FCDS"
        description="This is an early preview of the Filecoin Client Design System (FCDS)."
        url="https://fps.onrender.com/system"
      >
        <System.H1>
          <span className={STYLES_ICON_ELEMENT}>
            <SVG.Logo height="32px" />
          </span>{" "}
          FCDS 1.0
        </System.H1>
        <br />
        <System.P>
          This is an early preview of the{" "}
          <strong>Filecoin Client Design System (FCDS)</strong>. We are
          developing our philosophy, principles and practices out in the open.
        </System.P>
        <br /> <br />
        <System.H2>Introduction</System.H2>
        <br />
        <System.P>
          Components here are free for you to use in any of your projects. The
          components will serve as common use cases of the Filecoin Network,
          making it easier to integrate the Filecoin Network into your own
          applications.
          <br />
          <br />
          Stay tuned for updates. A GitHub link will be available soon.
        </System.P>
        <Group
          id="globe"
          title="Globe"
          style={{ marginTop: 48 }}
          groupStyle={{ padding: 0 }}
        >
          <GLRenderer width={960} height={480} />
        </Group>
        <Group
          title="Icons"
          style={{ marginTop: 48 }}
          groupStyle={{
            padding: 0,
            backgroundColor: Constants.system.pitchBlack,
          }}
        >
          {ICONS.map((icon, i) => {
            return (
              <div className={STYLES_ICON} key={i}>
                {icon}
              </div>
            );
          })}
        </Group>
        <Group
          id="colors"
          title="Colors"
          style={{ marginTop: 48 }}
          groupStyle={{ padding: 0 }}
        >
          {Object.keys(Constants.system).map((each) => {
            const hex = Constants.system[each];
            const rgba = Strings.hexToRGBA(hex);

            return (
              <div
                key={each}
                className={STYLES_COLOR_BAR}
                style={{
                  backgroundColor: hex,
                  color: Constants.system.black,
                }}
              >
                <span className={STYLES_COLOR_TEXT}>{each.toUpperCase()}</span>
                <br />
                <span className={STYLES_COLOR_TEXT}>{hex}</span>
                <br />
                <span className={STYLES_COLOR_TEXT}>{rgba}</span>
              </div>
            );
          })}
        </Group>
        <Group
          id="tables"
          title="Tables"
          style={{ marginTop: 48 }}
          groupStyle={{ padding: 0 }}
        >
          <System.Table
            data={Fixtures.HOME_TABLE_RECENT_DATA}
            selectedRowId={this.state.table_data}
            onChange={this._handleChange}
            name="table_data"
          />{" "}
          <br />
          <br />
          <System.Table
            data={Fixtures.HOME_TABLE_RECENT_TRANSACTIONS}
            selectedRowId={this.state.table_transaction}
            onChange={this._handleChange}
            name="table_transaction"
          />{" "}
          <br />
          <br />
          <System.Table
            data={Fixtures.FILE_TABLE_SEARCH_RESULTS}
            selectedRowId={this.state.table_file}
            onChange={this._handleChange}
            name="table_file"
          />{" "}
          <br />
          <br />
          <System.Table
            data={Fixtures.FILE_TABLE_LOCAL}
            selectedRowId={this.state.table_local_file}
            onChange={this._handleChange}
            name="table_local_file"
          />{" "}
          <br />
          <br />
          <System.Table
            data={Fixtures.DATA_TRANSFER_TABLE_PAST}
            selectedRowId={this.state.table_data_transfer_past}
            onChange={this._handleChange}
            name="table_data_transfer_past"
          />{" "}
          <br />
          <br />
          <System.Table
            data={Fixtures.PEERS_TABLE}
            selectedRowId={this.state.table_peers}
            onChange={this._handleChange}
            name="table_peers"
          />{" "}
          <br />
          <br />
          <System.Table
            data={Fixtures.DEALS_TABLE}
            selectedRowId={this.state.table_deals}
            onChange={this._handleChange}
            name="table_deals"
          />{" "}
          <br />
          <br />
          <System.Table
            data={Fixtures.MINERS_TABLE}
            selectedRowId={this.state.table_miners}
            onChange={this._handleChange}
            name="table_miners"
          />{" "}
          <br />
          <br />
          <System.Table
            data={Fixtures.STORAGE_MARKET_TABLE}
            selectedRowId={this.state.table_storage_market}
            onChange={this._handleChange}
            name="table_storage_market"
          />{" "}
          <br />
          <br />
          <System.Table
            data={Fixtures.PAYMENT_CHANNELS_TABLE_ACTIVE}
            selectedRowId={this.state.table_payment_channels_active}
            onChange={this._handleChange}
            name="table_payment_channels_active"
          />{" "}
          <br />
          <br />
          <System.Table
            data={Fixtures.PAYMENT_CHANNELS_TABLE_REDEEMED}
            selectedRowId={this.state.table_payment_channels_redeemed}
            onChange={this._handleChange}
            name="table_payment_channels_redeemed"
          />{" "}
          <br />
          <br />
          <System.Table
            data={Fixtures.STATS_COMMON_RETRIEVAL_CID}
            selectedRowId={this.state.table_stats_common}
            onChange={this._handleChange}
            name="table_stats_common"
          />{" "}
          <br />
          <br />
          <System.Table
            data={Fixtures.STATS_STORAGE_DEALS_GB}
            selectedRowId={this.state.table_storage_deals_gb}
            onChange={this._handleChange}
            name="table_storage_deals_db"
          />{" "}
          <br />
          <br />
          <System.Table
            data={Fixtures.STATS_STORAGE_DEALS_FIL}
            selectedRowId={this.state.table_storage_deals_fil}
            onChange={this._handleChange}
            name="table_storage_deals_fil"
          />
        </Group>
        <Group id="avatars" style={{ marginTop: 48 }} title="Avatars">
          <System.Avatar
            url="/static/avatar-andrew-hill.jpg"
            size={48}
            popover={
              <System.PopoverNavigation
                style={{ left: 0, bottom: "66px" }}
                onNavigateTo={this.props.onNavigateTo}
                navigation={[
                  { text: "Option A", value: 1 },
                  { text: "Option B", value: 2 },
                  { text: "Option C", value: 3 },
                  { text: "Option D", value: 4 },
                ]}
              />
            }
          />
          <br />
          <System.Avatar
            url="/static/avatar-steven-allen.png"
            online
            size={48}
            popover={
              <System.PopoverNavigation
                style={{ left: 0, bottom: "66px" }}
                onNavigateTo={this.props.onNavigateTo}
                navigation={[
                  { text: "Option A", value: 1 },
                  { text: "Option B", value: 2 },
                  { text: "Option C", value: 3 },
                  { text: "Option D", value: 4 },
                ]}
              />
            }
          />
          <br />
          <System.Avatar
            url="/static/avatar-pooja-shah.jpg"
            size={96}
            popover={
              <System.PopoverNavigation
                style={{ left: 0, bottom: "112px" }}
                onNavigateTo={this.props.onNavigateTo}
                navigation={[
                  { text: "Option A", value: 1 },
                  { text: "Option B", value: 2 },
                  { text: "Option C", value: 3 },
                  { text: "Option D", value: 4 },
                ]}
              />
            }
          />
          <br />
          <System.Avatar
            url="/static/avatar-yuni-graham.jpg"
            size={128}
            popover={
              <System.PopoverNavigation
                style={{ left: 0, bottom: "144px" }}
                onNavigateTo={this.props.onNavigateTo}
                navigation={[
                  { text: "Option A", value: 1 },
                  { text: "Option B", value: 2 },
                  { text: "Option C", value: 3 },
                  { text: "Option D", value: 4 },
                ]}
              />
            }
          />
          <br />
        </Group>
        <Group id="tooltips" style={{ marginTop: 48 }} title="Tooltips">
          <System.TooltipAnchor tooltip="Hello friends!!" />
        </Group>
        <Group id="line-charts" style={{ marginTop: 48 }} title="Line charts">
          <System.StatCard
            denomination="Filecoin"
            value={423123121323}
            data={[
              ["2017-01-01 00:00:00 UTC", 7],
              ["2017-05-01 00:00:00 UTC", 12],
              ["2017-20-01 00:00:00 UTC", 16],
              ["2017-24-01 00:00:00 UTC", 20],
              [new Date(), 24],
            ]}
          >
            Amount of Filecoin
          </System.StatCard>
          <br />
          <br />
          <System.StatCard
            denomination="Bitcoin"
            value={12321345}
            data={[
              ["2017-01-01 00:00:00 UTC", 27],
              ["2017-05-01 00:00:00 UTC", 112],
              ["2017-20-01 00:00:00 UTC", 416],
              ["2017-24-01 00:00:00 UTC", 1120],
              [new Date(), 827],
            ]}
          >
            Amount of Bitcoin
          </System.StatCard>
        </Group>
        <Group id="stats" style={{ marginTop: 48 }} title="Stats">
          <System.StatUpload>40 mb</System.StatUpload>{" "}
          <System.StatDownload>40 mb</System.StatDownload>
        </Group>
        <Group id="buttons" style={{ marginTop: 48 }} title="Buttons">
          <System.ButtonPrimary>Button Primary</System.ButtonPrimary>
          <br />
          <br />
          <System.ButtonPrimaryFull>
            Button Primary Full
          </System.ButtonPrimaryFull>
          <br />
          <br />
          <System.ButtonSecondary>Button Secondary</System.ButtonSecondary>
          <br />
          <br />
          <System.ButtonSecondaryFull>
            Button Secondary Full
          </System.ButtonSecondaryFull>
          <br />
          <br />
          <System.ButtonDisabled>Button Disabled</System.ButtonDisabled>
          <br />
          <br />
          <System.ButtonDisabledFull>Button Disabled</System.ButtonDisabledFull>
        </Group>
        <Group id="checkboxes" style={{ marginTop: 48 }} title="Checkboxes">
          <System.CheckBox
            name="six"
            value={this.state.six}
            onChange={this._handleChange}
          >
            <strong>I want to attend IPFS Pinning Summit</strong>
            <br />
            The IPFS Pinning Summit is a 2-day virtual conference designed for
            the infrastructure and service providers of the distributed web.
          </System.CheckBox>
          <br />
          <br />

          <System.CheckBox
            name="seven"
            value={this.state.seven}
            onChange={this._handleChange}
          >
            <strong>Return Cake</strong>
            <br />I want Cake to become a different object.
          </System.CheckBox>
        </Group>
        <Group id="radio" style={{ marginTop: 48 }} title="Radios">
          <System.RadioGroup
            name="five"
            options={RADIO_GROUP_OPTIONS}
            selected={this.state.five}
            onChange={this._handleChange}
          />
        </Group>
        <Group id="card-tabs" style={{ marginTop: 48 }} title="Card tabs">
          <System.CardTabGroup
            name="eighteen"
            options={TAB_GROUP_TWO}
            value={this.state.eighteen}
            onChange={this._handleChange}
          />
          <br />
          <br />
          <System.CardTabGroup
            name="nineteen"
            options={TAB_GROUP_FOUR}
            value={this.state.nineteen}
            onChange={this._handleChange}
          />
        </Group>
        <Group id="tabs" style={{ marginTop: 48 }} title="Tabs">
          <System.TabGroup
            name="eight"
            options={TAB_GROUP_TWO}
            value={this.state.eight}
            onChange={this._handleChange}
          />
          <System.TabGroup
            name="nine"
            options={TAB_GROUP_THREE}
            value={this.state.nine}
            onChange={this._handleChange}
          />
          <System.TabGroup
            name="ten"
            options={TAB_GROUP_FOUR}
            value={this.state.ten}
            onChange={this._handleChange}
          />
        </Group>
        <Group id="toggles" style={{ marginTop: 48 }} title="Toggles">
          <System.Toggle
            active={this.state.three}
            name="three"
            onChange={this._handleChange}
          />
          <br />
          <br />
          <System.Toggle
            active={this.state.four}
            name="four"
            onChange={this._handleChange}
          />
        </Group>
        <Group id="inputs" style={{ marginTop: 48 }} title="Inputs">
          <System.Textarea
            name="seventeen"
            value={this.state.seventeen}
            onChange={this._handleChange}
          />
          <br />
          <br />
          <System.Input
            name="twelve"
            value={this.state.twelve}
            onChange={this._handleChange}
          />
          <br />
          <br />
          <System.Input
            name="thireteen"
            value={this.state.thirteen}
            placeholder="Enter your favorite year"
            onChange={this._handleChange}
          />
          <br />
          <br />
          <System.Input
            label="Location of your pastries"
            description="We need to know the location of your pastries to sell them to other people."
            tooltip="Hey friends."
            name="fourteen"
            value={this.state.fourteen}
            placeholder="Pastry Location"
            onChange={this._handleChange}
          />
          <br />
          <br />
          <System.Input
            label="Max length is 14"
            max={14}
            name="sixteen"
            value={this.state.sixteen}
            onChange={this._handleChange}
          />

          <br />
          <br />
          <System.Input
            label="Copy and paste (read only)"
            readOnly
            name="fifteen"
            copyable
            value={this.state.fifteen}
            onChange={this._handleChange}
          />
          <br />
          <br />
          <System.Input
            label="Success"
            placeholder="This is an uncontrolled input for success."
            validation="SUCCESS"
          />
          <br />
          <br />
          <System.Input
            label="Warning"
            placeholder="This is an uncontrolled input for warning."
            validation="WARNING"
          />
          <br />
          <br />
          <System.Input
            label="Error"
            placeholder="This is an uncontrolled input for error."
            validation="ERROR"
          />
        </Group>
        <Group id="dropdowns" style={{ marginTop: 48 }} title="Dropdowns">
          <System.SelectMenu
            name="one"
            value={this.state.one}
            category="horoscope"
            onChange={this._handleChange}
            options={SELECT_MENU_OPTIONS}
          >
            {SELECT_MENU_MAP[this.state.one]}
          </System.SelectMenu>
          <br />
          <br />
          <br />
          <System.SelectMenuFull
            name="two"
            value={this.state.two}
            category="horoscope"
            onChange={this._handleChange}
            options={SELECT_MENU_OPTIONS}
          >
            {SELECT_MENU_MAP[this.state.two]}
          </System.SelectMenuFull>
          <br />
          <br />
          <br />
          <System.SelectMenuFull
            label="Pick a horoscope"
            name="eleven"
            value={this.state.eleven}
            category="horoscope"
            onChange={this._handleChange}
            options={SELECT_MENU_OPTIONS}
          >
            {SELECT_MENU_MAP[this.state.eleven]}
          </System.SelectMenuFull>
        </Group>
        <System.H2 style={{ marginTop: 128 }}>The MIT License</System.H2>
        <br />
        <System.P>
          Copyright &copy; 2020 Protocol Labs
          <br />
          <br />
          Permission is hereby granted, free of charge, to any person obtaining
          a copy of this software and associated documentation files (the
          "Software"), to deal in the Software without restriction, including
          without limitation the rights to use, copy, modify, merge, publish,
          distribute, sublicense, and/or sell copies of the Software, and to
          permit persons to whom the Software is furnished to do so, subject to
          the following conditions:
          <br />
          <br />
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software.
          <br />
          <br />
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </System.P>
      </SystemPage>
    );
  }
}

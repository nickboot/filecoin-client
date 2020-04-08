import * as React from "react";
import * as Strings from "~/common/strings";
import * as Constants from "~/common/constants";
import * as Fixtures from "~/common/fixtures";
import * as System from "~/components/system";

import { css } from "react-emotion";

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
  min-width: 228px;
`;

const STYLES_RIGHT = css`
  font-family: "inter-semi-bold";
  font-size: ${Constants.typescale.lvl2};
  color: ${Constants.system.brand};
  min-width: 10%;
  width: 100%;
  padding-left: 24px;
  overflow-wrap: break-word;
`;

const STYLES_TEXT_CTA = css`
  font-family: "inter-regular";
  text-decoration: underline;
  color: ${Constants.system.brand};
  font-weight: 400;
  cursor: pointer;
  transition: 200ms ease all;

  :hover {
    color: ${Constants.system.green};
  }
`;

export default class SceneStatus extends React.Component {
  state = {};

  _handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <ScenePage>
        <System.H1>Status</System.H1>

        <Section
          title="Node"
          onAction={this.props.onAction}
          onNavigateTo={this.props.onNavigateTo}
        >
          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>Peer ID</div>
            <div className={STYLES_RIGHT}>
              Qma9T5YraSnpRDZqRR4krcSJabThc8nwZuJV3LercPHufi{" "}
              <strong className={STYLES_TEXT_CTA}>(copy)</strong>
            </div>
          </div>

          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>
              Peers{" "}
              <strong
                className={STYLES_TEXT_CTA}
                onClick={() => this.props.onNavigateTo({ id: 8 })}
              >
                (view)
              </strong>
            </div>
            <div className={STYLES_RIGHT}>4</div>
          </div>

          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>Version</div>
            <div className={STYLES_RIGHT}>Lotus Testnet 3</div>
          </div>

          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>
              Miners{" "}
              <strong
                className={STYLES_TEXT_CTA}
                onClick={() => this.props.onNavigateTo({ id: 11 })}
              >
                (view)
              </strong>
            </div>
            <div className={STYLES_RIGHT}>1</div>
          </div>

          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>Workers</div>
            <div className={STYLES_RIGHT}>
              0 &nbsp;&nbsp;<strong className={STYLES_TEXT_CTA}>(copy)</strong>
            </div>
          </div>
        </Section>

        <Section
          onAction={this.props.onAction}
          onNavigateTo={this.props.onNavigateTo}
          title="Network connection"
          buttons={[
            {
              name: "Disconnect",
              type: "ACTION",
              value: "ACTION_DISCONNECT",
            },
          ]}
        >
          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>Network</div>
            <div className={STYLES_RIGHT}>Mainnet</div>
          </div>

          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>Status</div>
            <div className={STYLES_RIGHT}>Connected</div>
          </div>

          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>Genesis</div>
            <div className={STYLES_RIGHT}>
              pYqSDLCIthA3CPoVcmwoDOIWyw0pC6uTwDFmNZytEREPLLEV3nOBjnv+yoKqk7nNCgpYAVUwXMv+mcZ2XNusdSWcd6b0HNmeqzQeaB9pZSayy9AV5E2Qp56CGxifRGKC{" "}
              &nbsp;&nbsp;<strong className={STYLES_TEXT_CTA}>(copy)</strong>{" "}
            </div>
          </div>
        </Section>

        <Section
          onAction={this.props.onAction}
          onNavigateTo={this.props.onNavigateTo}
          title="Chain sync"
          buttons={[
            {
              name: "Import",
              type: "ACTION",
              value: "ACTION_IMPORT_CHAIN_DATA",
            },
          ]}
        >
          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>Status</div>
            <div className={STYLES_RIGHT}>Message Sync 30%</div>
          </div>

          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>Head</div>
            <div className={STYLES_RIGHT}>Tipset hash</div>
          </div>

          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>Height</div>
            <div className={STYLES_RIGHT}>96413</div>
          </div>

          <div className={STYLES_ROW}>
            <div className={STYLES_LEFT}>Timestamp</div>
            <div className={STYLES_RIGHT}>April 13th, 2020 4:42 PM</div>
          </div>
        </Section>

        <System.DescriptionGroup
          style={{ marginTop: 32 }}
          label="Reset usage data"
          tooltip="This action is irreversible."
          description="Reset your usage data on this Filecoin Node."
        />

        <System.ButtonSecondary style={{ marginTop: 16 }}>
          Reset
        </System.ButtonSecondary>
      </ScenePage>
    );
  }
}

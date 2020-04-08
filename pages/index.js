import Head from "next/head";

import * as React from "react";
import * as Strings from "~/common/strings";
import * as Constants from "~/common/constants";
import * as Fixtures from "~/common/fixtures";

import { css } from "react-emotion";

import SceneDataTransfer from "~/scenes/SceneDataTransfer";
import SceneDeals from "~/scenes/SceneDeals";
import SceneEditAccount from "~/scenes/SceneEditAccount";
import SceneFile from "~/scenes/SceneFile";
import SceneFilesFolder from "~/scenes/SceneFilesFolder";
import SceneHome from "~/scenes/SceneHome";
import SceneLogs from "~/scenes/SceneLogs";
import SceneMiners from "~/scenes/SceneMiners";
import ScenePaymentChannels from "~/scenes/ScenePaymentChannels";
import ScenePeers from "~/scenes/ScenePeers";
import SceneSettings from "~/scenes/SceneSettings";
import SceneStats from "~/scenes/SceneStats";
import SceneStatus from "~/scenes/SceneStatus";
import SceneStorageMarket from "~/scenes/SceneStorageMarket";
import SceneWallet from "~/scenes/SceneWallet";

import SidebarCreateWalletAddress from "~/components/sidebars/SidebarCreateWalletAddress";
import SidebarDeleteWalletAddress from "~/components/sidebars/SidebarDeleteWalletAddress";
import SidebarWalletSendFunds from "~/components/sidebars/SidebarWalletSendFunds";
import SidebarFileStorageDeal from "~/components/sidebars/SidebarFileStorageDeal";
import SidebarFileRetrievalDeal from "~/components/sidebars/SidebarFileRetrievalDeal";
import SidebarCreatePaymentChannel from "~/components/sidebars/SidebarCreatePaymentChannel";
import SidebarAddMiner from "~/components/sidebars/SidebarAddMiner";
import SidebarAddPeer from "~/components/sidebars/SidebarAddPeer";
import SidebarNotifications from "~/components/sidebars/SidebarNotifications";

import Navigation from "~/components/core/Navigation";
import Header from "~/components/core/Header";
import PageLayout from "~/components/core/PageLayout";

const getNavigationById = (navigation, targetId) => {
  let target = null;
  let activeIds = {};

  const findById = (state, id) => {
    for (let i = 0; i < state.length; i++) {
      if (state[i].id === id) {
        target = state[i];
        activeIds[state[i].id] = true;
      }

      if (!target && state[i].children) {
        activeIds[state[i].id] = true;
        findById(state[i].children, id);

        if (!target) {
          activeIds[state[i].id] = false;
        }
      }
    }
  };

  findById(navigation, targetId);

  return { target, activeIds };
};

export default class IndexPage extends React.Component {
  state = {
    history: [{ id: 1, scrollTop: 0 }],
    currentIndex: 0,
    data: null,
    selected: {
      address: "1",
    },
    viewer: {
      photoURL: "/static/avatar-andrew-hill.jpg",
      addresses: Fixtures.WALLET_ADDRESSES,
    },
    sidebar: null,
  };

  _handleSubmit = (data) => {
    this._handleDismissSidebar();
  };

  _handleCancel = () => {
    this._handleDismissSidebar();
  };

  _handleSelectedChange = (e) => {
    this.setState({
      selected: { ...this.state.selected, [e.target.name]: e.target.value },
    });
  };

  _handleDismissSidebar = () => {
    this.setState({ sidebar: null });
  };

  _handleAction = (options) => {
    console.log({ action: options });
    if (options.type === "NAVIGATE") {
      return this._handleNavigateTo({ id: options.value }, options.data);
    }

    if (options.type === "ACTION") {
      console.info("TODO: WOULD PERFORM AN ACTION");
      return alert(JSON.stringify(options));
    }

    if (options.type === "DOWNLOAD") {
      console.info("TODO: WOULD PERFORM A DOWNLOAD");
      return alert(JSON.stringify(options));
    }

    if (options.type === "SIDEBAR") {
      return this.setState({ sidebar: this.sidebars[options.value] });
    }

    console.info("TODO: BAD CAPTURE");
    return alert(JSON.stringify(options));
  };

  _handleNavigateTo = (next, data = {}) => {
    this.state.history[this.state.currentIndex].scrollTop = window.scrollY;

    if (this.state.currentIndex !== this.state.history.length - 1) {
      const adjustedArray = [...this.state.history];
      adjustedArray.length = this.state.currentIndex + 1;

      return this.setState(
        {
          history: [...adjustedArray, next],
          currentIndex: this.state.currentIndex + 1,
          data,
        },
        () => {
          window.scrollTo(0, 0);
        }
      );
    }

    this.setState(
      {
        history: [...this.state.history, next],
        currentIndex: this.state.currentIndex + 1,
        data,
      },
      () => {
        window.scrollTo(0, 0);
      }
    );
  };

  _handleBack = () => {
    this.state.history[this.state.currentIndex].scrollTop = window.scrollY;

    this.setState(
      {
        currentIndex: this.state.currentIndex - 1,
      },
      () => {
        const next = this.state.history[this.state.currentIndex];
        console.log({ next });
        window.scrollTo(0, next.scrollTop);
      }
    );
  };

  _handleForward = () => {
    this.state.history[this.state.currentIndex].scrollTop = window.scrollY;

    this.setState(
      {
        currentIndex: this.state.currentIndex + 1,
      },
      () => {
        const next = this.state.history[this.state.currentIndex];
        console.log({ next });
        window.scrollTo(0, next.scrollTop);
      }
    );
  };

  sidebars = {
    SIDEBAR_NOTIFICATIONS: <SidebarNotifications />,
    SIDEBAR_ADD_PEER: <SidebarAddPeer />,
    SIDEBAR_ADD_MINER: <SidebarAddMiner />,
    SIDEBAR_CREATE_PAYMENT_CHANNEL: <SidebarCreatePaymentChannel />,
    SIDEBAR_FILE_STORAGE_DEAL: <SidebarFileStorageDeal />,
    SIDEBAR_FILE_RETRIEVAL_DEAL: <SidebarFileRetrievalDeal />,
    SIDEBAR_WALLET_SEND_FUNDS: <SidebarWalletSendFunds />,
    SIDEBAR_CREATE_WALLET_ADDRESS: <SidebarCreateWalletAddress />,
    SIDEBAR_DELETE_WALLET_ADDRESS: <SidebarDeleteWalletAddress />,
  };

  scenes = {
    HOME: <SceneHome />,
    WALLET: <SceneWallet />,
    CHANNELS: <ScenePaymentChannels />,
    FOLDER: <SceneFilesFolder />,
    FILE: <SceneFile />,
    DEALS: <SceneDeals />,
    DATA_TRANSFER: <SceneDataTransfer />,
    STATS: <SceneStats />,
    STORAGE_MARKET: <SceneStorageMarket />,
    MINERS: <SceneMiners />,
    STATUS: <SceneStatus />,
    PEERS: <ScenePeers />,
    LOGS: <SceneLogs />,
    SETTINGS: <SceneSettings />,
    EDIT_ACCOUNT: <SceneEditAccount />,
  };

  render() {
    const next = this.state.history[this.state.currentIndex];
    const current = getNavigationById(Fixtures.NavigationState, next.id);

    const navigation = (
      <Navigation
        viewer={this.state.viewer}
        activeId={current.target.id}
        activeIds={current.activeIds}
        navigation={Fixtures.NavigationState}
        onNavigateTo={this._handleNavigateTo}
        onAction={this._handleAction}
      />
    );

    const header = (
      <Header
        viewer={this.state.viewer}
        pageTitle={current.target.pageTitle}
        currentIndex={this.state.currentIndex}
        onBack={this._handleBack}
        onForward={this._handleForward}
        history={this.state.history}
        onNavigateTo={this._handleNavigateTo}
        onAction={this._handleAction}
      />
    );

    const scene = React.cloneElement(this.scenes[current.target.decorator], {
      viewer: this.state.viewer,
      selected: this.state.selected,
      data: current.target,
      file: this.state.data,
      onNavigateTo: this._handleNavigateTo,
      onSelectedChange: this._handleSelectedChange,
      onAction: this._handleAction,
      onBack: this._handleBack,
      onForward: this._handleForward,
    });

    let sidebar;
    if (this.state.sidebar) {
      sidebar = React.cloneElement(this.state.sidebar, {
        viewer: this.state.viewer,
        selected: this.state.selected,
        onSelectedChange: this._handleSelectedChange,
        onSubmit: this._handleSubmit,
        onCancel: this._handleCancel,
      });
    }

    const title = `Prototype 0.0.1 : ${current.target.pageTitle}`;
    const description = "This is an early preview.";
    const url = "https://fps.onrender.com/v1";

    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
          <meta name="title" content={title} />
          <meta name="description" content={description} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="/static/social.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={url} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:image" content="/static/social.png" />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/static/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />

          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <PageLayout
          navigation={navigation}
          header={header}
          sidebar={sidebar}
          onDismissSidebar={this._handleDismissSidebar}
        >
          {scene}
        </PageLayout>
      </React.Fragment>
    );
  }
}

import * as Strings from "~/common/strings";

const DEMO_TOOLTIP_TEXT =
  "The reign of Marcus Aurelius was marked by military conflict.";

const getFolderById = (id) => {
  for (let i = 0; i < EXAMPLE_FOLDERS.length; i++) {
    if (id === EXAMPLE_FOLDERS[i].id) {
      return EXAMPLE_FOLDERS[i];
    }
  }

  return null;
};

const getFileById = (id) => {
  for (let i = 0; i < EXAMPLE_FILES.length; i++) {
    if (id === EXAMPLE_FILES[i].id) {
      return EXAMPLE_FILES[i];
    }
  }
};

const constructFilesTreeForNavigation = () => {
  const SCAFFOLD = [
    {
      folderId: `folder-root`,
      children: [
        `folder-1`,
        `folder-2`,
        `file-1`,
        `file-2`,
        `file-3`,
        `file-8`,
        `file-9`,
        `file-10`,
        `file-11`,
        `file-12`,
        `file-13`,
        `file-14`,
        `file-15`,
        `file-16`,
        `file-17`,
      ],
    },
    {
      folderId: `folder-1`,
      children: [`folder-3`, `file-4`, `file-5`, `file-6`],
    },
    {
      folderId: `folder-2`,
      children: [],
    },
    {
      folderId: `folder-3`,
      children: [`file-7`],
    },
  ];

  const navigation = {
    ...getFolderById("folder-root"),
  };

  // TODO(jim): Refactor after proving the concept this is ugly.
  SCAFFOLD.forEach((o) => {
    if (navigation.children) {
      for (let i = 0; i < navigation.children.length; i++) {
        if (
          navigation.children[i] &&
          navigation.children[i].id === o.folderId
        ) {
          if (!navigation.children[i].children) {
            navigation.children[i].children = o.children.map((each) => {
              const folder = getFolderById(each);

              if (folder) {
                return folder;
              }

              const file = getFileById(each);
              if (file) {
                return { ...file, ignore: true };
              }

              return null;
            });
          }
        }
      }
    }

    if (navigation.id === o.folderId) {
      if (!navigation.children) {
        navigation.children = o.children.map((each) => {
          const folder = getFolderById(each);

          if (folder) {
            return folder;
          }

          const file = getFileById(each);
          if (file) {
            return { ...file, ignore: true };
          }

          return null;
        });
      }
    }
  });

  return navigation;
};

export const EXTERNAL_ADDRESSES = [
  "bafy2bzaceauqgsxjgxurysrujxmushykl52cfzjqyfbrpfjmu2zh33sg5sois",
];

export const EXAMPLE_ADDRESSES = [
  "bafy2bzacedispf4crg5oc3mlvkrzh5yk7kbvh7ebkv7o4a3fs7vdhcctr4rys",
  "aaaa2bzacedispf4crg5oc3mlvkrzh5yk7kbvh7ebkv7o4a3fs7vdhccbbbrys",
  "bbbb2bzacedispf4crg5oc3mlvkrzh5yk7kbvh7ebkv7o4a3fs7vdhccbbbrys",
];

export const EXAMPLE_FOLDERS = [
  {
    decorator: "FOLDER",
    id: `folder-root`,
    folderId: "folder-root",
    icon: "FOLDER",
    file: "Files",
    name: "Files",
    pageTitle: "for files",
    date: Strings.toDate("2017-01-01 00:00:00 UTC"),
    size: Strings.bytesToSize(20020220),
  },
  {
    decorator: "FOLDER",
    id: `folder-1`,
    folderId: "folder-1",
    icon: "FOLDER",
    file: "oil_paintings_2020",
    name: "oil_paintings_2020",
    pageTitle: "for files",
    date: Strings.toDate("2017-01-01 00:00:00 UTC"),
    size: Strings.bytesToSize(20020220),
  },
  {
    decorator: "FOLDER",
    id: `folder-2`,
    folderId: "folder-2",
    icon: "FOLDER",
    file: "oil_paintings_2021",
    name: "oil_paintings_2021",
    pageTitle: "for files",
    date: Strings.toDate("2017-01-01 00:00:00 UTC"),
    size: Strings.bytesToSize(0),
  },
  {
    decorator: "FOLDER",
    id: `folder-3`,
    folderId: "folder-3",
    icon: "FOLDER",
    file: "oil_paintings_1993",
    name: "oil_paintings_1993",
    pageTitle: "for files",
    date: Strings.toDate("2017-01-01 00:00:00 UTC"),
    size: Strings.bytesToSize(0),
  },
];

export const EXAMPLE_FILES = [
  {
    id: `file-1`,
    icon: "PNG",
    file: "test-image.jpg",
    miner: "Example Miner A",
    "deal-cid": "23Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    date: Strings.toDate("2014-06-06 00:00:00 UTC"),
    size: Strings.bytesToSize(66666, 3),
    amount: Strings.formatAsFilecoin(2),
    remaining: Strings.getRemainingTime(666666),
    cid: "QmY7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    "retrieval-status": 6,
    errors: 4,
  },
  {
    id: `file-2`,
    icon: "PNG",
    file: "test-image-2.jpg",
    miner: "Example Miner A",
    "deal-cid": "ABCDYh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    date: Strings.toDate("2014-06-07 00:00:00 UTC"),
    size: Strings.bytesToSize(77777, 3),
    amount: Strings.formatAsFilecoin(2.04),
    remaining: Strings.getRemainingTime(777777),
    cid: "w2w2Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    "retrieval-status": 6,
    errors: 0,
  },
  {
    id: `file-3`,
    icon: "PNG",
    file: "test-image-3.jpg",
    miner: "Example Miner B",
    "deal-cid": "FHJKYh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    date: Strings.toDate("2014-06-08 00:00:00 UTC"),
    size: Strings.bytesToSize(88888, 3),
    amount: Strings.formatAsFilecoin(2.08),
    remaining: Strings.getRemainingTime(888888),
    cid: "0707Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    "retrieval-status": 6,
    errors: 0,
  },
  {
    id: `file-4`,
    icon: "PNG",
    file: "test-image-4.jpg",
    miner: "Example Miner C",
    "deal-cid": "KKKKYh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    date: Strings.toDate("2014-06-09 00:00:00 UTC"),
    size: Strings.bytesToSize(9999999, 3),
    amount: Strings.formatAsFilecoin(4.08),
    remaining: Strings.getRemainingTime(999999),
    cid: "1010Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    "retrieval-status": 6,
    errors: 0,
  },
  {
    id: `file-5`,
    icon: "PNG",
    file: "test-image-5.jpg",
    miner: "Example Miner D",
    "deal-cid": "WWWWWWWUquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    date: Strings.toDate("2014-06-10 00:00:00 UTC"),
    size: Strings.bytesToSize(4444444, 3),
    amount: Strings.formatAsFilecoin(5.13),
    remaining: Strings.getRemainingTime(797979),
    cid: "1414Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    "retrieval-status": 6,
    errors: 0,
  },
  {
    id: `file-6`,
    icon: "PNG",
    file: "test-image-6.jpg",
    miner: "Example Miner D",
    "deal-cid": "XXXXUquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    date: Strings.toDate("2014-06-11 00:00:00 UTC"),
    size: Strings.bytesToSize(373737, 3),
    amount: Strings.formatAsFilecoin(12.13),
    remaining: Strings.getRemainingTime(828282),
    cid: "3030Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    "retrieval-status": 6,
    errors: 0,
  },
  {
    id: `file-7`,
    icon: "PNG",
    file: "test-image-7.jpg",
    miner: "Example Miner E",
    "deal-cid": "HGHGHGXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    date: Strings.toDate("2014-06-12 00:00:00 UTC"),
    size: Strings.bytesToSize(373737, 3),
    amount: Strings.formatAsFilecoin(12.13),
    remaining: Strings.getRemainingTime(828282),
    cid: "3030Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    "retrieval-status": 6,
    errors: 1,
  },
  {
    id: `file-8`,
    icon: "PNG",
    file: "example-painting-a-1.jpg",
    miner: "Example Miner F",
    "deal-cid": "12CCCCCLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    date: Strings.toDate("2014-06-12 00:00:00 UTC"),
    size: Strings.bytesToSize(444444, 3),
    amount: Strings.formatAsFilecoin(2.13),
    remaining: Strings.getRemainingTime(8282822),
    cid: "asdfadsfPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    "retrieval-status": 6,
    errors: 0,
  },
  {
    id: `file-9`,
    icon: "PNG",
    file: "example-painting-a-2.jpg",
    miner: "Example Miner F",
    "deal-cid": "CGFDFASXbhXkhBvFoPwmQUSa92pxnxjQuPU",
    date: Strings.toDate("2014-06-12 00:00:00 UTC"),
    size: Strings.bytesToSize(44432, 3),
    amount: Strings.formatAsFilecoin(20.13),
    remaining: Strings.getRemainingTime(182822822),
    cid: "asdfadsfPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    "retrieval-status": 6,
    errors: 0,
  },
  {
    id: `file-10`,
    icon: "PNG",
    file: "example-painting-a-3.jpg",
    miner: "Example Miner F",
    "deal-cid": "HHFGFDDFGvFoPwmQUSa92pxnxjQuPU",
    date: Strings.toDate("2014-07-20 00:00:00 UTC"),
    size: Strings.bytesToSize(44432, 3),
    amount: Strings.formatAsFilecoin(20.13),
    remaining: Strings.getRemainingTime(7432123),
    cid: "asdfadsfPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    "retrieval-status": 6,
    errors: 0,
  },
  {
    id: `file-11`,
    icon: "PNG",
    file: "example-painting-a-4.jpg",
    miner: "Example Miner F",
    "deal-cid": "HHFGFDDFGvFoPwmQUSa92pxnxjQuPU",
    date: Strings.toDate("2014-07-20 00:00:00 UTC"),
    size: Strings.bytesToSize(44432, 3),
    amount: Strings.formatAsFilecoin(20.13),
    remaining: Strings.getRemainingTime(742988),
    cid: "ppdmdfeFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    "retrieval-status": 6,
    errors: 0,
  },
  {
    id: `file-12`,
    icon: "PNG",
    file: "example-painting-a-5.jpg",
    miner: "Example Miner F",
    "deal-cid": "GHREREFGvFoPwmQUSa92pxnxjQuPU",
    date: Strings.toDate("2014-07-24 00:00:00 UTC"),
    size: Strings.bytesToSize(44432, 3),
    amount: Strings.formatAsFilecoin(20.13),
    remaining: Strings.getRemainingTime(320021),
    cid: "dfsffdbPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    "retrieval-status": 6,
    errors: 0,
  },
  {
    id: `file-13`,
    icon: "PNG",
    file: "pending-file-1.jpg",
    miner: "Example Miner G",
    "deal-cid": "13REREFGvFoPwmQUSa92pxnxjQuPU",
    date: Strings.toDate("2014-07-24 00:00:00 UTC"),
    size: Strings.bytesToSize(44432, 3),
    amount: Strings.formatAsFilecoin(20.13),
    remaining: null,
    cid: "13sffdbPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    "retrieval-status": 1,
  },
  {
    id: `file-14`,
    icon: "PNG",
    file: "pending-file-2.jpg",
    miner: "Example Miner G",
    "deal-cid": "14REREFGvFoPwmQUSa92pxnxjQuPU",
    date: Strings.toDate("2014-07-24 00:00:00 UTC"),
    size: Strings.bytesToSize(44432, 3),
    amount: Strings.formatAsFilecoin(20.13),
    remaining: null,
    cid: "14sffdbPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    "retrieval-status": 2,
  },
  {
    id: `file-15`,
    icon: "PNG",
    file: "pending-file-3.jpg",
    miner: "Example Miner H",
    "deal-cid": "15REREFGvFoPwmQUSa92pxnxjQuPU",
    date: Strings.toDate("2014-07-24 00:00:00 UTC"),
    size: Strings.bytesToSize(44432, 3),
    amount: Strings.formatAsFilecoin(20.13),
    remaining: null,
    cid: "15sffdbPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    "retrieval-status": 3,
  },
  {
    id: `file-16`,
    icon: "PNG",
    file: "pending-file-4.jpg",
    miner: "Example Miner I",
    "deal-cid": "16REREFGvFoPwmQUSa92pxnxjQuPU",
    date: Strings.toDate("2014-07-24 00:00:00 UTC"),
    size: Strings.bytesToSize(44432, 3),
    amount: Strings.formatAsFilecoin(20.13),
    remaining: null,
    cid: "16sffdbPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    "retrieval-status": 4,
  },
  {
    id: `file-17`,
    icon: "PNG",
    file: "pending-file-5.jpg",
    miner: "Example Miner J",
    "deal-cid": "17REREFGvFoPwmQUSa92pxnxjQuPU",
    date: Strings.toDate("2014-07-24 00:00:00 UTC"),
    size: Strings.bytesToSize(44432, 3),
    amount: Strings.formatAsFilecoin(20.13),
    remaining: null,
    cid: "17sffdbPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
    "retrieval-status": 5,
  },
];

export const NavigationState = [
  {
    id: 1,
    name: "Home",
    pageTitle: "home",
    decorator: "HOME",
    children: null,
  },
  {
    id: 2,
    name: "Wallet",
    pageTitle: "your wallet and addresses",
    decorator: "WALLET",
    children: [
      {
        id: 3,
        name: "Payment Channels",
        children: null,
        pageTitle: "your payment channels",
        decorator: "CHANNELS",
      },
    ],
  },
  constructFilesTreeForNavigation(),
  {
    id: 5,
    name: "Deals",
    pageTitle: "your deals",
    decorator: "DEALS",
    children: [
      {
        id: 6,
        name: "Data Transfer",
        pageTitle: "your data transfers",
        decorator: "DATA_TRANSFER",
        children: null,
      },
    ],
  },
  {
    id: 9,
    name: "Stats",
    pageTitle: "your filecoin usage",
    decorator: "STATS",
    children: [
      {
        id: 10,
        name: "Storage Market",
        pageTitle: "the storage market",
        decorator: "STORAGE_MARKET",
        children: null,
      },
      {
        id: 11,
        name: "Miners",
        pageTitle: "miners",
        decorator: "MINERS",
        children: null,
      },
    ],
  },
  {
    id: 7,
    name: "Status",
    pageTitle: "your status",
    decorator: "STATUS",
    children: null,
  },
  {
    id: 8,
    name: "Peers",
    pageTitle: "your peers",
    decorator: "PEERS",
    children: null,
  },
  {
    id: 12,
    name: "Logs",
    pageTitle: "your logs",
    decorator: "LOGS",
    children: null,
  },
  {
    id: 13,
    name: "Edit account",
    pageTitle: "your account",
    decorator: "EDIT_ACCOUNT",
    children: null,
    ignore: true,
  },
  {
    id: 14,
    name: "Settings",
    pageTitle: "your settings",
    decorator: "SETTINGS",
    children: null,
    ignore: true,
  },
  {
    id: 15,
    name: null,
    pageTitle: "files",
    decorator: "FILE",
    children: null,
    ignore: true,
  },
];

const createTransactions = (address) => ({
  columns: [
    {
      key: "category",
      name: "Category",
      type: "TRANSACTION_DIRECTION",
      width: "120px",
    },
    { key: "amount", name: "Amount", width: "100%" },
    { key: "source", name: "Source", width: "196px" },
    {
      key: "destination",
      name: "Destination",
      width: "196px",
    },
    { key: "date", name: "Date", width: "120px" },
    {
      key: "status",
      name: "Status",
      type: "TRANSACTION_STATUS",
      width: "100px",
    },
  ],
  rows: [
    {
      id: 1,
      category: 1,
      amount: Strings.formatAsFilecoin(11000),
      source: EXTERNAL_ADDRESSES[0],
      destination: address,
      date: Strings.toDate("2017-01-01 00:00:00 UTC"),
      status: 1,
    },
    {
      id: 2,
      category: 2,
      amount: Strings.formatAsFilecoin(11000),
      source: address,
      destination: EXTERNAL_ADDRESSES[0],
      date: Strings.toDate("2017-01-01 00:00:00 UTC"),
      status: 2,
    },
    {
      id: 3,
      category: 1,
      amount: Strings.formatAsFilecoin(11000),
      source: EXTERNAL_ADDRESSES[0],
      destination: address,
      date: Strings.toDate("2017-01-01 00:00:00 UTC"),
      status: 2,
    },
    {
      id: 4,
      category: 2,
      amount: Strings.formatAsFilecoin(11000),
      source: address,
      destination: EXTERNAL_ADDRESSES[0],
      date: Strings.toDate("2017-01-01 00:00:00 UTC"),
      status: 1,
    },
  ],
});

export const HOME_TABLE_RECENT_DATA = {
  columns: [
    { key: "file", name: "File", type: "FILE_LINK" },
    {
      key: "date",
      name: "Date uploaded",
      width: "160px",
      tooltip:
        "This date represents when the file was first uploaded to the network.",
    },
    { key: "remaining", name: "Remaining time", width: "180px" },
  ],
  rows: [
    EXAMPLE_FILES[0],
    EXAMPLE_FILES[1],
    EXAMPLE_FILES[2],
    EXAMPLE_FILES[3],
    EXAMPLE_FILES[4],
    EXAMPLE_FILES[5],
    EXAMPLE_FILES[6],
  ],
};

export const FILE_TABLE_SEARCH_RESULTS = {
  columns: [
    { key: "file", name: "File", type: "FILE_LINK", width: "160px" },
    { key: "size", name: "Size", width: "140px" },
    { key: "date", name: "Date", width: "120px" },
    { key: "remaining", name: "Remaining time", width: "140px" },
    {
      key: "cid",
      name: "Data CID",
      copyable: true,
      tooltip: DEMO_TOOLTIP_TEXT,
      width: "100%",
    },
  ],
  rows: EXAMPLE_FILES,
};

export const FILE_TABLE_LOCAL = {
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
      tooltip: DEMO_TOOLTIP_TEXT,
      width: "180px",
    },
    { key: "retrieval-status", name: "Status", type: "DEAL_STATUS_RETRIEVAL" },
    { key: "errors", hideLabel: true, type: "NOTIFICATION_ERROR" },
  ],
  rows: [
    EXAMPLE_FOLDERS[0],
    EXAMPLE_FILES[0],
    EXAMPLE_FILES[1],
    EXAMPLE_FILES[2],
    EXAMPLE_FILES[3],
    EXAMPLE_FILES[4],
    EXAMPLE_FILES[5],
    EXAMPLE_FILES[6],
    EXAMPLE_FILES[11],
    EXAMPLE_FILES[12],
    EXAMPLE_FILES[13],
    EXAMPLE_FILES[14],
    EXAMPLE_FILES[15],
    EXAMPLE_FILES[16],
  ],
};

export const DATA_TRANSFER_TABLE_PAST = {
  columns: [
    {
      key: "data-cid",
      name: "Data CID",
      copyable: true,
      tooltip: DEMO_TOOLTIP_TEXT,
      width: "224px",
    },
    {
      key: "deal-cid",
      name: "Deal CID",
      copyable: true,
      tooltip: DEMO_TOOLTIP_TEXT,
      width: "100%",
    },
    {
      key: "data-source",
      name: "Source",
      width: "120px",
    },
    {
      key: "data-destination",
      name: "Destination",
      width: "120px",
    },
    { key: "size", name: "Size", width: "140px" },
  ],
  rows: [
    {
      id: 1,
      "data-cid": "44Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      "deal-cid": "55Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      "data-source": "LOCAL",
      "data-destination": "t05141",
      size: Strings.bytesToSize(202000),
    },
    {
      id: 2,
      "data-cid": "66Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      "deal-cid": "77Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      "data-source": "LOCAL",
      "data-destination": "t05141",
      size: Strings.bytesToSize(202000),
    },
    {
      id: 3,
      "data-cid": "44Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      "deal-cid": "55Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      "data-source": "t05141",
      "data-destination": "LOCAL",
      size: Strings.bytesToSize(202000),
    },
  ],
};

export const PEERS_TABLE = {
  columns: [
    { key: "peer-avatar", hideLabel: true, width: "56px", type: "AVATAR" },
    {
      key: "chain-head",
      name: "Chain Head",
      tooltip: DEMO_TOOLTIP_TEXT,
      width: "224px",
    },
    {
      key: "height",
      name: "Height",
      tooltip: DEMO_TOOLTIP_TEXT,
      width: "120px",
    },
    { key: "location", name: "Location", width: "100%", type: "LOCATION" },
    { key: "upload", name: "Upload", width: "120px", type: "BANDWIDTH_UPLOAD" },
    {
      key: "download",
      name: "Download",
      width: "120px",
      type: "BANDWIDTH_DOWNLOAD",
    },
  ],
  rows: [
    {
      id: 1,
      "peer-avatar": "/static/avatar-adrian-lanzafame.png",
      online: true,
      "chain-head":
        "bafy2bzacecvuycbaik2dn4ktxeyrzrtuviqxvhbk67qxt5lqgrwogxhk4twx6",
      height: 8888,
      location: 1,
      upload: 22222,
      download: 11111,
    },
    {
      id: 2,
      "peer-avatar": "/static/avatar-andrew-hill.jpg",
      online: true,
      "chain-head":
        "bafy2bzacecvuycbaik2dn4ktxeyrzrtuviqxvhbk67qxt5lqgrwogxhk4twx6",
      height: 8888,
      location: 2,
      upload: 22222,
      download: 11111,
    },
    {
      id: 3,
      "peer-avatar": "/static/avatar-colin-evran.jpg",
      "chain-head":
        "bafy2bzacecvuycbaik2dn4ktxeyrzrtuviqxvhbk67qxt5lqgrwogxhk4twx6",
      height: 8888,
      location: 3,
      upload: 22222,
      download: 11111,
    },
    {
      id: 4,
      "peer-avatar": "/static/avatar-juan-benet.png",
      "chain-head":
        "bafy2bzacecvuycbaik2dn4ktxeyrzrtuviqxvhbk67qxt5lqgrwogxhk4twx6",
      height: 8888,
      location: 3,
      upload: 22222,
      download: 11111,
    },
  ],
};

export const DEALS_TABLE = {
  columns: [
    {
      key: "deal-category",
      name: "Deal",
      width: "48px",
      type: "DEAL_CATEGORY",
    },
    {
      key: "deal-cid",
      name: "Deal CID",
      copyable: true,
      tooltip: DEMO_TOOLTIP_TEXT,
      width: "160px",
    },
    {
      key: "data-cid",
      name: "Data CID",
      copyable: true,
      tooltip: DEMO_TOOLTIP_TEXT,
      width: "100%",
    },
    { key: "miner", name: "Miner", width: "96px" },
    { key: "price", name: "Price", width: "96px" },
    {
      key: "auto-renew",
      name: "Auto renew",
      tooltip: DEMO_TOOLTIP_TEXT,
      type: "DEAL_AUTO_RENEW",
    },
    { key: "remaining", name: "Remaining", width: "96px" },
    { key: "status", name: "Status", type: "DEAL_STATUS" },
  ],
  rows: [
    {
      id: 1,
      "deal-category": 1,
      "data-cid": "14Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      "deal-cid": "23Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      miner: "Example Miner A",
      price: Strings.formatAsFilecoin(1000),
      "auto-renew": 1,
      remaining: null,
      status: 1,
    },
    {
      id: 2,
      "deal-category": 1,
      "data-cid": "34Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      "deal-cid": "56Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      miner: "Example Miner B",
      price: Strings.formatAsFilecoin(1000),
      "auto-renew": 1,
      remaining: null,
      status: 2,
    },
    {
      id: 3,
      "deal-category": 1,
      "data-cid": "78Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      "deal-cid": "89Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      miner: "Example Miner C",
      price: Strings.formatAsFilecoin(1000),
      "auto-renew": 2,
      remaining: null,
      status: 3,
    },
    {
      id: 4,
      "deal-category": 1,
      "data-cid": "99Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      "deal-cid": "11Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      miner: "Example Miner D",
      price: Strings.formatAsFilecoin(1000),
      "auto-renew": 2,
      remaining: null,
      status: 4,
    },
    {
      id: 5,
      "deal-category": 1,
      "data-cid": "12Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      "deal-cid": "34Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      miner: "Example Miner E",
      price: Strings.formatAsFilecoin(1000),
      "auto-renew": 2,
      remaining: null,
      status: 5,
    },
    {
      id: 6,
      "deal-category": 1,
      "data-cid": "56Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      "deal-cid": "78Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      miner: "Example Miner F",
      price: Strings.formatAsFilecoin(1000),
      "auto-renew": 1,
      remaining: Strings.getRemainingTime(184000),
      status: 6,
    },
    {
      id: 7,
      "deal-category": 2,
      "data-cid": "abY7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      "deal-cid": "cdY7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      miner: "Example Miner A",
      price: Strings.formatAsFilecoin(100),
      status: 1,
    },
    {
      id: 8,
      "deal-category": 2,
      "data-cid": "efY7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      "deal-cid": "ghY7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      miner: "Example Miner B",
      price: Strings.formatAsFilecoin(100),
      status: 2,
    },
    {
      id: 9,
      "deal-category": 2,
      "data-cid": "ilY7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      "deal-cid": "qqY7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      miner: "Example Miner C",
      price: Strings.formatAsFilecoin(100),
      status: 3,
    },
    {
      id: 10,
      "deal-category": 2,
      "data-cid": "xxY7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      "deal-cid": "wwY7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      miner: "Example Miner D",
      price: Strings.formatAsFilecoin(100),
      status: 4,
    },
    {
      id: 11,
      "deal-category": 2,
      "data-cid": "zzY7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      "deal-cid": "qzY7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      miner: "Example Miner E",
      price: Strings.formatAsFilecoin(100),
      status: 5,
    },
  ],
};

export const MINERS_TABLE = {
  columns: [
    {
      key: "availability",
      name: "Availability",
      width: "100px",
      type: "MINER_AVAILABILITY",
    },
    { key: "miner", name: "Miner", width: "100%" },
    { key: "miner-id", name: "Miner ID" },
    { key: "location", name: "Location", type: "LOCATION" },
    {
      key: "reputation-score",
      name: "Reputation score",
      tooltip: DEMO_TOOLTIP_TEXT,
      width: "144px",
    },
    { key: "storage-available", name: "Availble storage", width: "120px" },
    {
      key: "storage-proven",
      name: "Proven storage",
      tooltip: DEMO_TOOLTIP_TEXT,
      width: "144px",
    },
  ],
  rows: [
    {
      id: 1,
      availability: 1,
      miner: "Example Miner A",
      "miner-id": "t44444",
      location: 1,
      "reputation-score": 80,
      "storage-available": Strings.bytesToSize(244000),
      "storage-proven": Strings.bytesToSize(22000),
    },
  ],
};

export const STORAGE_MARKET_TABLE = {
  columns: [
    { key: "file", name: "File", type: "FILE_LINK" },
    { key: "miner", name: "Miner", width: "100%" },
    {
      key: "deal-cid",
      name: "Deal CID",
      copyable: true,
      tooltip: DEMO_TOOLTIP_TEXT,
      width: "244px",
    },
    { key: "date", name: "Date", width: "144px" },
    { key: "amount", name: "Amount" },
  ],
  rows: EXAMPLE_FILES,
};

export const PAYMENT_CHANNELS_TABLE_ACTIVE = {
  columns: [
    {
      key: "category",
      name: "Category",
      width: "120px",
      type: "TRANSACTION_DIRECTION",
    },
    { key: "channel-id", name: "Channel ID", width: "100%" },
    { key: "max-value", name: "Maximum Filecoin", width: "144px" },
    { key: "current-value", name: "Current Filecoin", width: "144px" },
    { key: "redeemable", hideLabel: true, type: "BUTTON", width: "144px" },
  ],
  rows: [
    {
      id: 1,
      category: 1,
      "channel-id": "example-channel-id-1",
      "max-value": Strings.formatAsFilecoin(3232100),
      "current-value": Strings.formatAsFilecoin(423233),
      redeemable: "Redeem",
    },
    {
      id: 2,
      category: 2,
      "channel-id": "example-channel-id-2",
      "max-value": Strings.formatAsFilecoin(3232100),
      "current-value": Strings.formatAsFilecoin(423233),
    },
  ],
};

export const PAYMENT_CHANNELS_TABLE_REDEEMED = {
  columns: [
    {
      key: "category",
      name: "Category",
      width: "120px",
      type: "TRANSACTION_DIRECTION",
    },
    { key: "channel-id", name: "Channel ID", width: "100%" },
    { key: "max-value", name: "Maximum Filecoin", width: "144px" },
    { key: "redeemed-value", name: "Redeemed Filecoin", width: "144px" },
  ],
  rows: [
    {
      id: 1,
      category: 1,
      "channel-id": "example-channel-id-3",
      "max-value": Strings.formatAsFilecoin(3232100),
      "redeemed-value": Strings.formatAsFilecoin(423233),
    },
    {
      id: 2,
      category: 1,
      "channel-id": "example-channel-id-4",
      "max-value": Strings.formatAsFilecoin(223100),
      "redeemed-value": Strings.formatAsFilecoin(12200),
    },
  ],
};

export const STATS_COMMON_RETRIEVAL_CID = {
  columns: [
    {
      key: "deal-cid",
      name: "Deal CID",
      copyable: true,
      tooltip: DEMO_TOOLTIP_TEXT,
      width: "100%",
    },
    {
      key: "data-cid",
      name: "Data CID",
      copyable: true,
      tooltip: DEMO_TOOLTIP_TEXT,
      width: "296px",
    },
    { key: "miner", name: "Miner", width: "228px" },
  ],
  rows: [
    {
      id: 1,
      "data-cid": "44Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      "deal-cid": "55Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      miner: "Example Miner A",
    },
    {
      id: 2,
      "data-cid": "14Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      "deal-cid": "23Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      miner: "Example Miner B",
    },
    {
      id: 3,
      "data-cid": "88Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      "deal-cid": "89Y7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      miner: "Example Miner C",
    },
    {
      id: 4,
      "data-cid": "AAAAYh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      "deal-cid": "BBBBYh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU",
      miner: "Example Miner D",
    },
  ],
};

export const STATS_STORAGE_DEALS_GB = {
  columns: [
    { key: "file", name: "File", type: "FILE_LINK" },
    { key: "miner", name: "Miner", width: "228px" },
    { key: "size", name: "Size" },
    {
      key: "date",
      name: "Date uploaded",
      width: "168px",
      tooltip:
        "This date represents when the file was first uploaded to the network.",
    },
  ],
  rows: [
    EXAMPLE_FILES[0],
    EXAMPLE_FILES[1],
    EXAMPLE_FILES[2],
    EXAMPLE_FILES[3],
    EXAMPLE_FILES[4],
    EXAMPLE_FILES[5],
    EXAMPLE_FILES[6],
  ],
};

export const STATS_STORAGE_DEALS_FIL = {
  columns: [
    { key: "file", name: "File", type: "FILE_LINK" },
    { key: "miner", name: "Miner", width: "228px" },
    { key: "amount", name: "Amount" },
    {
      key: "date",
      name: "Date uploaded",
      width: "168px",
      tooltip:
        "This date represents when the file was first uploaded to the network.",
    },
  ],
  rows: [
    EXAMPLE_FILES[0],
    EXAMPLE_FILES[1],
    EXAMPLE_FILES[2],
    EXAMPLE_FILES[3],
    EXAMPLE_FILES[4],
    EXAMPLE_FILES[5],
    EXAMPLE_FILES[6],
  ],
};

export const HOME_TABLE_RECENT_TRANSACTIONS = createTransactions("Capircorn");

export const WALLET_ADDRESSES = [
  {
    value: "1",
    name: "Capricorn",
    address: EXAMPLE_ADDRESSES[0],
    transactions: createTransactions("Capricorn"),
    type: "SECP256K",
    balance: 10230,
    deals: 42,
  },
  {
    value: "2",
    name: "Aquarius",
    address: EXAMPLE_ADDRESSES[1],
    transactions: { rows: [] },
    type: "MULTISIG",
    balance: 0,
    deals: 0,
  },
  {
    value: "3",
    name: "Pisces",
    address: EXAMPLE_ADDRESSES[2],
    transactions: { rows: [] },
    type: "BLS",
    balance: 0,
    deals: 0,
  },
];

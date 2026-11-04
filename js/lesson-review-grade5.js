/* Independent review: sources/grade5-visual-review.json; media-grade5-manifest.json. */
(function () {
  "use strict";
  var BL = window.BL;
  if (!BL || !BL.lessonReview || BL.lessonReview.version !== "1") throw new Error("Base lesson review required");
  var items = {
  "8250253131100000": {
    "evidence": "verified",
    "fingerprint": "7870efbaaf80c0f75d989b52c23d86918cb7ba4117db4d2b82c2956d00143b53",
    "poster": "assets/lessons/8250253131100000.svg"
  },
  "8250253131200000": {
    "evidence": "verified",
    "fingerprint": "f1be8926920a4f7befe082d12bf0240c28d4ccf6025aeee6548f0c100399e14a",
    "poster": "assets/lessons/8250253131200000.svg"
  },
  "8250253150000000": {
    "evidence": "verified",
    "fingerprint": "9281c03dbc594e6386e672299efbba032d208983385a2624c327a62f14384cd4",
    "poster": "assets/lessons/8250253150000000.svg",
    "video": "assets/lessons/8250253150000000.mp4"
  },
  "8250253231100000": {
    "evidence": "verified",
    "fingerprint": "fc7679ff360ff8dae5d7831e45feb463c5ee0a5e83fb1ddd654a9da95e3a47dd",
    "poster": "assets/lessons/8250253231100000.svg"
  },
  "8250253331100000": {
    "evidence": "verified",
    "fingerprint": "915512abb4932eaa601cb1a01aaf90813406c7896907c8fb1caa0e83af34d9e4",
    "poster": "assets/lessons/8250253331100000.svg"
  },
  "8250253420000000": {
    "evidence": "verified",
    "fingerprint": "42d41cbfbddbe7eb6b32afebbbdb55ee418564d2e5234446e217512303ac873d",
    "poster": "assets/lessons/8250253420000000.svg",
    "video": "assets/lessons/8250253420000000.mp4"
  }
};
  Object.keys(items).forEach(function (code) {
    if (Object.prototype.hasOwnProperty.call(BL.lessonReview.items, code)) throw new Error("Duplicate review code");
    BL.lessonReview.items[code] = items[code];
  });
}());

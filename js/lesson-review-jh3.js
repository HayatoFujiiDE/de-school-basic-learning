/* Independent review: sources/jh3-visual-review.json; media-jh3-manifest.json. */
(function () {
  "use strict";
  var BL = window.BL;
  if (!BL || !BL.lessonReview || BL.lessonReview.version !== "1") throw new Error("Base lesson review required");
  var items = {
  "8350233121240000": {
    "evidence": "verified",
    "fingerprint": "b49acb23924e0db3734f088250cad3e80208937cd1dd29fafcc2fba12d2926a1",
    "poster": "assets/lessons/8350233121240000.svg",
    "video": "assets/lessons/8350233121240000.mp4"
  },
  "8350233112200000": {
    "evidence": "verified",
    "fingerprint": "90a71148dba84ece4f174023b70b689252c586bafb0c39fdeecec7ca2c8ff1ac",
    "poster": "assets/lessons/8350233112200000.svg"
  },
  "8350233132100000": {
    "evidence": "verified",
    "fingerprint": "e230ffa0a83c4da8fa6262008a871debd60d8aad4aba8f570a55b745758d4d9c",
    "poster": "assets/lessons/8350233132100000.svg"
  },
  "8350233311000000": {
    "evidence": "verified",
    "fingerprint": "38567c12bf60a3c467acf5c6b5963298af3ab7ceacfb7edf3e5728f3573a5803",
    "poster": "assets/lessons/8350233311000000.svg"
  },
  "8350233212000000": {
    "evidence": "verified",
    "fingerprint": "24b2605296fce162f127b3a0bb5f7325a12e00e3f0ac8c6c23977996fe9c509d",
    "poster": "assets/lessons/8350233212000000.svg"
  },
  "8350233221100000": {
    "evidence": "verified",
    "fingerprint": "8dd28f2db28566e76555e1131f0d960ac4df5cb95826e5f2b8b0e469ab611197",
    "poster": "assets/lessons/8350233221100000.svg"
  },
  "8350233231100000": {
    "evidence": "verified",
    "fingerprint": "b54287d8a4529fc2ee72fa6f030d299067e7bd0af65571ecee464c2eea66f230",
    "poster": "assets/lessons/8350233231100000.svg",
    "video": "assets/lessons/8350233231100000.mp4"
  },
  "8350233412200000": {
    "evidence": "verified",
    "fingerprint": "9b05423fc397bd70163fad03f85b49a7e7f512f634a76e1180bbb0f34e38aeea",
    "poster": "assets/lessons/8350233412200000.svg"
  }
};
  Object.keys(items).forEach(function (code) {
    if (Object.prototype.hasOwnProperty.call(BL.lessonReview.items, code)) throw new Error("Duplicate review code");
    BL.lessonReview.items[code] = items[code];
  });
}());

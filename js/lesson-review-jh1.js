/* Independent review: sources/jh1-visual-review.json; media-jh1-manifest.json. */
(function () {
  "use strict";
  var BL = window.BL;
  if (!BL || !BL.lessonReview || BL.lessonReview.version !== "1") throw new Error("Base lesson review required");
  var items = {
  "8350213111200000": {
    "evidence": "verified",
    "fingerprint": "76f689955c7befc1c9062e8d4975e62aac2ca8b16a0773a5831646e91032ba86",
    "poster": "assets/lessons/8350213111200000.svg",
    "video": "assets/lessons/8350213111200000.mp4"
  },
  "8350213112100000": {
    "evidence": "verified",
    "fingerprint": "7629b28e129ff12effc5ef4ddc17096734b8861a9a8be36adbaf51d8be455047",
    "poster": "assets/lessons/8350213112100000.svg"
  },
  "8350213131200000": {
    "evidence": "verified",
    "fingerprint": "036764c0fb26ca3ab35b9df0a3fe1b136e6205f9d289f9c09259a5f19e4bef93",
    "poster": "assets/lessons/8350213131200000.svg",
    "video": "assets/lessons/8350213131200000.mp4"
  },
  "8350213311400000": {
    "evidence": "verified",
    "fingerprint": "199d7550b22056288fc7bd66f228eec1f238d9cd91b6c978aff9de817c7477e3",
    "poster": "assets/lessons/8350213311400000.svg"
  },
  "8350213310000000": {
    "evidence": "verified",
    "fingerprint": "bcbaedcdebaa55b38f3f7fc3724491e1095b786a75fea09827e51462c9a3597f",
    "poster": "assets/lessons/8350213310000000.svg"
  },
  "8350213211100000": {
    "evidence": "verified",
    "fingerprint": "5957225361bbe2ad30cc62d4b42f9216354f3f5c8633163533c823a0e53154ed",
    "poster": "assets/lessons/8350213211100000.svg"
  },
  "8350213221200000": {
    "evidence": "verified",
    "fingerprint": "82adf967d9c47159ad71746e63375636d0d9f369893ea645ea270e0765f28ba1",
    "poster": "assets/lessons/8350213221200000.svg"
  },
  "8350213421100000": {
    "evidence": "verified",
    "fingerprint": "f1430fe8cd1722dedcb1d0a1e8a60427e842451bc6cbe165e63625c8b46e2ee8",
    "poster": "assets/lessons/8350213421100000.svg"
  }
};
  Object.keys(items).forEach(function (code) {
    if (Object.prototype.hasOwnProperty.call(BL.lessonReview.items, code)) throw new Error("Duplicate review code");
    BL.lessonReview.items[code] = items[code];
  });
}());

/* Independent review: sources/grade6-visual-review.json; media-grade6-manifest.json. */
(function () {
  "use strict";
  var BL = window.BL;
  if (!BL || !BL.lessonReview || BL.lessonReview.version !== "1") throw new Error("Base lesson review required");
  var items = {
  "8250263112100000": {
    "evidence": "verified",
    "fingerprint": "a335af0eba723f99c5227a85314a9a8a801fef001cbac79d23af0244798edc83",
    "poster": "assets/lessons/8250263112100000.svg",
    "video": "assets/lessons/8250263112100000.mp4"
  },
  "8250263110000000": {
    "evidence": "verified",
    "fingerprint": "f95c3472ee461cf8553bc157f43f13995fbae6131958d0a5bf3b1a90069191db",
    "poster": "assets/lessons/8250263110000000.svg"
  },
  "8250263211200000": {
    "evidence": "verified",
    "fingerprint": "bd7c732e7700087dfb809bc1502ffc74b0ab100bbb71875bbfb60baac2d61054",
    "poster": "assets/lessons/8250263211200000.svg"
  },
  "8250263320000000": {
    "evidence": "verified",
    "fingerprint": "6e6ba93ade42d0071525d5338fe3a7f34414e03a5c652a1e7661af686a4e87e6",
    "poster": "assets/lessons/8250263320000000.svg",
    "video": "assets/lessons/8250263320000000.mp4"
  },
  "8250263230000000": {
    "evidence": "verified",
    "fingerprint": "490e912afc2bd8c88cefd68eb76f110b6313e3aa2edf07364c79a783b74bfbf8",
    "poster": "assets/lessons/8250263230000000.svg"
  },
  "8250263311300000": {
    "evidence": "verified",
    "fingerprint": "edf6efff821258c4a120c3b4b3e1d666472c9684799a2dbf2072c8e3d09ab20c",
    "poster": "assets/lessons/8250263311300000.svg"
  }
};
  Object.keys(items).forEach(function (code) {
    if (Object.prototype.hasOwnProperty.call(BL.lessonReview.items, code)) throw new Error("Duplicate review code");
    BL.lessonReview.items[code] = items[code];
  });
}());

/* Independent review: sources/jh2-visual-review.json; media-jh2-manifest.json. */
(function () {
  "use strict";
  var BL = window.BL;
  if (!BL || !BL.lessonReview || BL.lessonReview.version !== "1") throw new Error("Base lesson review required");
  var items = {
  "8350223111100000": {
    "evidence": "verified",
    "fingerprint": "da0ed30ecf48cd7ff822876372a87fc77b6d7c367083a5d8dc2d174e75d60ab1",
    "poster": "assets/lessons/8350223111100000.svg"
  },
  "8350223111300000": {
    "evidence": "verified",
    "fingerprint": "c7e8fa2a2bdfe59a393f9868b1ff853254520bc865f46a7fa7ea43ffb82a23f3",
    "poster": "assets/lessons/8350223111300000.svg"
  },
  "8350223121300000": {
    "evidence": "verified",
    "fingerprint": "af30bec68f263d986b772b2012a495b1f6cd9e18d9cf57c98af75339831ee60d",
    "poster": "assets/lessons/8350223121300000.svg",
    "video": "assets/lessons/8350223121300000.mp4"
  },
  "8350223311000000": {
    "evidence": "verified",
    "fingerprint": "813003e2b82a4296d114a96f2f99f1c6bd6078fe410908e076544b724ba614f4",
    "poster": "assets/lessons/8350223311000000.svg",
    "video": "assets/lessons/8350223311000000.mp4"
  },
  "8350223211100000": {
    "evidence": "verified",
    "fingerprint": "0144dd1be89adbf59e444df13624b5eb07860609e1d13ea2667d35516114cab4",
    "poster": "assets/lessons/8350223211100000.svg"
  },
  "8350223221000000": {
    "evidence": "verified",
    "fingerprint": "ba7dc6f418b9221806c424730a613cc4cd22bccad34aa3bbc556736b535552e6",
    "poster": "assets/lessons/8350223221000000.svg"
  },
  "8350223411200000": {
    "evidence": "verified",
    "fingerprint": "bbdb12f58cb7d2e1a33927daac139bdf6292a9833d8a5ffe90bcf33c5d7f4bea",
    "poster": "assets/lessons/8350223411200000.svg"
  },
  "8350223421200000": {
    "evidence": "verified",
    "fingerprint": "a27b2a016eca588577919ad43d0bf3f0c75bca94e978073165ff8e139e7d9349",
    "poster": "assets/lessons/8350223421200000.svg"
  }
};
  Object.keys(items).forEach(function (code) {
    if (Object.prototype.hasOwnProperty.call(BL.lessonReview.items, code)) throw new Error("Duplicate review code");
    BL.lessonReview.items[code] = items[code];
  });
}());

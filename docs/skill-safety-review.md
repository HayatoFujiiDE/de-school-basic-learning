# Manim / Skill 読み取り安全調査

確認日: 2026-11-04（JST）。独立検証担当による静的調査。インストール、アップグレード、Manim の実行は行っていない。

## 結論

既存の Manim Community 0.20.1 を、必要な単元の短い補助動画をローカル生成する用途に条件付きで採用できる。本人が操作する教材は既存の SVG / JavaScript が担う。Manim の採用を理由に、すべての単元を動画へ置き換える必要はない。

Skill はいずれも第三者制作であり、Manim 公式の Skill ではない。`manimce-best-practices` を場面構成・文字・アニメーションの参考、`manim` を補助資料として利用する。API と実行方法は、既存版と一致する公式 v0.20.1 資料を優先する。

実行時には既存実体を明示し、版を 0.20.1 と照合する。`--silent` または `[CLI] notify_outdated_version = False` で既定の PyPI 更新照会を無効にする。追加インストール、クラウド音声、追加プラグインは利用せず、独自に作成・レビューした場面、ローカルフォント、`Text` を用いる。レビューしていない Python 場面ファイルは読み込まない。

## 公式プロジェクトと第三者 Skill の区別

| 対象 | 公開一次情報で確認した内容 | 判断できないこと |
| --- | --- | --- |
| [Manim Community 公式 repo](https://github.com/ManimCommunity/manim) | 確認時の表示約 42.2k stars / 3.3k forks。3Blue1Brown の original Manim を起源とするコミュニティ版。 | stars は教育効果、全依存関係の安全、世界最高品質の証明ではない。3Blue1Brown 自身が CE 版を使用しているとは主張しない。 |
| [awesome-skills/manim-skill](https://github.com/awesome-skills/manim-skill) | 確認時 10 stars / 0 forks、MIT。ローカル Skill の配布元と一致。現在の upstream は 0.22.x 対象。 | この Skill 自体が世界的に高評価とは断定できない。 |
| [adithya-s-k/manim_skill](https://github.com/adithya-s-k/manim_skill) | 確認時約 1.3k stars / 102 forks、MIT。CE / GL の別 Skill を含む。 | 第三者のコミュニティ採用指標であり、公式認定や授業効果の実証ではない。 |

stars / forks は調査時点の表示値であり、固定値ではない。

公式資料: [v0.20.1 docs](https://docs.manim.community/en/v0.20.1/)、[v0.20.1 PyPI](https://pypi.org/project/manim/0.20.1/)、[v0.20.1 pyproject](https://raw.githubusercontent.com/ManimCommunity/manim/v0.20.1/pyproject.toml)。調査時の stable docs は v0.22.1 のため、手元の API と混同しない。

## ローカル Skill の来歴と検査範囲

読み取った入口:

- `~/.agents/skills/manim/SKILL.md`（local version 1.5.0）
- `~/.agents/skills/manimce-best-practices/SKILL.md`

`.agents/.skill-lock.json` から対象 2 件だけの公開 metadata を投影した。各 Skill ディレクトリに Git 管理はなく、`git rev-parse` は rc 128。

| Skill | sourceUrl / skillPath | lock の skillFolderHash | インストール metadata |
| --- | --- | --- | --- |
| manim | `https://github.com/awesome-skills/manim-skill.git` / `SKILL.md` | `e2cdc1e9f5d2f39392cdafd30b2b04b31b673d60` | 2026-05-03T16:03:42.610Z |
| manimce-best-practices | `https://github.com/adithya-s-k/manim_skill.git` / `skills/manimce-best-practices/SKILL.md` | `12f05bc0b33394aa665dea9720e32ebb9b9dda92` | 2026-05-03T16:03:19.059Z |

lock の hash は記録された来歴情報であり、署名検証や remote commit 一致の証明ではない。

ローカル全ファイルのスナップショット SHA-256（相対パスをソートし、相対パス + NUL + ファイル内容 + NUL を連結）:

- manim: `29af0c5ac152a4f81dea34517a31e5f265a77d6123753672745e3427804b71c7`（15 ファイル、12 text、4 Python）
- manimce-best-practices: `484326992619f4daa0a823656f376b25cfb95d7aa64a875c773ea513c5afe8fc`（37 ファイル、37 text、12 Python）

全 text の通信・secret/環境変数・プロセス実行・インストール・ファイル削除候補を調べ、16 Python の import / call / top-level AST を確認した。

- 機密値の取得、外部送信、ダウンロードの自動実行、破壊的なファイル操作は確認されなかった。
- 通信候補の `Fetch / Parse / Transform / Save` はフローチャートに表示する文字だった。`tokens` は attention 図の NLP トークン、`remove` は場面上の図形削除だった。これらを通信・機密・ファイル削除とは判定していない。
- `attention/scenes.py` の top-level `sys.path.insert` は同梱 helper 読み込み用。任意 Python を読み込む実行系であること自体は残る。
- `pip install manim` / `uv run --with manim` 等は版未固定で、実行すると外部パッケージ解決が起き得る。採用しない。
- `manim/references/advanced.md` の Azure 音声、voiceover、slides、physics 等は任意連携例。今回の教材では採用しない。
- 走査器の positive control は両 Skill に実在する `pip install` を検出した。全依存パッケージの脆弱性監査や、実行時の通信不存在を証明したものではない。

## 既存実行環境

`~/.local/bin/manim` は `~/.local/share/uv/tools/manim/bin/manim` への symlink。337-byte の通常の Python entry wrapper で `manim.__main__.main` を呼ぶ。

- wrapper SHA-256: `b9e87d9acf242a0f5cf1bac23379df86fa0f0b48399e4b0c2ad7f65496e43b8f`
- installed distribution: Manim 0.20.1 / INSTALLER uv / Requires-Python >=3.11。
- Python のリンク先: uv 管理 CPython 3.13.11（macOS aarch64）。
- `uv-receipt.toml` の要求は `{name="manim"}` のみ。**現在の実体は 0.20.1 だが、再インストール／更新指定は版固定されていない。**
- `direct_url.json` はなく、導入時の正確な取得 URL と外部署名の照合は未確認。
- Manim 自身の RECORD: `matched 224 / mismatched 0 / missing 0`。RECORD SHA-256: `4a523f5fcc3c316871ff4c709d5245b764c1f49564b64704ac963f7be3f4914a`。これはローカル RECORD との整合であり、外部来歴の暗号学的証明ではない。
- 主要依存 metadata: av 17.0.1 / click 8.3.3 / ManimPango 0.6.1 / moderngl 5.12.0 / numpy 2.4.4 / pillow 12.2.0 / pycairo 1.29.0 / scipy 1.17.1。公式 v0.20.1 の宣言範囲と照合した。
- plugin entry-point group は検出されず、default plugins は空。ユーザーの `~/.config/manim/manim.cfg` と対象 repo の `manim.cfg` は調査時点で存在しなかった。

### 通信とプロセス実行の実在する経路

1. 既定 `notify_outdated_version=True` の場合、レンダー後に `urllib.request.urlopen` で `https://pypi.org/pypi/manim/json` を照会する。ローカルコードと [公式 v0.20.1 render 実装](https://raw.githubusercontent.com/ManimCommunity/manim/v0.20.1/manim/cli/render/commands.py) の双方で確認した。`--silent` が対応する無効化 flag であることを [公式 CLI option](https://raw.githubusercontent.com/ManimCommunity/manim/v0.20.1/manim/cli/render/global_options.py) とローカル定義で確認した。
2. 場面ファイルは `spec.loader.exec_module(module)` で実行される。Manim が任意 Python を安全化する sandbox ではないため、自作・レビュー済み場面だけを渡す。
3. `Tex` / `MathTex` は外部コンパイラ等を subprocess で呼ぶ。今回の日本語教材はローカルフォントの `Text` と図形を使い、この追加経路を必要としない。

上記は「Skill の危険なコードが見つかった」という解釈ではなく、Skill の任意手順と Manim 本体の意図された機能を切り分けたもの。静的キーワード誤検出は AST と実コードで除外し、更新照会はローカル実装と公式同版実装の二経路で確認した。

## 適用範囲と未確認

本調査は、読み取ったスナップショットを参考に既存版でローカル教材を制作する可否の判断に限る。人による教材公開承認、学習効果の実証、全依存関係の安全認証は含まない。レンダー成功・字幕可読性・画面内配置・最終動画の数学的整合は、生成後に別途検証する。

## 第5学年追加時の適用（2026-11-04）
同じ既存Manim CE 0.20.1と検査済みSkillを使用。新規のSkill・Python/npm依存はインストールしていない。`render-media-grade5.py`も通信を監査hookで遮断し、更新通知を停止、pluginを空にし、ローカルの独自素材2本だけを有限回描画する。字幕はインストール済みフォントで作り、TeX、外部画像、録音を使わない。固定版ドキュメントの個別URLはこの環境から取得できなかったため、公式リポジトリのv0.20.1ソースと実際のローカル描画でAPIを確認した。
- https://github.com/ManimCommunity/manim/blob/v0.20.1/manim/mobject/geometry/polygram.py
- https://github.com/ManimCommunity/manim/blob/v0.20.1/manim/animation/transform.py
人気や採用数を教材の正確さの証明とせず、新しい原稿・図・動画を別担当が検証する。

## 第6学年での再使用（2026-11-04）

導入済みの同じManim Community 0.20.1とローカルSkillを再使用した。新しいSkill・パッケージ・音声APIは導入していない。stable docsの版は手元と異なるため、[公式v0.20.1の実装](https://github.com/ManimCommunity/manim/blob/v0.20.1/manim/animation/transform.py)と実レンダーでAPIを照合した。ネットワーク拒否hook、更新照会停止、plugins空、ローカル日本語フォント、領域assert、音声なし・metadata除去を維持する。2本の動画は分数の乗法と比の分け方で、独立した内容・実フレーム確認を別に行う。

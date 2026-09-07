# 置き場 OKIBA ── rikudo-ren のゲーム置き場

**rikudo-ren が Vercel にデプロイした全ブラウザゲームへのリンク集。**
17本・6ジャンル・常時稼働中。スタイリッシュに、かっこよく。

![genre](https://img.shields.io/badge/games-17-59e3ff) ![vercel](https://img.shields.io/badge/host-▲%20Vercel-ff3d81) ![essence](https://img.shields.io/badge/%E2%9C%9D%E6%9C%AC%E8%B3%AA%E2%9C%9D-%E2%88%9E-ffd60a)

## 遊び方

| | |
|---|---|
| URL | （Vercel にデプロイして使う） |
| ローカル | `npx serve` または任意の静的サーバーで `index.html` を開く |

依存ゼロ・ビルド不要の純静的サイト（HTML / CSS / JS）。
Vercel ならリポジトリを Import するだけでそのまま公開できる。

## 収録タイトル（全17本）

| # | タイトル | ジャンル | リンク |
|---|---------|---------|-------|
| 01 | KAWAGUCHI AIRSPACE | フライト | https://shigaisen-green.vercel.app |
| 02 | ✝本質✝ FIGHTERS | 格闘 | https://honkaku-online.vercel.app |
| 03 | 桐葉祭の✝本質✝ | ノベル | https://novel-game-plum.vercel.app |
| 04 | メイク10バトル | 数字・頭脳 | https://make10-sigma.vercel.app |
| 05 | 嘘つき村RPG | RPG | https://liar-one.vercel.app |
| 06 | 無限転生 ETERNAL REBIRTH | RPG | https://idle-lac.vercel.app |
| 07 | 数速バトル | 数字・頭脳 | https://suusokubattle.vercel.app |
| 08 | 早撃ちパニック 4K+ | アクション | https://hayauchi-theta.vercel.app |
| 09 | DECIO BEAT | アクション | https://10s-ten.vercel.app |
| 10 | 割り箸 | アクション | https://waribashi.vercel.app |
| 11 | 数感覚ジェネレーター | 数字・頭脳 | https://prime-five-beta.vercel.app |
| 12 | シュレディンガーの恋 | ノベル | https://sakura-khaki-sigma.vercel.app |
| 13 | 截花論 | ノベル | https://sekkaron-64lz.vercel.app |
| 14 | ✝本質✝ FIGHTERS 2 | 格闘 | https://honkaku2.vercel.app |
| 15 | 数速バトル RE | 数字・頭脳 | https://suusokure.vercel.app |
| 16 | 数速バトル（旧環境） | 数字・頭脳 | https://math-battle-snowy.vercel.app |
| 17 | ✝本質✝ FIGHTERS（別環境） | 格闘 | https://honkaku-copy.vercel.app |

## 新しいゲームを追加するには

`assets/app.js` の `GAMES` 配列に1項目足すだけ。

```js
{
  id: 'new-game',
  title: 'タイトル',
  subtitle: 'サブタイトル',
  desc: 'ひとこと説明。',
  genre: 'action',            // fight / flight / novel / mind / rpg / action
  url:  'https://xxx.vercel.app',
  repo: 'https://github.com/Rikudo-ren/xxx',
  date: '2026-XX-XX',
  color: '#00e5ff',           // そのゲームのテーマ色
  img:  'xxx.jpg',            // assets/img/ に置いたサムネイル（無ければ自動でカートリッジ風アート）
},
```

ジャンルの追加は `GENRES` に1行追加。

## 仕様・小ネタ

- **BIOS 起動画面** … 何かキーを押す／クリックで入場（コイン音つき）
- **8bit サウンド** … Web Audio でシンセ。右上 `SND` または `M` キーで消音
- **ランダム起動** … 17本から抽選で即起動
- **フィルタ・サーチ・並び替え** … ジャンルチップ・検索窓・新着順ソート
- **3D チルト** … カードがマウスを追いかけて傾く
- **コナミコマンド**（↑↑↓↓←→←→BA）… ✝本質✝モード
- 走査線・流れ星・グリッドフロアは `#fx` キャンバスの描画

## クレジット

- 全ゲームの制作： [Rikudo-ren](https://github.com/Rikudo-ren)
- ホスティング： ▲ Vercel

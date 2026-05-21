# Git学習メモ

## 基本の3点セット（毎回使うコマンド）

- `git status` : 現在のファイルの変更状況を確認する
- `git add .` : 変更したファイルをステージング（セーブ準備）する
- `git commit -m "メッセージ"` : ローカルリポジトリにセーブする
- `git push origin main` : GitHubにデータを送信する

## トラブルシューティング

- `fatal: not a git repository...` が出たら：
  Gitの初期化ができていないか、フォルダの場所がズレている。`git init` を実行するか、正しいフォルダを開き直す。

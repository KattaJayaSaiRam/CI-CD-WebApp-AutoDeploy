#!/bin/bash
set -e

SOURCE_DIR="$(pwd)"
BACKUP_DIR="$SOURCE_DIR/backups"
BACKUP_FILE="$(date +'%Y-%m-%d_%H-%M-%S')_quizapp_backup.tar.gz"

mkdir -p "$BACKUP_DIR"
echo "📦 Creating backup at: $BACKUP_DIR/$BACKUP_FILE"

tar --exclude=".git" --exclude=".github" -czf "$BACKUP_DIR/$BACKUP_FILE" -C "$SOURCE_DIR" .

if [ $? -eq 0 ]; then
    echo "Backup created successfully."
else
    echo "Backup failed!"
    exit 1
fi







































                                                                                        [ Read 0 lines ]
^G Help          ^O Write Out     ^F Where Is      ^K Cut           ^T Execute       ^C Location      M-U Undo         M-A Set Mark     M-] To Bracket   M-B Previous     ◂ Back
^X Exit          ^R Read File     ^\ Replace       ^U Paste         ^J Justify       ^/ Go To Line    M-E Redo         M-6 Copy         ^B Where Was     M-F Next         ▸ Forward

#!/bin/bash
# backup.sh — Creates a timestamped backup archive of the quiz app

# === CONFIGURATION ===
SOURCE_DIR="$(pwd)"                # Current directory (repo root)
BACKUP_DIR="$SOURCE_DIR/backups"   # Backup folder inside repo
TIMESTAMP=$(date +"%Y%m%d_%H%M%S") # e.g., 20250916_001500
BACKUP_FILE="quizapp_backup_$TIMESTAMP.tar.gz"

# === CREATE BACKUP DIRECTORY IF NOT EXISTS ===
mkdir -p "$BACKUP_DIR"

# === CREATE COMPRESSED BACKUP ===
tar -czf "$BACKUP_DIR/$BACKUP_FILE" -C "$SOURCE_DIR" .

# === VERIFY BACKUP ===
if [ $? -eq 0 ]; then
    echo "Backup created: $BACKUP_DIR/$BACKUP_FILE"
else
    echo "Backup failed!"
    exit 1
fi













































                                                                                        [ Read 0 lines ]
^G Help          ^O Write Out     ^F Where Is      ^K Cut           ^T Execute       ^C Location      M-U Undo         M-A Set Mark     M-] To Bracket   M-B Previous     ◂ Back
^X Exit          ^R Read File     ^\ Replace       ^U Paste         ^J Justify       ^/ Go To Line    M-E Redo         M-6 Copy         ^B Where Was     M-F Next         ▸ Forward

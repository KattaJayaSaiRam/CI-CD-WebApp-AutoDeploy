#!/bin/bash
set -euo pipefail

# === CONFIGURATION ===
SOURCE_DIR="$(pwd)"                         # Root of the repo
BACKUP_DIR="$SOURCE_DIR/backups"           # Backup folder
TIMESTAMP="$(date +'%Y-%m-%d_%H-%M-%S')"   # Timestamp for uniqueness
BACKUP_FILE="${TIMESTAMP}_quizapp_backup.tar.gz"

# === CREATE BACKUP DIRECTORY ===
mkdir -p "$BACKUP_DIR"
echo "Creating backup at: $BACKUP_DIR/$BACKUP_FILE"

# === CREATE COMPRESSED BACKUP ===
tar --exclude=".git" --exclude=".github" -czf "$BACKUP_DIR/$BACKUP_FILE" -C "$SOURCE_DIR" .

# === VERIFY BACKUP ===
if [ -f "$BACKUP_DIR/$BACKUP_FILE" ]; then
    echo "Backup created successfully."
else
    echo "Backup failed!"
    exit 1
fi

#!/bin/bash

output_dir="output"

# Create output directory if it doesn't exist
mkdir -p "$output_dir"

for dir in */*; do
  if [ -d "$dir" ]; then
    person=$(basename "$(dirname "$dir")")
    date=$(basename "$dir")
    
    for file in "$dir"/*.md; do
      if [ -f "$file" ]; then
        filename=$(basename "$file" .md)
        
        dest_dir="$output_dir/$person/$date"
        mkdir -p "$dest_dir"
        
        cp "$file" "$dest_dir/$filename.md"
      fi
    done
  fi
done
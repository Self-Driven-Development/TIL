#!/bin/bash

output_dir="output"

folders=$(ls -d */)

mkdir -p "$output_dir"

cp "README.md" output/index.md

for folder in $folders; do
  folder_name=$(basename "$folder")
  cp -R "$folder_name" output/

  # cd "$output_dir/$folder_name"
done
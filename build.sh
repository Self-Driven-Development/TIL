#!/bin/bash

output_dir="output"

folders=$(ls -d */)

mkdir -p "$output_dir"

for folder in $folders; do
  folder_name=$(basename "$folder")
  cp -R "$folder_name" output/
done
#!/bin/bash

echo "Post Title: "
read title

ptitle=${title// /-}   # convert spaces in title to hyphens
plc=`echo "$ptitle" | tr '[:upper:]' '[:lower:]'`   # convert title to lowercase
pdate=`date +%Y-%m-%d` 	# create date as Year-Month-Date
filename=content/posts/$pdate-$plc.md 	# location to create the new file as year-month-day-title.md
touch $filename 	# create the new blank post

echo "---
title: ${title}
---

This is my blog post
" > $filename 	# fill out YAML Front Matter and insert into our new file

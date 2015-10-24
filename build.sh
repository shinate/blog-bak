#!/usr/bin/env bash
gulp
jekyll build
git add .
git commit -m "new post"
git push origin gh-pages
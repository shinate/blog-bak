#!/usr/bin/env bash

comments=$1
if [ -z $1 ];then
    comments = "new post"
fi

gulp
jekyll build
git add .
git commit -m "${comments}"
git push origin gh-pages
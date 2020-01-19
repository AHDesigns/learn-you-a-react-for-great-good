#!/bin/bash

echo $1
cp -r ./templates/simple "./src/$1"

for f in src/$1/*.js
do
  sed -i.bak "s/TITLE/$1/g" $f
done

rm src/**/*.bak

#!/usr/bin/env bash
cd modules;
for folder in */ ; do
cd ${folder};
echo "install dependencies and run tests for: $folder ";
npm install;
npm test;
cd ..
done

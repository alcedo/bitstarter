#!/bin/bash

git add . -A
git commit -m "auto commit and deploy" 
git push heroku master


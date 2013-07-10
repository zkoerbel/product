#!/bin/bash

date=$(date +%y-%m-%d)

mkdir DatabaseScripts/$date

filename=DatabaseScripts/$date/$1.out

echo "Enter ssh password"
ssh zkoerbel@web373.webfaction.com

echo "Enter mysql password"
mysql -u product_admin -p --verbose < $1 > $filename

mv $1  DatabaseScripts/$date/$1
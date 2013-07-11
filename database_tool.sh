#!/bin/bash

date=$(date +%y-%m-%d)

mkdir DatabaseScripts/$date

filename=DatabaseScripts/$date/$1.out

mysql -h web373.webfaction.com -u product_admin -p --verbose < $1 > $filename

mv $1  DatabaseScripts/$date/$1
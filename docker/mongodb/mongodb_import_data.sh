#!/bin/bash

RET=1
while [[ RET -ne 0 ]]; do
    echo "=> Waiting for confirmation of MongoDB service startup"
    sleep 5
    mongo admin --eval "help" >/dev/null 2>&1
    RET=$?
done

echo "=> Import DATA user '${MONGODB_USER}' with password '${MONGODB_PASS}' in MongoDB '${MONGODB_DATABASE}'"

mongo $MONGODB_DATABASE -u $MONGODB_USER -p $MONGODB_PASS --eval "db.getCollection('neos').remove({});"
echo "=> Collection neos removed"

mongoimport --db $MONGODB_DATABASE --collection neos --username $MONGODB_USER --password "$MONGODB_PASS" --type csv --headerline --file /Praemien_CH.csv
echo "=> Praemien_CH.csv imported"


#!/bin/bash

RET=1
while [[ RET -ne 0 ]]; do
    echo "=> Waiting for confirmation of MongoDB service startup"
    sleep 5
    mongo admin --eval "help" >/dev/null 2>&1
    RET=$?
done

echo "=> Import DATA user '${MONGODB_USER}' with password '${MONGODB_PASS}' in MongoDB '${MONGODB_DATABASE}'"

echo "=> remove Collection neo_praemien"
mongo $MONGODB_DATABASE -u $MONGODB_USER -p $MONGODB_PASS --eval "db.getCollection('neo_praemien').remove({});"
echo "=> Collection neo_praemien removed"

echo "=> import Praemien_CH.csv"
mongoimport --db $MONGODB_DATABASE --collection neo_praemien --username $MONGODB_USER --password "$MONGODB_PASS" --type csv --headerline --file /Praemien_CH.csv
echo "=> Praemien_CH.csv imported"

echo "=> remove Collection neo_wertebereiche"
mongo $MONGODB_DATABASE -u $MONGODB_USER -p $MONGODB_PASS --eval "db.getCollection('neo_wertebereiche').remove({});"
echo "=> Collection neo_wertebereiche removed"

echo "=> import Wertebereiche_CH.csv"
mongoimport --db $MONGODB_DATABASE --collection neo_wertebereiche --username $MONGODB_USER --password "$MONGODB_PASS" --type csv --headerline --file /Wertebereiche_CH.csv
echo "=> Wertebereiche_CH.csv imported"

echo "=> remove Collection neo_regionen"
mongo $MONGODB_DATABASE -u $MONGODB_USER -p $MONGODB_PASS --eval "db.getCollection('neo_regionen').remove({});"
echo "=> Collection neo_regionen removed"

echo "=> import Regionen_CH.csv"
mongoimport --db $MONGODB_DATABASE --collection neo_regionen --username $MONGODB_USER --password "$MONGODB_PASS" --type csv --headerline --file /Regionen_CH.csv
echo "=> Regionen_CH.csv imported"

echo "=> remove Collection neo_versicherungen"
mongo $MONGODB_DATABASE -u $MONGODB_USER -p $MONGODB_PASS --eval "db.getCollection('neo_versicherungen').remove({});"
echo "=> Collection neo_versicherungen removed"

echo "=> import Versicherungen_CH.csv"
mongoimport --db $MONGODB_DATABASE --collection neo_versicherungen --username $MONGODB_USER --password "$MONGODB_PASS" --type csv --headerline --file /Versicherungen_CH.csv
echo "=> Versicherungen_CH.csv imported"

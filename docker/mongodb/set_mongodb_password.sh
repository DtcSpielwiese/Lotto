#!/bin/bash

ADMIN_USER="admin"
ADMIN_PASS="admin"

USER=${MONGODB_USER:-"admin"}
DATABASE=${MONGODB_DATABASE:-"admin"}
PASS=${MONGODB_PASS:-$(pwgen -s 12 1)}
_word=$( [ ${MONGODB_PASS} ] && echo "preset" || echo "random" )

RET=1
while [[ RET -ne 0 ]]; do
    echo "=> Waiting for confirmation of MongoDB service startup"
    sleep 5
    mongo admin --eval "help" >/dev/null 2>&1
    RET=$?
done

echo "=> Creating an root-user '${ADMIN_USER}' user with password '${ADMIN_PASS}' in MongoDB"
mongo admin --eval "db.createUser({user: '$ADMIN_USER', pwd: '$ADMIN_PASS', roles:[{role:'root',db:'admin'}]});"

if [ "$DATABASE" != "admin" ]; then
    echo "=> Creating an dbOwner-user '${USER}' user with a ${_word} password '${PASS}' in MongoDB"
    mongo admin -u $ADMIN_USER -p $ADMIN_PASS << EOF
use $DATABASE
db.createDB.save( {status:'OK'} )
db.createUser({user: '$USER', pwd: '$PASS', roles:[{role:'dbOwner',db:'$DATABASE'}]})

EOF
fi

echo "=> Done!"


echo "========================================================================"
echo "You can now connect to this MongoDB server using:"
echo ""
echo "    mongo $DATABASE -u $USER -p $PASS --host <host> --port <port>"
echo "    mongo admin -u $ADMIN_USER -p $ADMIN_PASS --host <host> --port <port>"
echo ""
echo "Please remember to change the above password as soon as possible!"
echo "========================================================================"
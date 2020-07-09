#!/usr/bin/env bash
for file in /code/js/app.*.js;
do
  if [ ! -f $file.tmpl.js ]; then
    cp $file $file.tmpl.js
  fi
  envsubst \$WORKING_API_URL,\$CRASHING_API_URL,\$HOSTNAME < $file.tmpl.js > $file
done
echo "Starting Nginx"
nginx -g 'daemon off;'
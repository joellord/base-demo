#!/usr/bin/env bash
for file in /usr/share/nginx/html/js/app.*.js;
do
  if [ ! -f $file.tmpl.js ]; then
    cp $file $file.tmpl.js
  fi
  envsubst '$WORKING_API_URL' < $file.tmpl.js > $file
  envsubst '$CRASHING_API_URL' < $file.tmpl.js > $file
done
echo "Starting Nginx"
nginx -g 'daemon off;'
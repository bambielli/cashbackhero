# Meant to be run on heroku via procfile. It deletes the client code after it is built, to save memory on dyno
# In the future, maybe we build a docker container during build step
cd client &&
yarn install &&
yarn run build &&
mv build/ ../server/build/ &&
cd ../server &&
rm -rf client &&
db-migrate up &&
cd .. &&
yarn start
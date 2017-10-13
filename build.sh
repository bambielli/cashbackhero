# Meant to be run on heroku via procfile. It deletes the client code after it is built, to save memory on dyno
# In the future, maybe we build a docker container during build step to copy over only the files needed
cd client &&
yarn install && # installing client deps in the client folder
yarn run build &&
mv build/ ../build/ &&
cd .. && # back in the root
rm -rf client &&
db-migrate up &&
yarn start
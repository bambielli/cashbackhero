# This is run on heroku after the server has been built
cd client &&
yarn install --production=false && # installing client deps in the client folder
yarn run build &&
mv build/ ../build/
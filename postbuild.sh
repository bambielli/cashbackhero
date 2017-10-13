# This is run on heroku after the server has been built
cd client &&
echo "Installing all dependencies for React App (including dev dependencies)" &&
yarn install --production=false && # installing client deps in the client folder
yarn run build &&
mv build/ ../build/ &&
echo "removing node modules" &&
rm -rf node_modules
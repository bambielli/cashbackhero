cd client &&
yarn install && # installing client deps in the client folder
yarn run build &&
mv build/ ../build/ &&
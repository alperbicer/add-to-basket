set -e
yarn build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:alperbicer/add-to-basket.git main:gh-pages
cd -
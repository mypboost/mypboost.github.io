git checkout master

if [[ $(git rev-parse --symbolic-full-name --abbrev-ref HEAD) = master ]]; then
  npm run build
fi

if [ -d "build" ]; then
  git branch -D deploy
  git checkout -b deploy 
  git remote remove deploy
  git remote add deploy git@github.com:mypboost/mypboost.github.io.git

  if [[ $(git rev-parse --symbolic-full-name --abbrev-ref HEAD) = deploy ]]; then
    find . ! \( -name "build" -o -name ".git" -o -name ".gitignore" -o -name "node_modules" -o -name "." -o -name ".." \) -maxdepth 1 -exec rm -rf {} +
    mv build/* .
    rm -rf build
    git add .
    git commit -m "build"
    git push deploy deploy:master -f
    git checkout master 
    git branch -D deploy
  fi

fi



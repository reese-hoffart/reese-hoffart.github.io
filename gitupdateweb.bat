git add --all
set /P id=Commit message:
git commit -m "%id%"
git push -u origin master
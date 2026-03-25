@echo off
echo Updating the site for SobraniE...
git add .
git commit -m "Update prices and stock"
git push origin master
echo Done! Please wait 1-2 minutes for the link to refresh.
pause

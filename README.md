Spin up a quick proxy on Heroku. Make sure you have heroku and git on your computer:

1. Download these files into a directory
1. Change 'some-target.com' to your target domain index.js
1. $ git init
1. $ git add .
1. $ git commit -m "And away we go..."
1. $ heroku create
1. $ git push heroku master
1. $ heroku ps:scale web=1
1. $ heroku open

If you have trouble with Heroku, [consult their node.js getting started guide](https://devcenter.heroku.com/articles/nodejs).
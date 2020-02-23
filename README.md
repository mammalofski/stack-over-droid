# stack-over-droid
A minimal website keeping track of the 10 newest and the 10 most voted Android-related questions.

![](/stackoverdroid/static/images/website-overview.png)
 
With this website, you can monitor all your favorite android related questions in Stackoverflow, see the answers and the discussions and comments, which ones are scored the most and more... with a cute minimal dark UI all in one simple look!

You can also filter the questions by date, sort them, search with tags, change the page size and navigate between other pages as well with the `more options` feature.

Read `the document.pdf` in the project for more info!

### installation guide:

```
$ git clone git@github.com:mammalofski/stack-over-droid.git
$ cd stack-over-droid/
$ sudo npm install
$ sudo pip3 install -r requirements.txt  # or you can workon you virtualenv and pip3 install -r requirements.txt
$ cd stackoverdroid/
$ python3 manage.py migrate
$ python3 manage.py runserver
```
Now open `127.0.0.1:8000` in your browser.
Enjoy :)

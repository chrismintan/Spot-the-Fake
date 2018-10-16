# Spot the Fake
[**Spot the Fake**](https://spot-the-fake.herokuapp.com/) is a casual drinking game developed for a [project assignment](https://github.com/wdi-sg/wdi-16-collosal-banana/tree/master/project-2) at General Assembly's Web Development Immersive (WDI) Course.

Fake news itself is nothing new, but with the advent of new technology, the internet and social media has made it cheap and easy to perpetuate. While personally I do enjoy reading the ocassional satire and clickbaits, the problem comes when one is unable to decipher fact from fiction. Fake news is dreamt up and put out to resemble credible journalism to attract maximum attention and manipulate its readers. These so called news stories can be used to push polotical agendas, spread propaganda and deceive its readers. Governments are already making a stand against fake news.

But how difficult is it to tell apart fact from fiction? I invite you to try it out for yourself [here](https://spot-the-fake.herokuapp.com/)! **Spot the Fake** is a simple game in which you are given two articles with their pictures and headlines with the goal being to spot the fake one.

## The Game
On clicking start, two articles would be appended on screen. The goal is to spot the fake one. After clicking, the article will change color according to whether you managed to spot the fake article. 

### Demo
You can see how the game works below:

![Demo Gif](https://github.com/chrismintan/Spot-the-Fake/blob/master/public/resized-demo.gif)

[Link to Game](https://spot-the-fake.herokuapp.com/) 

## Application Development Process
### Built With
* [NodeJS](http://nodejs.org) - Server-side Javascript
* [Express](https://expressjs.com/) - Web Framework for Node.js
* [React](https://reactjs.org/) - Templating engine
* [Postgresql](https://www.postgresql.org/) - Object-relational database system

### How It Works
Articles are taken via the Reddit API. A random satire article is taken from the subreddit r/TheOnion which only allows posts with articles from Onion News (and its satirical sister sites). Another random article is taken from the subreddit r/nottheonion which mainly focuses on **true stories** that are so ridiculous that they are often thought to be fake news.

If the user playing has an account their score will be recorded and updated accordingly. To be able to keep track of which real articles are more difficult to decipher, score is kept for the articles as well. Everyone is able to view the articles in the database.

![screenshot](https://github.com/chrismintan/Spot-the-Fake/blob/master/public/screenshot.png)

The articles are sorted with the most deceptive ones on top. You may also sort to only see fake / real articles

## Future Development
Currently the fake articles pulled are purely satire. Fake news in this form is not harmful as it doesn't aim to deceive the reader. Fake news become a problem when it uses it's deceptive nature with malicious intent.  

## Author(s)
- Christopher Tan

This is a completely open source project! Feel free to submit pull requests or leave comments if you would like to give any feedback or encounter any bugs.

## How To Use
To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/chrismintan/Spot-the-Fake.git

# Go into the repository
$ cd Spot-the-Fake

# Install dependencies
$ npm install

# Set up the tables
$ psql -d onion -f tables.sql

# Initiate the app via node
$ node index.js
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Acknowledgements
This project is purely educational and experimental. It would not have been possible without the following sources:

Images
- Vintage Concrete by Brandi Leath [here](https://www.toptal.com/designers/subtlepatterns/vintage-concrete/)
- Pumpkin Thinking Favicon by piter@techflourish.com [here](https://techflourish.com/categories/pumpkin-emoji-clipart.html)
- Grey Background by background-tiles [here](https://background-tiles.com/overview/grey.php)

Reddit
- Big thanks to all the Reddit moderators of both subreddits r/TheOnion & r/nottheonion. Without you ensuring the quality and accuracy of articles posted there this app would not work. 

## License
MIT





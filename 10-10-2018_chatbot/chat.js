'use strict';

/*
 * Action: a class of actions linked with a keywords
 * @params {String} keyword, {Function} response
 */
var Action = function Action(keyword,response) {
  this.keyword = keyword.trim();
  if(this.keyword === '') {
    this.keyword = 'default';
  }

  if(typeof response !== 'function') {
    response = function () {return 'An error occured (function given is not a function)';}
  }
  this.response = response;
}

/*
 * Bot: a bot class designed for chatbot
 * @params {Array} keywords, {Array} actions, {String} name, {String} description
 */
var Bot = function Bot(actions,name,description){
  this.actions = actions;
  this.name = name;
  this.description = description;
}

/*
 * Chat: a chat class designed for chatbot
 */
var Chat = function Chat(){
  this.bots = [];
  this.chatPeople = document.getElementsByClassName("people-wrapper")[0];
  this.chatBody = document.getElementsByClassName("chat-content")[0];
  this.textbar = document.getElementsByClassName("chat-textbar-text")[0];
  this.textbarButton = document.getElementsByClassName("chat-textbar-send")[0];
}

/*
 * Inits chat with bots its bots
 * @params {Bot} bots
 */
Chat.prototype.init = function(bots) {
  this.createSendMessageListeners();
  bots.forEach(function(bot){
    this.addBot(bot);
  }.bind(this));
}

/*
 * Creates event listeners to be able to send messages in the chat
  */
Chat.prototype.createSendMessageListeners = function() {
  this.textbar.addEventListener('keypress',function(e) {
    if (e.keyCode == 13) {
      this.sendMessage();
    }
  }.bind(this));
  this.textbarButton.addEventListener('click',function(e) {
    this.sendMessage();
  }.bind(this));
}

/*
 * Adds a bot to the chat
 * @params {Bot} bot
 */
Chat.prototype.addBot = function (bot) {
  this.bots.push(bot);
  this.renderBot(bot);
}

/*
 * Renders a bot in html preview
 * @params {Bot} bot
 */
Chat.prototype.renderBot = function(bot){
  var messageToInsert = '<div class="people"><div class="people-avatar material-icons mdl-badge mdl-badge--overlap" data-badge="1">face</div><div class="people-name">'
  + bot.name
  + '</div><div class="people-preview">'
  + bot.description
  +'</div></div>';

  this.chatPeople.innerHTML += messageToInsert;
}

/*
 * Gets message text in html and sends it in the chat
 */
Chat.prototype.sendMessage = function() {
  var messageText = this.textbar.value.trim();

  if(messageText === '') {
    return 'Empty message';
  }

  this.textbar.value = '';
  this.displaySentMessage(messageText);
  this.checkKeywords(messageText);
}

/*
 * Checks if text given contains a bot keywords and send response if yes
 * @param {String} text
 */
Chat.prototype.checkKeywords =  function(text) {
  var commandArray = text.toLowerCase().split(',');

  commandArray.forEach(function(command){
    command = command.split(' ');
    this.bots.forEach(function(bot){
      bot.actions.forEach(function(action){
          if(command[0] == action.keyword){
            this.displayReceivedMessage(action.response(command));
          }
      }.bind(this));
    }.bind(this));
  }.bind(this));
}


/*
 * Displays text given as a sended message in the chat
 * @params {String} messageText
 */
Chat.prototype.displaySentMessage = function(messageText) {
  var messageToInsert = '<div class="sended message"><div class="message-text">'
  + messageText
  + '</div> <div class="message-date">'
  + new Date()
  + '</div></div>';

  this.chatBody.innerHTML += messageToInsert;
  this.chatBody.scrollTop = this.chatBody.scrollHeight;
}


/*
 * Displays text given as a received message in the chat
 * @params {String} messageText
 */
Chat.prototype.displayReceivedMessage = function(messageText){
  if(messageText === '') {
    return;
  }

  var messageToInsert = '<div class="received message"><div class="message-text">'
  + messageText
  + '</div> <div class="message-date">'
  + new Date()
  + '</div></div>';

  this.chatBody.innerHTML += messageToInsert;
  this.chatBody.scrollTop = this.chatBody.scrollHeight;
}

function pongAction(command) {
  return 'Pong';
}

function pingAction(command) {
  return 'Ping';
}

function howAreYouAction(command) {
  return 'How are you?';
}

function greatAction(command) {
  return 'great!';
}

function badAction(command) {
  return 'ohhh... well, too bad for you.';
}

function mapAction(command) {
  if (command.indexOf('map'); === 0) {
    command.splice(index, 1);
  }
  var searchValue = command.join('+');

  if(searchValue == ''){
    searchValue = 'paris';
  }

  return '<iframe  width="600"  height="450"  frameborder="0" style="border:0"  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAhNpTwv1N8v5mSFAANO-6xLFdOFCAy2fs&q='
  + searchValue
  +'" allowfullscreen></iframe>'
}

function youtubeAction(command) {
  return 'En cours d`implémentation.'
}

var chat = new Chat();
var bots = [
  new Bot(
    [
      new Action('ping',pongAction),
      new Action('pong',pingAction)
    ],
    'pongBot',
    'ping pong'
  ),
  new Bot(
    [
      new Action('hello',howAreYouAction),
      new Action('fine',greatAction),
      new Action('sad',badAction)

    ],
    'helloBot',
    'says how are you'
  ),
  new Bot(
    [
      new Action('map',mapAction),
      new Action('youtube',youtubeAction)
    ],
    'googleBot',
    'Uses google api'
  )
]

chat.init(bots);

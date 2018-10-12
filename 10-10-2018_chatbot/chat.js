'use strict';

var Bot = function Bot(keywords,actions,name,description){
	this.keywords = keywords;
	this.name = name;
	this.description = description;
	this.actions = actions;
}

var Chat = function Chat(){
	this.bots = [];
	this.chatPeople = document.getElementsByClassName("people-wrapper")[0];
	this.chatBody = document.getElementsByClassName("chat-content")[0];
	this.textbar = document.getElementsByClassName("chat-textbar-text")[0];
	this.textbarButton = document.getElementsByClassName("chat-textbar-send")[0];
}

/*

*/
Chat.prototype.init = function(bots) {
	this.createSendMessageObservers();
	bots.forEach(function(bot){
		this.addBot(bot['keywords'],bot['actions'],bot['name'],bot['description']);
		this.renderBot(bot['name'],bot['description']);
	}.bind(this));
}

/*

*/
Chat.prototype.createSendMessageObservers = function() {
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

*/
Chat.prototype.addBot = function (keywords,actions,name = 'Simple Bot',description = 'A simple bot.') {


	for(var i = 0; i<keywords.length; i++) {
		keywords[i] = keywords[i].trim();
		if(keywords[i].trim() === '') {
			return 'empty keyword'; // a tester
		}
	}

	for(var i = 0; i < actions.length; i++) {
		if(typeof actions[i] !== 'function') {
			return 'wrong action'; // a tester
		}
	}

	this.bots.push(
		new Bot(keywords,actions,name,description)
	);
}

/*

*/
Chat.prototype.renderBot = function(name,description){
		var messageToInsert = '<div class="people"><div class="people-avatar material-icons mdl-badge mdl-badge--overlap" data-badge="1">face</div><div class="people-name">'
				+ name
				+ '</div><div class="people-preview">'
				+ description
			  +'</div></div>';
		this.chatPeople.innerHTML += messageToInsert;
}

/*

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

*/
Chat.prototype.checkKeywords =  function(text) {
	text = text.toLowerCase();
	var keywordsArray = text.split(',');

	keywordsArray.forEach(function(keywords){
		this.bots.forEach(function(bot){
			bot.keywords.forEach(function(botKey,index){
				var multipleWords = keywords.split(' ');
				multipleWords.forEach(function(word){
					if(word == botKey){
						this.displayReceivedMessage(bot.actions[index](multipleWords));
					}
				}.bind(this));
			}.bind(this));
		}.bind(this));
	}.bind(this));
}


/*

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

*/
Chat.prototype.displayReceivedMessage = function(messageText){
	if(messageText === '') {
		console.log('vide');
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

function pongAction(multipleWords) {
		return 'Pong';
}

function pingAction(multipleWords) {
		return 'Ping';
}

function howAreYouAction(multipleWords) {
	return 'How are you?';
}

function greatAction(multipleWords) {
	return 'great!';
}

function badAction(multipleWords) {
	return 'ohhh... well, too bad for you.';
}

function mapAction(multipleWords) {
	var index = multipleWords.indexOf('map');
  if (index > -1) {
     multipleWords.splice(index, 1);
  }
	var searchValue = multipleWords.join('+');

	if(searchValue == ''){
		searchValue = 'paris';
	}

	return '<iframe  width="600"  height="450"  frameborder="0" style="border:0"  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAhNpTwv1N8v5mSFAANO-6xLFdOFCAy2fs&q='
    + searchValue
		+'" allowfullscreen></iframe>'
}

function youtubeAction(multipleWords) {
	return 'En cours d`implémentation.'
}

var chat = new Chat();
var bots = [
	{
		keywords:
			[
				'ping',
				'pong'
			],
		actions:
			[
				pongAction,
				pingAction
			],
		name: 'pongBot',
		description: 'ping pong'
	},
	{
		keywords:
			[
				'hello',
				'fine',
				'sad'
			],
		actions:
			[
				howAreYouAction,
				greatAction,
				badAction
			],
		name: 'helloBot',
		description: 'says how are you'
	},
	{
		keywords:
			[
				'map',
				'youtube'
			],
		actions:
			[
				mapAction,
				youtubeAction,
			],
		name: 'googleBot',
		description: 'Uses google api'
	}
]

chat.init(bots);

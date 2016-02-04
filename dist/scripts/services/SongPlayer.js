(function() {
	function SongPlayer(Fixtures) {
		var SongPlayer = {};

		// this gives us access to the album;
		var currentAlbum = Fixtures.getAlbum(); // fixtures service can get used throughout the app 
		// have access to Fixtures in all files...
		// controller only consumes services

		/**
			@desc Buzz object audio file 
			@type {object}
		*/
		var currentBuzzObject = null;

		/**
			@function setSong 
			@desc Stops currently playing song and loads new audio file as currentBuzzObject
			@param {object} song
		*/
		var setSong = function(song) { // this is a private function
			if (currentBuzzObject) {
				currentBuzzObject.stop();
				SongPlayer.currentSong.playing = null;
			}

			currentBuzzObject = new buzz.sound(song.audioUrl, {
				formats: ['mp3'],
				preload: true
			});

			SongPlayer.currentSong = song;
		}

		// private function that will stop the current song
		var stopSong = function(song) {
			console.log('inside the stop song function');
			currentBuzzObject.stop();
			song.playing = null;
		}

		/**
			@function playSong
			@desc Plays the current song and sets playing to true
			@param {object} song
		*/

		var playSong = function(song) {
			currentBuzzObject.play();
			song.playing = true;
		}

		// gets the index number of the current song 
		var getSongIndex = function(song) {
			return currentAlbum.songs.indexOf(song);
		};

		SongPlayer.currentSong = null;

	  SongPlayer.play = function(song) {
	  	song = song || SongPlayer.currentSong;
	  	if (SongPlayer.currentSong !== song) {
	  		
	  		setSong(song);
	  		playSong(song);
	  	} else if (SongPlayer.currentSong === song) {
	  		if (currentBuzzObject.isPaused()) {
	  			playSong(song);
	  		}
	  	}
    
   	};

   	SongPlayer.pause = function(song) {
   		song = song || SongPlayer.currentSong;
   		currentBuzzObject.pause();
   		song.playing = false;
   	};

   	// gets the index of the currently playing song and then subtracts one 
   	// if it is the first song then music stops 
   	SongPlayer.previous = function () {
   		var currentSongIndex = getSongIndex(SongPlayer.currentSong);
   		currentSongIndex--;
   		if ( currentSongIndex < 0 ) {
   			console.log('in if of previous')
   			stopSong(song);
   			// currentBuzzObject.stop();
   			// SongPlayer.currentSong.playing = null;
   		} else {
   			var song = currentAlbum.songs[currentSongIndex];
   			setSong(song);
   			playSong(song);
   		}
   	};

   	SongPlayer.next  = function (song) {
   		console.log('in the next function')
   		var currentSongIndex = getSongIndex(SongPlayer.currentSong);
   		currentSongIndex++;
   		if ( currentSongIndex > currentAlbum.songs.length ) {
   			stopSong(song);
   			// currentBuzzObject.stop();
   			// SongPlayer.currentSong.playing = null;
   		} else {
   			var song = currentAlbum.songs[currentSongIndex];
   			setSong(song);
   			playSong(song);
   		}
   	};

		return SongPlayer;
	}

	angular
		.module('blocJams')
		.factory('SongPlayer', SongPlayer);
})();
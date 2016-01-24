(function() {
	function SongPlayer(Fixtures) {
		var SongPlayer = {};

		// this gives us access to the album;
		var currentAlbum = Fixtures.getAlbum();
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
   			currentBuzzObject.stop();
   			SongPlayer.currentSong.playing = null;
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
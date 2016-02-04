(function(){
	function PlayerBarCtrl(Fixtures, SongPlayer) {
		this.albumData = Fixtures.getAlbum(); // Fixture is hard coded sample data
		this.songPlayer = SongPlayer;
	}

	angular
		.module('blocJams')
		.controller('PlayerBarCtrl', ['Fixtures', 'SongPlayer', PlayerBarCtrl); // last item that gets put into this array is the name of the function (like a callbackfunction)
		// WHY - why does playerbarctrl get passed in twice ? 
})();
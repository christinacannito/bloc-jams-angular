(function(){
	function AlbumCtrl(Fixtures, SongPlayer) { // songPlayer gets added seperately from Fixtures? 
		this.albumData = Fixtures.getAlbum();
		this.songPlayer = SongPlayer;
	}

	angular
		.module('blocJams')
		.controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();
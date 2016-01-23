(function(){
	function AlbumCtrl(Fixtures) {
		this.albumData = Fixtures.getAlbum();
		console.log('albumData: ', this.albumData);
	}

	angular
		.module('blocJams')
		.controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();
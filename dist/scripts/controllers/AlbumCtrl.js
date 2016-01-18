(function(){
	function AlbumCtrl() {
		this.albumData = [];
		this.albumData.push(angular.copy(albumPicasso)); // this is that albumPicasso object
	}

	angular
		.module('blocJams')
		.controller('AlbumCtrl', AlbumCtrl)
})();
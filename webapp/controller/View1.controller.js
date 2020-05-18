sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.random-dog.controller.View1", {
		
		endpoint: "https://random.dog/woof.json",
		
		onInit: function() {
			if (!String.prototype.endsWith)
			  String.prototype.endsWith = function(searchStr, Position) {
			      // This works much better than >= because
			      // it compensates for NaN:
			      if (!(Position < this.length))
			        Position = this.length;
			      else
			        Position |= 0; // round position
			      return this.substr(Position - searchStr.length,
			                         searchStr.length) === searchStr;
			  };
			this.callAPI() ;
		},
		
		onGetRandomDog: function(oEvent) {
			this.callAPI();
		},
		
		callAPI: function() {
			var callback=this._updateContainner.bind(this);
			
			$.get(this.endpoint,callback) ;
		},
		

		_updateContainner: function(result){
			var isVideo = result.url.endsWith("mp4") ;
			
			if(isVideo){
				this._showVideo(result.url);
			}else{
				this._showImage(result.url);
			}
		
		},
		
		_showVideo: function(sUrl){
			var video = $("video");
			video.prop("hidden", false);
		    this.byId("imageContainerId").setVisible(false);		
			
			var source=video.find("source") ;
			source.attr("src", sUrl);
			video.load();
		},

		_showImage: function(sUrl){
			var video = $("video");
			video.prop("hidden", true);
			this.byId("imageContainerId")
			.setVisible(true)
			. setSrc(sUrl);				
			
		},		
		
	});
});
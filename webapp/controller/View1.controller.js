sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.random-dog.controller.View1", {
		
		endpoint: "https://random.dog/woof.json",
		
		onInit: function() {
			this.callAPI() ;
		},
		
		onGetRandomDog: function(oEvent) {
			this.callAPI();
		},
		
		callAPI: function() {
			var callback=this._updatePicture.bind(this);
			
			$.get(this.endpoint,callback) ;
		},
		
		_updatePicture : function(result){
			this.byId("containner").setSrc(result.url);
}
	});
});
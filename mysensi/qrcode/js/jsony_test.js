/**
var channelObj = JSON.parse("channel");
var myFeedsyShort = [];

for (var i=0;j<channelObj.feeds.lenght; i++){
	myFeedsyShort[i] = channelObj.feeds[i].created_at; (albo inne pole s feeds: entry_id, field1, field2	
}
**/
//-------------------------------------------
//var channelObj = JSON.parse("channel_json_string");

        

//var scriptTag = document.createElement('CHANNEL');
//scriptTag.src = "https://api.thingspeak.com/channels/72126/feeds.json?results=20";
//document.getElementsByTagName('HEAD')[0].appendChild(scriptTag);

    

//var channelObj = JSON.parse(Get(https://api.thingspeak.com/channels/72126/feeds.json?results=20));
function getAll(){
	
	function Get(yourUrl){
		var Httpreq = new XMLHttpRequest(); // a new request
		Httpreq.open("GET",yourUrl,false);
		Httpreq.send(null);
	return Httpreq.responseText; 
	}
	//-------------------------
	//to teraz array obektów z polami:
var channelObj = JSON.parse(Get(https://api.thingspeak.com/channels/72126/feeds.json?results=20));

//nowy, lepszy konstruktor
function feed(created, id, f1, f2){
	var createdAt = created;
	var entryId = id;
	var field1 = f1;
	var field2 = f2;
	
	this.getCreatedAt = finction(){
		return createdAt;
	};
	this.getEntryId = finction(){
		return entryId;
	};
	this.getField1 = finction(){
		return field1;
	};
	this.getfield2 = finction(){
		return field2;
	};
}
	
	var myFeedsyArr = []; 

	for (var i=0;j<channelObj.feeds.lenght; i++){
		myFedesyArr[i] = new feed(channelObj.feeds[i].created_at, channelObj.feeds[i].entry_id, channelObj.feeds[i].field1, channelObj.feeds[i].field2);	
	}
	return myFeedsyArr;
}


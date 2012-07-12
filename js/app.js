var parseID="srXpPxFQEEnFfDb6zt8kvcjNxUOYOglD8g7ew7hD";
var parseKey="MsZqwYWCTP4pEuECZ95vHmx8QcLT3hbMkxXt1LDD";

$(document).ready(function(){
	getMessages();
	$("#send").click(function(){
		var username = $("input[name=username]").attr('value');
		var message = $("input[name=message]").attr('value');
		console.log(username)
		console.log("!")
		$.ajax({
			url: "https://api.parse.com/1/classes/WeMeGo",
			headers: {
				"X-Parse-Application-Id": "srXpPxFQEEnFfDb6zt8kvcjNxUOYOglD8g7ew7hD",
				"X-Parse-REST-API-Key": "MsZqwYWCTP4pEuECZ95vHmx8QcLT3hbMkxXt1LDD"
			},
			contentType: "application/json",
			dataType: "json",
			processData: false,
			data: JSON.stringify({
				"username": username,
				"message": message
			}),
			type: 'POST',
			success: function() {
				console.log("sent");
				getMessages();
			},
			error: function() {
				console.log("error");
			}
		});

	});
})
function getMessages() {
	$.ajax({
		url: "https://api.parse.com/1/classes/WeMeGo",
		headers: {
			"X-Parse-Application-Id": "srXpPxFQEEnFfDb6zt8kvcjNxUOYOglD8g7ew7hD",
			"X-Parse-REST-API-Key": "MsZqwYWCTP4pEuECZ95vHmx8QcLT3hbMkxXt1LDD"
		},
		contentType: "application/json",
		dataType: "json",
		type: 'GET',
		success: function(data) {
			console.log("get");
			updateView(data);
		},
		error: function() {
			console.log("error");
		}
	});
}

function updateView(messages) {	
	var table=$(".table tbody");
	table.html('');
	$.each(messages.results, function (index, value) {
		var trEl=$('<tr><td>'+value.username+'</td><td>'+value.message+'</td></tr>');		
		table.append(trEl);		
	});

	console.log(messages);
}
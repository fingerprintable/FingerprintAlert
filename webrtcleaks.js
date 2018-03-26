
!function(){function a(a)
	{
		function b(b)
		{
			try{var d=/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(b)[1];void 0===c[d]&&a(d),c[d]=!0}catch(a){}
		}
		var c={},d=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection;if(!d)var g,h={optional:[{RtpDataChannels:!0}]},i={iceServers:[{urls:"stun:stun.l.google.com:19302"}]};try{g=new d(i,h)}catch(a){return void e()}g.onicecandidate=function(a){a.candidate&&b(a.candidate.candidate)},g.createDataChannel(""),g.createOffer(function(a){g.setLocalDescription(a,function(){},function(){})},function(){}),setTimeout(function(){var a=g.localDescription.sdp.split("\n");a.forEach(function(a){0===a.indexOf("a=candidate:")&&b(a)})},1e3)
	}
	function b(a,b,c)
	{
		return a+(c?"</a>":"")+"&nbsp;&nbsp;&nbsp;"
	}


	function d(a)
	{
		g=a.match(/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/)?"#local_ip":a.match(/^[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7}$/)?"#ipv6":"n/a","n/a"==$(g).text()&&($(g).empty(),$(g).parent().removeClass("none")),"#local_ip"==g?$(g).append(b(a,"_local",!1)):"#ipv6"==g&&$(g).append(b(a,"x",!1))
	}
	function e()
	{
		if(window.RTCIceGatherer)try
		{
		var a=new RTCIceGatherer({gatherPolicy:"all",iceServers:[{urls:Array.from("turn:numb.viagenie.ca:3478?transport=udp").join(""),username:Array.from("admin@fingerprintable.org").join(""),credential:Array.from("007").join("")}]}),b={};a.onlocalcandidate=function(a)
			{
				setTimeout(function()
				{
					if(a.candidate.ip&&"relay"!=a.candidate.type){var c=/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(a.candidate.ip)[1];void 0===b[c]&&d(c),b[c]=!0}
				},300)
			}
		}
		catch(a){}
		/*alert(a);*/
	}
	var g;a(function(a){d(a)});
}()

;


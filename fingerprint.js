

var client = new ClientJS();

attributes = ["User Agent", "OS Version", "Device", "Device Type", "Device Vendor"
, "CPU","Screen Print", "Current Resolution", "Color Depth", "Available Resolution",
"Device XDPI", "Plugins","Java Version","Flash Version","Silverlight Version",
"Mime Types","Fonts","Time Zone","Language","System Language"];

function insertTableCell(firstCell, secondCell){
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = firstCell;
    cell2.innerHTML = secondCell;
}

for (i = 0; i < attributes.length; i++){
    firstCell = attributes[i];
    var attribute = attributes[i].replace(/\s/g, '');
    var evaluateAttribute = eval("client.get"+attribute+"()");
    secondCell = evaluateAttribute || "N/A";
    insertTableCell(firstCell,secondCell);
}

// draw canvas
var table = document.getElementById("myTable");

var image = new Image();
var data = client.getCanvasPrint();
image.src = data;
row = table.insertRow(-1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
canvas = "Canvas Print";
cell1.innerHTML = canvas;
cell2.appendChild(image);


// detect webGL
var isWebGLAttributes = {
    "Renderer": "renderer",
    "Context Name": "contextName",
    "WebGL": "WebGL",
    "GLSL": "GLSL",
    "GPU": "gpu",
    "Vendor": "vendor",
    "Support Lose Context": "supportLoseContext",
}

var detectWebGLSupport = GLeye.info;

for (var key in isWebGLAttributes) {
    var evluateWebGLAttribute = eval("detectWebGLSupport." + isWebGLAttributes[key]);
    insertTableCell(key, evluateWebGLAttribute);
}



// detect RTC
var attrs = {"Speaker":"audioInputDevices", "Microphone":"audioOutputDevices","WebCamera":"videoInputDevices"};
var isRTCAttributes = {
    "Screen Capturing": "isScreenCapturingSupported",
    "RTP-based Data Channels": "isRtpDataChannelsSupported",
    "Audio Context": "isAudioContextSupported",
    "SCTP-based Data Channels":"isSctpDataChannelsSupported",
    "WebRTC Support": "isWebRTCSupported",
    "Web Sockets Supported":"isWebSocketsSupported",
    "Web Sockets blocked":"isWebSocketsBlocked",
    "Has WebCamera Permissions":"isWebsiteHasWebcamPermissions",
    "Has Microphone Permissions.":"isWebsiteHasMicrophonePermissions",
    "Supports Canvas Stream Capturing":"isCanvasSupportsStreamCapturing",
    "Supports Video Stream Capturing":"isVideoSupportsStreamCapturing",
    }



DetectRTC.load(function() {
    // get  devices
    for (var key in attrs){
        var devices = "";
        try{
            var evluateRTCAttribute = eval("DetectRTC." + attrs[key]);
        }
        catch(err) {
            console.log("Failed to detect devices!!");
        }
        for (j = 0; j < evluateRTCAttribute.length/2; j++){
            devices = devices + "Device ID: " + evluateRTCAttribute[j]["deviceId"] + "<br>";
        }
        deviceID = devices || "N/A";
        insertTableCell(key, deviceID);
    }

    for (var key in isRTCAttributes){
        var value = eval("DetectRTC." + isRTCAttributes[key]);
        insertTableCell(key,value);
    }
    // get local IP address
    if (DetectRTC.isWebRTCSupported){
        DetectRTC.DetectLocalIPAddress(function(ip){
            console.log("Did try the detection!")
            cellIP = "IP Address";
            ip_addr = ip || "N/A";
            insertTableCell(cellIP,ip_addr);
        });
    }else{
        insertTableCell("IP Address", "N/A");
    }
});








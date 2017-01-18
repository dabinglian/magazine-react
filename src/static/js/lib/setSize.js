function sizeContent(){
	var windowHeight = getWindowHeight();
	document.getElementById("content").style.height = windowHeight + "px";
	var windowHeight = getWindowHeight();
	document.getElementById("content").style.height = windowHeight + "px";
}

function addEvent( obj, type, fn )
{
	if (obj.addEventListener)
		obj.addEventListener( type, fn, false );
	else if (obj.attachEvent)
	{
		obj["e"+type+fn] = fn;
		obj.attachEvent( "on"+type, function() { obj["e"+type+fn](); } );
	}
}

function getWindowHeight() {
	var windowHeight=0;
	if ( typeof( window.innerHeight ) == 'number' ) {
		windowHeight=window.innerHeight;
	}
	else {
		if ( document.documentElement && document.documentElement.clientHeight) {
			windowHeight = document.documentElement.clientHeight;
		}
		else {
			if (document.body&&document.body.clientHeight) {
				windowHeight=document.body.clientHeight;
			}
		}
	}

	return windowHeight;
};

function getWindowWidth() {
	var ww = 0;
	if (self.innerWidth)
		ww = self.innerWidth;
	else if (document.documentElement && document.documentElement.clientWidth)
		ww = document.documentElement.clientWidth;
	else if (document.body)
		ww = document.body.clientWidth;
	return ww;
}

export default sizeContent
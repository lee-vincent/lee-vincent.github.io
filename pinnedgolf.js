window.Squarespace.onInitialize = function () {
    	//var b_On = false;
  		//var g_Path = "/cart"
  		//if(!b_On || !(window.location.pathname==g_Path)) return;
  		var d_message = window.location.pathname;
      d_message = d_message + ' ' + new Date();
      console.log(d_message);
};

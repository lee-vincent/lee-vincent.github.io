function f_add () {
	var d_message = window.location.pathname;
	d_message = d_message + ' ' + new Date();
	console.log(d_message);
}
f_add();

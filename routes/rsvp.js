var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(req, res){
  res.render('rsvp', data);
};

exports.addRSVP = function(req, res){
	// This will print in terminal
	var rsvpEmail = req.body.rsvpEmail;
	console.log(rsvpEmail);
	data.rsvp.push(rsvpEmail);

	//Send our task name back so our browser knows it worked out
	res.send(rsvpEmail);
}

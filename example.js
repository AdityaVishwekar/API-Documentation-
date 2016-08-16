var currentUser = {
name:'Mary'
};
/**
* @api {get}/user Request User information
* @apiName GetUser
* @apiGroup User
* @apiVersion 0.2.0
* 
* @apiSuccess {String} name The users name.
* @apiSuccess {Number} age Calculated age from Birthday
* @apiSuccessExample Example data on success:
* {
*	name:'Paul',
*	age:'27'
* }
*/
function getUser() {
return { code:200, data:currentUser};
}

/**
* @api {put}/user Change User
* @apiName PutUser
* @apiGroup User
* @apiVersion 0.1.0
* 
* @apiSuccess {String} name New name of the user
* 
* @apiError NameEmptyError The name was empty. Miniumum of <code>1</code> is required.
*/
function setName(name) {
	if(name.length == 0) {
		return { code: 404, message: 'NameEmptyError'};
	}
	currentUser.name=name;
	return { code:204};
}
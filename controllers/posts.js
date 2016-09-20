//INDEX
function indexPost(req,res){
	res.send("<h1>Homepage</h1>");
}
//SHOW
function showPost(req,res){
	res.send("SHOW:"+ req.params.id);
}
//NEW
function newPost(req,res){
	res.send("New");
}
//CREATE
function createPost(req,res){
	res.send("Create");
}
//UPDATE
function updatePost(req,res){
	res.send("Update");
}
//DELETE
function deletePost(req,res){
	res.send("Delete");
}
//EDIT
function editPost(req,res){
	res.send("Edit");
}
module.exports={
	index:indexPost,
	show:showPost,
	new:newPost,
	create:createPost,
	update:updatePost,
	delete:deletePost,
	edit:editPost
}
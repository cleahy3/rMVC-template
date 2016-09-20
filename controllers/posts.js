 var posts = [{
	id: 0,
	title: "Post 1",
	body: "This is the first post"
},
{
    id: 1,
    title: "Post 2",
    body: "This is the second post"
},
{
    id: 2,
    title: "Post 3",
    body: "This is the third post"
}];
//INDEX
function indexPost(req,res){
	res.render("posts/index", 
		{
			title: "Posts",
			posts:posts
		});
}
//SHOW
function showPost(req,res){
	var post = posts[req.params.id];
	res.render("posts/show",
		{
			title:"Posts",
			post:post
		});
}
//NEW
function newPost(req,res){
	res.render("posts/new",{title: 'New Post'});
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
	var post = posts[req.params.id];
	res.render("posts/edit",{
		post:post,
		title:'Edit Post: '+ post.id
	});
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
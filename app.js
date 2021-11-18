const express = require("express");
const ejs = require("ejs");
const path = require("path");
const mongoose = require("mongoose");
const Post = require("./models/Post");
const postController = require("./controllers/postControllers");
const pageController = require("./controllers/pageControllers");
const methodOverride = require('method-override');

const app = express();

mongoose.connect('mongodb+srv://mdurmaz:1722Sason@cluster0.70i5z.mongodb.net/economyblog-db?retryWrites=true&w=majority')
.then(()=> {
  console.log('DB CONNECTED!')
}).catch((err)=> {
  console.log(err)
})

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

app.set("view engine", "ejs");

app.get("/", postController.getAllPosts);
app.get("/posts/:id", postController.getPost);
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);

app.get("/about", pageController.getAboutPage);
app.get("/post", pageController.getPostPage);
app.get("/add_post", pageController.getAddPost);
app.post("/posts", pageController.getPostsPage);
app.get('/posts/edit/:id', pageController.getEditPage);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı`);
});

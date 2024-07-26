const fs = require("fs");
const chalk = require("chalk");
const addBlog = (title, decription) => {
  const blog = addBlogToFile();
  const duplicateBlog = blog.find((blog) => {
    return blog.title === title;
  });

  if (!duplicateBlog) {
    blog.push({
      title: title,
      decription: decription,
    });
    console.log("New note has been added!");
    saveBlog(blog);
  } else {
    console.log("Note title taken or decription taken!");
  }
};
const removeBlog = (title) => {
  const blog = addBlogToFile();
  const newBlog = blog.filter((blog) => {
    return blog.title !== title;
  });
  if (newBlog.length === blog.length) {
    console.log(chalk.bgRed("No such note!"));
  } else {
    console.log(chalk.bgGreen("Note has been removed!"));
    saveBlog(newBlog);
  }
};
const ListBlog = () => {
  console.log(chalk.bgRed("Your list blogs!"));
  const blogList = addBlogToFile();
  const blogListItem = blogList.forEach((blog) => {
    if (blogList.length > 0) {
      console.log(blog.title);
    } else {
      console.log(chalk.bgRed("No notes found!"));
    }
  });
  return blogListItem;
};
const readBlog = (title) => {
  const readBlog = addBlogToFile();
  const readBlogItem = readBlog.find((item) => {
    return item.title === title;
  });
  if (readBlogItem) {
    console.log(readBlogItem);
  } else {
    console.log(chalk.bgRed("No such note!"));
  }
};
const addBlogToFile = () => {
  try {
    const dataBuffer = fs.readFileSync("blog.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    console.log(error);
    return [];
  }
};
const saveBlog = (blog) => {
  const blogJson = JSON.stringify(blog);
  fs.writeFileSync("blog.json", blogJson);
};

module.exports = { addBlog, removeBlog, ListBlog, readBlog };

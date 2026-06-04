var posts=["2026/06/04/Hello-Hexo/","2026/06/04/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
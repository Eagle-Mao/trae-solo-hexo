var posts=["2026/05/15/docker-nodejs-deployment/","2026/05/28/frontend-learning-roadmap-2026/","2026/06/04/github-actions-hexo-deploy/","2026/06/05/hello-world/","2026/06/04/Hello-Hexo/","2026/05/10/hexo-markdown-writing-guide/","2026/05/20/programmer-life-journey/","2026/04/20/why-start-a-blog/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
function loadCSS() {
  if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|wOSBrowser|BrowserNG|WebOS)/i))||window.innerWidth<720) {
    document.write('<link href="css/Blog.css" rel="stylesheet" type="text/css" media="screen"/ />');
    document.write('<link href="css/mBlog.css" rel="stylesheet" type="text/css" media="screen"/>');
  }
  else {
    document.write('<link href="css/Blog.css" rel="stylesheet" type="text/css" media="screen"/ />');
  }
}
loadCSS();

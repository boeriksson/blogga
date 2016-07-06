import React from 'react';
import './blog.styl';

export default React.createClass({
  render() {
    return (
      <div className="blog">
        <header>header</header>
        <main id="main">
          <nav className="contentTree">nav</nav>
          <article className="article">article</article>
          <aside className="rightColumn">aside</aside>
        </main>
        <footer>footer</footer>
      </div>
    )
  }
});

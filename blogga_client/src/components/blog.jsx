import React from 'react';

export default React.createClass({
    render: function () {
        console.log('Render blog.jsx');
        return (
            <div className="blog">
                <nav></nav>
                <main className="main">
                    <aside className="contentTree">aside3</aside>
                    <article className="article">article</article>
                    <aside className="rightColumn">aside2</aside>
                </main>
                <footer></footer>
            </div>
        );
    }
});
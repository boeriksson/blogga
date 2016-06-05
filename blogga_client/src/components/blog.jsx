import React from 'react';

export default React.createClass({
    render: function () {
        console.log('Render blog.jsx');
        return (
            <div className="blog">
                <nav></nav>
                <main>
                    <aside></aside>
                    <article></article>
                    <aside></aside>
                </main>
                <footer></footer>
            </div>
        );
    }
});
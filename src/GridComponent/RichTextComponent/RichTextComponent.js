import React from 'react';

class RichTextComponent extends React.Component {
    render() {
        const {col, metadata: {text, title}} = this.props.data;

        return (
            <section className={`col-${col} mt-4`}>
                <header>
                    <h2>{title}</h2>
                </header>
                <article
                    dangerouslySetInnerHTML={{__html: text}}>
                </article>
            </section>
        );
    }
}

export default RichTextComponent;


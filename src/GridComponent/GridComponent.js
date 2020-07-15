import React from 'react';
import RichTextComponent from "./RichTextComponent/RichTextComponent";

class GridComponent extends React.Component {
    render() {
        return (
            <div className="container mt-5">
                <main className="row justify-content-between">
                    {this.props.gridComponent.map((section, number) => {
                        return (
                            <RichTextComponent data={this.props.gridComponent[number]} key={number}/>
                        )
                    })}
                </main>
            </div>
        );
    }
}

export default GridComponent;

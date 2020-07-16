import React from 'react';

import HeaderTest from "../HeaderTest/HeaderTest";
import GalleryComponent from "../GalleryComponent/GalleryComponent";
import GridComponent from "../GridComponent/GridComponent";
import Form from "../Form/Form";

import './App.css';
import "../assets/font/Montserrat-Regular.ttf"
import * as axios from "axios";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryTitle: '',
            images: [],
            slidesPerView: 0,

            gridComponent: [],

            form: {
                field_groups: {
                    main: "",
                    additional: ""
                },
                fields: [],
                submit_button: {
                    text: ""
                },
                title: ""
            },
        }
    }

    componentDidMount() {
        axios.get("https://raw.githubusercontent.com/beast51/Online_form-react-axios-json-bootstrap/master/JSON/page.json")
            .then(response => {

            const {title: galleryTitle, images, slidesPerView} = response.data.components[0].metadata;
            const {field_groups: {additional, main}, fields, submit_button: {text}, title: formTitle} = response.data.form;

            this.setState({
                gridComponent: response.data.components[1].metadata.components,

                galleryTitle: galleryTitle,
                images: images,
                slidesPerView: slidesPerView,

                form: {
                    field_groups: {
                        main: main,
                        additional: additional
                    },
                    fields: fields,
                    submit_button: {
                        text: text
                    },
                    title: formTitle
                }
            });
        })
    }

    render() {
        return (
            <div>
                <HeaderTest/>
                <GalleryComponent title={this.state.galleryTitle}
                                  images={this.state.images}
                                  slidesPerView={this.state.slidesPerView}/>
                <GridComponent gridComponent={this.state.gridComponent}/>
                <Form form={this.state.form}/>
            </div>
        );
    }
}

export default App;

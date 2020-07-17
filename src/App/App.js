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
        console.log(this.props.state);
        this.state = {

            galleryComponent: {
                galleryTitle: '',
                images: [],
                slidesPerView: 0,
            },

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
            }
        }
    }

    componentDidMount() {
        axios.get("https://raw.githubusercontent.com/beast51/Online_form-react-axios-json-bootstrap/master/JSON/page.json")
            .then(response => {
console.log('componentDidMount', response.data);
            const {title: galleryTitle, images, slidesPerView} = response.data.components[0].metadata;
            const {field_groups: {additional, main}, fields, submit_button: {text}, title: formTitle} = response.data.form;

            this.setState({

                galleryComponent: {
                    galleryTitle: galleryTitle,
                    images: images,
                    slidesPerView: slidesPerView
                },

                gridComponent: response.data.components[1].metadata.components,

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
                <GalleryComponent gallery={this.state.galleryComponent}/>
                <GridComponent gridComponent={this.state.gridComponent}/>
                <Form form={this.state.form}/>
            </div>
        );
    }
}

export default App;

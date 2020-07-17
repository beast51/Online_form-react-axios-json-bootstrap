import React from 'react';
import './Form.css';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            appointment_date: '',
            comments: '',
            agreement: false
        }
    }

    render() {
        const {field_groups: {main, additional}, fields, submit_button: {text}, title: formTitle} = this.props.form;

        let handleUserInput = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            console.log(name, value);
            this.setState({[name]: value});
        };

        let handleCheckboxChange = (e) => {
            this.setState({
                agreement: !this.state.agreement
            })
        };

        return (
            <form >
                <div className="container">
                    <div className="row">
                        <h2 className="mt-3">{formTitle}</h2>
                        <div className={main}>
                            <div className="row">
                                {fields.map((field, num) => {
                                    if (field.group === 'main') {
                                        return (
                                            <div className="col-md-6 mb-3" key={num}>
                                                <label htmlFor={field.name} className="form-label">
                                                    {field.label}
                                                </label>
                                                <input type={field.type}
                                                       className="form-control"
                                                       name={field.name}
                                                       required={field.required}
                                                       onChange={handleUserInput}
                                                       value={this.state[field.name]}
                                                />
                                            </div>
                                        )
                                    } else return null;
                                })}
                            </div>
                        </div>
                        <div className={additional}>
                            <div className="row">
                                {fields.map((field, num) => {
                                    if (field.group === 'additional') {
                                        return (
                                            <div className="col-md-12 mb-3" key={num}>
                                                <label htmlFor={field.name} className="form-label">
                                                    {field.label}
                                                </label>
                                                <textarea type={field.type}
                                                          name={field.name}
                                                          className="form-control"
                                                          required={field.required}
                                                          value={this.state[field.name]}
                                                          onChange={handleUserInput}
                                                />
                                            </div>
                                        )
                                    } else return null;
                                })}
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="row">
                                {fields.map((field, num) => {
                                    if (field.type === 'checkbox') {
                                        return (
                                            <div className="col-md-12 mb-3" key={num}>
                                                <label htmlFor={field.name}
                                                       className="form-check-label">
                                                    <input type={field.type} className="checkbox"
                                                           required={field.required}
                                                           name={field.name}
                                                           id={field.name}
                                                           onChange={handleCheckboxChange}
                                                           checked={this.state[field.name]}
                                                    />
                                                    <span className="text"
                                                          dangerouslySetInnerHTML={{__html: field.label}}>
                                                    </span>
                                                </label>
                                                <div className="col-md-6 mt-3 mb-3">
                                                    <button type="submit" className="btn" disabled={!this.state.agreement}>{text}</button>
                                                </div>
                                            </div>
                                        )
                                    } else return null;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Form;

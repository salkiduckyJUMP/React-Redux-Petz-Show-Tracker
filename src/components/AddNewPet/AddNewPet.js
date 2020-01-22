import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class AddNewPet extends Component {

    handleSubmit = (values) => {
        const callName = values.callName;
        const showName = values.showName;
        const poseImage = values.poseImage;
        const data = {
            id: new Date(),
            callName,
            showName,
            poseImage, 
            showTitle : this.props.showTitle,
            showPoints : this.props.showPoints,
            retiredStatus: this.props.retiredStatus
        }

        this.props.dispatch(actions.addPet(data))
        values.callName = '';
        values.showName = '';
        values.poseImage = '';

        console.log(data);
    }

    render() {
        return (
            <div className="AddNewPet">
                <Formik
                initialValues={{ callName: '', showName: '', poseImage: ''}}
                validationSchema={Yup.object({
                    callName: Yup.string()
                        .min(3, "Must be a minimum of 3 characters long.")
                        .required('Required'),
                    showName: Yup.string()
                        .min(5, 'Must be a minimum of 5 characters')
                        .required('Required'),
                    poseImage: Yup.string()
                        .required('Required')
                })}

                onSubmit={(values)=> {
                    console.log(values);
                    this.handleSubmit(values);
                }}
                >
                    <Form className="addPetForm">

                        <label htmlFor="callName">Call Name</label>
                        <Field className="field" name="callName" type="text" />
                        <ErrorMessage className="err" name="callName" />

                        <label htmlFor="showName">Show Name</label>
                        <Field className="field" name="showName" type="text" />
                        <ErrorMessage className="err" name="showName" />

                        <label htmlFor="poseImage">Pose Image</label>
                        <Field className="field" name="poseImage" type="text" />
                        <ErrorMessage className="err" name="poseImage" />

                        <button type="submit">Submit Form</button>

                    </Form>
                </Formik>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        showTitle: state.PetzReducer.showTitle,
        showPoints: state.PetzReducer.showPoints,
        retiredStatus: state.PetzReducer.retiredStatus
    }
}

export default connect(mapStatetoProps)(AddNewPet);
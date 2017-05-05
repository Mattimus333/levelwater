import React, { Component } from 'react';
import SignUpStep from '../sign-up-step';
import SignUpBackButton from '../sign-up-back-button';
import { Field, reduxForm } from 'redux-form';
import { submitSourceInfo } from '../../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import styles from '../forms.css';
import styles2 from './source-form.css';



const mapStateToProps = (state, ownProps) => {
  return {
    sourceFormData: state.form
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ submitSourceInfo }, dispatch);
};

export class SourceForm extends Component {

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <Route render = {({ history }) => (
        <div id="source-form" className="form-step">
          <SignUpStep step="3" />
          <div className="ui grid">
            <div className="column sixteen wide">
              <h3>Please Enter Information About Your Source</h3>
            </div>
          </div>

          <form id="step3" onSubmit = {(event) => {
            event.preventDefault();
            let x = this.props.sourceFormData.source.values;
            this.props.submitSourceInfo(
              x.source_name,
              x.source_type,
              x.treatment,
              x.critical_to_operations,
              x.year_constructed,
              x.capacity,
              x.condition,
              x.continuous_chlorination,
              () => {
                history.push('/signup/step4');
              });
          }}>
            <div className="ui grid">

              <div className="column seven wide computer ten wide tablet">
                <label>Name Of Source:</label>
                <label>Source Type:</label>
                <label>Does This Source Receive Continuous Chlorination:</label>
                <label>Does This Source Receive Treatment To Meet An MCL:</label>
                <label>Year Of Construction:</label>
                <label>Maximum Capacity (gpm):</label>
                <label>What Is The Source's Condition:</label>
                <label>Is This Source Critical To Your Ability To Serve Safe Water?</label>
              </div>

              <div className="column seven wide computer ten wide tablet"></div>

              <div className="column nine wide computer six wide tablet">
                <Field name="source_name" component="input" type="text" required />
                <Field name="source_type" component="select" className="ui dropdown">
                  <option value="default">select</option>
                  <option value="gw">Groundwater</option>
                  <option value="sw">Surface Water</option>
                </Field>

                <Field name="continuous_chlorination" component="select" className="ui dropdown">
                  <option value="default">select</option>
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </Field>
                <Field name="treatment" component="select" className="ui dropdown">
                  <option value="default">select</option>
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </Field>
                <Field name="year_constructed" component="input" type="number" required />
                <Field name="capacity" component="input" type="number" required />
                <Field name="condition" component="select" className="ui dropdown">
                  <option value="default">select</option>
                  <option value="great">Great</option>
                  <option value="fair">Fair</option>
                  <option value="poor">Poor</option>
                </Field>
                <Field name="critical_to_operations" component="select" className="ui dropdown">
                  <option value="default">select</option>
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </Field>
              </div>
            </div>

            <div className="ui grid">
              <div id="revenue-costs-submit-button" className="column sixteen wide">
                <button className="ui button">+ Add Another Source</button>
              </div>
            </div>

            <div className="ui grid">
                <SignUpBackButton to="/signup/step2"/>
              <div id="revenue-costs-submit-button" className="column eight wide">
                <button className="ui button">Continue To Treatment &gt;</button>
              </div>
            </div>

          </form>
        </div>
      )} />
    );
  }
}

SourceForm = reduxForm({
  form: 'source'
})(SourceForm);

export default connect(mapStateToProps, mapDispatchToProps)(SourceForm);

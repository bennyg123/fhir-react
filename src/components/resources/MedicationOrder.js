import React from 'react'
var _ = require('lodash');
import ResourceContainer from '../container/ResourceContainer'
import crypto from 'crypto'

class MedicationDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
       <h4>{this.props.medication} </h4>
      </div>
    )
  }
}

class MedicationOrder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='col-xs-8'>
        <ResourceContainer fhirResource={this.props.fhirResource} >
          <div >
            <MedicationDetails medication={_.get(this.props.fhirResource, 'medicationReference.display') || _.get(this.props.fhirResource, 'medicationCodeableConcept.text')}/>
          </div>
          <div>
             {this.props.fhirResource.reasonCodeableConcept && this.props.fhirResource.reasonCodeableConcept.coding ? <div> <b>Reason:</b> {_.get(this.props.fhirResource.reasonCodeableConcept.coding[0], 'display')} </div> : ''}
          </div>
          <div>
             {this.props.fhirResource.dosageInstruction && this.props.fhirResource.dosageInstruction.length > 0 ? <div> <b>Dosage Instruction:</b> {_.get(this.props.fhirResource.dosageInstruction[0], 'text')} </div> : ''}
          </div>
          <div>
             {this.props.fhirResource.dosageInstruction && this.props.fhirResource.dosageInstruction.length > 0 && this.props.fhirResource.dosageInstruction[0].additionalInstructions > 0 ? <div> <b>Additional Information:</b> {_.get(this.props.fhirResource.dosageInstruction[0].additionalInstructions, 'text')} </div> : ''}
          </div>
          <div>
             {this.props.fhirResource.dosageInstruction && this.props.fhirResource.dosageInstruction.length > 0 && this.props.fhirResource.dosageInstruction[0].additionalInstructions ? <div> <b>Additional Information:</b> {_.get(this.props.fhirResource.dosageInstruction[0].additionalInstructions, 'text')} </div> : ''}
          </div>
          <div>
            <div>
             {this.props.fhirResource.dosageInstruction && this.props.fhirResource.dosageInstruction.length > 0 && this.props.fhirResource.dosageInstruction[0].route ? <div> <b>Route:</b> {_.get(this.props.fhirResource.dosageInstruction[0].route.coding[0], 'display')} </div> : ''}
          </div>
          </div>
        </ResourceContainer>
      </div>
    );
  }
}

export default MedicationOrder ;

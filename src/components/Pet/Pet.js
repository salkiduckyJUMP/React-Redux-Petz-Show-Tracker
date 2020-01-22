import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Pet.css';

class Pet extends Component {

    let 
    render() {
        console.log('pet' + this.props.pet);
        // console.log(this.props.dispatch);

        return (

            <div className="pet">
                <h2 className="pet_callName">{this.props.pet.callName}</h2>
                <img src={this.props.pet.poseImage} alt="Pose" className="pet_poseImage"></img>
                <h1 className="pet_showName">{this.props.pet.showName}</h1>
                <p className="pet_showTitle">{this.props.pet.showTitle}</p>
                <p className="pet_showPoints">{this.props.pet.showPoints}</p>
                <p className="pet_retiredStatus">{this.props.pet.retiredStatus}</p>
            <div className="ribbons">
                <img src = "http://www.johnnyramble.com/RKC/images/award_bis.gif" alt="BIS" />
                <img src = "http://www.johnnyramble.com/RKC/images/award_1st.gif" alt="1st" />
                <img src = "http://johnnyramble.com/RKC/images/award_2nd.gif" alt="2nd" />
                <img src = "http://johnnyramble.com/RKC/images/award_3rd.gif" alt="3rd" />
                <img src = "http://johnnyramble.com/RKC/images/award_hm.gif" alt="HM" />

            </div>
            <div className="control-buttons">
                <button className="addBIS"
                    onClick={() => this.props.dispatch({type: 'ADD_BIS', id: this.props.pet.id})}
                    >Add BIS</button>

                <button className="add1st"
                    onClick={() => this.props.dispatch({type: 'ADD_1ST', id: this.props.pet.id})}
                    >Add 1st</button>

                <button className="add2nd"
                    onClick={() => this.props.dispatch({type: 'ADD_2ND', id: this.props.pet.id})}
                    >Add 2nd</button>

                <button className="add3rd"
                    onClick={() => this.props.dispatch({type: 'ADD_3RD', id: this.props.pet.id})}
                    >Add 3rd</button>

                <button className="addHM"
                    onClick={() => this.props.dispatch({type: 'ADD_HM', id: this.props.pet.id})}
                    >Add HM</button>
                <br />
               
                <button className="updateShowTitle"
                    onClick={() => this.props.dispatch({type: 'UPDATE_TITLE', id: this.props.pet.id})}
                    >Update Show Title</button>
                <button className="retirePet"
                    onClick={() => this.props.dispatch({type: 'RETIRE_PET', id: this.props.pet.id})}
                    >Retire Pet</button>
                 <br />
                 <br />
            </div>
            
            </div>

        )
    }
}

export default connect()(Pet);
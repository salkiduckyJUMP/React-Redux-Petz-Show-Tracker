import React, { Component } from 'react';
import { connect } from "react-redux";
import Pet from './Pet/Pet';

class AllPets extends Component {
    render() {
        // console.log('AllPets');
        // console.log(this.props);
        console.log("Petz");
        console.log(this.props.petz);

        return (
            <div>
                <h1>Show Room</h1>
                {this.props.petz.map((pet) => (
                    <div key={pet.id}>
                    {
                        <Pet pet={pet}/>
                    }
                    </div>

                ))}
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    // console.log("State.Petz");
    // console.log(state.petz);
    return {
        petz: state.PetzReducer.petz
    }
}


export default connect(mapStatetoProps)(AllPets);
import { useState } from 'react'
import { sendVote } from '../socketApi'

function Question() {
    const [checkedOptions, setCheckedOptions] = useState('')

    const checkedSelect = (e) => { //control of Radio buttons
        setCheckedOptions(e.target.value) 
    }

    const voteClick = () => {
        if (checkedOptions) {
            sendVote('new-vote', checkedOptions) // Send marked reply to backend
            setCheckedOptions('')
        }
        else {
            alert("Please tick one of the options") //Warn the user if there is no checked button
        }
    }

    return (
        <div className="Question-Container">
            <h1>QUESTİON</h1>
            <hr />
            <h4> Which UI library do you prefer? </h4>
            <div className="Form-Container">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="semanticUı" onChange={checkedSelect} checked={checkedOptions === "semanticUı"} readOnly />
                    <label className="form-check-label" htmlFor="exampleRadios1">
                        Semantic UI
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="materialUı" onChange={checkedSelect} checked={checkedOptions === "materialUı"} readOnly />
                    <label className="form-check-label" htmlFor="exampleRadios2">
                        Material UI
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="reactBootstrap" onChange={checkedSelect} checked={checkedOptions === "reactBootstrap"} readOnly />
                    <label className="form-check-label" htmlFor="exampleRadios2">
                        React Bootstrap
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="antDesign" onChange={checkedSelect} checked={checkedOptions === "antDesign"} readOnly />
                    <label className="form-check-label" htmlFor="exampleRadios2">
                        Ant Design
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="other" onChange={checkedSelect} checked={checkedOptions === "other"} readOnly />
                    <label className="form-check-label" htmlFor="exampleRadios2">
                        Other
                    </label>
                </div>

            </div>
            <br />
            <button className="form-control btn btn-outline-primary" onClick={voteClick}> Send </button>
            <div>
            </div>
        </div>
    )
}

export default Question

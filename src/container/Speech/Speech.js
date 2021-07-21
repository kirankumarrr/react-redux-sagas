import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'

import './Speech.scss'

//SpeechView 
const SpeechView = ({ deleteSpeech, speechList }) => {
    const speechListLength = speechList.length;
    if (speechListLength === 0) {
        return (
            <div className="speechViewLayer">
                No Speech's Found
            </div>
        )
    }
    return (
        <div className="speechViewLayer">
            <div className="speechViewList">

            </div>
            <div className="speechViewLayer">

            </div>
        </div>
    )
}


//SubmitSpeech
const SubmitSpeech = ({ addSpeech }) => {
    const [valueInput, setValueInput] = useState('')
    const [author, setAuthor] = useState('')
    const [date, setDate] = useState(new Date())
    return (
        <div className="speechSubmitLayer">
            <textarea
                value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
                cols={40} rows={10}
            />

        </div>
    )

}


const Speech = props => {

    const [view, setsView] = useState(true)
    const [submit, setSubmit] = useState(false)
    const [speechList, setSpeechList] = useState([])

    //Variables for Textarea


    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     };
    // }, [input])

    //Delete Speech
    const deleteSpeech = (id) => {
        console.log(id)
    }
    const addSpeech = (data) => {
        console.log(data)
    }


    return (
        <div className="speech-layer">
            <Container>
                <Row>
                    <Col>
                        <div className="main-container">
                            <div className="operation-layer">
                                <div className={`operation-view ${view ? 'active' : 'disabled'}`}
                                    onClick={() => {
                                        setsView(true);
                                        setSubmit(false);
                                    }}
                                >
                                    View my Speech
                            </div>
                                <div className={`operation-submit ${submit ? 'active' : 'disabled'}`}
                                    onClick={() => {
                                        setsView(false);
                                        setSubmit(true);
                                    }}
                                >
                                    Submit my speech
                            </div>
                            </div>
                            {view ? (<SpeechView
                                speechList={speechList}
                                deleteSpeech={deleteSpeech}
                            />) : null}
                            {submit ? (<SubmitSpeech
                                addSpeech={addSpeech}
                            />) : null}

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

Speech.propTypes = {

}

export default Speech

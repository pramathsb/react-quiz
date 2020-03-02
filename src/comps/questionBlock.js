import React from 'react'
import Options from './options'

export default function (props) {
    // console.log(props.isLocked, props.currQuestion.qid-1, props.isLocked[props.currQuestion.qid-1] ? props.isLocked[(props.currQuestion.qid-1)] : false)

    return (
        <div className="qb my-3">
            <div className="qb_header">
                Question {props.currQuestion.qid}
            </div>
            <div className="qb_question"><h2>{props.currQuestion.question}</h2></div>
            <div className="qb_options">
                <Options answers={props.currQuestion.answers} selectAnwser={props.selectAnwser} qid={props.currQuestion.qid} selectedAnswers={props.answers}type={props.currQuestion.type} isLocked={props.isLocked}/>
            </div>
            <div className="qb_actions">
                <div className="row no-gutters">
                    <div className="col order-1 text-right">

                        <button className="btn btn-sec" onClick={(e)=>props.navigate(e,'prev')} disabled={props.buttonsState.disablePrev}><i className="fas fa-angle-left"></i> Prev Question</button>

                        <button className={`btn btn-pri ${(props.isLocked[props.currQuestion.qid-1]) ? 'btn-danger' : ''}`} onClick={()=>{props.lockThis()}}>  {(props.isLocked[props.currQuestion.qid-1] ? props.isLocked[(props.currQuestion.qid-1)] : false) ? <span><i className="fas fa-lock"></i> Locked</span> : <span><i className="fas fa-lock-open"></i>  Lock my answer</span>}</button>

                        <button className="btn btn-pri" onClick={(e)=>{props.navigate(e,'next')}} disabled={props.buttonsState.disableNext}>Next Question <i className="fas fa-angle-right"></i></button>
                    </div>
                    <div className="col-auto order-0">
                        <button className="btn btn-danger" onClick={(e)=>{return props.clear()}}>Clear</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
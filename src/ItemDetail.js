import React, { useEffect,useState} from "react";

export default function ItemDetail(props){

    const [state, setState] = useState(false);
    const [newData, setNewData] = useState(props.pois);
    let detail = props.detail.charAt(0).toUpperCase() + props.detail.slice(1);

    useEffect(() => {
        if(newData === 0 || newData === undefined){
            setNewData(props.data);
        }
    },[newData]);
    
    if(!state){
        return(
            <>
            <div className="d-flex justify-content-between flex-row align-items-center m-3">
                <div className="d-flex flex-column bd-highlight mb-3">
                    <h5>{detail}</h5>
                    <p>{newData}</p>
                </div>
                <div>
                    <button class="btn btn-secondary btn-sm" onClick={() => setState(true)}>Edit</button>
                </div>
            </div>
            </>
        )
    }
    else{
        return(
            <>
                <div style={{margin:"0"}}className="d-flex justify-content-between align-self-center">
                    <div className="d-flex flex-column bd-highlight mb-3">
                        <h5>{detail}</h5>
                        <input type="text" placeholder={props.data}onChange={(e) => setNewData(e.target.value)}></input>
                    </div>
                    <div>
                    <button class="btn btn-secondary btn-sm" onClick={()=> {
                        console.log(props.detail)
                        props.editItem(props.id, newData, props.detail)
                        setState(false);
                    }}>Validate</button>
                    </div>
                    
                </div>
            </>
        )
    }
}
import React, { useEffect,useState} from "react";

export default function PoisDetail(props){
    //pois.coordiantes.(x,y,z)
    const [state, setState] = useState(false);
    const [newData, setNewData] = useState(props.pois);
    let detail = props.detail.charAt(0).toUpperCase() + props.detail.slice(1);
    let coordinates = props.data;
    useEffect(() => {
        if(newData === null){
            if(props.detail === "coordinates"){
                setNewData(props.pois.mapCoordinates);
            }
        }
        if(newData === 0){
            setNewData(props.data);
            console.log("probleme")
        }
    },[newData]);
    


    if(!state){
        if(props.detail === "coordinates"){
            console.log(newData)
            return(
                <>
                <div className="d-flex flex-row justify-content-between align-items-center m-3">
                    <div className="d-flex flex-column bd-highlight mb-3">
                        <h5>{detail}</h5>
                        <p><strong>x</strong>{newData.x}</p>
                        <p><strong>y</strong>{newData.y}</p>
                        <p><strong>z</strong>{newData.z}</p>
                    </div>
                    <button class="btn btn-secondary btn-sm" onClick={() => setState(true)}>Edit</button>
                </div>
                </>
            )
        }
        else{
            return(
                <>
                <div className="d-flex flex-row mb-3">
                    <div className="d-flex flex-column bd-highlight mb-3">
                        <h5>{detail}</h5>
                        <p>{newData}</p>
                    </div>
                    <button class="btn btn-secondary btn-sm" onClick={() => setState(true)}>Edit</button>
                </div>
                </>
            )
        }
    }
    else{
        if(props.detail === "coordinates"){
            return(
                <>
                <div className="d-flex align-self-center">
                    <div className="d-flex flex-column bd-highlight mb-3">
                        <h5>{detail}</h5>
                        <input type="text" placeholder={props.pois.x} onChange={(e) => coordinates.x = e.target.value}></input>
                        <input type="text" placeholder={props.pois.y} onChange={(e) => coordinates.y = (e.target.value)}></input>
                        <input type="text" placeholder={props.pois.z} onChange={(e) => coordinates.z = (e.target.value)}></input>
                    </div>
                    <div>
                        <div>
                            <button class="btn btn-secondary btn-sm" onClick={()=> {
                                console.log(props.detail)
                                props.editItem(props.id, coordinates, props.detail)
                                setState(false);
                            }}>Validate</button>
                    </div>
                    </div>
                    
                </div>
                </>
            )
        }
        else{
            return(
                <>
                    <div className="d-flex align-self-center">
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
        /*return(
            <>
                <div className="d-flex align-self-center">
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
        )*/
    }
}
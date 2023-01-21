import React, { useEffect, useState } from 'react';




import Button from 'react-bootstrap/Button';
const Covid = () => {
    const [data,setData]=useState([]);
    const getCovidData=async ()=>{
        try {
            const res= await fetch("https://data.covid19india.org/data.json");
            const actualData=await res.json();
            console.log(actualData.statewise[0])
            setData(actualData.statewise[0])
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
      getCovidData()
        // fetch('https://data.covid19india.org/data.json')
        // .then(response => response.json())
        // .then(json => console.log(json))
    },[])
    return (
        <>
        <h1  className='text-center text-white'>Covid Tracker Live</h1>
             <div className="container text-center">

                <div className="row ">
                <div  className="col-lg-12">
                        <div className="card" style={{width: "90%"}}>
                            <div className="card-body">
                                <h1 className="card-title">Country</h1>
                                <h6 className="card-subtitle mb-2 text-muted">Indian Api</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div  className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">active</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{data.active}</h6>
                               

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">confirmed</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{data.confirmed}</h6>
                               
                             
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">deaths</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{data.deaths}</h6>
                               
                              
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">deltarecovered</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{data.deltarecovered}</h6>
                               
                             
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">recovered</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{data.recovered}</h6>
                               
                             
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">lastupdatedtime</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{data.lastupdatedtime}</h6>
                               
                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Covid;
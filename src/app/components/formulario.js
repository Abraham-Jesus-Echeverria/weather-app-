import React from "react"; 

export default function Form ({handleSubmit, classNameForm}) { 
    return(<>  
    <form onSubmit={handleSubmit} className={classNameForm}> 
        <div className="row m-0">  
            <div className="col-12 d-flex flex-md-row flex-column justify-content-md-center text-white fw-bold"> 
                <div className="form-group h-auto col-md-5 col-12 me-2"> 
                    <label htmlFor="city" className="form-label">City</label> 
                    <input type="text" className="form-control" id="city" name="cityName"/> 
                </div> 
                <div className="form-group h-auto col-md-5 col-12 me-2 mb-md-0 mb-3">  
                  <label htmlFor="contry" className="form-label">Country</label> 
                  <input type="text"  className="form-control" id="contry" name="countryName"/>
                </div>
                <div className="h-auto col-auto d-flex align-items-end"> 
                  <button className="btn btn-danger">Send</button>
                </div>
            </div> 
        </div>
    </form>
    </>)
}
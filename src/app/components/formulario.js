import React from "react"; 

export default function Form ({handleSubmit, classNameForm}) { 
    return(<>  
    <form onSubmit={handleSubmit} className={classNameForm}> 
        <div className="row m-0  ">  
            <div className="col-12 d-flex flex-md-row flex-column justify-content-md-center"> 
                <div className="form-group h-auto col-md-5 col-12 me-2"> 
                    <label htmlFor="city" className="form-label">Ciudad</label> 
                    <input type="text" className="form-control" id="city" name="cityName"/> 
                </div> 
                <div className="form-group mb-2 h-auto col-md-5 col-12 me-2">  
                  <label htmlFor="contry" className="form-label">Pais</label> 
                  <input type="text"  className="form-control" id="contry" name="contryName"/>
                </div>
                <div className="h-auto col-1 d-flex align-items-end"> 
                  <button className="btn btn-danger mb-2">enviar</button>
                </div>
            </div> 
        </div>
    </form>
    </>)
}
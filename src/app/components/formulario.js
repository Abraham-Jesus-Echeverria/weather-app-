import React from "react"; 

export default function Form () { 
    return(<>  
    <form> 
        <div className="row m-0 ">  
            <div className="col-5">   
                <div className="form-group"> 
                    <label htmlFor="city" className="form-label">Ciudad</label> 
                    <input type="text" className="form-control" id="city" name="cityName"/> 
                </div> 
                <div className="form-group mb-2">  
                  <label htmlFor="contry" className="form-label">Pais</label> 
                  <input type="text"  className="form-control" id="contry" name="contryName"/>
                </div>
                <div className="m-2"> 
                  <button className="btn btn-danger">enviar</button>
                </div>
            </div> 
        </div>
    </form>
    </>)
}
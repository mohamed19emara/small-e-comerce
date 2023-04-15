import React from 'react'
import {Link} from 'react-router-dom'



 const SubTitle = ({title , btntitle , PathText}) => {
  return (
    <div className="d-flex justify-content-between pt-4">
    <div className="sub-title">{title}</div>
    {
        btntitle ? (
          <Link to={`${PathText}`} style={{textDecoration:'none'}}>
            <div className="shoping-now px-2" style={{border:'1px solid #000',borderRadius:'4px'}}>{btntitle}</div>
          </Link>
            ) : null   
    }
    </div>
  )
}
export default SubTitle
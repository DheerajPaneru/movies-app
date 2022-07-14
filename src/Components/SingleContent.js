import React from 'react'
import { img_300,unavailable } from './config'
import "./single.css"
import { Badge } from '@material-ui/core'
const SingleContent = (

{
  id,poster,title,date ,media_type,vote_average,
}


) => {
  return (

    <div className='media'>

<Badge badgeContent={vote_average} color={vote_average>7?'primary':'secondary'}>
</Badge>
< img  className="poster" src={ poster?`${img_300}/${poster}`: unavailable} alt=" "/>
<b className='title'>{title}</b>
<span className='subtitle'>{media_type==="tv"?"Tv Series":"Movie"}

<span className='date'>
{date}


</span>


</span>

    </div>
  )
}

export default SingleContent
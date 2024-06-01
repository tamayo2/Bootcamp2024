import React,{useEffect, useState} from 'react'
import { catFactsFunction } from '../functions/funciones'
import { catImgFunction } from '../functions/funciones'

const IndexApp = () => {

  const [CatFacts, setCatFacts] = useState(null)
    useEffect(()=>{
    catFactsFunction(setCatFacts)
  },[])

    const [CatImg, setCatImg] = useState(null)
      useEffect(()=>{
      catImgFunction(setCatImg)
    },[])

    const handleClick = () => {
      catFactsFunction(setCatFacts)
      catImgFunction(setCatImg)
    }

  return (
    <>
    <div className='container'>
      {CatFacts != null ? (
      <div>{CatFacts}</div>
    ) : ('NOT cats')}

    <br></br>

    {CatImg != null ? (
      <img src={CatImg} alt="" height="50%"/>
    ) : ('NOT cats img')}
    <br></br>
    <button type="button" onClick={handleClick}> More cats
      </button>
      </div>
    </>    
  )
}

export default IndexApp
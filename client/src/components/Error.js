import { Image } from 'react-bootstrap'
import useFetch from "../hooks/useFetch"

export default function ShowError() {
  const {error} = useFetch('')
  
  return (
    <div style={{ padding: "auto", marginTop: "50px", marginRight: "auto", marginLeft: "auto", width: "600px", backgroundColor: "rgba(128,128,128,0.4)"}}>
      <Image src="https://www.pinclipart.com/picdir/big/62-620970_oops-you-found-our-404-page-oops-looks.png" fluid />
      <h1 style={{color: "White"}}> {error} </h1>
    </div>
  )
}
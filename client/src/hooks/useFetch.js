import {useState, useEffect} from 'react'

export default function useFetch () {
  const [data, setData] = useState([])
  const [isLoad, setLoad] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://api.pokemontcg.io/v1/cards")
    .then(res => {
      switch (res.status) {
        case 200:
          return res.json()
          break;
        case 400:
          throw new Error("We could not process that action")
          break;
        case 403:
          throw new Error("Forbidden")
          break;
        case 404:
          throw new Error("The requested resource could not be found")
          break;
        case 500:
          throw new Error("We had a problem with our server. Please try again later")
          break;
        default:
          throw new Error("We are temporarily offline for maintenance. Please try again later")
          break;
      }

    })
    .then(result => {
        setData(result.cards)
    })
    .catch(err => {
        setError(err.message)
    })
    .finally( data => {
      setLoad(true)
    })
    // eslint-disable-next-line 
  }, []
  )

  return {data, isLoad, error}
}



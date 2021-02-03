import {useState, useEffect} from 'react'

export default function useFetch (id) {
  const [data, setData] = useState([])
  const [isLoad, setLoad] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://api.pokemontcg.io/v1/cards/${id}`)
    .then(res => {
      switch (res.status) {
        case 200:
          return res.json()
          // eslint-disable-next-line
          break;
        case 400:
          throw new Error("We could not process that action")
          // eslint-disable-next-line
          break;
        case 403:
          throw new Error("Forbidden")
          // eslint-disable-next-line
          break;
        case 404:
          throw new Error("The requested resource could not be found")
          // eslint-disable-next-line
          break;
        case 500:
          throw new Error("We had a problem with our server. Please try again later")
          // eslint-disable-next-line
          break;
        default:
          throw new Error("We are temporarily offline for maintenance. Please try again later")
          // eslint-disable-next-line
          break;
      }

    })
    .then(result => {
      if (!id) {
        setData(result.cards)
      } else {
        setData(result.card)
      }
    })
    .catch(err => {
        setError(err.message)
    })
    .finally( data => {
      setLoad(true)
    })
    // eslint-disable-next-line 
  }, [id]
  )

  return {data, isLoad, error}
}



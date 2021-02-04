import {useEffect, useState} from 'react'
import { useDispatch } from "react-redux"
import { addPokemon, detailPokemon, loadingStatus, showError} from "../store/actions/pokemonsAction"
 
export default function useFetch (id) {
  // eslint-disable-next-line
  const [data, setData] = useState([])
  // eslint-disable-next-line
  const [error, setError] = useState('')
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`https://api.pokemontcg.io/v1/cards/${id}`)
    .then(res => {
      switch (res.status) {
        case 200:
          return res.json()
        case 400:
          throw new Error("We could not process that action")
        case 403:
          throw new Error("Forbidden")
        case 404:
          throw new Error("The requested resource could not be found")
        case 500:
          throw new Error("We had a problem with our server. Please try again later")
        default:
          throw new Error("We are temporarily offline for maintenance. Please try again later")
      }

    })
    .then(result => {
      if (!id) {
        setData(result.cards)
        dispatch(addPokemon(result.cards))
      } else {
        setData(result.card)
        dispatch(detailPokemon(result.card))
      }
    })
    .catch(err => {
      setError(err.message)
      dispatch(showError(err.message))
    })
    .finally( data => {
      setLoading(false)
      dispatch(loadingStatus(false))
    })
    // eslint-disable-next-line 
  }, [id]
  )
  return {data, error, loading}
}



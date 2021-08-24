import * as getApi from '../../services/getApi'

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload: payload
  })

export const fetchCars = (order, value) => (dispatch) => {
    dispatch(setLoaded(false))
    getResponse(`/cars${!value || 0 === value.length ? `?` : `?q=${value}&`}_sort=price&_order=${order}`)
    .then((data) => {
        dispatch(setCars(data))
    })
}

export const setCars = (items) => ({
    type: 'SET_CARS',
    payload: items
});

const getResponse = async (url) => {
    return await getApi.getApiResource(url);  
}


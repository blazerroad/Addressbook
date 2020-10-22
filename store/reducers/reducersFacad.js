import { ReducerServices } from './services/ReducerService'

export const contactReducer = (state, action) => {
    return ReducerServices.instance().contactReducer.reduce(state, action)
}
import {fetchIngredientsFailed} from '../actions/burgerBuilder';
import axios from '../../axios-orders';
import {put} from 'redux-saga/effects';
import * as actions from '../actions/index'

export function* initIngredientsSaga() {
    try {
        const response = yield axios.get('/ingredients.json');
        yield put(actions.setIngredients(response.data));
    } catch (error) {
        yield put(fetchIngredientsFailed())
    }
}

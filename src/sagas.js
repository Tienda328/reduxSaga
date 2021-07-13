import { takeEvery } from 'redux-saga/effects'
 
 
export function* helloSaga() {
	yield takeEvery('HELLO', function* () {
		console.log('hello saga')
	})
}
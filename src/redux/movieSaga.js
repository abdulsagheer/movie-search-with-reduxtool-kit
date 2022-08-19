import { takeLatest, put, fork, call } from "redux-saga/effects";
import { getMovies, setMovies } from "./feature/movieSlice";
import { fetchMovies } from "./api";

function* onLoadMoviesAsync({ payload }) {
  try {
    const movieName = payload;
    // call-> Wait for the promise to finish.
    // The argument should be a function
    // that returns a promise.
    const response = yield call(fetchMovies, movieName);
    if (response.status === 200) {
      yield put(setMovies({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLoadMovies() {
  // last action dispatched before the actual action), and if this task
  // takeLatest allows only one onLoadMovies task to run at any moment.
  // And it will be the latest started task.
  // If a previous task is still running when another onLoad Movies task is started,
  // the previous task will be automatically cancelled.
  yield takeLatest(getMovies.type, onLoadMoviesAsync);
}
// fork is simply used to call a method, you passed a method and method is invoked.
export const moviesSaga = [fork(onLoadMovies)];

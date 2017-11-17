import { Observable } from 'rxjs/Rx';
import { ajax } from 'rxjs/observable/dom/ajax';
import { combineEpics } from 'redux-observable';
import * as ActionType from '../actions';

const REPOS_URL = "https://api.github.com/search/repositories?sort=stars&order=desc&q=";
const USER_URL = "https://api.github.com/users/";

const HOST_URL = "http://139.196.122.144:10003/pointsmall/";
const HOME = HOST_URL + "home";
const TIP_LIST = HOST_URL + "tiplist";

export const HOST_IMAGE_URL = "http://139.196.122.144:10004";

const fetchRepos = action$ => (
    action$.ofType('FETCH_REPOSITOYIES_REQUEST')
        .filter(action => !!action.keyword.trim())
        //.do(() => window.NProgress.start())
        .switchMap(action => (
            ajax.get(`${REPOS_URL}${action.keyword}`)
                //.do(() => window.NProgress.done())
                .map(res => res.response)
                .map(ActionType.fetchReposReceive)
                .catch(error => Observable.of(ActionType.createError(error)))
        ))
)

const fetchUser = action$ => (
    action$.ofType('FETCH_USER_REQUEST')
        .switchMap(action => (
            ajax.get(`${USER_URL}${action.userName}`)
                .map(res => res.response)
                .map(ActionType.fetchUserReceive)
                .takeUntil(action$.ofType("FETCH_USER_CANCEL"))
                .catch(error => Observable.of(ActionType.createError(error)))
        ))
)


const fetchHome = action$ => (
    action$.ofType('FETCH_HOME_REQUEST')
        .switchMap(action => (
            ajax({
                url : HOME,
                method :'POST',
                crossDomain: true,
                body:{Basic:{}}
              })
              .map(res => res.response)
              .map(ActionType.fetchHomeReceive)
              .catch(error => Observable.of(ActionType.createError(error)))
        ))
)

const fetchTipList = action$ => (
    action$.ofType('FETCH_TIP_LIST_REQUEST')
        .switchMap(action => (
            ajax({
                url : TIP_LIST,
                method :'POST',
                crossDomain: true,
                body:{
                    limit: action.limit,
                    offset: action.offset,
                    Basic:{}
                }
              })
              .map(res => res.response)
              .map(ActionType.fetchTipListReceive)
              .catch(error => Observable.of(ActionType.createError(error)))
        ))
)

export default combineEpics(fetchRepos, fetchUser, fetchHome, fetchTipList);
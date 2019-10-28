import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/mapTo';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/repeat';
// .timeInterval(2000)
// import { interval } from "rxjs"
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';
// import { mergeMap, takeUntil, ofType, repeat } from 'rxjs/operators';

export const startRunningStrategicModelingEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_RUNNING_STRATEGIC_MODELING),
        mergeMap(action => {
            console.log(state$.value.business.chosenListDropdown[1])
           switch(state$.value.business.chosenListDropdown[1]){
                case "RANDOM":
                    return of(
                        // Actions.strategyChosen("RANDOM", true),
                        Actions.tournamentState(false),
                        Actions.toggleNewTournamentButton(),
                        Actions.strategyChosen("RANDOM", true),

                    ) 
                break;
                case "A100":
                    return of(
                        Actions.tournamentState(false),
                        Actions.toggleNewTournamentButton(),
                        Actions.strategyChosen("A100", true)

                    ) 
                    break;
                case "B100":
                    return of(
                        Actions.tournamentState(false),
                        Actions.toggleNewTournamentButton(),
                        Actions.strategyChosen("B100", true)
                    ) 
                    break;
                case "GREEDY":
                    return of(
                        Actions.tournamentState(false),
                        Actions.toggleNewTournamentButton(),
                        Actions.strategyChosen("GREEDY", true)
                    ) 
                    break;
                case "GENEROUS":
                    return of(
                        Actions.tournamentState(false),
                        Actions.toggleNewTournamentButton(),
                        Actions.strategyChosen("GENEROUS", true)
                    ) 
                    break;
                case "MINIMAX":
                    return of(
                        Actions.tournamentState(false),
                        Actions.toggleNewTournamentButton(),
                        Actions.strategyChosen("MINIMAX", true)
                    ) 
                    break;
                case "TIT FOR TAT":
                    return of(
                        Actions.tournamentState(false),
                        Actions.toggleNewTournamentButton(),
                        Actions.strategyChosen("TIT FOR TAT", true)
                    ) 
                    break;
                case "BEAT LAST":
                    return of(
                        Actions.tournamentState(false),
                        Actions.toggleNewTournamentButton(),
                        Actions.strategyChosen("BEAT LAST", true)
                    ) 
                    break;
           }
            return of(
                Actions.tournamentState(false),
                Actions.toggleNewTournamentButton()
            ) 
        })
    ) 
    
export default startRunningStrategicModelingEpic;
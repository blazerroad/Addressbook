import { IReducerSerice } from './IReducerSerice';

export class DefualtReducerService<TState> implements IReducerSerice<TState> {

    state: TState
    acceptableActions: Array<string>

    constructor(state: TState) {
        this.state = state;
        this.acceptableActions = new Array<string>();
        this.fillAcceptable(state);

    }

    isAcceptable(actionName: string): boolean {
        return this.acceptableActions.some(t => t === actionName);
    }

    fillAcceptable(state: TState) {
        for (const key in state) {
            this.acceptableActions.push(key)
        }
    }

    reduce(state: TState = this.state, action: any): TState {
        if (!action || !this.isAcceptable(action.type)) return state;
        return { ...state, [action.type]: action.entity }
    }

}
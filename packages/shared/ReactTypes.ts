export type Type = any;
export type Key = any;
export type Ref = any;
export type Props = any;
export type ElementType = any;

export interface ReactElementType {
	$$typeof: symbol | number;
	type: ElementType;
	key: Key;
	props: Props;
	ref: Ref;
	// 为了区分原生的react jsx
	__mark: string;
}
// pay attention to the function type must be used ()
export type Action<State> = State | ((prevState: State) => State);

import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import {
	Type,
	Key,
	Ref,
	Props,
	ReactElementType,
	ElementType
} from 'shared/ReactTypes';
const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElementType {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		// 标记模仿的虚拟DOM元素
		__mark: 'cxsong'
	};
	return element;
};
// 构建jsx,其实这个就类似于react.createlement
export const jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;
	// 这里和原有逻辑不一致暂时不清楚为什么
	// @ts-ignore
	for (const prop in config) {
		// eslint-disable-next-line no-prototype-builtins
		if (!config.hasOwnProperty(prop)) {
			continue;
		}

		const val = config[prop];

		if (prop === 'key' && val !== undefined) {
			key = String(val);
			continue;
		}

		if (prop === 'ref' && val !== undefined) {
			ref = val;
			continue;
		}

		props[prop] = val;
	}
	const maybeChildrenLength = maybeChildren.length;
	if (maybeChildrenLength) {
		if (maybeChildrenLength === 1) {
			props.children = maybeChildren[0];
		} else {
			props.children = maybeChildren;
		}
	}
	return ReactElement(type, key, ref, props);
};
// jsx 开发环境没有第三个参数

export const jsxDEV = (type: ElementType, config: any) => {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;

	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}
		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}
		if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}

	return ReactElement(type, key, ref, props);
};

const supportSymbol = typeof Symbol === 'function' && Symbol.for;

// 判断当前浏览器是否支持这个 symbol,创建一个全局共享的react.element symbol元素
export const REACT_ELEMENT_TYPE = supportSymbol
	? Symbol.for('react.element')
	: 0xeac7;

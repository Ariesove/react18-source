# react18-source

create react18

### personal thoughts

1. 想真正掌握一门技术，就是通过实操，模仿业内最佳实践，学习复刻 react 核心优秀思想，构建一个较为完整的 react 库，从而真正去掌握。

### package tools
is 
是库，而不是业务项目
希望工具尽可能简洁、打包产物可读性高
原生支持 ESM

### jsx complete

<div>eee</div>
--react 17版本后直接是——jsx 之前转译后是一个react.createElement函数。
import { jsx as _jsx } from "react/jsx-runtime";
/*#__PURE__*/_jsx("div", {
  children: "eee"
});

### jsx package 

1. 打包的原因在于需要去在业务项目去测试，引用咱们自己实现的 jsx 函数，否则是无法识别这个 jsx 代码的。但是具体里面的 rollup 配置不是很理解，后面再看，主要还是以核心逻辑实现理解为主，初期对于配置，细节先不关注。

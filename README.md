# react18-source

create react18

### 打包工具

是库，而不是业务项目
希望工具尽可能简洁、打包产物可读性高
原生支持 ESM

### jsx 实现

<div>eee</div>
--react 17版本后直接是——jsx 之前转译后是一个react.createElement函数。
import { jsx as _jsx } from "react/jsx-runtime";
/*#__PURE__*/_jsx("div", {
  children: "eee"
});

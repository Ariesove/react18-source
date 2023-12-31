// recursive entry point 
// not very know
import { FiberNode } from './fiber'
let workInProgress: FiberNode | null = null
import { completeWork } from './completeWork';
import { beginWork } from './beginWork';

function prepareFreshStack(fiber: FiberNode) {
  workInProgress = fiber;
}
// to  make fiber workLoop make a can be interrupted
// but i still not understand the completeUnitOfWork and performUnitOfWork 
//  on purpose is  by recursive like dfs 
function renderRoot(root: FiberNode) {
  // 初始化
  prepareFreshStack(root);

  do {
    try {
      workLoop();
      break;
    } catch (e) {
      console.warn('workLoop发生错误', e);
      workInProgress = null;
    }
  } while (true);
}

function workLoop() {
  while (workInProgress !== null) {
    performUnitOfWork(workInProgress);
  }
}

function performUnitOfWork(fiber: FiberNode) {
  const next = beginWork(fiber);
  fiber.memoizedProps = fiber.pendingProps;

  if (next === null) {
    // completeUnitOfWork(fiber);
  } else {
    workInProgress = next;
  }
}

function completeUnitOfWork(fiber: FiberNode) {
  let node: FiberNode | null = fiber;

  do {
    completeWork(node);
    const sibling = node.sibling;

    if (sibling !== null) {
      workInProgress = sibling;
      return;
    }
    node = node.return;
    workInProgress = node;
  } while (node !== null);
}
import { GenericNode } from './GenericNode';
import { 
    inputNodeConfig,
    llmNodeConfig,
    outputNodeConfig,
    textNodeConfig,
    decisionNodeConfig, 
    apiNodeConfig, 
    mathNodeConfig, 
    timerNodeConfig, 
    loopNodeConfig 
  } from './NodeConfigs';
  
export const InputNode = (props) => <GenericNode {...props} config={inputNodeConfig} />;
export const LLMNode = (props) => <GenericNode {...props} config={llmNodeConfig} />;
export const OutputNode = (props) => <GenericNode {...props} config={outputNodeConfig} />;
export const TextNode = (props) => <GenericNode {...props} config={textNodeConfig} />;

// Some new nodes
export const DecisionNode = (props) => <GenericNode {...props} config={decisionNodeConfig} />;
export const APINode = (props) => <GenericNode {...props} config={apiNodeConfig} />;
export const MathNode = (props) => <GenericNode {...props} config={mathNodeConfig} />;
export const TimerNode = (props) => <GenericNode {...props} config={timerNodeConfig} />;
export const LoopNode = (props) => <GenericNode {...props} config={loopNodeConfig} />;

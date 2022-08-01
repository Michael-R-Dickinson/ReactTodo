import React from 'react';
import { TaskOptions } from './staticData';

const TaskOptionsContext = React.createContext(TaskOptions);
export const TaskOptionsProvider = TaskOptionsContext.Provider
export default TaskOptionsContext
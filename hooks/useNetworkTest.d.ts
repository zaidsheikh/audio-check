import { TestState } from '../DailyTest.tsx';
export declare const useNetworkTest: () => {
    startNetworkTest: (mediaStream?: MediaStream) => Promise<void>;
    stopNetworkTest: () => void;
    networkTestState: TestState;
};

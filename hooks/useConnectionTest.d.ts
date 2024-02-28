import { TestState } from '../DailyTest.tsx';
export declare const useConnectionTest: () => {
    connectionTestState: TestState;
    startConnectionTest: (mediaStream: MediaStream, duration?: number) => Promise<void>;
    stopConnectionTest: () => void;
    timeElapsed: number;
};

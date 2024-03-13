import React from 'react';
import { DailyCall } from '@daily-co/daily-js';
import { ConnectionTestReport, DailyTestData, NetworkTestReport, WebsocketsTestReport } from './types.ts';
export type TestState = 'idle' | 'starting' | 'running' | 'stopping' | 'finished' | 'error' | 'aborted';
type TestDataKey = 'camera' | 'speaker' | 'mic' | 'network' | 'connection' | 'websockets';
export interface ContextValue {
    testData: DailyTestData;
    callObject: DailyCall | null;
    addTestData(key: TestDataKey, data: NetworkTestReport | ConnectionTestReport | WebsocketsTestReport): void;
}
export declare const DailyTestContext: React.Context<ContextValue>;
type Props = {
    callObject: DailyCall | null;
    children: React.ReactNode;
};
export declare const DailyTest: React.FC<React.PropsWithChildren<Props>>;
export {};

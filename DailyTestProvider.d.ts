import React from 'react';
import { DailyCall } from '@daily-co/daily-js';
type Props = {
    callObject: DailyCall | null;
    children?: React.ReactNode;
};
export declare const DailyTestProvider: React.FC<React.PropsWithChildren<Props>>;
export {};

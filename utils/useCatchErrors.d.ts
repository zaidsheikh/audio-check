import { ErrorEvent } from '../types.ts';
import { DailyEventObject } from '@daily-co/daily-js';
export declare const useCatchErrors: () => {
    addError: (error: DailyEventObject | string) => void;
    errors: ErrorEvent[];
};

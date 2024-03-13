/**
 * List of available regions for websocket tests.
 */
declare const testRegions: string[];
export type TestRegion = (typeof testRegions)[number];
/**
 * Starts a websocket test for the specified region.
 * @param region The region to test.
 * @returns A Promise that resolves with the region if the test succeeds, or rejects with the region if it fails.
 */
export declare const startWebsocketTest: (region: TestRegion) => Promise<string>;
/**
 * Starts websocket tests for all available regions.
 * @returns An array of Promises that resolve with the region if the test succeeds, or reject with the region if it fails.
 */
export declare const startWebsocketTests: () => Promise<TestRegion>[];
export {};

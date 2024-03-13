import { Throughput } from '../types.ts';
import ConnectionTester from './ConnectionTester.ts';
export default class ConnectionStats {
    intervalId: string;
    timeoutId: string;
    roundTripTimes: number[];
    iceServers: RTCIceServer[];
    mediaStream: MediaStream;
    networkTester: ConnectionTester | undefined;
    peerConnection: RTCPeerConnection | undefined | null;
    constructor({ iceServers, mediaStream, }: {
        iceServers: RTCIceServer[];
        mediaStream: MediaStream;
    });
    /**
     * Sets up the RTCPeerConnection for the network test
     * @returns {Promise<void>} Resolves when the RTCPeerConnection is successfully set up
     */
    setupPeerConnection(): Promise<void>;
    /**
     * Set up the peer connection and initialize roundTripTimes array.
     * @returns {Promise<void>} A Promise that resolves when the connection is set up and the array is initialized.
     */
    startContinuouslySampling(): Promise<void>;
    /**
     * Periodically retrieves the current round trip time and returns an object containing the maximum round trip time and packet loss.
     * @returns {{ maxRTT: number, packetLoss: number }}
     */
    getSample(): Promise<{
        maxRTT: number;
        packetLoss: number | undefined;
    }>;
    /**
     * Samples the current round trip time and adds it to the `roundTripTimes` array.
     */
    getRoundTripTimePeriodically(): Promise<void>;
    /**
     * Samples the current round trip time by retrieving stats from the peer connection.
     * @returns {Promise<number>} A Promise that resolves with the current round trip time in seconds.
     */
    sampleRoundTripTime(): Promise<number | undefined> | undefined;
    /**
     * Retrieves the packet loss percentage from the PeerConnection
     * @returns {Promise<number>} A Promise that resolves with the packet loss percentage as a number between 0 and 100
     */
    getPacketLoss(): Promise<number | undefined>;
    /**
     * Returns the maximum round trip time from the roundTripTimes array.
     * @returns {number} - The maximum round trip time.
     */
    getMaxRtt(): number;
    closeConnection(): void;
    /**
     * Stops the network quality sampling process by clearing the interval and timeout, and closing the connection.
     */
    stopSampling(): void;
    /**
     * Convert RTCStatsReport to an object
     * @param {RTCStatsReport} statsReport - The stats report to convert
     * @returns {Object} An object containing the stats report
     */
    mapToObj(statsReport: RTCStatsReport): RTCStatsReport | {
        [key: string]: string;
    };
}
/**
 * Determine network test result based on network statistics.
 * @param {Throughput} networkStats - Object containing maxRTT and packetLoss properties.
 * @returns {string} - Test result ('good', 'warning', or 'bad') or 'failed' if required properties are missing.
 */
export declare const getResultFromNetworkTest: (networkStats: Throughput) => "bad" | "good" | "warning" | "failed";

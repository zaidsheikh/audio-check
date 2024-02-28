import { RTCPeerConnectionWithBuffers } from '../types.ts';
export default class NetworkTester {
    /**
     * Contains the STUN or TURN servers for the connection.
     */
    iceServers: RTCIceServer[];
    connectionMode: string;
    natService: string;
    mediaStream?: MediaStream;
    localPeer: RTCPeerConnectionWithBuffers | null;
    remotePeer: RTCPeerConnectionWithBuffers | null;
    constraints: {
        video: {
            facingMode: string;
            width: number;
            deviceId: string;
            height: number;
        };
        audio: {
            deviceId: string;
        };
    };
    offerOptions: {
        offerToReceiveAudio: boolean;
        offerToReceiveVideo: boolean;
    };
    connectionTimeout: ReturnType<typeof setTimeout>;
    flushTimeout: ReturnType<typeof setTimeout>;
    connectionState: RTCPeerConnectionState | undefined;
    event: Event;
    resolve: (value: {
        result: string;
        iceCandidates: RTCIceCandidate[] | null | undefined;
    }) => void;
    reject: () => void;
    /**
     * Constructor for the NetworkTester class.
     * @constructor
     * @param {string} natService - The NAT service to use for the connection.
     * @param {string} connectionMode - The connection mode to use for the connection.
     * @param {RTCIceServer[]} iceServers - The array of STUN or TURN servers to use for the connection.
     * @param mediaStream - optional, only needed for Safari
     */
    constructor({ natService, connectionMode, iceServers, mediaStream, }: {
        natService: string;
        connectionMode: string;
        iceServers: RTCIceServer[];
        mediaStream?: MediaStream;
    });
    /**
     * Sets up an RTCPeerConnection with the given ICE servers and ice transport policy.
     * @returns {Promise<unknown>} A promise that resolves when the RTCPeerConnection is established.
     */
    setupRTCPeerConnection(): Promise<unknown>;
    /**
     * Sets up the listeners for the local and remote peers, including
     * handling of ICE candidates and connection state changes.
     */
    setupPeerListeners(): void;
    start(): Promise<void>;
    addStream(): void;
    flushIceCandidates(peer: RTCPeerConnectionWithBuffers | null): void;
    createOffer(): Promise<void | undefined>;
    setDescription(desc: RTCSessionDescription, local: RTCPeerConnectionWithBuffers | null, remote: RTCPeerConnectionWithBuffers | null): Promise<void>;
    /**
     * Creates an answer to the remote peer's offer and sets it as the local peer's description.
     * @returns {Promise<void>} A promise that resolves once the local peer's description is set.
     */
    createAnswer(): Promise<void>;
    /**
     * Returns information about the current WebRTC connection.
     * @returns {Object} An object with `candidates` and `result` properties.
     */
    getConnectionInfo(): {
        iceCandidates: RTCIceCandidate[] | null | undefined;
        result: string;
    };
    /**
     * Handler for RTCPeerConnection's connection state change event.
     * @param {RTCPeerConnectionState|undefined} connectionState - The new connection state.
     * @return {void}
     */
    onConnectionStateChange(connectionState: RTCPeerConnectionState | undefined): void;
    /**
     * Callback for when the iceConnectionState changes. Used for Firefox, since it doesn't support connectionState, only iceConnectionState.
     * @param {Event} event - The event object containing the state change information.
     */
    onIceConnectionStateChange(event: Event): void;
    /**
     * Stops the RTCPeerConnections and clears connectionTimeout and flushTimeout timeouts.
     */
    stop(): void;
}

import { RTCPeerConnectionWithBuffers } from '../types.ts';
export default class ConnectionTester {
    iceServers: RTCIceServer[];
    localPeer: RTCPeerConnectionWithBuffers | null;
    remotePeer: RTCPeerConnectionWithBuffers | null;
    mediaStream: MediaStream;
    offerOptions: {
        offerToReceiveAudio: boolean;
        offerToReceiveVideo: boolean;
    };
    connectionEstablished: () => void;
    connectionFailed: () => void;
    connectionTimeout: ReturnType<typeof setTimeout>;
    /**
     * Creates a new WebRTC connection object
     * @param {{iceServers: RTCIceServer[] | mediaStream: MediaStream;}} options
     */
    constructor({ iceServers, mediaStream, }: {
        iceServers: RTCIceServer[];
        mediaStream: MediaStream;
    });
    /**
     * Sets up an RTCPeerConnection for establishing a WebRTC connection
     * @returns {Promise<void>} - A Promise that resolves once the RTCPeerConnection is set up
     */
    setupRTCPeerConnection(): Promise<void>;
    /**
     * Sets up event listeners for the local and remote peers.
     */
    setupPeerListeners(): void;
    /**
     * Starts the WebRTC connection process by adding the local media stream,
     * creating an offer, creating an answer, and flushing ICE candidates to both peers.
     * @returns {Promise<void>} - A Promise that resolves when the connection process is complete.
     */
    start(): Promise<void>;
    /**
     * Sends any buffered ICE candidates to the specified peer, and clears the buffer.
     *
     * @param {RTCPeerConnectionWithBuffers | null} peer - The peer to send the ICE candidates to.
     * @returns {void} - Returns nothing.
     */
    flushIceCandidates(peer: RTCPeerConnectionWithBuffers | null): void;
    addStream(): void;
    /**
     * Creates an offer to start a WebRTC session, and sets it as the local peer's local session description.
     * @returns {Promise<void>} - Returns a promise that resolves when the local session description has been set.
     */
    createOffer(): Promise<void> | undefined;
    setDescription(desc: RTCSessionDescription, local: RTCPeerConnectionWithBuffers | null, remote: RTCPeerConnectionWithBuffers | null): Promise<void>;
    /**
     * Creates an answer to an offer received from the remote peer, and sets it as the remote peer's local session description.
     * @returns {Promise<void>} - Returns a promise that resolves when the remote session description has been set.
     */
    createAnswer(): Promise<void> | undefined;
    /**
     * Legacy callback function called when the local ICE connection state changes.
     * @returns {void}
     */
    onIceConnectionStateChange(): void;
    /**
     * Legacy callback function called when the local connection state changes.
     * @returns {void}
     */
    onConnectionStateChange(): void;
    /**
     * Stops the WebRTC connection by closing the local and remote peer connections.
     * @returns {void}
     */
    stop(): void;
}

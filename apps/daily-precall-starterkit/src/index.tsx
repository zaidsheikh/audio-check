import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { RecoilRoot } from 'recoil';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { VideoCheck } from './components/MediaDevices/VideoCheck';
import { NetworkCheck } from './components/Network/NetworkCheck';
import { SpeakerCheck } from './components/MediaDevices/SpeakerCheck';
import { MicCheck } from './components/MediaDevices/MicCheck';
import { ConnectionCheck } from './components/Network/ConnectionCheck';
import { WebsocketsCheck } from './components/Network/WebsocketsCheck';
import { Results } from './components/Results';

const rootPath = '/' + window.location.pathname.split('/')[1];
const router = createBrowserRouter([
	{
		//path: window.location.hostname.endsWith(".github.io") ? '/audio-check' : '/',
		// path should be the subdirectory that comes after the domain name
		path: rootPath,
		element: <App />,
		children: [
			{
				path: 'video-check',
				element: <VideoCheck />,
			},
			{
				path: 'speaker-check',
				element: <SpeakerCheck rootPath={rootPath} />,
			},
			{
				path: 'mic-check',
				element: <MicCheck rootPath={rootPath} />,
			},
			{
				path: 'network-check',
				element: <NetworkCheck />,
			},
			{
				path: 'connection-check',
				element: <ConnectionCheck />,
			},
			{
				path: 'websockets-check',
				element: <WebsocketsCheck />,
			},
			{
				path: 'results',
				element: <Results />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RecoilRoot>
			<RouterProvider router={router}></RouterProvider>
		</RecoilRoot>
	</React.StrictMode>,
);

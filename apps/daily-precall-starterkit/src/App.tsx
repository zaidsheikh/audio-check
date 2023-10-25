import { useEffect, useState } from 'react';
import DailyIframe, { DailyCall, DailyBrowserInfo } from '@daily-co/daily-js';
import { DailyProvider } from '@daily-co/daily-react';
import { logger } from './utils/Logger.ts';

import { DailyTests } from './components/DailyTests';
import { UnsupportedBrowser } from './components/UnsupportedBrowser';
import { Navigation } from './components/Navigation';
import './App.css';

export const App = () => {
	const [dailyCallObject, setDailyCallObject] = useState<DailyCall | null>(
		null,
	);
	const [browserInfo, setBrowserInfo] = useState<DailyBrowserInfo | null>(null);

	/*
	 * We need a Daily Call Object to interact with both the DailyProvider and the DailyTestProvider.
	 * Out of an abundance of caution, to make sure we're using the same call object for both providers,
	 * we'll initialise it here and call `useDaily()` inside the <DailyTests/>, component,
	 * where we'll pass the object to the DailyTestProvider.
	 */
	useEffect(() => {
		// There's no reason to create a call object and
		// start an entire precall check if the user's browser isn't supported.
		const supportedBrowser = DailyIframe.supportedBrowser();
		setBrowserInfo(supportedBrowser);

		if (supportedBrowser.supported) {
			logger.info('Browser is supported');
			const co = DailyIframe.createCallObject();
			setDailyCallObject(co);
			logger.info('Created call object');
		} else {
			logger.warn('Browser is not supported');
		}

		return () => {
			logger.info('Setting call object to null');
			setDailyCallObject(null);
		};
	}, []);

	return (
		<div className="app">
			<header>
				<p>
					<h2>Test your speaker and microphone</h2>
				</p>
				<br></br>
			</header>
			<Navigation />
			<main>
				{dailyCallObject ? (
					<DailyProvider
						callObject={dailyCallObject}
						recoilRootProps={{
							override: false,
						}}>
						<DailyTests />
					</DailyProvider>
				) : browserInfo?.supported ? (
					'No call object could be created...'
				) : (
					<UnsupportedBrowser />
				)}
			</main>
		</div>
	);
};

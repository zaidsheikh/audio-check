/**
 * Custom hook that runs a callback after a specified delay.
 * Adapted from https://www.joshwcomeau.com/snippets/react-hooks/use-timeout/
 * @param callback - The function to run
 * @param delay - The delay in milliseconds (optional)
 * @returns A ref to the timeout ID
 */
export declare const useTimeout: (callback: () => void, delay?: number | null) => import("react").MutableRefObject<number | undefined>;

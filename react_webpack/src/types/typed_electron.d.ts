declare global {
  interface Window {
    electronAPI: {
      openSubWindow: (message: string) => void;
    };
  }
}

export {};

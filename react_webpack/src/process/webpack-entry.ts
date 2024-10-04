// https://www.electronforge.io/config/plugins/vite#hot-module-replacement-hmr
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
declare const SUB_WINDOW_WEBPACK_ENTRY: string;
declare const SUB_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

type EntryPointKey = 'mainWindow' | 'subWindow';
type EntryPoint = {
  renderer: string;
  preload: string;
};
export const rendererEntryPointMap = {
  mainWindow: {
    renderer: MAIN_WINDOW_WEBPACK_ENTRY,
    preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
  },
  subWindow: {
    renderer: SUB_WINDOW_WEBPACK_ENTRY,
    preload: SUB_WINDOW_PRELOAD_WEBPACK_ENTRY,
  },
} as const satisfies Record<EntryPointKey, EntryPoint>;

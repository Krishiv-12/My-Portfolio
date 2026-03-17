export {};

declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js",
      targetIdOrEventName: string | Date,
      config?: {
        page_path?: string;
        event_category?: string;
        event_label?: string;
        value?: number;
      }
    ) => void;
  }
}
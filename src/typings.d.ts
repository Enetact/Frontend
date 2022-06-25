declare module '@analytics/google-tag-manager' {
  type Config = {
    containerId: string; // the ID of the GTM container.
    dataLayerName?: string;
    customScriptSrc?: string; // load Google Tag Manager script from a custom source
    preview?: boolean;
    auth?: string; // preview mode authentication credentials
    execution?: string; // the script execution mode
  };

  export default function (config: Config): any;
}

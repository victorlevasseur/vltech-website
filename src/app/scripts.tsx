import {GoogleTagManager} from "@next/third-parties/google";
import {CONFIG} from "@/config";

export const Scripts = () => {
  return (
    <>
      {CONFIG.gtmId ? <GoogleTagManager gtmId={CONFIG.gtmId} /> : null}
    </>
  )
}
import Script from "next/script";
import {GoogleAnalytics} from "@next/third-parties/google";

export const Scripts = () => {
  return (
    <>
      <Script src="https://cmp.osano.com/VDFo2P0Nhg/059f0876-1341-484d-aae0-aa054bb416b7/osano.js" />
      <GoogleAnalytics gaId="G-CMMVEDLGP1" />
    </>
  )
}
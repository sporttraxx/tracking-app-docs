import useBaseUrl from "@docusaurus/useBaseUrl";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import ThemedImage from "@theme/ThemedImage";
import React from "react";

interface ScreenshotOSTabsProps {
  page: string;
  img: string;
  width?: number;
  height?: number;
}

export default function ScreenshotOSTabs({
  page,
  img,
  width,
}: ScreenshotOSTabsProps) {
  const SCREENSHOT_FLD_ANDROID = `/img/screenshots/${page}/android/`;
  const SCREENSHOT_FLD_IOS = `/img/screenshots/${page}/ios/`;
  return (
    <div>
      <Tabs groupId="operating-systems" className="unique-tabs">
        <TabItem value="a" label="Android">
          <div style={{ textAlign: "center" }}>
            <ThemedImage
              sources={{
                light: useBaseUrl(`${SCREENSHOT_FLD_ANDROID}${img}-light.jpg`),
                dark: useBaseUrl(`${SCREENSHOT_FLD_ANDROID}${img}-dark.jpg`),
              }}
              width={width}
            />
          </div>
        </TabItem>
        <TabItem value="i" label="iOS">
          <div style={{ textAlign: "center" }}>
            <ThemedImage
              sources={{
                light: useBaseUrl(`${SCREENSHOT_FLD_IOS}${img}-light.png`),
                dark: useBaseUrl(`${SCREENSHOT_FLD_IOS}${img}-dark.png`),
              }}
              width={width}
            />
          </div>
        </TabItem>
      </Tabs>
    </div>
  );
}

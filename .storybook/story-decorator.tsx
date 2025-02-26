import {Preview} from "@storybook/react";
import {firaCode, firaSans} from "../src/fonts";

type Decorator = Extract<Preview['decorators'], object[]>[0];

export const StoryDecorator: Decorator = (Story, context) => {
  // A decorator to force paddings, even for Chromatic,
  // (which ignores the default layout margins...).
  //
  // Add a "withMargins" parameter (true by default) to allow stories to
  // disable the padding.
  if (context.parameters.withMargins === false) {
    return (
      <main
        className={`${firaSans.variable} ${firaCode.variable}`}>
        <Story />
      </main>
    );
  } else {
    return (
      <main
        className={`${firaSans.variable} ${firaCode.variable}`}
        style={{ padding: '16px' }}>
        <Story />
      </main>
    );
  }
}
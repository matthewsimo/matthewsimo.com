import { Styled, components } from 'theme-ui';
import { MDXProvider } from '@mdx-js/react';

import {
  TypeScale,
  TypeStyle,
  HeadingStyle,
  ColorPalette,
  FontFamily,
} from '@theme-ui/style-guide';

import Lorem from 'components/Lorem.mdx';

export default () => {
  return (
    <Styled.div>
      <Styled.h1>Demo</Styled.h1>
      <Styled.h2>Colors</Styled.h2>
      <ColorPalette omit={['modes', 'header']} />
      <Styled.h2>Typography</Styled.h2>
      <TypeStyle fontSize={7}>
        Body: <FontFamily name="body" />
      </TypeStyle>
      <HeadingStyle
        fontFamily="heading"
        fontWeight="heading"
        lineHeight="heading"
        fontSize={7}
      >
        Heading: <FontFamily name="heading" />
      </HeadingStyle>
      <Styled.h2>Type Scale</Styled.h2>
      <TypeScale />
      <MDXProvider components={components}>
        <Lorem />
      </MDXProvider>
      <Styled.h1>H1 Heading</Styled.h1>
      <Styled.h2>H2 Heading</Styled.h2>
      <Styled.h3>H3 Heading</Styled.h3>
      <Styled.h4>H4 Heading</Styled.h4>
      <Styled.h5>H5 Heading</Styled.h5>
      <Styled.h6>H6 Heading</Styled.h6>
      <Styled.code>
        Here's some code, I guess. Here's some code, I guess.Here's some code, I
        guess. Here's some code, I guess. Here's some code, I guess. Here's some
        code, I guess. Here's some code, I guess.
      </Styled.code>
      <Styled.pre>
        Here's some code, I guess. Here's some code, I guess.Here's some code, I
        guess. Here's some code, I guess. Here's some code, I guess. Here's some
        code, I guess.{' '}
      </Styled.pre>
      <Styled.p>
        Here's some text, I guess. Here's some text, I guess. Here's some text,
        I guess. Here's some text, I guess. Here's some text, I guess. Here's
        some text, I guess. Here's some text, I guess. Here's some text, I
        guess. Here's some text, I guess.
      </Styled.p>

      <Styled.blockquote>
        QUOTE: Here's some text, I guess. Here's some text, I guess. Here's some
        text, I guess. Here's some text, I guess. Here's some text, I guess.
        Here's some text, I guess. Here's some text, I guess. Here's some text,
        I guess. Here's some text, I guess.
      </Styled.blockquote>
    </Styled.div>
  );
};
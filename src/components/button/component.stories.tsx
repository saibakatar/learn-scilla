import * as React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import chaptersAddon from 'react-storybook-addon-chapters';

import Button from '.';

const options = {
  showSource: false,
  showPropTables: false,
  allowPropTablesToggling: false
};

setAddon(chaptersAddon);
storiesOf('component.Button', module)
  // @ts-ignore
  .addWithChapters('Button', {
    chapters: [
      {
        title: 'Types of button',
        info: '5 types: primary, secondary, tertiary, warning, and danger.',
        sections: [
          {
            options,
            sectionFn: () => (
              <div>
                <Button
                  type="primary"
                  text={'primary'}
                  onClick={() => console.log('click')}
                  ariaLabel={'primary button'}
                />{' '}
                <Button
                  type="primary"
                  text={'primary'}
                  onClick={() => console.log('click')}
                  ariaLabel={'disabled primary button'}
                  disabled={true}
                />{' '}
                <Button
                  type="secondary"
                  text={'secondary'}
                  onClick={() => console.log('click')}
                  ariaLabel={'secondary button'}
                />{' '}
                <Button
                  type="secondary"
                  text={'secondary'}
                  onClick={() => console.log('click')}
                  ariaLabel={'disabled secondary button'}
                  disabled={true}
                />{' '}
                <Button
                  type="tertiary"
                  text={'tertiary'}
                  onClick={() => console.log('click')}
                  ariaLabel={'tertiary button'}
                />{' '}
                <Button
                  type="tertiary"
                  text={'tertiary'}
                  onClick={() => console.log('click')}
                  ariaLabel={'tertiary button'}
                  disabled={true}
                />{' '}
                <Button
                  type="warning"
                  text={'warning'}
                  onClick={() => console.log('click')}
                  ariaLabel={'warning button'}
                />{' '}
                <Button
                  type="warning"
                  text={'warning'}
                  onClick={() => console.log('click')}
                  ariaLabel={'disabled warning button'}
                  disabled={true}
                />{' '}
                <Button
                  type="danger"
                  text={'danger'}
                  onClick={() => console.log('click')}
                  ariaLabel={'danger button'}
                />{' '}
                <Button
                  type="danger"
                  text={'danger'}
                  onClick={() => console.log('click')}
                  ariaLabel={'disabled danger button'}
                  disabled={true}
                />{' '}
              </div>
            )
          }
        ]
      },
      {
        title: 'Sizes of button',
        info: '3 sizes: sm, md, and lg.',
        sections: [
          {
            options,
            sectionFn: () => (
              <div>
                <Button
                  type="secondary"
                  text={'sm'}
                  size="sm"
                  onClick={() => console.log('click')}
                  ariaLabel={'small button'}
                />{' '}
                <Button
                  type="secondary"
                  text={'md'}
                  size="md"
                  disabled={false}
                  onClick={() => console.log('click')}
                  ariaLabel={'medium button'}
                />{' '}
                <Button
                  type="secondary"
                  text={'lg'}
                  size="lg"
                  onClick={() => console.log('click')}
                  ariaLabel={'large button'}
                />
              </div>
            )
          }
        ]
      },
      {
        title: 'Composition',
        info: '3 possible compositions: before, after, and both',
        sections: [
          {
            options,
            sectionFn: () => (
              <div>
                <Button
                  before={<FaArrowLeft />}
                  type="secondary"
                  text={'before'}
                  onClick={() => console.log('click')}
                  ariaLabel={'icon before Button'}
                />{' '}
                <Button
                  after={<FaArrowRight />}
                  type="secondary"
                  text={'after'}
                  onClick={() => console.log('click')}
                  ariaLabel={'icon after Button'}
                />{' '}
                <Button
                  before={<FaArrowLeft />}
                  after={<FaArrowRight />}
                  type="secondary"
                  text={'before and after'}
                  onClick={() => console.log('click')}
                  ariaLabel={'icon before and after Button'}
                />{' '}
              </div>
            )
          }
        ]
      }
    ]
  });

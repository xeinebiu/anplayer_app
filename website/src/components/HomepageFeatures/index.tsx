import React, { ReactNode } from 'react';
import Heading from '@theme/Heading';
import { Row } from '@site/src/components/row';
import { Column } from '@site/src/components/column';
import { Image } from '@site/src/components/image';

type FeatureItem = {
  title: string;
  imageSrc: string;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Seamless Media Streaming on Your Terms',
    imageSrc: '/img/photo_1.png',
    description:
      "Experience music, video, and radio streaming like never before with AN Player's lightweight design, background playback, and advanced features.",
  },
  {
    title: 'Multitask with Ease – Enjoy Your Media Anytime, Anywhere',
    imageSrc: '/img/photo_2.png',
    description:
      'AN Player’s floating player, PiP mode, and background streaming make it the perfect choice for users on the go.',
  },
  {
    title: 'Ad-Free, Private, and Fully Customizable',
    imageSrc: '/img/photo_3.jpg',
    description:
      'Enjoy a seamless, uninterrupted media experience with AN Player, offering full control and privacy while you stream.',
  },
];

function Feature({ title, imageSrc, description }: FeatureItem) {
  return (
    <Column
      style={{
        flex: 1,
        minWidth: '300px',
        maxWidth: '400px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {imageSrc && <Image src={imageSrc} alt={title} />}
      <Column>
        <Heading style={{ textAlign: 'center' }} as="h3">
          {title}
        </Heading>
        <p style={{ textAlign: 'center' }}>{description}</p>
      </Column>
    </Column>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <Column
      style={{
        padding: '2rem',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Row style={{ justifyContent: 'center', gap: '2rem' }}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </Row>
    </Column>
  );
}

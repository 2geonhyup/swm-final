import { IconHeart } from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon, Space } from '@mantine/core';
import classes from './BadgeCard.module.css';

const mockdata = {
  image:
    'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
  title: '요약 채점',
  description:
    'Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.',
  badges: [
    { emoji: '☀️', label: 'Sunny weather' },
    { emoji: '🦓', label: 'Onsite zoo' },
    { emoji: '🌊', label: 'Sea' },
    { emoji: '🌲', label: 'Nature' },
    { emoji: '🤽', label: 'Water sports' },
  ],
};

export default function ResponseDisplay({index, response, type}) {
  const { image, title, description, badges } = mockdata;
  const features = badges.map((badge) => (
    <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
      {badge.label}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            AI 피드백
          </Text>
          <Badge size="sm" variant="light">
          {index}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {response}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
        {type === 1 ? '개선 전' : '개선 후'}
        </Text>
      </Card.Section>

    </Card>
  );
}

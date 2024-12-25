'use client';

import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineTitle,
  TimelineIcon,
  TimelineTime,
} from '@/components/ui/timeline';

type TimelineLayoutProps = {
  items: {
    date: string;
    title: string;
  }[];
};

export const TimelineLayout = ({ items }: TimelineLayoutProps) => {
  return (
    <Timeline>
      {items.map((item, index) => (
        <TimelineItem key={index}>
          {index !== items.length - 1 && <TimelineConnector />}
          <TimelineHeader>
            <TimelineTime>{item.date}</TimelineTime>
            <TimelineIcon />
            <TimelineTitle>{item.title}</TimelineTitle>
          </TimelineHeader>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

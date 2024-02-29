import { NextResponse } from 'next/server'

export function GET() {
  const data = [
    {
      title: 'Football Match Ends in Draw',
      published_date: '2021-10-01',
      views: 12345,
      published: true,
      other_data: 'some data',
    },
    {
      title: 'Tennis Player Sets New Record',
      published_date: null,
      published: false,
      other_data: 'some data',
    },
    {
      title: 'Basketball Team Wins Championship',
      published_date: '2021-10-03',
      views: 54321,
      published: true,
      other_data: 'some data',
    },
    {
      title: 'Golf Tournament Postponed Due to Weather',
      published_date: null,
      published: false,
      other_data: 'some data',
    },
    {
      title: 'Swimming World Record Broken',
      published_date: '2021-10-05',
      views: 23456,
      published: true,
      other_data: 'some data',
    },
  ]

  return NextResponse.json({
    next: 'http://...',
    previous: 'http:/...',
    count: data.length,
    results: data,
  })
}

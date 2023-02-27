import { Fragment } from 'react'
import MeetupList from '../components/meetups/MeetupList'
import Layout from '../components/layout/Layout'
import { Meetup } from '../models/meetup.model'

const DUMMY_MEETUPS: Meetup[] = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://images.unsplash.com/photo-1677247191557-4abd28b7c387?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2531&q=80',
    address: 'Some address, Mazama, Washington',
    description: 'Description'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://images.unsplash.com/photo-1675135531731-609e26ada232?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    address: 'Some address, Quincy, California',
    description: 'Description'
  },
]

export default function HomePage() {
  return (
    <Fragment>
      <Layout>
        <h1>Home Page</h1>
        <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>
      </Layout>
    </Fragment>
  )
}

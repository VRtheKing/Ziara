import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const eventsData = [
  {
    title: 'AI & ML Workshop',
    date: 'October 20, 2024',
    time: '10:00 AM - 4:00 PM',
    location: 'Room 101, Tech Hall',
    description:
      'Join us for an intensive workshop on Artificial Intelligence and Machine Learning led by industry experts. Expand your skills and network with peers.',
  },
  {
    title: 'Coding Hackathon',
    date: 'November 5, 2024',
    time: '9:00 AM - 9:00 PM',
    location: 'Main Auditorium',
    description:
      'A 12-hour coding hackathon where teams will compete to build innovative solutions. Prizes for the best projects and opportunities for networking!',
  },
  {
    title: 'Tech Expo 2024',
    date: 'December 10, 2024',
    time: '11:00 AM - 6:00 PM',
    location: 'Exhibition Center',
    description:
      'Explore the latest advancements in technology at the annual Tech Expo. Meet exhibitors from top tech companies and attend insightful seminars.',
  },
];

const Upcoming = () => {
  return (
    <section className='bg-muted py-12'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl text-customBlue font-bold mb-8'>Upcoming Events</h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {eventsData.map((event, index) => (
            <div
              key={index}
              className='bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between'
            >
              <div>
                <h3 className='text-2xl font-semibold mb-2'>{event.title}</h3>
                <div className='flex items-center text-muted-foreground mb-2'>
                  <FaCalendarAlt className='mr-2 text-customBlue' />
                  <span>{event.date}</span>
                </div>
                <div className='flex items-center text-muted-foreground mb-2'>
                  <FaClock className='mr-2 text-customBlue' />
                  <span>{event.time}</span>
                </div>
                <div className='flex items-center text-muted-foreground mb-4'>
                  <FaMapMarkerAlt className='mr-2 text-customBlue' />
                  <span>{event.location}</span>
                </div>
                <p className='text-gray-600'>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Events = () => {
  return (
    <div className='max-w-[1100px] mx-auto'>
      <Upcoming />
    </div>
  );
};

export default Events;

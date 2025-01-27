import React from 'react'
import { useData } from '../Context/DataContext';
import DateRange from './DateRange';

const Header = () => {
  const { data } = useData()

  console.log(data);

  return (
    <div>
      <DateRange />
    </div>
  )
}

export default Header

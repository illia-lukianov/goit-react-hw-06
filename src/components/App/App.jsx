import { useEffect, useState } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'
import style from './App.module.css'


export default function App() {

  const initialData = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]

  const [phoneData, setPhoneNumber] = useState(() => {
    const data = localStorage.getItem("numberData")
    if (data!==null&& data.length>0) {
      return JSON.parse(data)
    } else {
      return initialData
    }
  })
  
  const [filter, setFilter] = useState('')
  
  const handleFilterChange = (value) => {
    setFilter(value)
  }
  
  const visibilityPhoneData = phoneData.filter((phone) => phone.name.toLowerCase().includes(filter.toLowerCase()))
  
  const addNumber = (newData) => {
    setPhoneNumber((prevData) => [
      ...prevData,
      newData,
    ])}

  const removeNumber = (numberId) => {
    setPhoneNumber((prevNumbers) => {return prevNumbers.filter((number) => number.id !== numberId)})
  }
  
  useEffect(() => {
    localStorage.setItem("numberData", JSON.stringify(phoneData))
  }, [phoneData])
  

  return (
  <div>
    <h1>Phonebook</h1>
      <ContactForm addNumber={addNumber} />
      <SearchBox value={filter} onFilter={handleFilterChange} />
      <ContactList phoneData={visibilityPhoneData} removeNumber={removeNumber} />
  </div>
  )
}

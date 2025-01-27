import './App.scss'
import Card from './components/card/card'
import forestImg from './assets/forest.png'
import skyImg from './assets/sky.png'

function App() {
  const mockCardData = [
    {
      subTitle: 'Volunteered in',
      mainTitle: '',
      bg: '#000',
    },
    {
      subTitle: 'Volunteered Time',
      mainTitle: '56 Hours',
      bg: forestImg,
    },
    {
      subTitle: 'Volunteered in',
      mainTitle: '',
      bg: '#000',
    },
    {
      mainTitle: 'Jobs Available',
      subTitle: 'Number of impressions',
      bg: '#fff',
      data: [
        {
          place: 'Tata Memorial Hospital',
          type: 'orphanage',
          value: 6,
        },
        {
          place: 'Hope Center',
          type: 'orphanage',
          value: 4,
        },
        {
          place: 'Agni Mumbai',
          type: 'Retirement Home',
          value: 7,
        },
        {
          place: 'COR Mumbai',
          type: 'orphanage',
          value: 8,
        },
        {
          place: 'Tata Memorial',
          type: 'Retirement Home',
          value: 5,
        },   
      ]
    },
    
    {
      subTitle: 'Next Coverage increase',
      mainTitle: '₹1,00,000',
      bottomTitle:'Increase coverage by volunteering for 4 hours',
      bg: skyImg,
    },
    
  ]
  return (
    <main className="container">
      {/* <h1>Dashboard Design</h1> */}
      <nav></nav>
      <div className='card-container'>
        {mockCardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </main>
  )
}

export default App

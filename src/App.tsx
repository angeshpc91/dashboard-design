import './App.scss'
import Card from './components/card/card'
import forestImg from './assets/forest.png'
import skyImg from './assets/sky.png'

function App() {
  const mockCardData = [
    {
      cardTitle: 'Volunteered in',
      mainTitle: '',
      bg: '#000',
      type: 'graph',
    },
    {
      cardTitle: 'Volunteered Time',
      mainTitle: '56 Hours',
      bg: forestImg,
      type: 'image',
    },
    {
      cardTitle: 'Volunteered in',
      mainTitle: '',
      bg: '#000',
      type: 'graph',
    },
    {
      mainTitle: 'Jobs Available',
      cardTitle: 'Number of impressions',
      bg: '#fff',
      type: 'table',
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
      cardTitle: 'Next Coverage increase',
      mainTitle: '₹1,00,000',
      bottomTitle:'Increase coverage by volunteering for 4 hours',
      bg: skyImg,
      type: 'image',
    },
    
  ]
  return (
    <main className="container">
      {/* <h1>Dashboard Design</h1> */}
      <nav></nav>
      <div className='card-container'>
        {mockCardData.map((card, index) => (
          
          
          <Card key={index} customStyle={{background: card.bg?.charAt(0) === '#'? card.bg : 'none'}} >
            {card.bg?.charAt(0) !== '#' &&
              <img src={card.bg} alt={card.mainTitle}/>
            }
            <div className="card-content">
              <div>{card.cardTitle}</div>
              {card.mainTitle && <h2>{card.mainTitle}</h2>}
            </div>
          </Card>
        ))}
      </div>
    </main>
  )
}

export default App

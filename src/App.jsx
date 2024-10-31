import Forms from './components/Forms/Forms'
import './App.css'
import ReuseableForm from './components/Forms/ReuseableForm'
function App() {

  const handleForms =(event, data)=>{
    event.preventDefault();
    console.log(data)
  }
  return (
    <>
      
      <h1 className='text-5xl font-bold py-7'>React Form Data</h1>
      <div className='space-y-5'>
        <Forms>
          <div>
            <h2 className='text-2xl font-bold'>User 1</h2>
          </div>
        </Forms>
        <ReuseableForm handleForms={handleForms}>
          <div>
            <h2 className='text-2xl font-bold'>User 2</h2>
          </div>
        </ReuseableForm>
      </div>
    </>
  )
}

export default App

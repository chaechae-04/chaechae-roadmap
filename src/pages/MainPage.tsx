import Card from '../components/common/Card'
import useNavigate from '../hook/useNavigate'

function MainPage() {
  const { navigate } = useNavigate()
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>MainPage</h1>
      <Card 
        title="Todo List" 
        content="Todo List" 
        onClick={() => navigate('/todo')} 
      />
    </div>
  )
}

export default MainPage
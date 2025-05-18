import ProfileCard from './components/Card';

function App() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <ProfileCard
        username="Hasilo manchhe"
        profession="Frontend Developer"
        image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <ProfileCard
        username="Imaginary Person"
        profession="AI engineer"
        image="https://i.pinimg.com/736x/d4/91/6d/d4916d7cd48921efcefde4b3b1fceef2.jpg"
      />
    </div>
  );
}

export default App;

import Html from './Webpage/html/Html';
import Css from './Webpage/css/Css';
import Js from './Webpage/js/Js';

function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('bg.jpg')" }}>
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">
          Web Development Interactive Mindmap
        </h1>

        <div className="flex flex-col md:flex-row w-full max-w-6xl space-x-0 md:space-x-8">
          <div className="bg-white rounded-3xl mt-8 p-8 shadow-xl w-full md:w-1/2 transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is Web Development?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Web development encompasses all aspects of building a website or web application, from front-end design to back-end server management.
              This section can include text, images, or interactive elements to further explain the concepts.
            </p>
          </div>
          <div className="flex flex-col items-center mt-8 md:mt-0 w-full md:w-1/2">
            <h3 className="text-xl mb-4 text-gray-800 font-semibold">Preview Screen</h3>
            <div className="bg-white rounded-3xl p-8 shadow-xl w-full flex items-center justify-center text-gray-500 transition-transform transform hover:scale-105">
              <div className="flex flex-col space-y-4">
                <Html />
                <Css />
                <Js />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

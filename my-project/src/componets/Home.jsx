

function Home() {
    return (
      <div className="min-h-screen bg-gradient-to-r from-slate-50 to-teal-300 flex flex-col items-center justify-center">
       
        <h1 className="text-4xl text-black mb-10 font-semibold text-center">
          Web Development Interactive Mindmap
        </h1>
  
        
        <div className="flex flex-row w-full max-w-6xl space-x-6">
          
          <div className="bg-white rounded-3xl p-8 shadow-lg w-1/2">
            <p className="text-gray-700 text-lg">
             
              This section can be used for text, images, or interactive elements.
            </p>
          </div>
  
          
          <div className="flex flex-col items-center w-1/2">
            <h3 className="text-lg mb-3 text-gray-800">Preview Screen</h3>
            <div className="preview bg-white rounded-3xl p-8 shadow-lg h-[300px] w-full">
             
              Your preview will be displayed here.
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
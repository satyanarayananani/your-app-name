import { useEffect, useState } from "react";
import ImageCard from "./components/imageCard";
import ImageSearch from "./components/ImageSearch";
import FormValidations from "./components/FormValidations";
import CrudTable from "./components/CureOperation";
import ImagePage from "./components/imagepage/ImagePage";

function App() {
  const [images, setImagse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [selectedButton, setSelectedButton] = useState(null);
  const renderContent = () => {
    switch(selectedButton) {
      case "button1": return <CrudTable />
      case "button2": return <FormValidations />
      case "button3": return <ImagePage setTerm={setTerm} isLoading={isLoading} images={images} />
      default: return <div>Please select a button to display data.</div>;
    }
  };

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImagse(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  

  return (
    <div className="p-5">
      <div>
        <button  className="bg-blue-500 text-white p-2 rounded mr-10" onClick={() => setSelectedButton("button1")}>CURD OPERATION</button>
        <button  className="bg-blue-500 text-white p-2 rounded mr-10" onClick={() => setSelectedButton("button2")}>FORM VALIDATION</button>
        <button   className="bg-blue-500 text-white p-2 rounded mr-10"onClick={() => setSelectedButton("button3")}>SEARCH </button>

        {/* Render the content based on selected button */}
        <div>{renderContent()}</div>
      </div>
    </div>
  );
}

export default App;

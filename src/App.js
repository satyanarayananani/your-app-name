import { useEffect, useState } from "react";
import ImageCard from "./components/imageCard";
import ImageSearch from "./components/ImageSearch";
import FormValidations from "./components/FormValidations";
import CrudTable from "./components/CureOperation";

function App() {
  const [images, setImagse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [selectedButton, setSelectedButton] = useState(null);
  const renderContent = () => {
    if (selectedButton === "button1") {
      return (
        <div>
          {" "}
          <CrudTable></CrudTable>
        </div>
      );
    } else if (selectedButton === "button2") {
      return (
        <div>
          {" "}
          <FormValidations />
        </div>
      );
    } else if (selectedButton === "button3") {
      return (
        <div>
          {" "}
          <div className="container mx-auto">
            <ImageSearch searchText={(text) => setTerm(text)} />

            {!isLoading && images.length === 0 && (
              <h1 className="text-5xl text-center mx-auto mt-32">
                No Images Found
              </h1>
            )}

            {isLoading ? (
              <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {images.map((image) => (
                  <ImageCard key={image.id} image={image} />
                ))}
              </div>
            )}
          </div>
        </div>
      );
    } else {
      return <div>Please select a button to display data.</div>;
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
    <div>
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

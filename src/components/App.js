import React, { useState, useEffect } from "react";

function App() {

    const [image, setImage] = useState(undefined)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then(data => { setImage(data.message) })
    }, [])

    return (
        <div>

            {
                image ?
                    <img src={image} alt="A Random Dog" />
                    :
                    <p>Loading ...</p>
            }
        </div>
    );

}


export default App
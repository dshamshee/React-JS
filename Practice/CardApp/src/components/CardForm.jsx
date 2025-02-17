import { useState } from "react"

export const CardForm = ({ onCreate }) => {
    // State for each input field
    const [heading, setHeading] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");


    // Handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Create an object with the input values
        const newCard = {
            heading,
            description,
            image: url, // Use "image" as the key to match your JSON structure
        };

        // Pass the new card object to the parent component via onCreate
        onCreate(newCard);

        // Reset the form fields
        setHeading("");
        setDescription("");
        setUrl("");
    };

    return (
        <>
            <div className="form" >
                <form className="flex gap-16" onSubmit={handleFormSubmit}>
                    <input
                        className="border border-blue-900 rounded-md px-1 "
                        type="text" placeholder="Heading.."
                        value={heading}
                        onChange={(e) => setHeading(e.target.value)} />

                    <input
                        className="border border-blue-900 rounded-md px-1 "
                        type="text" placeholder="Description.."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />

                    <input
                        className="border border-blue-900 rounded-md px-1 "
                        type="text" placeholder="Image URL.."
                        value={url}
                        onChange={(e) => setUrl(e.target.value)} />

                    <button className="bg-blue-500 hover:bg-blue-700 px-3 rounded-lg font-bold cursor-pointer" type="submit" >Submit</button>
                </form>
            </div>
        </>
    )
}

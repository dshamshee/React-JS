import { useReducer } from "react";

export const MultiStepForm = () => {

    // Define the Structure of the Initial State
    const initialState = {
        step: 1, // Current step (1, 2, or 3)
        formData: {
            personalInfo: { name: "", email: "" },
            address: { street: "", city: "" },
        },
        errors: {}, // Track validation errors
        inputText: "",
    };

    // Define Actions (What Can Happen?)
    const NEXT_STEP = "NEXT_STEP";
    const PREV_STEP = "PREV_STEP";
    const UPDATE_FORM_DATA = "UPDATE_FORM_DATA";
    const VALIDATE_FORM = "VALIDATE_FORM";
    const SUBMIT_FORM = "SUBMIT_FORM";

    // Define Reducer (How Does It Happen?)
    const reducer = (state, action) => {
        switch (action.type) {
            case NEXT_STEP:
                // Validate current step before proceeding
                return { ...state, step: state.step + 1 };

            case PREV_STEP:
                return { ...state, step: state.step - 1 };

            case UPDATE_FORM_DATA:
                // Update nested form data 
                return {
                    ...state,
                    formData: {
                        ...state.formData,
                        [action.payload.section]: {
                            ...state.formData[action.payload.section],
                            [action.payload.field]: action.payload.value
                        }
                    }
                };

            case VALIDATE_FORM:
                // Check for errors (e.g., email format)
                return { ...state, errors: { ...newErrors } };

            case SUBMIT_FORM:
                // Handle final submission (e.g., API call)
                return { ...state, isSubmitting: true };

            default:
                return state;
        }
    };

    // Define the useReducer Hook
    const [state, dispatch] = useReducer(reducer, initialState);

    // const handleChange = (e, section) => {
    //     const { name, value } = e.target;
    //     dispatch({
    //         type: UPDATE_FORM_DATA,
    //         payload: { section, field: name, value },
    //     });
    // };

    // const handleNext = () => {
    //     dispatch({ type: VALIDATE_FORM }); // Validate before proceeding
    //     dispatch({ type: NEXT_STEP });
    // };

    // const handlePrev = () => {
    //     dispatch({ type: PREV_STEP });
    // };

    // const handleSubmit = () => {
    //     dispatch({ type: SUBMIT_FORM });
    // };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
                {/* Progress Bar */}
                <div className="flex justify-between mb-8">
                    {[1, 2, 3].map((step) => (
                        <div
                            key={step}
                            className={`w-10 h-10 rounded-full flex items-center justify-center 
                    ${step === state.step ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                        >
                            {step}
                        </div>
                    ))}
                </div>

                {/* Step 1: Personal Info */}
                <div className={`space-y-4 ${state.step === 1 ? "" : "hidden"}`}>
                    <h2 className="text-xl font-bold">Personal Info</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="w-full p-2 border rounded"
                        value={state.formData.personalInfo.name}
                        onChange={(e) => dispatch({ type: UPDATE_FORM_DATA, payload: { section: 'personalInfo', field: 'name', value: e.target.value } })}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded"
                        value={state.formData.personalInfo.email}
                        onChange={(e) => dispatch({ type: UPDATE_FORM_DATA, payload: { section: 'personalInfo', field: 'email', value: e.target.value } })}
                    />
                </div>

                {/* Step 2: Address (Hidden by Default) */}
                <div className={`space-y-4 ${state.step === 2 ? "" : "hidden"}`}>
                    <h2 className="text-xl font-bold">Address</h2>
                    <input
                        type="text"
                        name="street"
                        placeholder="Street"
                        className="w-full p-2 border rounded"
                        value={state.formData.address.street}
                        onChange={(e) => dispatch({ type: UPDATE_FORM_DATA, payload: { section: 'address', field: 'street', value: e.target.value } })}
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        className="w-full p-2 border rounded"
                        value={state.formData.address.city}
                        onChange={(e) => dispatch({ type: UPDATE_FORM_DATA, payload: { section: 'address', field: 'city', value: e.target.value } })}
                    />
                </div>

                {/* Step 3: Confirmation (Hidden by Default) */}
                <div className={`space-y-4 ${state.step === 3 ? "" : "hidden"}`}>
                    <h2 className="text-xl font-bold">Review Your Data</h2>
                    <div className="bg-gray-50 p-4 rounded">
                        <p><strong>Name:</strong>{` ${[state.formData.personalInfo.name]}`}</p>
                        <p><strong>Email:</strong>{` ${[state.formData.personalInfo.email]}`}</p>
                        <p><strong>Street:</strong>{` ${[state.formData.address.street]}`}</p>
                        <p><strong>City:</strong>{` ${[state.formData.address.city]}`}</p>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                    <button
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                        onClick={() => dispatch({ type: PREV_STEP })}
                    >
                        Back
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={()=> dispatch({type: NEXT_STEP})}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
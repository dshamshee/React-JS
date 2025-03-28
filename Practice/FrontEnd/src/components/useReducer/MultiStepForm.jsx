import { useReducer } from "react";
import { getLocalStorageFormData, setLocalStorageFormData } from './MultiStepFormLocalStoreage'

export const MultiStepForm = () => {


    // Add these validation functions before your component
    const validatePersonalInfo = (data) => {
        const errors = {};
        if (!data.name.trim()) errors.name = "Name is required";
        if (!data.email.trim()) {
            errors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            errors.email = "Invalid email format";
        }
        return errors;
    };

    const validateAddress = (data) => {
        const errors = {};
        if (!data.street.trim()) errors.street = "Street is required";
        if (!data.city.trim()) errors.city = "City is required";
        return errors;
    };


    // Add this inside your component
    const hasErrors = (step) => {
        if (step === 1) {
            return Object.keys(validatePersonalInfo(state.formData.personalInfo)).length > 0;
        }
        if (step === 2) {
            return Object.keys(validateAddress(state.formData.address)).length > 0;
        }
        return false;
    };


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
                let errors = {};
                if (state.step === 1) {
                    errors = validatePersonalInfo(state.formData.personalInfo);
                } else if (state.step === 2) {
                    errors = validateAddress(state.formData.address);
                }

                if (Object.keys(errors).length > 0) {
                    return { ...state, errors };
                }
                return { ...state, step: state.step + 1, errors: {} };

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
                    },
                    errors: {
                        ...state.errors,
                        [action.payload.field]: "", // Clear error when typing
                    },
                };

            case VALIDATE_FORM:
                // Check for errors (e.g., email format)
                return { ...state, errors: { ...newErrors } };

            case SUBMIT_FORM:
                const personalErrors = validatePersonalInfo(state.formData.personalInfo);
                const addressErrors = validateAddress(state.formData.address);

                if (Object.keys(personalErrors).length > 0 || Object.keys(addressErrors).length > 0) {
                    return {
                        ...state,
                        errors: { ...personalErrors, ...addressErrors },
                        step: 1, // Go back to first step with errors
                    };
                }

                // Store in localStorage
                localStorage.setItem('formData', JSON.stringify(state.formData));

                // Optional: Clear form after submission
                return {
                    ...state,
                    isSubmitting: true,
                    formData: initialState.formData, // Reset form
                    step: 1, // Go back to step 1
                }

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
                    {/* Name Input */}
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className={`w-full p-2 border rounded ${state.errors.name ? "border-red-500" : ""
                                }`}
                            value={state.formData.personalInfo.name}
                            onChange={(e) => dispatch({
                                type: UPDATE_FORM_DATA,
                                payload: { section: 'personalInfo', field: 'name', value: e.target.value }
                            })}
                        />
                        {state.errors.name && (
                            <p className="text-red-500 text-sm mt-1">{state.errors.name}</p>
                        )}
                    </div>

                    {/* Email Input */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={`w-full p-2 border rounded ${state.errors.email ? "border-red-500" : ""
                                }`}
                            value={state.formData.personalInfo.email}
                            onChange={(e) => dispatch({
                                type: UPDATE_FORM_DATA,
                                payload: { section: 'personalInfo', field: 'email', value: e.target.value }
                            })}
                        />
                        {state.errors.email && (
                            <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>
                        )}
                    </div>
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
                    {state.isSubmitting && (
                        // <p className="text-green-500 mt-2">Form submitted successfully!</p>
                        console.log("Form submitted successfully!")
                    )}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                    {state.step > 1 && (
                        <button
                            className="px-4 py-2 bg-gray-200 rounded cursor-pointer hover:bg-gray-300"
                            onClick={() => dispatch({ type: PREV_STEP })}
                        >
                            Back
                        </button>
                    )}
                    {state.step < 3 ? (
                        <button
                            className={`px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 ${hasErrors(state.step) ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            onClick={() => dispatch({ type: NEXT_STEP })}
                            disabled={hasErrors(state.step)}
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer hover:bg-green-600"
                            onClick={() => dispatch({ type: SUBMIT_FORM })}
                        >
                            Submit
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
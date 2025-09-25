import { useForm } from "react-hook-form";
import "./CookoutForm.css"

export default function RHFCookoutForm({ addGuest }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const submitForm = (data) => {
        addGuest(data);
        console.log(data);
        reset();
    };

    return (
        <form className="CookoutForm" onSubmit={handleSubmit(submitForm)}>
            <h2>RHF Validated</h2>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    {...register("name", { required: true })}
                />
                {errors.name && <small>Please fill out</small>}
            </div>

            <div className="form-group">
                <label htmlFor="food">Food:</label>
                <input
                    type="text"
                    id="food"
                    {...register("food", { required: true })}
                />
                {errors.food && <small>Please fill out</small>}
            </div>
            <button>Submit</button>
        </form>
    )
}
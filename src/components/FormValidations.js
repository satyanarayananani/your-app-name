import React from "react";
import { useForm } from "react-hook-form";

const FormValidations = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch('password');
  const onSubmit = (data) => {
    console.log(data)
    
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold text-center">Register Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <label className="block mb-1 text-gray-700">First Name</label>
          <input
            type="text"
            {...register("firstname", { required: "First Name is required" })}
            className={`w-full px-3 py-2 border ${
              errors.firstname ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none`}
          />
          {errors.firstname && (
            <p className="text-red-500 text-sm">{errors.firstname.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Last Name</label>
          <input
            type="text"
            {...register("lastname", { required: "Last Name is required" })}
            className={`w-full px-3 py-2 border ${
              errors.lastname ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none`}
          />
          {errors.firstname && (
            <p className="text-red-500 text-sm">{errors.lastname.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1 text-gray-700"> Email</label>
          <input
            type="text"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className={`w-full px-3 py-2 border ${
                errors.lastname ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Phone</label>
          <input
            type="tel"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Invalid phone number',
              },
            })}
            className={`w-full px-3 py-2 border ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 text-gray-700">Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            className={`w-full px-3 py-2 border ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Re-password */}
        <div>
          <label className="block mb-1 text-gray-700">Confirm Password</label>
          <input
            type="password"
            {...register('repassword', {
              required: 'Please confirm your password',
              validate: (value) =>
                value === password || 'Passwords do not match',
            })}
            className={`w-full px-3 py-2 border ${
              errors.repassword ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none`}
          />
          {errors.repassword && (
            <p className="text-red-500 text-sm">{errors.repassword.message}</p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label className="block mb-1 text-gray-700">Gender</label>
          <select
            {...register('gender', { required: 'Gender is required' })}
            className={`w-full px-3 py-2 border ${
              errors.gender ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none`}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidations;

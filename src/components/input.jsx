export const Input = ({ register, name, placeholder, errors }) => {
    console.log(errors);

    return (
        <div className="w-full flex flex-col items-start gap-y-[10px]">
            <p className="text-[18px] text-white font-poppins">{placeholder}</p>
            <input
                {...register(name)}
                placeholder={placeholder}
                className="h-[41px] w-full text-[18px] bg-white font-poppins outline-none px-[10px]"
                type="text"
            />

            {errors[name] && (
                <p className="text-red-500 text-[1rem] font-bol">
                    {errors[name].message}
                </p>
            )}
        </div>
    );
};

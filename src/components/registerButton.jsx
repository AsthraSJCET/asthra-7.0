export default function RegisterButton({price}) {
    return (
        <button type='submit' className="font-bold p-4 text-black bg-[#CCFF00]">
            {(price !== 0 ? "₹" + price : "Asthra Free Pass")}
        </button>
    )
}
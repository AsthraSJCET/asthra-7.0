export default function Hidden({ name, email, phone, college, price, code }) {
    return (
        <form id="hiddenForm" action={`https://asthra.azba.in/_api/register/${code}`} method="post">
            <input type={"text"}  className="hidden" id="name"  value={name} />
            <input type={"phone"} className="hidden" id="phone" name="phone" value={phone} />
            <input type={"text"} className="hidden" id="college" name="college" value={college} />
            <input type={"email"} className="hidden" id="email" name="email" value={email} />
            <button type='submit' className="font-bold p-4 text-black bg-[#CCFF00]">
                  {(!price === 0 ? "₹" + price : "Asthra Free Pass")}
                </button>
        </form>
    )
}
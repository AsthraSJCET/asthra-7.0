export default function Hidden({ name, email, phone, college, price, code }) {
    return (
        <form id="hiddenForm" action={`https://asthra.azba.in/_api/register/${code}`} method="post">
            <input type={"hidden"} name="name" value={name} />
            <input type={"hidden"} name="phone" value={phone} />
            <input type={"hidden"} name="college" value={college} />
            <input type={"hidden"} name="email" value={email} />
            <button type='submit' className="font-bold p-4 text-black bg-[#CCFF00]">
                  {(price !== 0 ? "Pay ₹" + price : "Asthra Free Pass")}
                </button>
        </form>
    )
}

{/* <Hidden name={postData.name} college={postData.college} phone={postData.phone} email={user.email} price={data.event_price} code={code} />  */}
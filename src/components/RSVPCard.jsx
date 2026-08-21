import DefaultCard from "./DefaultCard";
import { useState } from "react";

export default function RSVPCard({onRsvp})  {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return(
        <DefaultCard onRsvp= {onRsvp} RsvpLabel="Submit">
            <div className="flex h-full w-full flex-col items-center gap-10 sm:gap-20 px-6 pb-16 text-center justify-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-cream-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] mt-3 sm:mt-10">
                Are you In?
                </h2>

                <div className="flex w-full max-w-xs sm:max-w-lg flex-col gap-10 items-center justify-center">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full text-lg sm:text-3xl rounded-xl bg-white/15 px-4 py-3 text-cream-50 placeholder-cream-100/60 outline-none transition focus:bg-white/25"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        className="w-full text-lg sm:text-3xl rounded-xl bg-white/15 px-4 py-3 text-cream-50 placeholder-cream-100/60 outline-none transition focus:bg-white/25"
                    />
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message For Me"
                        className="w-full text-lg sm:text-3xl rounded-xl bg-white/15 px-4 py-3 text-cream-50 placeholder-cream-100/60 outline-none transition focus:bg-white/25"
                    />
                </div>
            </div>
        </DefaultCard>

    );    

}
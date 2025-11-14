
export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-[#f9f9f9] text-[#2d2e32] py-16 px-4 md:px-8 lg:px-16"
        >
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-lg mb-12">
                    Have a question or want to work together? Drop me a message below or reach out on social
                    media.
                </p>
                
                  <form
                    action="https://formspree.io/f/YOUR_FORM_ID"
                    method="POST"
                    className="grid grid-cols-1 gap-6 text-left"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#facc15]"
                    />
                    <input
                        type="email"
                        name="_replyto"
                        placeholder="Your Email"
                        required
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#facc15]"
                    />
                    <textarea
                        name="message"
                        rows={5}
                        placeholder="Your Message"
                        required
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#facc15]"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-[#facc15] text-[#2d2e32] py-3 rounded-md font-semibold hover:bg-[#e5b800] transition-colors"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
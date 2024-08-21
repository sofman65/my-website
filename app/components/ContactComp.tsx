const ContactComp = () => {
    return (
        <section id="contact" className="py-16as text-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">Contact</h2>
                <p className="text-center mb-8">
                    Feel free to reach out to me for any inquiries, collaborations, or just to say hi!
                </p>
                <form className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                        <input
                            className="w-full px-3 py-2 text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                        <input
                            className="w-full px-3 py-2 text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                        <textarea
                            className="w-full px-3 py-2 text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-3 ' bg-gradient-to-br from-indigo-400 via-blue-500 to-teal-400 text-transparent bg-clip-text' text-white rounded-lg shadow-lg hover:bg-blue-400 transition-colors"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactComp;

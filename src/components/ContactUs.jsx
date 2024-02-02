import { useRef } from "preact/hooks";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s5thwx4",
        "template_6u2rz7t",
        form.current,
        "RzjsTnoN81aZgNlzH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} class="mx-auto p-8 my-4 md:px-12 rounded-2xl shadow-2xl">
        <div class="flex justify-center">
          <h1 class="font-bold uppercase text-5xl">Send me a <br /> message</h1>
        </div>
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
    <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        type="text" placeholder="Name*" name="user_name" required/>
    <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        type="text" placeholder="Email*" name="user_email" required/>
    </div>
    <div class="my-4">
      <textarea placeholder="Message*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" name="user_message" required></textarea>
    </div>
    <div class="my-2 w-1/2 lg:w-1/4">
      <button class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                  focus:outline-none focus:shadow-outline z-50" type="submit">
        Send 
      </button>
    </div>
    </form>
  );
}

export default ContactUs;

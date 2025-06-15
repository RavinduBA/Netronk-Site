import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  interface FAQItem {
    question: string;
    answer: string;
  }

  const faqData: FAQItem[] = [
    {
      question: "How can I reset my password?",
      answer:
        "To reset your password, click the 'Forgot Password' link on the login page. Follow the instructions sent to your registered email.",
    },
    {
      question: "How do I update my billing information?",
      answer:
        "Navigate to your account settings, select 'Billing Information,' and update your details. Ensure to save the changes.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact our support team through the 'Contact Us' page or by emailing support@example.com.",
    },
    {
      question: "How do I delete my account?",
      answer:
        "To delete your account, go to account settings, select 'Delete Account,' and confirm your choice. This action is irreversible.",
    },
  ];

  const toggleAccordion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 text-left">
          <h2 className="text-4xl leading-[3.25rem] font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>
        <div>
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`mb-8 rounded-xl border border-gray-300 p-4 transition duration-500 lg:p-4 ${
                openIndex === index ? "border-indigo-600 bg-indigo-50" : ""
              }`}
            >
              <button
                className={`flex w-full items-center justify-between text-left text-lg leading-8 font-normal text-gray-900 transition duration-500 ${
                  openIndex === index
                    ? "font-medium text-indigo-600"
                    : "hover:text-indigo-600"
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <h5>{faq.question}</h5>
                {openIndex === index ? (
                  <svg
                    className="size-6 text-indigo-600 transition duration-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    className="size-6 text-gray-900 transition duration-500 group-hover:text-indigo-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18M12 18V6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
              {openIndex === index && (
                <div className="overflow-hidden pr-4">
                  <p className="mt-4 text-base leading-6 font-normal text-gray-900">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
